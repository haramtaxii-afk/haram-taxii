-- Fix RLS Policies for Bookings Table
-- This script will drop and recreate all RLS policies with correct permissions

-- First, drop all existing policies
DROP POLICY IF EXISTS "Service role can do everything" ON bookings;
DROP POLICY IF EXISTS "Anyone can create bookings" ON bookings;
DROP POLICY IF EXISTS "Anyone can read bookings with confirmation token" ON bookings;
DROP POLICY IF EXISTS "Anyone can update bookings with confirmation token" ON bookings;

-- Ensure RLS is enabled
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Policy 1: Allow service role to do everything (for server-side operations)
CREATE POLICY "Service role has full access"
ON bookings
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Policy 2: Allow anonymous users to INSERT bookings (for booking form)
CREATE POLICY "Anonymous users can insert bookings"
ON bookings
FOR INSERT
TO anon
WITH CHECK (true);

-- Policy 3: Allow anonymous users to SELECT bookings (for confirmation page)
CREATE POLICY "Anonymous users can select bookings"
ON bookings
FOR SELECT
TO anon
USING (true);

-- Policy 4: Allow anonymous users to UPDATE bookings (for confirmation)
CREATE POLICY "Anonymous users can update bookings"
ON bookings
FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);

-- Policy 5: Allow authenticated users full access (if you add auth later)
CREATE POLICY "Authenticated users have full access"
ON bookings
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Verify policies were created
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd
FROM pg_policies 
WHERE tablename = 'bookings'
ORDER BY policyname;

-- Success message
SELECT '✅ RLS policies updated successfully!' as message;
