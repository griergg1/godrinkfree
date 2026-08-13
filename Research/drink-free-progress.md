# Drink Free — session progress

**Project:** Drink Free (quit / cut-back habit app)  
**Rule:** Log each working session with date + start/end timestamps (local). Update this file when a session ends.

---

## Session index

| # | Date | Start | End | Focus |
|---|------|-------|-----|--------|
| 1 | Sun 9 Aug 2026 | ~13:44 | ~14:10 | Discovery → landing v1 → gamey redesign → calories |
| 2 | Mon 10 Aug 2026 | ~15:36 | ~15:50 | XP → points; progress log; market / KW / competitor / pricing research |
| 3 | Mon 10 Aug 2026 | ~15:47 | ~15:55 | App Store reviews; Smoke Free asymmetry; SEO blog series |
| 4 | Mon 10 Aug 2026 | ~15:52 | ~16:00 | Recommendation + tech brief (landing + app) |
| 5 | Mon 10 Aug 2026 | ~16:03 | ~16:10 | Domains scan; stack lock; **godrinkfree.com** purchased |
| 6 | Mon 10 Aug 2026 | ~16:08 | ~16:12 | Project folder: `~/GODRINKFREE` (Landing page / App / Research) |
| 7 | Mon 10 Aug 2026 | ~16:14 | ~17:39 | Port Vite landing → Next.js; deploy to Vercel; live waitlist + pricing block; clean repo; GitHub push |
| 8 | Tue 11 Aug 2026 | ~12:56 | ~13:20 | Scratch Sanity → Sentry; MDX SEO blog posts 1–5; /blog live |
| 9 | Thu 13 Aug 2026 | ~10:00 | ~11:35 | Resend live; fix waitlist save bug; rebrand copy (drop "gamey"); brand email; Vercel Analytics |

---

## Session 1 — Sun 9 Aug 2026 (~13:44 → ~14:10 BST)

**Goal:** Review Smoke Free; explore a stop-drinking product; ship research + landing.

