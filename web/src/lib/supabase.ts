import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let serverClient: SupabaseClient | null = null

function serverKey(): string | undefined {
  // Prefer service role (bypasses RLS). Fall back to anon key used only on the server
  // (never NEXT_PUBLIC_) with an insert-only RLS policy.
  return process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY
}

/** Server-only Supabase client. Never import in client components. */
export function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = serverKey()

  if (!url || !key) {
    return null
  }

  if (!serverClient) {
    serverClient = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    })
  }

  return serverClient
}

export function missingSupabaseEnv(): string[] {
  const missing: string[] = []
  if (!process.env.SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL) {
    missing.push('SUPABASE_URL')
  }
  if (!serverKey()) {
    missing.push('SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_ANON_KEY)')
  }
  return missing
}
