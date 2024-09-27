import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

// POST request handler (this is the correct named export for POST)
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Check for missing fields
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    // Create the email content
    const msg = {
      to: 'anas.k2001@icloud.com', // Your email address
      from: 'masterquagsire@gmail.com', // Must be a verified email with SendGrid
      subject: `New message from ${name}`,
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
      html: `<strong>New message from ${name} (${email})</strong><p>${message}</p>`,
    };

    // Send the email
    await sgMail.send(msg);

    // Return a success response
    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
  }
}

