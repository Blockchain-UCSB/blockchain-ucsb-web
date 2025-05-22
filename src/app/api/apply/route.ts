import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { fullName, email, year, major, why, excitementAboutBlockchain } = await request.json();

    // Validate input
    if (!fullName || !email || !year || !major || !why || !excitementAboutBlockchain) {
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
      subject: `AUTO | Officer Application Form Submission: ${fullName}`,
      text: `
Name: ${fullName}
Email: ${email}
Year: ${year}
Major: ${major}

Why they want to join:
${why}

What excites them about blockchain technology:
${excitementAboutBlockchain}
      `,
      html: `
<h3>New Officer Application</h3>
<p><strong>Name:</strong> ${fullName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Year:</strong> ${year}</p>
<p><strong>Major:</strong> ${major}</p>
<p><strong>Why they want to join:</strong></p>
<p>${why.replace(/\n/g, '<br>')}</p>
<p><strong>What excites them about blockchain technology:</strong></p>
<p>${excitementAboutBlockchain.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending application email:', error);
    return NextResponse.json(
      { error: 'Failed to send application' },
      { status: 500 }
    );
  }
} 