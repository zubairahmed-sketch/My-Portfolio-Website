# EmailJS Setup Guide for Your Portfolio

Your portfolio is now configured to send emails directly from the contact form using **EmailJS**. Follow these steps to activate it:

## Step 1: Create an EmailJS Account
1. Visit [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. Log in to your dashboard

## Step 2: Create an Email Service
1. Click on **Email Services** (left sidebar)
2. Click **Add New Service**
3. Select **Gmail** (or your preferred email provider)
4. Choose **Connect existing email** and follow the authentication steps
5. Name your service (e.g., "Gmail")
6. Copy your **Service ID** (looks like: `service_bm8u3cq`)

## Step 3: Create an Email Template
1. Click on **Email Templates** (left sidebar)
2. Click **Create New Template**
3. Name it (e.g., "Portfolio Contact Form")
4. In the email template editor, use these variables:
   - `{{from_name}}` - Visitor's name
   - `{{from_email}}` - Visitor's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{to_email}}` - Your email address

5. Example template HTML:
```html
<p>New contact form submission:</p>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

6. Copy your **Template ID** (looks like: `template_1yl4n8j`)

## Step 4: Get Your Public Key
1. Click on **Account** (top-right)
2. Go to **API Keys** tab
3. Copy your **Public Key** (looks like: `bKTvVADiDwR7Xjg-Y`)

## Step 5: Update Contact.jsx
Replace the placeholder IDs in `src/components/Contact.jsx` with your actual IDs:

```jsx
// Line with emailjs.init() - Replace 'YOUR_PUBLIC_KEY'
emailjs.init('YOUR_PUBLIC_KEY')

// Line with emailjs.send() - Replace Service ID and Template ID
const result = await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  { ... }
)
```

## Step 6: Test Your Form
1. Run your development server: `npm run dev`
2. Fill out and submit the contact form
3. Check your email to verify it works

## Troubleshooting

**Form not sending?**
- Verify all IDs are correct and match your EmailJS account
- Check browser console for error messages
- Ensure your EmailJS account is active and email service is connected

**Emails going to spam?**
- Add your domain to SPF/DKIM records in your email provider
- EmailJS documentation has guides for this

**Rate limiting?**
- Free EmailJS accounts have a monthly email limit
- Upgrade your plan if needed

## Security Note
The Public Key is safe to expose in frontend code. Never share your **Private Key** or **Service/Template IDs** modification access with others.

---

Your form is ready to receive client inquiries directly!
