# Portfolio Contact Form Setup Guide

## How to Connect Your Contact Form to Gmail

### Method 1: EmailJS (Recommended - Easy Setup)

#### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

#### Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" 
4. Connect your Gmail account
5. Note down the **Service ID** (something like "service_xxxxxxx")

#### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

**Subject:** New message from {{from_name}} - {{subject}}

**Content:**
```
You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and note down the **Template ID** (something like "template_xxxxxxx")

#### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (something like "xxxxxxxxx")

#### Step 5: Update Your .env.local File
Replace the values in `/Users/tarak/Downloads/project/.env.local`:

```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id  
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

#### Step 6: Test Your Form
1. Restart your development server: `npm run dev`
2. Fill out and submit the contact form
3. Check your Gmail inbox!

### Method 2: Alternative Solutions

#### Formspree
- Go to [https://formspree.io/](https://formspree.io/)
- Simple form backend service
- Free tier available

#### Netlify Forms (if using Netlify)
- Built-in form handling
- No additional setup needed

#### Custom Backend
- Create your own email API
- More control but requires backend development

### Troubleshooting

1. **Environment Variables Not Working?**
   - Make sure your .env.local file is in the project root
   - Restart your development server after changing .env.local
   - Environment variable names must start with `VITE_`

2. **EmailJS Not Sending?**
   - Check browser console for errors
   - Verify your Service ID, Template ID, and Public Key
   - Make sure Gmail service is properly connected

3. **Emails Going to Spam?**
   - Check your spam folder
   - Add your own email to Gmail contacts
   - EmailJS emails sometimes initially go to spam

### Security Note
- Never commit your actual API keys to version control
- The .env.local file is already in .gitignore
- For production, set environment variables in your hosting platform

---

**Current Status:** 
✅ EmailJS package installed
✅ Contact form updated with EmailJS integration
✅ Environment variables configured
❌ **Action Required:** You need to set up EmailJS account and update .env.local with your credentials