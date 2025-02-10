import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Server-side validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com", // Sendinblue SMTP Server
      port: 587, // Use 465 for SSL or 587 for TLS
      secure: false, // Set to 'true' if using port 465
      auth: {
        user: process.env.SENDINBLUE_EMAIL, // Your Sendinblue email
        pass: process.env.SENDINBLUE_PASS, // Your Sendinblue SMTP key
      },
    });

    const res = await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Contact Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
