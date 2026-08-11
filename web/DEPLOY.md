# Drink Free — deploy notes

## Production URL

- **Vercel:** https://godrinkfree.vercel.app  
- **Custom domain (after DNS):** https://godrinkfree.com  

Project: `griergg1s-projects/godrinkfree` · Root directory: `web`

## Env vars (Vercel → Project → Settings → Environment Variables)

| Variable | Required | Notes |
|----------|----------|-------|
| `SUPABASE_URL` | Yes | `https://fzrndnyzqqboqcaelgoz.supabase.co` |
| `SUPABASE_ANON_KEY` | Yes* | Server-only anon key (insert-only RLS). Already set for Production. |
| `SUPABASE_SERVICE_ROLE_KEY` | Optional | Prefer over anon; Dashboard → Project Settings → API |
| `NEXT_PUBLIC_SITE_URL` | Recommended | `https://godrinkfree.com` |
| `RESEND_API_KEY` | Optional | Waitlist confirm email |
| `RESEND_FROM_EMAIL` | Optional | e.g. `Drink Free <hello@godrinkfree.com>` |
| `NEXT_PUBLIC_SENTRY_DSN` | Optional | Sentry browser/edge DSN |
| `SENTRY_DSN` | Optional | Sentry server DSN |

\* Without Supabase keys, the form returns a clear “missing env” message instead of silently failing.

## Supabase

- Project: **godrinkfree** (`fzrndnyzqqboqcaelgoz`, eu-west-2)  
- Table: `public.waitlist` (RLS on, insert-only for `anon`, no public SELECT)  
- Migration file: `supabase/migrations/20260810160000_create_waitlist.sql`

## DNS for godrinkfree.com

Registrar currently points at **DreamHost** nameservers (`ns1/ns2/ns3.dreamhost.com`). Domains are already added in Vercel; you only need DNS at DreamHost (or switch nameservers).

### Option A — records at DreamHost (recommended)

| Type | Name | Value |
|------|------|-------|
| **A** | `@` (godrinkfree.com) | `76.76.21.21` |
| **A** | `www` | `76.76.21.21` |

(Alternatively for www: **CNAME** → `cname.vercel-dns.com`.)

### Option B — use Vercel nameservers

At DreamHost, change nameservers to:

- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

Propagation can take a few minutes to 48h. Verify with:

```bash
vercel domains inspect godrinkfree.com
```

## Local

```bash
cd web
cp .env.example .env.local
# fill SUPABASE_URL + SUPABASE_ANON_KEY (or SERVICE_ROLE)
npm run dev
```

## Sentry

| Variable | Required | Notes |
|----------|----------|-------|
| `NEXT_PUBLIC_SENTRY_DSN` | Optional | Browser + edge client DSN |
| `SENTRY_DSN` | Optional | Server DSN (falls back to public if unset) |
| `SENTRY_AUTH_TOKEN` | Optional | Source maps upload on build |
| `SENTRY_ORG` / `SENTRY_PROJECT` | Optional | With auth token for source maps |

Without a DSN, Sentry init is a no-op and the site runs normally.

## Phase 2 (not done)

- More SEO posts (series 6–12)  
- Vercel Analytics  
- Resend production from-domain (verify domain in Resend)  
