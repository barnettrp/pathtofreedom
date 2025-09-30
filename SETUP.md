# Quick Setup Guide

## 🚀 Getting Your Website Live

This guide will help you deploy and configure your Path to Freedom Coaching website.

## Step 1: Choose a Hosting Provider

### Recommended Free Options:
1. **GitHub Pages** (Easiest)
   - Already have the code in GitHub
   - Go to Settings → Pages
   - Select branch: `copilot/fix-9f54663e-055d-46a1-b687-d46867e7f955`
   - Select folder: `/ (root)`
   - Click Save
   - Your site will be live at: `https://barnettrp.github.io/pathtofreedom/`

2. **Netlify** (Recommended)
   - Sign up at netlify.com
   - Connect to your GitHub repository
   - Deploy with one click
   - Free SSL certificate included

3. **Vercel**
   - Similar to Netlify
   - Sign up at vercel.com
   - Import GitHub repository
   - Automatic deployment

## Step 2: Configure Calendly

1. Create a free account at [Calendly.com](https://calendly.com)
2. Set up your availability
3. Create an event type for "Free 30-Minute Consultation"
4. Copy your scheduling link
5. In `index.html`, find line with Calendly widget and replace:
   ```html
   <div class="calendly-inline-widget" data-url="https://calendly.com/YOUR-LINK-HERE">
   ```
   Change `YOUR-LINK-HERE` to your actual Calendly username/event

## Step 3: Set Up Stripe Payments

1. Create account at [stripe.com](https://stripe.com)
2. Complete verification process
3. Go to Stripe Dashboard → Products
4. Create products for:
   - Individual Coaching Session ($150)
   - Monthly Package ($500)
5. For each product, click "Create payment link" or "Buy button"
6. Copy the code snippet
7. In `services.html`, replace the placeholder with your Stripe button code

### Example Stripe Buy Button:
```html
<script async src="https://js.stripe.com/v3/buy-button.js"></script>
<stripe-buy-button
  buy-button-id="buy_btn_xxxxx"
  publishable-key="pk_live_xxxxx">
</stripe-buy-button>
```

## Step 4: Configure Contact Form

The contact form needs a backend to work. Choose one option:

### Option A: Formspree (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form endpoint
4. In `contact.html`, update the form tag:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option B: Netlify Forms (If using Netlify)
1. Add `netlify` attribute to form tag:
   ```html
   <form id="contactForm" name="contact" netlify>
   ```
2. Netlify automatically handles form submissions

### Option C: FormSubmit
1. Update form action to:
   ```html
   <form action="https://formsubmit.co/your-email@example.com" method="POST">
   ```
2. Replace with your email address

## Step 5: Add Your Email Address

Search and replace throughout all files:
- `info@pathtofreedomcoaching.com` → Your actual email address
- `privacy@pathtofreedomcoaching.com` → Your actual email address

## Step 6: Update Contact Information

In legal pages (`privacy.html` and `terms.html`), update:
- `[Your phone number]` → Your actual phone number
- `[Your State]` → Your state for legal jurisdiction
- `[Your address]` → Your business address

## Step 7: Connect Email Newsletter

For the newsletter signup in `resources.html`:

### Using Mailchimp:
1. Create Mailchimp account
2. Create an audience
3. Get embedded form code
4. Replace the form in `resources.html`

### Using ConvertKit:
1. Create ConvertKit account
2. Create a form
3. Get form code
4. Replace the form in `resources.html`

## Step 8: Add Images

Replace placeholder images with actual photos:
1. Add images to the `/images` folder
2. Update HTML references:
   - Hero image (peaceful mountain scene)
   - About page image (sunrise/freedom imagery)
   - App mockups/screenshots
3. Recommended: Use high-quality, royalty-free images from:
   - [Unsplash](https://unsplash.com)
   - [Pexels](https://pexels.com)

## Step 9: Recovery App Integration

When your recovery app is ready:
1. Build or connect your app
2. Update `app.html` with:
   - Download links (App Store, Google Play)
   - Web app login link
   - API integration code

## Step 10: Testing Checklist

Before going live, test:
- [ ] All navigation links work
- [ ] Mobile menu opens and closes
- [ ] Calendly widget loads (after adding your link)
- [ ] Contact form submits successfully
- [ ] Stripe payment buttons work (in test mode first)
- [ ] All pages display correctly on mobile
- [ ] Forms validate required fields
- [ ] Footer links work
- [ ] Privacy policy and terms are complete

## Step 11: SEO & Analytics

1. **Google Analytics**
   - Create account at [analytics.google.com](https://analytics.google.com)
   - Get tracking code
   - Add before `</head>` in all HTML files

2. **Google Search Console**
   - Verify your website
   - Submit sitemap

3. **Meta Tags**
   - Already included in all pages
   - Customize as needed

## Step 12: Domain Name

1. Purchase a domain name (e.g., pathtofreedomcoaching.com)
2. Connect to your hosting provider
3. Update Stripe and Calendly settings with new domain

## Common Customizations

### Change Colors
Edit `css/styles.css` variables:
```css
:root {
    --primary-color: #2c5f7c;     /* Your primary color */
    --secondary-color: #5a8aa0;   /* Your secondary color */
    --accent-color: #8b7355;      /* Your accent color */
}
```

### Add Social Media Links
In footer of all pages, replace `#` with actual URLs:
```html
<a href="https://facebook.com/yourpage">Facebook</a>
<a href="https://instagram.com/yourpage">Instagram</a>
```

### Update Testimonials
Replace the placeholder testimonials with real ones (anonymized for privacy).

## Need Help?

- Email: barnettrp@github.com
- Refer to main README.md for detailed information
- Check hosting provider documentation for deployment issues

## Security Checklist

- [ ] HTTPS/SSL enabled (automatic with most hosts)
- [ ] Contact form has spam protection
- [ ] Privacy policy is complete and accurate
- [ ] Terms of service reviewed
- [ ] Stripe account verified and secured
- [ ] Strong passwords on all accounts

---

**Your website is ready to launch! 🎉**

Focus on getting Calendly and Stripe configured first, as those are your primary conversion tools. Everything else can be refined after launch.
