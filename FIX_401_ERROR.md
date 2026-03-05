# 🔴 Fix: 401 Unauthorized Error

## 📋 Problem
You're getting a **401 Unauthorized** error when trying to create bookings. This is a **Row Level Security (RLS)** permissions issue.

---

## ✅ **SOLUTION: Fix RLS Policies**

### **Step 1: Run the RLS Fix Script**

1. Open **Supabase SQL Editor**
2. Copy ALL content from: **`supabase-fix-rls-policies.sql`**
3. Paste into SQL Editor
4. Click **"Run"**
5. You should see: ✅ "RLS policies updated successfully!"

This will:
- ✅ Drop old policies
- ✅ Create new policies with correct permissions
- ✅ Allow anonymous users to INSERT, SELECT, and UPDATE bookings
- ✅ Show you all active policies for verification

---

## 🔍 **Step 2: Verify Your API Keys**

Make sure your `.env.local` file has the correct Supabase keys:

```env
NEXT_PUBLIC_SUPABASE_URL=https://gwofsysfknxecqbanwtp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### **How to Find Your Keys:**

1. Go to Supabase Dashboard
2. Click on **Settings** (gear icon)
3. Click on **API**
4. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → `SUPABASE_SERVICE_ROLE_KEY`

---

## 🔄 **Step 3: Restart Your Dev Server**

After updating `.env.local`:

```bash
# Stop the server (Ctrl+C)
# Then restart:
npm run dev
```

---

## ✅ **What the RLS Policies Do**

| Policy | Who | Action | Purpose |
|--------|-----|--------|---------|
| Service role has full access | Server | ALL | Admin operations |
| Anonymous users can insert | Public | INSERT | Booking form submissions |
| Anonymous users can select | Public | SELECT | View booking details |
| Anonymous users can update | Public | UPDATE | Confirm bookings via email |
| Authenticated users full access | Logged in | ALL | Future auth features |

---

## 🧪 **Step 4: Test the Fix**

1. ✅ Refresh your website
2. ✅ Fill out the booking form
3. ✅ Submit the booking
4. ✅ Check if the error is gone
5. ✅ Verify booking appears in Supabase Table Editor

---

## ⚠️ **Common Issues**

### Issue 1: Still getting 401 after running SQL
**Solution:** 
- Clear browser cache (Ctrl+Shift+R)
- Restart dev server
- Double-check API keys in `.env.local`

### Issue 2: "Invalid API key"
**Solution:**
- Verify you're using the **anon** key (not service_role) in `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Make sure there are no extra spaces in the key
- Restart dev server after changing `.env.local`

### Issue 3: Policies not applying
**Solution:**
- Make sure RLS is enabled: `ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;`
- Run the fix script again
- Check policies in Supabase Dashboard → Authentication → Policies

---

## 🔍 **Verify RLS Policies in Supabase**

1. Go to **Table Editor** → **bookings**
2. Click on **RLS** tab (or Authentication → Policies)
3. You should see 5 policies:
   - ✅ Service role has full access
   - ✅ Anonymous users can insert bookings
   - ✅ Anonymous users can select bookings
   - ✅ Anonymous users can update bookings
   - ✅ Authenticated users have full access

---

## 📧 **Environment Variables Checklist**

Make sure `.env.local` has ALL of these:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://gwofsysfknxecqbanwtp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...your_key_here
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...your_key_here

# Resend (for emails)
RESEND_API_KEY=re_...your_key_here

# Admin
ADMIN_EMAIL=info@haramtaxii.com
```

---

## 🎯 **Quick Checklist**

- [ ] Ran `supabase-fix-rls-policies.sql` in Supabase
- [ ] Verified API keys in `.env.local`
- [ ] Restarted dev server
- [ ] Cleared browser cache
- [ ] Tested booking form
- [ ] Checked Supabase Table Editor for new booking

---

## 🆘 **Still Not Working?**

If you're still getting 401 errors:

1. **Check browser console** for the exact error
2. **Check Supabase logs**: Dashboard → Logs → API Logs
3. **Verify table exists**: Table Editor → bookings
4. **Test with Supabase API docs**: Settings → API → Auto-generated docs

Share the error message and I can help debug further!
