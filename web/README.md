# Drink Free — marketing site

Next.js (App Router) + Tailwind landing for [godrinkfree.com](https://godrinkfree.com).

```bash
cd web
npm install
cp .env.example .env.local   # fill Supabase (+ optional Resend)
npm run dev
```

## Env vars

| Var | Required | Purpose |
|-----|----------|---------|
| `SUPABASE_URL` | Yes (waitlist) | Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes (waitlist) | Server-only inserts |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical + OG URLs |
| `RESEND_API_KEY` | Optional | Waitlist confirm email |
| `RESEND_FROM_EMAIL` | Optional | From address |

## Deploy

Vercel project: `godrinkfree` · root directory: `web`  
Live: https://godrinkfree.vercel.app · DNS + env checklist: [DEPLOY.md](./DEPLOY.md)
