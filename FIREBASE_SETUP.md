# Firebase Contact Form Setup Guide

This guide will help you set up the contact form to use Firebase Cloud Functions with Nodemailer and Google App Password.

## Prerequisites

1. A Firebase account
2. A Gmail account with 2-Factor Authentication enabled
3. Firebase CLI installed (already done)

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select your existing project
3. Name your project (e.g., "pathtofreedom")
4. Follow the setup wizard

## Step 2: Get Firebase Configuration

1. In Firebase Console, go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click the Web icon `</>` to add a web app
4. Register your app with a nickname (e.g., "Path to Freedom Website")
5. Copy the `firebaseConfig` object
6. Replace the placeholder in `contact.html` (lines 247-255) with your actual config

## Step 3: Generate Google App Password

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Navigate to Security → 2-Step Verification
3. Scroll down to "App passwords"
4. Click "App passwords"
5. Select "Mail" and "Other (Custom name)"
6. Name it "Path to Freedom Contact Form"
7. Click "Generate"
8. **Save the 16-character password** - you won't see it again!

## Step 4: Configure Firebase Functions

### Set Environment Variables in Firebase

Run these commands in your terminal (replace with your actual values):

```bash
firebase login
firebase use --add
# Select your Firebase project

firebase functions:config:set email.user="your-email@gmail.com"
firebase functions:config:set email.password="your-16-char-app-password"
```

### Verify Configuration

```bash
firebase functions:config:get
```

You should see:
```json
{
  "email": {
    "user": "your-email@gmail.com",
    "password": "your-app-password"
  }
}
```

## Step 5: Deploy Cloud Functions

```bash
firebase deploy --only functions
```

This will deploy the `sendContactEmail` function to Firebase.

## Step 6: Update Firebase Security Rules (Optional)

If you want to add additional security, you can configure CORS and function security in Firebase Console.

## Step 7: Test Your Contact Form

1. Open `contact.html` in a browser
2. Fill out the contact form
3. Submit the form
4. Check:
   - The sender's email for a confirmation message
   - `info@pathtofreedomcoaching.com` for the contact form submission

## Local Development (Optional)

For local testing, you can use the Firebase Emulator:

```bash
cd functions
firebase emulators:start --only functions
```

Update `contact.html` to point to the local emulator:

```javascript
// Add this after firebase.initializeApp(firebaseConfig);
if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    firebase.functions().useEmulator('localhost', 5001);
}
```

## Troubleshooting

### "Authentication failed" error

- Verify you're using an App Password, not your regular Gmail password
- Make sure 2-Factor Authentication is enabled on your Google account
- Check that you copied the App Password correctly (no spaces)

### "Missing configuration" error

- Run `firebase functions:config:get` to verify your configuration
- Make sure you're logged into Firebase CLI: `firebase login`
- Verify you're using the correct project: `firebase use`

### Form submission fails

- Check browser console for errors
- Verify Firebase configuration in `contact.html` is correct
- Ensure functions are deployed: `firebase deploy --only functions`
- Check Firebase Functions logs: `firebase functions:log`

### Email not sending

- Verify the Gmail account and App Password are correct
- Check Firebase Functions logs for errors
- Make sure "Less secure app access" is OFF (you should use App Password)
- Verify the receiving email (`info@pathtofreedomcoaching.com`) is correct

## Files Created

- `functions/index.js` - Cloud Function with Nodemailer integration
- `functions/package.json` - Dependencies for Cloud Functions
- `functions/.env.example` - Environment variables example
- `firebase.json` - Firebase configuration
- `.firebaserc` - Firebase project configuration
- Updated `contact.html` - Firebase SDK integration
- Updated `js/main.js` - Form submission handler

## Cost Considerations

Firebase Cloud Functions pricing:
- First 2,000,000 invocations per month are free
- After that, very low cost per invocation

For a small website, you'll likely stay within the free tier.

## Security Notes

- App Passwords are safer than using your main password
- Never commit your `.env` or Firebase config files to version control
- The Cloud Function validates email format and required fields
- Consider adding reCAPTCHA for additional spam protection

## Next Steps

1. Set up proper error logging and monitoring in Firebase Console
2. Add reCAPTCHA to prevent spam submissions
3. Customize email templates in `functions/index.js`
4. Set up email forwarding rules if needed
