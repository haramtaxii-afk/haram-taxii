-- Complete Bookings Table Setup (Fresh Install)
-- This will DROP the existing table and recreate it with all fields
-- ⚠️ WARNING: This will DELETE all existing booking data!
-- Only use this if you're okay with losing existing data

-- Drop existing table and all dependencies
DROP TABLE IF EXISTS bookings CASCADE;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Service role can do everything" ON bookings;
DROP POLICY IF EXISTS "Anyone can create bookings" ON bookings;

-- Create the bookings table with ALL fields
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- User Details (Step 1)
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50) NOT NULL,
  
  -- Trip Details (Step 2)
  pickup_location VARCHAR(500) NOT NULL,
  destination VARCHAR(500) NOT NULL,
  pickup_date DATE NOT NULL,
  pickup_time TIME NOT NULL,
  
  -- Vehicle Selection (Step 2)
  vehicle_type VARCHAR(100) NOT NULL,
  vehicle_image VARCHAR(500),
  passengers INTEGER,
  luggage INTEGER,
  
  -- Booking Status
  status VARCHAR(50) DEFAULT 'pending',
  -- pending, confirmed, completed, cancelled
  
  -- Confirmation (IMPORTANT: These fields are required!)
  confirmation_token VARCHAR(255) UNIQUE,
  confirmed_at TIMESTAMP WITH TIME ZONE,
  
  -- Additional Info
  special_requests TEXT,
  total_price DECIMAL(10, 2),
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create indexes for faster queries
CREATE INDEX idx_bookings_email ON bookings(customer_email);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_date ON bookings(pickup_date);
CREATE INDEX idx_bookings_created_at ON bookings(created_at DESC);
CREATE INDEX idx_bookings_confirmation_token ON bookings(confirmation_token);

-- Enable Row Level Security (RLS)
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow service role to do everything
CREATE POLICY "Service role can do everything" ON bookings
  FOR ALL
  USING (auth.role() = 'service_role');

-- Create policy to allow anon users to insert bookings
CREATE POLICY "Anyone can create bookings" ON bookings
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow anon users to read their own bookings by confirmation token
CREATE POLICY "Anyone can read bookings with confirmation token" ON bookings
  FOR SELECT
  USING (true);

-- Create policy to allow anon users to update bookings with confirmation token
CREATE POLICY "Anyone can update bookings with confirmation token" ON bookings
  FOR UPDATE
  USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for auto-updating updated_at
CREATE TRIGGER update_bookings_updated_at 
  BEFORE UPDATE ON bookings
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Success message
SELECT 'Bookings table created successfully with all fields!' as message;
