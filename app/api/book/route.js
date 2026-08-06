import { Resend } from "resend";
import { bookingSchema } from "../../lib/validation";
import { formGuardFor } from "../../lib/form-guard.config";
import { runGuards } from "../../lib/form-guard/guard";

// Constructed lazily. `new Resend()` throws when RESEND_API_KEY is absent, and
// at module scope that turns a missing runtime secret into a hard BUILD
// failure — the build should not depend on a mail credential.
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

// No CORS headers are emitted, so browsers reject cross-origin calls outright.
// The forms are same-origin and need no preflight; anything that does is not us.
export async function OPTIONS() {
  return new Response(null, { status: 405, headers: { Allow: "POST" } });
}

export async function POST(request) {
  try {
    const body = await request.json();

    // origin -> honeypot -> timing -> Turnstile, before any field work.
    // The action is bound to this endpoint, so a token solved on another
    // form on this site will not verify here.
    const verdict = await runGuards({
      headers: request.headers,
      fields: body,
      config: formGuardFor("book"),
    });

    if (verdict.outcome === "reject") {
      return Response.json({ error: verdict.message }, { status: verdict.status });
    }

    // Honeypot or impossible submit speed: mirror the real success response
    // and send nothing, so a spammer learns nothing about which filter hit.
    if (verdict.outcome === "silent-drop") {
      return Response.json({ ok: true });
    }

    // Re-validate on the server
    const parsed = bookingSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json({ error: "Invalid submission" }, { status: 400 });
    }

    const { name, email, phone, service, date, note, sourcePage, sourceSection } = parsed.data;

    const resend = getResend();
    if (!resend) {
      console.error("RESEND_API_KEY is not set; cannot send mail.");
      return Response.json({ error: "Mail is not configured" }, { status: 500 });
    }

    const { error } = await resend.emails.send({
      from: `${name} <${process.env.BOOKING_FROM_EMAIL}>`,
      to: [process.env.BOOKING_TO_EMAIL],
      replyTo: email,
      subject: `New Booking: ${service} — ${date}`,
      html: bookingEmailHtml({ name, email, phone, service, date, note, sourcePage, sourceSection }),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Could not send booking" }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Booking route error:", err);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}

function row(label, value) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:14px 20px;border-bottom:1px solid #2A2A2A;color:#D4AF37;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px;width:140px;vertical-align:top;">${label}</td>
      <td style="padding:14px 20px;border-bottom:1px solid #2A2A2A;color:#ffffff;font-size:15px;vertical-align:top;">${value}</td>
    </tr>`;
}

function bookingEmailHtml({ name, email, phone, service, date, note, sourcePage, sourceSection }) {
  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#000000;font-family:Inter,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#000000;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#111111;border:1px solid #2A2A2A;border-radius:16px;overflow:hidden;">

            <tr>
              <td style="padding:28px 24px;background:#060606;border-bottom:1px solid #D4AF37;">
                <p style="margin:0 0 6px;color:#D4AF37;font-size:12px;font-weight:600;letter-spacing:4px;text-transform:uppercase;">Falcon</p>
                <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:600;">New Service Booking</h1>
              </td>
            </tr>

            <tr>
              <td>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${row("Name", name)}
                  ${row("Email", `<a href="mailto:${email}" style="color:#D4AF37;text-decoration:none;">${email}</a>`)}
                  ${row("Phone", `<a href="tel:${phone}" style="color:#D4AF37;text-decoration:none;">${phone}</a>`)}
                  ${row("Service", service)}
                  ${row("Preferred Date", date)}
                  ${row("Note", note ? String(note).replace(/\n/g, "<br>") : "")}
                  ${row("Came from", sourcePage && sourcePage !== "unknown" ? `${sourcePage}${sourceSection && sourceSection !== "unknown" ? ` &middot; ${sourceSection}` : ""}` : "")}
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:24px;">
                <a href="mailto:${email}" style="display:inline-block;background:#D4AF37;color:#000000;font-size:14px;font-weight:600;text-decoration:none;padding:12px 24px;border-radius:999px;">Reply to ${name}</a>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 24px;background:#060606;border-top:1px solid #2A2A2A;">
                <p style="margin:0;color:#7a7a7a;font-size:12px;">Sent from the Falcon Pest Control website booking form.</p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}