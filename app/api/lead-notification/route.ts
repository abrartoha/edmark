import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, phone, interest, message, referral_source } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Edmark Education <operations@edmark.com.au>",
      to: "info@edmark.com.au",
      subject: `New Lead: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 10px;">
            New Enquiry from Edmark Website
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151; width: 140px;">Name</td>
              <td style="padding: 8px 12px; color: #111827;">${name}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 8px 12px; color: #111827;">
                <a href="mailto:${email}" style="color: #0d9488;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Phone</td>
              <td style="padding: 8px 12px; color: #111827;">${phone || "Not provided"}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Interested in</td>
              <td style="padding: 8px 12px; color: #111827;">${interest || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Found us via</td>
              <td style="padding: 8px 12px; color: #111827;">${referral_source || "Not specified"}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #374151; vertical-align: top;">Message</td>
              <td style="padding: 8px 12px; color: #111827; white-space: pre-wrap;">${message || "No message"}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 13px; color: #6b7280;">
            You can reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead notification error:", error);
    return NextResponse.json(
      { error: "Failed to send notification" },
      { status: 500 }
    );
  }
}
