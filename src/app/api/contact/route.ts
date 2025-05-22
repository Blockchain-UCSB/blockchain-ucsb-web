import { NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, organization, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !organization || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'blockchainatucsb@gmail.com',
      subject: `AUTO | Contact Us Form Submission: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Organization: ${organization}

Message:
${message}
      `,
      html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject}</p>
<p><strong>Organization:</strong> ${organization}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 