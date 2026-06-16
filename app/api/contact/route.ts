import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL!;

    // Send both emails concurrently
    const [notificationResult, thankYouResult] = await Promise.all([
      // 1. Notification to portfolio owner
      resend.emails.send({
        from: "Portfolio Contact <noreply@devsoumyajit.in>",
        to: contactEmail,
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
      }),

      // 2. Thank-you confirmation to sender
      resend.emails.send({
        from: "Soumyajit Khan <noreply@devsoumyajit.in>",
        to: email,
        subject: "Thanks for reaching out! — Soumyajit Khan",
        replyTo: contactEmail,
        text: `Hi ${name},\n\nThank you for getting in touch! I've received your message and will get back to you as soon as possible.\n\nHere's a copy of what you sent:\n\n"${message}"\n\nBest regards,\nSoumyajit Khan\nhttps://www.devsoumyajit.in`,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #1c1a17; border-radius: 12px; overflow: hidden; border: 1px solid #2a2520;">
            <div style="background: linear-gradient(135deg, #d4873a, #c8a84e, #c46a4a); padding: 32px 24px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">Thanks for reaching out!</h1>
            </div>
            <div style="padding: 32px 24px; color: #e0e0e0;">
              <p style="font-size: 16px; margin-top: 0;">Hi <strong>${name}</strong>,</p>
              <p style="font-size: 15px; line-height: 1.7; color: #b0b0b0;">
                Thank you for getting in touch! I've received your message and will get back to you as soon as possible.
              </p>
              <div style="background: #272420; border-left: 3px solid #d4873a; padding: 16px 20px; border-radius: 8px; margin: 24px 0;">
                <p style="font-size: 13px; color: #8a8078; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 1px;">Your message</p>
                <p style="font-size: 14px; color: #d0d0d0; margin: 0; line-height: 1.6;">${message.replace(/\n/g, "<br />")}</p>
              </div>
              <p style="font-size: 15px; line-height: 1.7; color: #b0b0b0;">
                I typically respond within 24–48 hours. In the meantime, feel free to check out my portfolio.
              </p>
              <div style="text-align: center; margin: 28px 0;">
                <a href="https://www.devsoumyajit.in" style="display: inline-block; background: linear-gradient(135deg, #d4873a, #c46a4a); color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-size: 14px; font-weight: 600;">Visit My Portfolio</a>
              </div>
              <hr style="border: none; border-top: 1px solid #2a2520; margin: 24px 0;" />
              <p style="font-size: 14px; color: #8a8078; margin-bottom: 0;">
                Best regards,<br />
                <strong style="color: #e0e0e0;">Soumyajit Khan</strong><br />
                <span style="font-size: 13px;">Full Stack Developer & AI Engineer</span>
              </p>
            </div>
            <div style="background: #141210; padding: 16px 24px; text-align: center;">
              <p style="font-size: 12px; color: #555; margin: 0;">
                This is an automated confirmation from <a href="https://www.devsoumyajit.in" style="color: #d4873a; text-decoration: none;">devsoumyajit.in</a>
              </p>
            </div>
          </div>
        `,
      }),
    ]);

    if (notificationResult.error || thankYouResult.error) {
      console.error("Resend error:", notificationResult.error || thankYouResult.error);
      return NextResponse.json(
        { error: "Unable to send message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Unable to send message. Please try again later." },
      { status: 500 }
    );
  }
}