**Done**
- Reviewed [smokefreeapp.com](https://smokefreeapp.com/) (product loop, DiGA/regulatory notes)
- Wrote [`drink-free-product-research.md`](drink-free-product-research.md)
- Wrote [`drink-free-features.md`](drink-free-features.md) (perfect feature list + MVP)
- Static sketch: `drink-free-preview/`
- React + Tailwind landing: [`drink-free-landing/`](drink-free-landing/)
- Direction shift: light Robinhood-gamey UI, logo, charts, badges, dual track
- Twin gains: **money saved** + **calories not added** (+ drink average presets)
- Product decisions: iOS first (Play 12×14 pain); wellness not SaMD day one; dual track

**Open**
- Wire waitlist email backend
- App Store screenshots / brand name lock
- Deeper market / KW / competitor / pricing research ← Session 2

---

## Session 2 — Mon 10 Aug 2026 (~15:36 → ~15:50 BST)

**Goal:** Clarify jargon; stand up research docs + session logging habit.

**Done**
- Renamed **XP → points** across landing + features (plain language)
- Created this progress log
- Created:
  - [`drink-free-market-research.md`](drink-free-market-research.md)
  - [`drink-free-keyword-research.md`](drink-free-keyword-research.md) (DataForSEO volumes US/UK)
  - [`drink-free-competitor-research.md`](drink-free-competitor-research.md)
  - [`drink-free-pricing-monetization.md`](drink-free-pricing-monetization.md)

**Open / next**
- Validate pricing hypothesis with waitlist survey
- ASO keyword set for iOS (App Store Connect)
- Screenshot competitor IA (Reframe, I Am Sober, Try Dry)
- Decide freemium vs soft paywall for TestFlight build

---

## Session 3 — Mon 10 Aug 2026 (~15:47 → ~15:55 BST)

**Goal:** Store review themes; explain Smoke Free vs alcohol gap; plan SEO content.

**Done**
- [`drink-free-app-store-reviews.md`](drink-free-app-store-reviews.md) — ratings + praise/complaint themes
- [`drink-free-why-no-equivalent.md`](drink-free-why-no-equivalent.md) — why no single “Drink Free = Smoke Free”
- [`drink-free-seo-blog-series.md`](drink-free-seo-blog-series.md) — 12-post priority calendar + outlines for first 5

**Open / next**
- Draft/publish blog posts 1–2 (alcohol calories + money saved) on landing
- Wire `/blog` routes in `drink-free-landing`
- Keep billing clarity as a non-negotiable (Reframe review scar)

---

## Session 4 — Mon 10 Aug 2026 (~15:52 → ~16:00 BST)

**Goal:** Lock recommendations, costs, features, and tech stack for landing + app.

**Done**
- [`drink-free-recommendation-tech-brief.md`](drink-free-recommendation-tech-brief.md) — build-from brief

**Open / next**
- Deploy landing + real waitlist + pricing section
- Scaffold Expo app repo
- Privacy policy page before TestFlight

---

## Session 5 — Mon 10 Aug 2026 (~16:03 → ~16:10 BST)

**Goal:** Domain + stack clarity.

**Done**
- Domain scan → [`drink-free-domains.md`](drink-free-domains.md)
- Stack locked to Vercel / Supabase / Resend / Sentry (+ RevenueCat for IAP)
- **Purchased `godrinkfree.com`**

**Open / next**
- Point `godrinkfree.com` DNS at Vercel when Next.js landing is ready
- Port Vite prototype → Next.js on Vercel

---

## Session 6 — Mon 10 Aug 2026 (~16:08 → ~16:12 BST)

**Goal:** Local project home for Drink Free materials.

**Done**
- Created `~/GODRINKFREE/` with `Landing page/`, `App/`, `Research/`
- Moved Vite landing + HTML preview → `Landing page/`
- Moved all `drink-free-*.md` docs → `Research/`
- Removed originals from `~/.cursor/Research/`
- App placeholder README (Expo scaffold next)

**Open / next**
- Open Cursor on `~/GODRINKFREE`
- Scaffold Expo in `App/`
- Port landing → Next.js on Vercel

---

## Session 7 — Mon 10 Aug 2026 (~16:14 → ~17:26 BST)

**Goal:** Port the Vite landing prototype to production Next.js on Vercel; clean up repo; set up session protocol.

**Done**
- Ported Vite landing UI → Next.js App Router in `web/`
- Added pricing honesty block (Free / Pro) and wellness disclaimer before waitlist
- Wired Supabase waitlist table with RLS (insert-only via Server Action)
- Resend confirmation email stubbed with env var docs
- Deployed to Vercel: https://godrinkfree.vercel.app
- Custom domain `godrinkfree.com` added in Vercel; DNS instructions documented in `web/DEPLOY.md`
- Removed old `Landing page/` Vite prototype to keep repo clean
- Created `CLAUDE.md` session protocol (startup, close-out, Code Rabbit + bug-grep guardrails)
- Updated this progress log

**Open / next**
- Set DNS records at DreamHost for `godrinkfree.com` (A → 76.76.21.21) — done by user Session 8; await propagation
- Add `RESEND_API_KEY` and `RESEND_FROM_EMAIL` to send waitlist confirmations
- Phase 2: more SEO posts (6–12), Vercel Analytics, Sentry DSN in Vercel

---

## Session 8 — Tue 11 Aug 2026 (~12:56 → ~13:20 BST)

**Goal:** Map + ship SEO blog; correct stack (Sanity → Sentry).

**Done**
- Scratched **Sanity** from locked stack docs; locked **Sentry** for error monitoring
- MDX blog in `web/src/content/blog` with `/blog` index + `/blog/[slug]`
- Published all 12 SEO posts (calories, money, quit vs cut-back, sober curious, best apps, Reframe alternatives, I Am Sober, Dry January, Damp January, app guide, Day 10, post-January)
- Fixed gray-matter date parsing so post dates render correctly
- Sitemap + robots; Header/footer Blog links; waitlist CTAs with `utm_source=blog`
- Minimal `@sentry/nextjs` (no-op without DSN); env docs in `DEPLOY.md` / `.env.example`
- Code Rabbit: softened competitor comparison table (0 findings after fix)
- Deployed to Vercel; `godrinkfree.com` serving HTTPS + blog

**Open / next**
- Add Resend env vars when ready
- Add `NEXT_PUBLIC_SENTRY_DSN` in Vercel
- Vercel Analytics

---

## Session 9 — Thu 13 Aug 2026 (~10:00 → ~11:35 BST)

**Goal:** Turn on Resend confirmations; fix the waitlist; drop "gamey" voice; wire analytics.

**Done**
- **Resend live:** verified domain, keys in Vercel (Sensitive → read as blank on `env pull`, which is expected). Confirmation emails now send.
- **Fixed waitlist save bug:** app used `upsert` (`ON CONFLICT DO NOTHING`), which Postgres only allows with SELECT — but `anon` is INSERT-only so signup emails stay private. Every signup failed with "permission denied" before the email could send. Switched to a plain `insert`, treating unique-violation (`23505`) as success. Verified end-to-end (row saved, email delivered).
- **Rebrand voice → serious-but-motivating:** removed all "game / gamey / level up / boss fights / quests / game mode" framing across landing, components, OG image, metadata; kept the energetic look and "points". Updated `CLAUDE.md` brand voice + guardrail.
- **Branded the waitlist email:** email-client-safe HTML (brand header, twin-gains tiles, exact wellness disclaimer) + plain-text fallback.
- **Vercel Analytics:** added `@vercel/analytics` `<Analytics />` to root layout; documented dashboard enable in `DEPLOY.md`.
- Code Rabbit: 5 "major" (all wellness-disclaimer); fixed email + trust-section to exact wording; OG/meta/CTA accepted as trade-offs.

**Open / next**
- Confirm **Web Analytics** is toggled on in Vercel dashboard (Project → Analytics) so data collects.
- Optional: Vercel Speed Insights (`@vercel/speed-insights`).
- Add `NEXT_PUBLIC_SENTRY_DSN` in Vercel.
- Optional: sweep "game" language out of the 12 blog posts (kept as-is this session).

---

## How to update (agents / humans)

At **session end**, append a new `## Session N` block and a row in the index table:
1. Date  
2. Start / end timestamps (timezone)  
3. Goal  
4. Done (bullets)  
5. Open / next  
