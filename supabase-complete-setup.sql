-- ⚡ COMPLETE SETUP - Run this ONCE to fix everything
-- This script will set up the bookings table with proper RLS policies
-- Safe to run multiple times (uses IF NOT EXISTS and DROP IF EXISTS)

-- ========================================
-- PART 1: Create/Update Table Structure
-- ========================================

-- Add missing columns if they don't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'bookings' 
        AND column_name = 'confirmation_token'
    ) THEN
        ALTER TABLE bookings ADD COLUMN confirmation_token VARCHAR(255) UNIQUE;
    END IF;
END $$;

DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'bookings' 
        AND column_name = 'confirmed_at'
    ) THEN
        ALTER TABLE bookings ADD COLUMN confirmed_at TIMESTAMP WITH TIME ZONE;
    END IF;
END $$;

-- Create index for confirmation_token
CREATE INDEX IF NOT EXISTS idx_bookings_confirmation_token ON bookings(confirmation_token);

-- ========================================
-- PART 2: Fix RLS Policies
-- ========================================

-- Drop all existing policies
DROP POLICY IF EXISTS "Service role can do everything" ON bookings;
DROP POLICY IF EXISTS "Anyone can create bookings" ON bookings;
DROP POLICY IF EXISTS "Anyone can read bookings with confirmation token" ON bookings;
DROP POLICY IF EXISTS "Anyone can update bookings with confirmation token" ON bookings;
DROP POLICY IF EXISTS "Service role has full access" ON bookings;
DROP POLICY IF EXISTS "Anonymous users can insert bookings" ON bookings;
DROP POLICY IF EXISTS "Anonymous users can select bookings" ON bookings;
DROP POLICY IF EXISTS "Anonymous users can update bookings" ON bookings;
DROP POLICY IF EXISTS "Authenticated users have full access" ON bookings;

-- Ensure RLS is enabled
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create comprehensive RLS policies

-- 1. Service role (server-side operations)
CREATE POLICY "Service role has full access"
ON bookings
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- 2. Anonymous users - INSERT (booking form)
CREATE POLICY "Anonymous users can insert bookings"
ON bookings
FOR INSERT
TO anon
WITH CHECK (true);

-- 3. Anonymous users - SELECT (view bookings)
CREATE POLICY "Anonymous users can select bookings"
ON bookings
FOR SELECT
TO anon
USING (true);

-- 4. Anonymous users - UPDATE (confirmation)
CREATE POLICY "Anonymous users can update bookings"
ON bookings
FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);

-- 5. Authenticated users (future feature)
CREATE POLICY "Authenticated users have full access"
ON bookings
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- ========================================
-- PART 3: Verification
-- ========================================

-- Show all columns
SELECT 
    column_name, 
    data_type, 
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'bookings'
ORDER BY ordinal_position;

-- Show all policies
SELECT 
    policyname,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'bookings'
ORDER BY policyname;

-- Success message
SELECT '✅ Complete setup finished! Table and RLS policies are ready.' as message;
