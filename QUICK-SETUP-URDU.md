# 🚀 QUICK SETUP - Supabase Table Banane Ke Liye

## ⚡ 3 SIMPLE STEPS:

### **STEP 1: Supabase Dashboard Kholo**
Link: https://supabase.com/dashboard

1. Login karo
2. Apna project select karo (gwofsysfknxecqbanwtp)
3. Left sidebar mein **"SQL Editor"** pe click karo

---

### **STEP 2: SQL Script Copy Karo**

File kholo: **`STEP1-CREATE-TABLE.sql`**

Ya neeche se copy karo:

```sql
-- Bookings Table Create Karne Ke Liye
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50) NOT NULL,
  pickup_location VARCHAR(500) NOT NULL,
  destination VARCHAR(500) NOT NULL,
  pickup_date DATE NOT NULL,
  pickup_time TIME NOT NULL,
  vehicle_type VARCHAR(100) NOT NULL,
  vehicle_image VARCHAR(500),
  passengers INTEGER,
  luggage INTEGER,
  status VARCHAR(50) DEFAULT 'pending',
  confirmation_token VARCHAR(255) UNIQUE,
  confirmed_at TIMESTAMP WITH TIME ZONE,
  special_requests TEXT,
  total_price DECIMAL(10, 2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Indexes
CREATE INDEX idx_bookings_email ON bookings(customer_email);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_date ON bookings(pickup_date);
CREATE INDEX idx_bookings_created_at ON bookings(created_at DESC);
CREATE INDEX idx_bookings_confirmation_token ON bookings(confirmation_token);

-- RLS Enable
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Service role has full access" ON bookings FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "Anonymous users can insert bookings" ON bookings FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anonymous users can select bookings" ON bookings FOR SELECT TO anon USING (true);
CREATE POLICY "Anonymous users can update bookings" ON bookings FOR UPDATE TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated users have full access" ON bookings FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Trigger
CREATE OR REPLACE FUNCTION update_updated_at_column() RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

---

### **STEP 3: Run Karo**

1. SQL Editor mein paste karo
2. **"Run"** button pe click karo (ya Ctrl+Enter press karo)
3. Success message dekho! ✅

---

## ✅ **Success Check:**

Agar sab theek hua toh ye dikhega:
- ✅ "Bookings table created successfully!"
- ✅ Table "bookings" Table Editor mein dikhai dega

---

## 🧪 **Test Karo:**

1. Website pe jao
2. Booking form fill karo
3. Submit karo
4. Supabase Table Editor mein booking dikhai degi! 🎉

---

## 📞 **Agar Problem Aaye:**

- Error message copy karke batao
- Main turant fix kar dunga!

---

**Bas 2 minute ka kaam hai bhai! Jaldi se kar lo!** 🚀
