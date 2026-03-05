# Supabase Database Setup Guide

## 🚀 Quick Setup Instructions

Follow these steps to create the `bookings` table in your Supabase database:

### Step 1: Access Supabase SQL Editor

1. Go to [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Select your project: **gwofsysfknxecqbanwtp**
3. Click on **SQL Editor** in the left sidebar (or go to Database → SQL Editor)

### Step 2: Run the Schema

1. Click **"New Query"** button
2. Copy the entire contents of `supabase-schema.sql` file
3. Paste it into the SQL editor
4. Click **"Run"** or press `Ctrl+Enter` (Windows) / `Cmd+Enter` (Mac)

### Step 3: Verify Table Creation

After running the SQL, you should see:
- ✅ Message: "Bookings table created successfully!"
- ✅ The `bookings` table should appear in your Tables list

To verify, go to **Table Editor** in the left sidebar and check if the `bookings` table exists.

---

## 📋 Table Structure

The `bookings` table includes:

### Customer Information
- `customer_name` - Customer's full name
- `customer_email` - Email address
- `customer_phone` - Phone number with country code

### Trip Details
- `pickup_location` - Pickup address
- `destination` - Destination address
- `pickup_date` - Date of pickup
- `pickup_time` - Time of pickup

### Vehicle Information
- `vehicle_type` - Selected vehicle (GMC Yukon, Toyota Camry, etc.)
- `vehicle_image` - Image URL of the vehicle
- `passengers` - Number of passengers
- `luggage` - Number of luggage items

### Booking Management
- `status` - Booking status (pending, confirmed, completed, cancelled)
- `confirmation_token` - Unique token for email confirmation
- `confirmed_at` - Timestamp when booking was confirmed
- `special_requests` - Any special requests from customer
- `total_price` - Total price for the trip

### Timestamps
- `created_at` - When booking was created
- `updated_at` - Last update timestamp

---

## 🔒 Security (Row Level Security)

The schema includes RLS policies:

1. **Service Role Access**: Full access for server-side operations
2. **Anonymous Insert**: Anyone can create bookings (needed for public booking form)

---

## 🔍 Indexes

Optimized indexes for fast queries:
- Email lookups
- Status filtering
- Date range queries
- Confirmation token lookups
- Recent bookings (created_at DESC)

---

## ⚠️ Troubleshooting

### Error: "Could not find the table 'public.bookings'"
**Solution**: Run the `supabase-schema.sql` script in Supabase SQL Editor

### Error: "permission denied for table bookings"
**Solution**: Check that RLS policies are created correctly. Re-run the schema script.

### Error: "duplicate key value violates unique constraint"
**Solution**: This is normal - it means the table already exists. You can safely ignore this or drop the table first:
```sql
DROP TABLE IF EXISTS bookings CASCADE;
```
Then re-run the schema.

---

## 📧 Email Configuration

Make sure your `.env.local` has:
```env
NEXT_PUBLIC_SUPABASE_URL=https://gwofsysfknxecqbanwtp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
RESEND_API_KEY=your_resend_api_key_here
ADMIN_EMAIL=info@haramtaxii.com
```

---

## ✅ Testing the Setup

After creating the table:

1. Go to your website
2. Fill out the booking form
3. Submit the booking
4. Check Supabase Table Editor to see if the booking was created
5. Check your email for confirmation

---

## 🆘 Need Help?

If you encounter any issues:
1. Check the Supabase logs in Dashboard → Logs
2. Verify your API keys in `.env.local`
3. Make sure RLS policies are enabled
4. Check browser console for detailed error messages
