import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// --- Simple in-memory rate limiter ---
const rateLimitMap = new Map<string, number>();

export async function POST(req: Request) {
  try {
    const { name, email, message, projectType } = await req.json();

    // -------------------------
    // 🔒 Basic Rate Limiting
    // -------------------------
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const now = Date.now();
    const lastSubmission = rateLimitMap.get(ip);

    if (lastSubmission && now - lastSubmission < 60_000) {
      return Response.json(
        { error: "Too many requests. Please wait a minute." },
        { status: 429 }
      );
    }

    rateLimitMap.set(ip, now);

    // -------------------------
    // 📩 Send Email to Client
    // -------------------------
    await resend.emails.send({
      from: "Design by Evangelina <onboarding@resend.dev>",
      to: "anthonytij3@gmail.com",
      subject: `New inquiry from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType || "Not selected"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // -------------------------
    // 💌 Auto-Reply to User
    // -------------------------
    await resend.emails.send({
      from: "Angel Evangelina <onboarding@resend.dev>",
      to: email,
      subject: "Got your message ✦",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for reaching out! I’ve received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to reply directly to this email if you have anything to add.</p>
        <br/>
        <p>Warmly,</p>
        <p><strong>Angel</strong></p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Email failed" }, { status: 500 });
  }
}
