import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT ?? 587),
  secure: process.env.EMAIL_PORT === "465",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // 1. Send notification to portfolio owner
    const mailOptions = {
      from:
        process.env.EMAIL_FROM || `Portfolio Contact <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h2>New contact message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // 2. Send thank-you / confirmation email to the sender
    const thankYouMail = {
      from: `Soumyajit Khan <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for reaching out! — Soumyajit Khan",
      replyTo: process.env.EMAIL_TO || process.env.EMAIL_USER,
      text: `Hi ${name},\n\nThank you for getting in touch! I've received your message and will get back to you as soon as possible.\n\nHere's a copy of what you sent:\n\n"${message}"\n\nBest regards,\nSoumyajit Khan\nhttps://www.devsoumyajit.in`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; border-radius: 12px; overflow: hidden; border: 1px solid #1a1a2e;">
          <div style="background: linear-gradient(135deg, #7c3aed, #4f46e5, #06b6d4); padding: 32px 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">Thanks for reaching out! 🚀</h1>
          </div>
          <div style="padding: 32px 24px; color: #e0e0e0;">
            <p style="font-size: 16px; margin-top: 0;">Hi <strong>${name}</strong>,</p>
            <p style="font-size: 15px; line-height: 1.7; color: #b0b0b0;">
              Thank you for getting in touch! I've received your message and will get back to you as soon as possible.
            </p>
            <div style="background: #111118; border-left: 3px solid #7c3aed; padding: 16px 20px; border-radius: 8px; margin: 24px 0;">
              <p style="font-size: 13px; color: #888; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 1px;">Your message</p>
              <p style="font-size: 14px; color: #d0d0d0; margin: 0; line-height: 1.6;">${message.replace(/\n/g, "<br />")}</p>
            </div>
            <p style="font-size: 15px; line-height: 1.7; color: #b0b0b0;">
              I typically respond within 24–48 hours. In the meantime, feel free to check out my portfolio.
            </p>
            <div style="text-align: center; margin: 28px 0;">
              <a href="https://www.devsoumyajit.in" style="display: inline-block; background: linear-gradient(135deg, #7c3aed, #4f46e5); color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-size: 14px; font-weight: 600;">Visit My Portfolio</a>
            </div>
            <hr style="border: none; border-top: 1px solid #1a1a2e; margin: 24px 0;" />
            <p style="font-size: 14px; color: #888; margin-bottom: 0;">
              Best regards,<br />
              <strong style="color: #e0e0e0;">Soumyajit Khan</strong><br />
              <span style="font-size: 13px;">Full Stack Developer & AI Engineer</span>
            </p>
          </div>
          <div style="background: #050508; padding: 16px 24px; text-align: center;">
            <p style="font-size: 12px; color: #555; margin: 0;">
              This is an automated confirmation from <a href="https://www.devsoumyajit.in" style="color: #7c3aed; text-decoration: none;">devsoumyajit.in</a>
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(thankYouMail);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Unable to send message. Please try again later." },
      { status: 500 }
    );
  }
}

