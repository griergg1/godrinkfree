import { Resend } from 'resend'

const BRAND = {
  ink: '#0b0e11',
  muted: '#5c6570',
  gain: '#00c805',
  gainDark: '#00a004',
  gainSoft: '#e6f9e7',
  paper: '#f6f8f7',
  line: '#e4e9e6',
  sky: '#3b82f6',
} as const

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://godrinkfree.com'

/** Branded, email-client-safe (table + inline styles) waitlist confirmation. */
function waitlistConfirmHtml(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="light only" />
    <title>You're on the Drink Free list</title>
  </head>
  <body style="margin:0;padding:0;background:${BRAND.paper};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${BRAND.paper};font-size:1px;line-height:1px;">
      You're on the list — we'll email you when iOS early access opens.
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.paper};">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;width:100%;background:#ffffff;border:1px solid ${BRAND.line};border-radius:20px;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
            <tr>
              <td style="background:${BRAND.ink};padding:22px 28px;">
                <span style="display:inline-block;height:10px;width:10px;border-radius:50%;background:${BRAND.gain};vertical-align:middle;"></span>
                <span style="color:#ffffff;font-size:18px;font-weight:800;letter-spacing:-0.02em;vertical-align:middle;padding-left:8px;">Drink Free</span>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 28px 8px 28px;">
                <h1 style="margin:0;font-size:26px;line-height:1.15;font-weight:800;letter-spacing:-0.03em;color:${BRAND.ink};">You're on the list.</h1>
                <p style="margin:16px 0 0 0;font-size:15px;line-height:1.6;color:${BRAND.muted};">
                  Thanks for signing up for early access to <strong style="color:${BRAND.ink};">Drink Free</strong> — the habit companion for quitting or cutting back on alcohol.
                </p>
                <p style="margin:14px 0 0 0;font-size:15px;line-height:1.6;color:${BRAND.muted};">
                  We'll email you the moment iOS early access (TestFlight) opens. No spam in between.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 28px 4px 28px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="50%" style="padding:0 6px 0 0;vertical-align:top;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.gainSoft};border-radius:14px;">
                        <tr><td style="padding:16px;">
                          <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${BRAND.gainDark};">Money saved</p>
                          <p style="margin:6px 0 0 0;font-size:14px;line-height:1.4;color:${BRAND.ink};font-weight:600;">Every skipped drink adds to the total.</p>
                        </td></tr>
                      </table>
                    </td>
                    <td width="50%" style="padding:0 0 0 6px;vertical-align:top;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef4ff;border-radius:14px;">
                        <tr><td style="padding:16px;">
                          <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${BRAND.sky};">Calories not added</p>
                          <p style="margin:6px 0 0 0;font-size:14px;line-height:1.4;color:${BRAND.ink};font-weight:600;">See the kcal you never drank stack up.</p>
                        </td></tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 28px 28px 28px;">
                <p style="margin:0;font-size:15px;line-height:1.6;color:${BRAND.muted};">
                  Two numbers that move in the right direction as your alcohol-free days add up. That's the whole idea.
                </p>
                <p style="margin:20px 0 0 0;font-size:15px;line-height:1.6;color:${BRAND.ink};font-weight:600;">— The Drink Free team</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 28px;border-top:1px solid ${BRAND.line};background:${BRAND.paper};">
                <p style="margin:0;font-size:12px;line-height:1.5;color:${BRAND.muted};">
                  Drink Free is a habit companion, not a medical device. We do not diagnose or treat alcohol use disorder. For adults 18+ — if you need clinical help, talk to a professional.
                </p>
                <p style="margin:12px 0 0 0;font-size:12px;line-height:1.5;color:${BRAND.muted};">
                  <a href="${siteUrl}" style="color:${BRAND.gainDark};text-decoration:none;font-weight:600;">godrinkfree.com</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}

function waitlistConfirmText(): string {
  return [
    "You're on the list.",
    '',
    'Thanks for signing up for early access to Drink Free — the habit companion for quitting or cutting back on alcohol.',
    '',
    "We'll email you the moment iOS early access (TestFlight) opens. No spam in between.",
    '',
    'Money saved and calories not added — two numbers that move in the right direction as your alcohol-free days add up. That is the whole idea.',
    '',
    '— The Drink Free team',
    '',
    'Drink Free is a habit companion, not a medical device. We do not diagnose or treat alcohol use disorder. For adults 18+ — if you need clinical help, talk to a professional.',
    siteUrl,
  ].join('\n')
}

/** Optional Resend confirm email. Stubbed when RESEND_API_KEY is missing. */
export async function sendWaitlistConfirm(email: string): Promise<{ sent: boolean; reason?: string }> {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL ?? 'Drink Free <onboarding@resend.dev>'

  if (!apiKey) {
    return { sent: false, reason: 'RESEND_API_KEY not set' }
  }

  try {
    const resend = new Resend(apiKey)
    await resend.emails.send({
      from,
      to: email,
      subject: "You're on the Drink Free list",
      html: waitlistConfirmHtml(),
      text: waitlistConfirmText(),
    })
    return { sent: true }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Resend send failed'
    console.error('[resend]', message)
    return { sent: false, reason: message }
  }
}
