# 📧 Email Not Sending - Quick Fix Guide

## 🔴 Problem
Bookings are saving successfully, but emails are not being sent to customers or admin.

---

## ✅ **SOLUTION 1: Verify Your Domain in Resend** (Recommended)

### Step 1: Log into Resend
1. Go to [https://resend.com/login](https://resend.com/login)
2. Log in to your account

### Step 2: Add & Verify Domain
1. Click **"Domains"** in the left sidebar
2. Click **"Add Domain"**
3. Enter your domain: `umrahtaxi.site`
4. Follow the DNS verification steps:
   - Add the provided DNS records to your domain registrar
   - Wait for verification (usually 5-30 minutes)

### Step 3: Test Email
Once verified, try submitting a booking again!

---

## ✅ **SOLUTION 2: Use Resend's Test Domain** (Quick Test)

If you want to test immediately without domain verification:

### Update the Email API Route:

1. Open: `app/api/send-booking-emails/route.ts`
2. Find lines 137 and 435
3. Change the `from` addresses:

**Line 137 - Customer Email:**
```typescript
// OLD:
from: 'Umrah Taxi <bookings@umrahtaxi.site>',

// NEW (for testing):
from: 'onboarding@resend.dev',
```

**Line 435 - Admin Email:**
```typescript
// OLD:
from: 'Umrah Taxi System <system@umrahtaxi.site>',

// NEW (for testing):
from: 'onboarding@resend.dev',
```

⚠️ **Note**: `onboarding@resend.dev` is Resend's test domain. It works immediately but:
- Only sends to YOUR verified email
- Shows "via resend.dev" in email headers
- Not suitable for production

---

## 🔍 **Check Your Resend API Key**

Make sure your `.env.local` has the correct Resend API key:

```env
RESEND_API_KEY=re_...your_key_here
ADMIN_EMAIL=info@haramtaxii.com
```

**To find your API key:**
1. Go to [Resend Dashboard](https://resend.com/api-keys)
2. Copy your API key
3. Paste it in `.env.local`
4. Restart your dev server

---

## 🧪 **Test the Fix**

### Step 1: Check Browser Console
1. Open browser DevTools (F12)
2. Go to **Console** tab
3. Submit a booking
4. Look for errors related to email sending

### Step 2: Check Server Logs
In your terminal where `npm run dev` is running, look for:
- ✅ "Customer email sent:"
- ✅ "Admin email sent:"
- ❌ "Failed to send customer email:"
- ❌ "Email domain not verified"

---

## 📋 **Common Error Messages**

### Error: "Email domain not verified"
**Solution**: Verify `umrahtaxi.site` in Resend dashboard OR use `onboarding@resend.dev` for testing

### Error: "Invalid API key"
**Solution**: Check your `RESEND_API_KEY` in `.env.local`

### Error: "RESEND_API_KEY is not set"
**Solution**: Add `RESEND_API_KEY=re_...` to `.env.local` and restart server

### Error: "Admin email not configured"
**Solution**: Add `ADMIN_EMAIL=info@haramtaxii.com` to `.env.local`

---

## 🎯 **Quick Checklist**

- [ ] Resend API key is in `.env.local`
- [ ] Admin email is in `.env.local`
- [ ] Dev server restarted after changing `.env.local`
- [ ] Domain verified in Resend (or using `onboarding@resend.dev`)
- [ ] Tested booking submission
- [ ] Checked browser console for errors
- [ ] Checked server terminal for email logs

---

## 📧 **Environment Variables Template**

Your `.env.local` should look like this:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://gwofsysfknxecqbanwtp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Resend (Email Service)
RESEND_API_KEY=re_your_resend_api_key_here

# Admin
ADMIN_EMAIL=info@haramtaxii.com
```

---

## 🆘 **Still Not Working?**

1. **Check the exact error** in browser console
2. **Check server logs** in terminal
3. **Verify Resend dashboard** - check if emails are being attempted
4. **Test with `onboarding@resend.dev`** to rule out domain issues

Share the error message and I can help debug further!
