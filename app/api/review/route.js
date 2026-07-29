import { Resend } from "resend";
import { reviewSchema } from "../../lib/validation";

// Constructed lazily. `new Resend()` throws when RESEND_API_KEY is absent, and
// at module scope that turns a missing runtime secret into a hard BUILD
// failure — the build should not depend on a mail credential.
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export async function POST(request) {
  try {
    const body = await request.json();

    const parsed = reviewSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json({ error: "Invalid submission" }, { status: 400 });
    }

    const { name, rating, review } = parsed.data;

    const resend = getResend();
    if (!resend) {
      console.error("RESEND_API_KEY is not set; cannot send mail.");
      return Response.json({ error: "Mail is not configured" }, { status: 500 });
    }

    const { error } = await resend.emails.send({
      from: `${name} <${process.env.BOOKING_FROM_EMAIL}>`,
      to: [process.env.BOOKING_TO_EMAIL],
      subject: `New Review: ${rating}/5 from ${name}`,
      html: reviewEmailHtml({ name, rating, review }),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Could not send review" }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Review route error:", err);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}

function reviewEmailHtml({ name, rating, review }) {
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
  const safeReview = String(review).replace(/\n/g, "<br>");

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
                <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:600;">New Client Review</h1>
              </td>
            </tr>

            <tr>
              <td style="padding:24px;">
                <p style="margin:0 0 4px;color:#D4AF37;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">From</p>
                <p style="margin:0 0 20px;color:#ffffff;font-size:18px;font-weight:600;">${name}</p>

                <p style="margin:0 0 4px;color:#D4AF37;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">Rating</p>
                <p style="margin:0 0 20px;color:#D4AF37;font-size:24px;letter-spacing:4px;">${stars} <span style="color:#BDBDBD;font-size:14px;letter-spacing:0;">(${rating}/5)</span></p>

                <p style="margin:0 0 4px;color:#D4AF37;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">Review</p>
                <div style="margin:0;padding:16px 18px;background:#181818;border:1px solid #2A2A2A;border-radius:12px;color:#ffffff;font-size:15px;line-height:1.7;">${safeReview}</div>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 24px;background:#060606;border-top:1px solid #2A2A2A;">
                <p style="margin:0;color:#7a7a7a;font-size:12px;">Submitted from the Falcon Pest Control reviews page.</p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}