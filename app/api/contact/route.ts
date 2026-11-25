import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email(),
  phone: z.string().trim().max(30).optional().default(""),
  service: z.string().trim().min(2).max(100),
  budget: z.string().trim().max(100).optional().default(""),
  message: z.string().trim().min(10).max(5000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = enquirySchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        { error: "Please complete all required fields with valid information." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) {
      return Response.json(
        { error: "Email service is not configured yet." },
        { status: 503 },
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || "nuvinsolutions@gmail.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL?.trim() ||
      "Nuvin Solutions <onboarding@resend.dev>";

    const resend = new Resend(apiKey);
    const { email, name, phone, service, budget, message } = parsed.data;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New project enquiry — ${service}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Service: ${service}`,
        `Budget: ${budget || "Not specified"}`,
        "",
        "Project details:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend rejected contact enquiry:", JSON.stringify(error));
      return Response.json(
        { error: "Your enquiry could not be sent. Please try again." },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return Response.json(
      { error: "Your enquiry could not be sent. Please try again." },
      { status: 500 },
    );
  }
}
