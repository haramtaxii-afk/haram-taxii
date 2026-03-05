-- ⚡ STEP 1: Create Bookings Table from Scratch
-- Run this FIRST if table doesn't exist

-- Create the bookings table with ALL required fields
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- User Details
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50) NOT NULL,
  
  -- Trip Details
  pickup_location VARCHAR(500) NOT NULL,
  destination VARCHAR(500) NOT NULL,
  pickup_date DATE NOT NULL,
  pickup_time TIME NOT NULL,
  
  -- Vehicle Selection
  vehicle_type VARCHAR(100) NOT NULL,
  vehicle_image VARCHAR(500),
  passengers INTEGER,
  luggage INTEGER,
  
  -- Booking Status
  status VARCHAR(50) DEFAULT 'pending',
  
  -- Confirmation (IMPORTANT!)
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

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- RLS Policy 1: Service role (server-side)
CREATE POLICY "Service role has full access"
ON bookings
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- RLS Policy 2: Anonymous users - INSERT
CREATE POLICY "Anonymous users can insert bookings"
ON bookings
FOR INSERT
TO anon
WITH CHECK (true);

-- RLS Policy 3: Anonymous users - SELECT
CREATE POLICY "Anonymous users can select bookings"
ON bookings
FOR SELECT
TO anon
USING (true);

-- RLS Policy 4: Anonymous users - UPDATE
CREATE POLICY "Anonymous users can update bookings"
ON bookings
FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);

-- RLS Policy 5: Authenticated users
CREATE POLICY "Authenticated users have full access"
ON bookings
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger
CREATE TRIGGER update_bookings_updated_at 
  BEFORE UPDATE ON bookings
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Success message
SELECT '✅ Bookings table created successfully!' as message;
SELECT 'Table has ' || count(*) || ' columns' as info FROM information_schema.columns WHERE table_name = 'bookings';
SELECT 'RLS is ' || CASE WHEN rowsecurity THEN 'ENABLED ✅' ELSE 'DISABLED ❌' END as rls_status 
FROM pg_tables WHERE tablename = 'bookings';
