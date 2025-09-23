import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || !message.trim()) {
      return new Response("Message is required", { status: 400 });
    }

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASS;
    const receiver = process.env.RECEIVER_EMAIL || user;

    if (!user || !pass) {
      console.error("Missing Gmail credentials");
      return new Response("Server email credentials are not set", {
        status: 500,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: { user, pass },
    });

    const info = await transporter.sendMail({
      from: user,
      to: receiver,
      subject: "New Claim Verification",
      text: message,
    });

    console.log("Message sent:", info.messageId);
    return new Response("Email sent successfully", { status: 200 });
  } catch (err) {
    console.error("Email send failed:", err);
    return new Response("Failed to send email", { status: 500 });
  }
}
