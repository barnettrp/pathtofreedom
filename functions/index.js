const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Cloud Function to send contact form emails
exports.sendContactEmail = functions.https.onRequest(async (req, res) => {
  // Enable CORS
  res.set('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.set('Access-Control-Max-Age', '3600');
    return res.status(204).send('');
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Note: Authentication removed for public contact form
  // If you want to add rate limiting, consider using reCAPTCHA or Firebase App Check

  // Configure the email transporter using Gmail and App Password
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: functions.config().email.user, // Your Gmail address
      pass: functions.config().email.password // Your Google App Password
    }
  });

  // Validate required fields
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      error: 'Missing required fields: name, email, subject, and message are required.'
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      error: 'Invalid email address format.'
    });
  }

  // Create email content
  const mailOptions = {
    from: functions.config().email.user,
    to: 'info@pathtofreedomcoaching.com', // Your receiving email
    replyTo: email,
    subject: `Contact Form: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2c5282; border-bottom: 2px solid #4299e1; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>

        <div style="background-color: #f7fafc; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          ${phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
          <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #2c5282;">Message:</h3>
          <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #718096;">
          <p>This email was sent from the Path to Freedom Coaching contact form.</p>
          <p>Submitted on: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST</p>
        </div>
      </div>
    `
  };

  // Send confirmation email to the user
  const confirmationMailOptions = {
    from: functions.config().email.user,
    to: email,
    subject: 'Thank you for contacting Path to Freedom Coaching',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2c5282;">Thank You for Reaching Out!</h2>

        <p>Dear ${name},</p>

        <p>Thank you for contacting Path to Freedom Coaching. We have received your message and will respond within 24 hours.</p>

        <div style="background-color: #f7fafc; padding: 15px; border-left: 4px solid #4299e1; margin: 20px 0;">
          <p style="margin: 0;"><strong>Your message:</strong></p>
          <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
        </div>

        <p>If you need immediate assistance or are experiencing a crisis, please:</p>
        <ul>
          <li>Call the National Suicide Prevention Lifeline: 988</li>
          <li>Visit your nearest emergency room</li>
        </ul>

        <p>We look forward to connecting with you soon!</p>

        <p style="margin-top: 30px;">
          Blessings,<br>
          <strong>Path to Freedom Coaching</strong>
        </p>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #718096;">
          <p>Path to Freedom Coaching LLC</p>
          <p>Grace-based Christian coaching for men seeking freedom</p>
        </div>
      </div>
    `
  };

  try {
    // Send both emails
    console.log('Attempting to send notification email to:', mailOptions.to);
    await transporter.sendMail(mailOptions);
    console.log('Notification email sent successfully');

    console.log('Attempting to send confirmation email to:', email);
    await transporter.sendMail(confirmationMailOptions);
    console.log('Confirmation email sent successfully');

    return res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode
    });
    return res.status(500).json({
      error: `Unable to send email: ${error.message}. Please contact us directly at info@pathtofreedomcoaching.com`,
      details: { originalError: error.message, code: error.code }
    });
  }
});
