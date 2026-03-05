-- Migration: Add confirmation fields to existing bookings table
-- Run this in Supabase SQL Editor if the table already exists

-- Add confirmation_token column if it doesn't exist
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

-- Add confirmed_at column if it doesn't exist
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

-- Create index for confirmation_token if it doesn't exist
CREATE INDEX IF NOT EXISTS idx_bookings_confirmation_token ON bookings(confirmation_token);

-- Success message
SELECT 'Confirmation fields added successfully!' as message;
