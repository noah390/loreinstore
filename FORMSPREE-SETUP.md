# 📧 Formspree Email Order Setup

## 🚀 Quick Setup (2 minutes)

### 1. Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up with your email
3. Verify your email address

### 2. Create New Form
1. Click "New Form"
2. Name: "Lorena Store Orders"
3. Copy the form endpoint (looks like: `https://formspree.io/f/xpznvqko`)

### 3. Update Your Website
Replace the form action in `checkout.html`:
```html
<form id="formspree-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### 4. Test the Integration
1. Open `checkout.html`
2. Add items to cart
3. Fill customer form
4. Click "Order via Email"
5. Check your email for the order

## 📧 Email Format

Orders will be sent to `abbeyayo53@gmail.com` with this format:

```
Subject: New Order from Lorena Store

NEW ORDER FROM LORENA STORE

Order Items:
1. Elegant Summer Dress
   Quantity: 2 × ₦15,000
   Subtotal: ₦30,000

2. Designer Handbag
   Quantity: 1 × ₦25,000
   Subtotal: ₦25,000

Total Amount: ₦55,000

Order Date: 12/15/2023
Order Time: 2:30:45 PM

Customer Details:
Name: John Doe
Phone: 08012345678
Email: john@example.com
Address: 123 Main Street, Lagos
```

## ⚙️ Formspree Features (Free Plan)

- ✅ 50 submissions per month
- ✅ Email notifications
- ✅ Spam protection
- ✅ File uploads (if needed)
- ✅ Custom thank you page
- ✅ Form validation

## 🔧 Advanced Configuration

### Custom Email Template
In Formspree dashboard:
1. Go to your form settings
2. Click "Email" tab
3. Customize subject and template

### Spam Protection
Formspree automatically includes:
- reCAPTCHA protection
- Honeypot fields
- Rate limiting

### Webhooks (Optional)
Connect to other services:
- Slack notifications
- Google Sheets
- Zapier integrations

## 🛠️ Troubleshooting

**Form not working?**
- Check the form action URL
- Verify Formspree account is active
- Check browser console for errors

**Not receiving emails?**
- Check spam folder
- Verify email address in Formspree
- Test with a simple form first

**Submissions not counting?**
- Make sure form method is POST
- Include proper field names
- Check Formspree dashboard

## 💡 Pro Tips

1. **Test First**: Always test with a real submission
2. **Monitor Usage**: Check your monthly limit
3. **Backup Plan**: Have WhatsApp as primary option
4. **Mobile Friendly**: Forms work on all devices

## 🎯 Current Setup

- **Form Endpoint**: `https://formspree.io/f/xpznvqko`
- **Target Email**: `abbeyayo53@gmail.com`
- **Monthly Limit**: 50 orders (free plan)
- **Fallback**: WhatsApp checkout available

Your email order system is now ready! Customers can choose between WhatsApp and email checkout options.