import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json({ error: "Email required" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Design by Evangelina <onboarding@resend.dev>",
      to: "anthonytij3@gmail.com",
      subject: "New Newsletter Signup ✦",
      html: `
        <h2>New Newsletter Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    await resend.emails.send({
      from: "Angel Evangelina <onboarding@resend.dev>",
      to: email,
      subject: "You're on the Studio Notes list ✦",
      html: `
        <h2>Welcome ✦</h2>
        <p>Thanks for joining Studio Notes.</p>
        <p>I’ll send thoughtful monthly updates on design, process, and inspiration.</p>
        <br/>
        <p>– Angel</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Signup failed" }, { status: 500 });
  }
}
