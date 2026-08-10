'use server'

import { missingSupabaseEnv, getSupabaseAdmin } from '@/lib/supabase'
import { sendWaitlistConfirm } from '@/lib/resend'

export type WaitlistState = {
  ok: boolean
  message: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function joinWaitlist(
  _prev: WaitlistState | null,
  formData: FormData,
): Promise<WaitlistState> {
  const raw = String(formData.get('email') ?? '').trim().toLowerCase()

  if (!raw || !EMAIL_RE.test(raw)) {
    return { ok: false, message: 'Enter a valid email address.' }
  }

  const missing = missingSupabaseEnv()
  if (missing.length > 0) {
    return {
      ok: false,
      message: `Waitlist isn’t wired yet — missing env: ${missing.join(', ')}. Add them in Vercel project settings.`,
    }
  }

  const supabase = getSupabaseAdmin()
  if (!supabase) {
    return { ok: false, message: 'Waitlist service unavailable. Try again later.' }
  }

  const { error } = await supabase.from('waitlist').upsert(
    { email: raw, source: 'landing' },
    { onConflict: 'email', ignoreDuplicates: true },
  )

  if (error) {
    console.error('[waitlist]', error.message)
    return { ok: false, message: 'Couldn’t save that email. Try again in a moment.' }
  }

  // Confirm email is optional — never fail the signup if Resend is missing/misconfigured.
  await sendWaitlistConfirm(raw)

  return { ok: true, message: 'You’re in — we’ll ping you when iOS TestFlight opens.' }
}
