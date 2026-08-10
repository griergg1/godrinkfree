import { Resend } from 'resend'

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
      subject: 'You’re on the Drink Free waitlist',
      html: `
        <p>You’re in.</p>
        <p>We’ll email you when iOS TestFlight opens for <strong>Drink Free</strong> — the gamey twin-gains scoreboard for quitting or cutting back.</p>
        <p>— Drink Free</p>
      `,
    })
    return { sent: true }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Resend send failed'
    console.error('[resend]', message)
    return { sent: false, reason: message }
  }
}
