# Path to Freedom Coaching

Website development for Path to Freedom Coaching LLC - A grace-based Christian coaching practice specializing in porn and sexual addiction recovery for men.

## 🌟 Overview

This website provides a complete online presence for a Christian coaching practice, featuring:
- Modern, masculine but calming design
- Grace-based approach highlighting influences like Sathiya Sam, Mark Laazer, The Cure, Nick Stumbo, Drew Boa, and Jay Stringer
- Integrated scheduling via Calendly
- Payment processing via Stripe
- Recovery app integration section
- Mobile-responsive design

## 📁 Website Structure

```
/
├── index.html              # Homepage with hero, services overview, and testimonials
├── about.html             # About page with grace model and influences
├── services.html          # Services and pricing with Stripe integration
├── app.html              # Recovery app features and integration
├── resources.html        # Books, websites, podcasts, and tools
├── contact.html          # Contact form and information
├── privacy.html          # Privacy policy
├── terms.html            # Terms of service
├── css/
│   └── styles.css        # Main stylesheet with calming color scheme
├── js/
│   └── main.js          # JavaScript for navigation, forms, and interactions
└── images/              # Placeholder for images
```

## 🎨 Design Features

### Color Scheme (Masculine but Calming)
- **Primary Color**: Deep calm blue (#2c5f7c)
- **Secondary Color**: Lighter blue (#5a8aa0)
- **Accent Color**: Earthy brown (#8b7355)
- **Supporting Colors**: Grays and earth tones

### Key Design Elements
- Clean, professional layout
- Smooth transitions and interactions
- Mobile-first responsive design
- Accessible and user-friendly navigation

## 🔧 Setup Instructions

### 1. Basic Setup
Simply upload all files to your web hosting service maintaining the folder structure.

### 2. Calendly Integration
1. Sign up at [Calendly.com](https://calendly.com)
2. Create your scheduling page
3. In `index.html`, replace the Calendly URL:
   ```html
   <div class="calendly-inline-widget" data-url="https://calendly.com/YOUR-LINK-HERE">
   ```

### 3. Stripe Payment Integration
1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your publishable key from the Stripe Dashboard
3. Create payment links or buy buttons for each service
4. In `services.html`, add your Stripe payment buttons:
   ```html
   <script async src="https://js.stripe.com/v3/buy-button.js"></script>
   <stripe-buy-button
     buy-button-id="buy_btn_xxxxx"
     publishable-key="pk_live_xxxxx">
   </stripe-buy-button>
   ```

### 4. Recovery App Integration
The `app.html` page includes a placeholder for recovery app integration. Options include:
- Build a custom Progressive Web App (PWA)
- Create native iOS/Android apps with React Native or Flutter
- Use no-code platforms like Glide or Adalo
- Integrate with existing recovery platforms

### 5. Contact Form Setup
The contact form in `contact.html` needs a backend to function. Options:
- Use a service like Formspree, FormSubmit, or Basin
- Set up your own backend with Node.js, PHP, or Python
- Use Netlify Forms if hosting on Netlify

Example with Formspree:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### 6. Email Newsletter Integration
To connect the newsletter signup:
1. Choose an email service provider (Mailchimp, ConvertKit, etc.)
2. Get the signup form endpoint
3. Update the form action in `resources.html`

## 📱 Mobile Responsiveness

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

Test on different devices to ensure optimal display.

## 🔒 Security & Privacy

- All pages include references to Privacy Policy and Terms of Service
- HTTPS encryption recommended for deployment
- Secure payment processing via Stripe
- Confidential contact form handling

## 🚀 Deployment Options

### Free Hosting Options
- **GitHub Pages**: Perfect for static sites
- **Netlify**: Automatic deployments, forms, and SSL
- **Vercel**: Fast deployment with great performance
- **Cloudflare Pages**: Global CDN with free tier

### Paid Hosting Options
- **Bluehost**: Traditional shared hosting
- **SiteGround**: WordPress hosting (if converting to WordPress)
- **HostGator**: Budget-friendly option

## 📝 Customization

### Update Content
- Replace placeholder text with your actual content
- Add your real contact information
- Update the Calendly and Stripe integration links
- Add actual testimonials (anonymized for privacy)

### Add Images
- Place images in the `/images` folder
- Update image placeholders in HTML files
- Optimize images for web (use WebP format when possible)
- Recommended: Add photos of nature, mountains, peaceful scenes

### Customize Colors
All colors are defined as CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2c5f7c;
    --secondary-color: #5a8aa0;
    --accent-color: #8b7355;
    /* etc. */
}
```

## 📞 Support Resources Included

The website includes crisis support information:
- National Suicide Prevention Lifeline: 988
- Crisis Text Line: Text HOME to 741741
- SAMHSA Helpline: 1-800-662-4357

## 🔄 Maintenance

### Regular Updates
- Keep content fresh and relevant
- Update testimonials periodically
- Add new resources and articles
- Review and update legal pages annually

### Performance Monitoring
- Use Google Analytics for traffic insights
- Monitor page load times
- Check mobile usability with Google Mobile-Friendly Test
- Test forms and integrations regularly

## 📚 Grace Model References

The website highlights these influential voices in grace-based recovery:
- **Sathiya Sam**: Grace model for sexual addiction recovery
- **Mark Laazer**: Compassion-based approaches
- **"The Cure"**: By John Lynch, Bruce McNicol, Bill Thrall
- **Nick Stumbo**: Sexual integrity from grace perspective
- **Drew Boa**: Sex addiction therapy with grace and truth
- **Jay Stringer**: Author of "Unwanted"

## 🤝 Contributing

To make updates:
1. Edit HTML files for content changes
2. Modify `styles.css` for design updates
3. Update `main.js` for functionality changes
4. Test all changes locally before deploying

## 📄 License

Copyright © 2024 Path to Freedom Coaching LLC. All rights reserved.

---

**Built with care for those seeking freedom through grace.**
