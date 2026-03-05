# 🔧 Fix: "confirmation_token does not exist" Error

## 📋 You Have 2 Options

---

## ✅ **OPTION 1: Add Missing Columns (Recommended)**
**Use this if you want to KEEP existing booking data**

### Steps:
1. Open Supabase SQL Editor
2. Copy contents of: **`supabase-add-confirmation-fields.sql`**
3. Paste and Run in SQL Editor
4. You should see: ✅ "Confirmation fields added successfully!"

**This will:**
- ✅ Add `confirmation_token` column
- ✅ Add `confirmed_at` column
- ✅ Keep all existing data
- ✅ Add necessary index

---

## 🔄 **OPTION 2: Fresh Install (Clean Slate)**
**Use this if you want to start fresh (deletes all existing bookings)**

### Steps:
1. Open Supabase SQL Editor
2. Copy contents of: **`supabase-fresh-install.sql`**
3. Paste and Run in SQL Editor
4. You should see: ✅ "Bookings table created successfully with all fields!"

**This will:**
- ⚠️ DELETE the existing `bookings` table
- ✅ Create a new table with ALL required fields
- ✅ Set up all indexes
- ✅ Configure RLS policies correctly

---

## 🎯 **Which Option Should I Choose?**

| Scenario | Recommended Option |
|----------|-------------------|
| I have important booking data | **Option 1** (Add columns) |
| I'm just testing / no real data yet | **Option 2** (Fresh install) |
| I'm not sure | **Option 1** (safer) |

---

## 📁 **Available SQL Files**

1. **`supabase-add-confirmation-fields.sql`** - Adds missing columns to existing table
2. **`supabase-fresh-install.sql`** - Drops and recreates table from scratch
3. **`supabase-schema.sql`** - Original schema (use for new projects)

---

## ✅ **After Running the SQL**

1. Refresh your website
2. Try submitting a test booking
3. Check if the error is gone
4. Verify in Supabase Table Editor that the columns exist

---

## 🔍 **Verify the Fix**

After running the SQL, check in Supabase:

1. Go to **Table Editor** → **bookings**
2. Look for these columns:
   - ✅ `confirmation_token` (text, unique)
   - ✅ `confirmed_at` (timestamp)

---

## ⚠️ **Still Getting Errors?**

If you still see errors after running the SQL:

1. **Check the error message** - Copy the full error
2. **Verify RLS policies** - Make sure they were created
3. **Check API keys** - Verify `.env.local` has correct keys
4. **Clear browser cache** - Hard refresh (Ctrl+Shift+R)

---

## 📧 **Need More Help?**

Share the exact error message you're seeing and I can help debug further!
