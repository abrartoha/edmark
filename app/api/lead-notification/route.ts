import { NextResponse } from "next/server";

// Webhook endpoint for Supabase to call when a new lead is inserted.
// Configure in Supabase Dashboard → Database → Webhooks → New Webhook:
//   Table: leads, Events: INSERT, URL: https://edmark.com.au/api/lead-notification
//
// In production, wire this up to send an email notification via
// Resend, SendGrid, or any transactional email service.

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const record = body?.record;

    if (!record) {
      return NextResponse.json({ error: "No record provided" }, { status: 400 });
    }

    // Log the new lead for now. In production, replace with email sending.
    console.log("New lead received:", {
      name: record.name,
      email: record.email,
      phone: record.phone,
      interest: record.interest,
      referral_source: record.referral_source,
      created_at: record.created_at,
    });

    // TODO: Send email notification to mahin@edmark.com.au
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'Edmark Leads <leads@edmark.com.au>',
    //   to: 'mahin@edmark.com.au',
    //   subject: `New Lead: ${record.name}`,
    //   html: `<p>New enquiry from ${record.name} (${record.email})</p>...`
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead notification error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
