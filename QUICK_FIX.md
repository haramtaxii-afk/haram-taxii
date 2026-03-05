# 🚀 QUICK FIX - 401 Unauthorized Error

## ⚡ **ONE-STEP SOLUTION**

### **Run This Single Script:**

1. Open **Supabase SQL Editor**
2. Copy ALL content from: **`supabase-complete-setup.sql`**
3. Paste and click **"Run"**
4. Done! ✅

---

## 📋 **What This Does:**

✅ Adds `confirmation_token` column (if missing)  
✅ Adds `confirmed_at` column (if missing)  
✅ Creates proper indexes  
✅ Fixes ALL RLS policies  
✅ Allows anonymous users to create/read/update bookings  
✅ Shows verification output  

---

## 🔄 **After Running the Script:**

1. **Restart your dev server:**
   ```bash
   # Press Ctrl+C to stop
   npm run dev
   ```

2. **Clear browser cache:**
   - Press `Ctrl + Shift + R` (Windows)
   - Or `Cmd + Shift + R` (Mac)

3. **Test the booking form:**
   - Fill out the form
   - Submit
   - Should work now! ✅

---

## ✅ **Expected Output:**

After running the script, you should see:

1. **Columns table** - Shows all columns including `confirmation_token`
2. **Policies table** - Shows 5 RLS policies
3. **Success message** - "Complete setup finished!"

---

## 📁 **Other Available Scripts:**

If you need individual fixes:

- `supabase-add-confirmation-fields.sql` - Just adds columns
- `supabase-fix-rls-policies.sql` - Just fixes policies
- `supabase-fresh-install.sql` - Complete fresh start (deletes data)
- `supabase-complete-setup.sql` - **⭐ RECOMMENDED - Does everything**

---

## 🆘 **Still Getting 401?**

Check your `.env.local` file has:

```env
NEXT_PUBLIC_SUPABASE_URL=https://gwofsysfknxecqbanwtp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

**Where to find keys:**
- Supabase Dashboard → Settings → API
- Copy the **anon public** key

---

## 📞 **Need More Help?**

See detailed guides:
- `FIX_401_ERROR.md` - Complete troubleshooting
- `SUPABASE_SETUP.md` - Full setup documentation
