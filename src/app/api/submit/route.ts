import { sendToWeb3Forms } from "@/lib/web3forms";

export const runtime = "nodejs";

const SUBJECTS: Record<string, string> = {
  quote: "New Quotation Request — TKEL Website",
  contact: "New Contact Enquiry — TKEL Website",
  careers: "New Job Application — TKEL Careers",
};

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ success: false, error: "Invalid request." }, { status: 400 });
  }

  const { type, website, name, email, message, ...rest } = body as Record<string, string>;

  // Honeypot: bots fill every field, real visitors never see this one.
  if (website) {
    return Response.json({ success: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return Response.json(
      { success: false, error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  const subject = SUBJECTS[type] ?? "New Website Submission — TKEL";

  try {
    await sendToWeb3Forms({
      subject,
      from_name: "TKEL Website",
      name,
      email,
      message,
      ...rest,
    });
    return Response.json({ success: true });
  } catch (err) {
    if (err instanceof Error && err.message === "MISSING_ACCESS_KEY") {
      console.error("WEB3FORMS_ACCESS_KEY is not configured in the environment.");
      return Response.json(
        {
          success: false,
          error:
            "The enquiry form isn't fully set up yet. Please contact us directly by phone or email in the meantime.",
        },
        { status: 500 }
      );
    }
    console.error("Web3Forms submission failed:", err);
    return Response.json(
      { success: false, error: "We couldn't send your message. Please try again or contact us directly." },
      { status: 502 }
    );
  }
}
