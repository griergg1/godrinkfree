# Drink Free — Agent Session Guide

**Read this file at the start of every session.** It contains the project context, startup protocol, close-out protocol, and quality guardrails.

---

## Project snapshot

- **Product:** Drink Free — habit companion for quitting or cutting back on alcohol.
- **Brand voice:** Light, gamey, Robinhood-style twin gains. Say **"points"**, never "XP".
- **Domain:** [godrinkfree.com](https://godrinkfree.com) (Vercel production: https://godrinkfree.vercel.app)
- **Stack (locked):**
  - Web: Vercel + Next.js + Tailwind + Supabase + Resend + Sanity (phase 2)
  - App: Expo + Supabase + Resend + RevenueCat (IAP) — **do not touch unless explicitly asked**
- **Source of truth:** `Research/drink-free-recommendation-tech-brief.md`

---

## Startup protocol (every session)

1. **Read this file.**
2. **Check state:** `git status`, active branch, recent commits, any uncommitted work.
3. **Read `Research/drink-free-progress.md`** to understand the last session’s focus and open items.
4. **Create or update a todo list** for the current session if the task is multi-step.
5. **Confirm scope:** landing (`web/`) only unless the user explicitly asks for `App/` work.
6. **Before writing code:** read the relevant brief and any existing files you will edit.

---

## Quality guardrails (non-negotiable)

### 1. Code Rabbit review every session
After any non-trivial change, run a Code Rabbit review on the working tree before telling the user the work is done.

```bash
# Check CLI is installed and authenticated
coderabbit --version 2>/dev/null || echo "NOT_INSTALLED"
coderabbit auth status 2>&1

# Run review on current changes (agent-readable)
cr review --agent -t uncommitted
```

If Code Rabbit is not installed or not authenticated, tell the user and skip the review for that session — do not silently skip it.

**Fix cycle:**
- Address all **Critical** findings immediately.
- Address **Warning** findings unless the user explicitly accepts the trade-off.
- **Info** findings are optional but should be reviewed for quick wins.
- Re-run the review after fixing until no Critical/Warning findings remain.

### 2. Grep for bugs before they become issues
Before finishing a change, run focused searches for common mistakes:

```bash
# Inside web/ (Next.js App Router)
cd web
rg -n "use client" src/app            # client boundaries
rg -n "console\.(log|error|warn|info)" src/  # stray logging
rg -n "TODO|FIXME|HACK|XXX" src/      # unresolved markers
rg -n "process\.env\." src/           # env access in client components
rg -n "NEXT_PUBLIC_" src/             # public env vars (must be intentional)
rg -n "any|unknown" src/ --type tsx --type ts  # unchecked types
```

Treat every hit as a bug until proven otherwise. Fix or document the intentional ones.

### 3. No new vendors
Do not introduce new marketing, payment, analytics, or backend vendors unless the user explicitly asks. The locked stack is: Vercel, Next.js, Tailwind, Supabase, Resend, Sanity, Expo, RevenueCat.

### 4. Keep visual language
No purple-AI-default look. Light background (`#f6f8f7`), green gains (`#00c805`), rounded cards, gamey copy.

### 5. Safety/legal copy
Any health/wellness claim must include the standard disclaimer: *Drink Free is a habit companion, not a medical device. We do not diagnose or treat alcohol use disorder.*

---

## Close-out protocol (every session)

1. **Run lint / typecheck / build** in `web/` before declaring done:
   ```bash
   cd web
   npm run lint
   npx tsc --noEmit
   npm run build
   ```
2. **Run a Code Rabbit review** (see above).
3. **Run bug grep** (see above).
4. **Update `Research/drink-free-progress.md`** with the session row and a short `## Session N` block.
5. **Summarize the user-facing changes** in plain language.
6. **Only commit if the user asks.** If they do, follow the Git Safety Protocol: do not force-push, do not amend pushed commits, do not commit secrets.
7. **Document any new env vars** in `web/DEPLOY.md` and `web/.env.example`.

---

## Key files to know

| File | Purpose |
|------|---------|
| `Research/drink-free-recommendation-tech-brief.md` | Locked decisions for landing + app |
| `Research/drink-free-progress.md` | Session log — update at end of every session |
| `web/DEPLOY.md` | Vercel deploy notes, env vars, DNS |
| `web/.env.example` | Env template for local dev |
| `web/src/app/page.tsx` | Landing page entry |
| `web/src/app/actions/waitlist.ts` | Waitlist Server Action |
| `web/supabase/migrations/` | Supabase schema migrations |

---

## Emergency overrides

If the user says **“just do it”** or **“ship it”**, you may skip Code Rabbit review only if the change is trivial and you still run the bug grep. Otherwise, run the review and present findings before shipping.

If the user asks you to **ignore a warning** from Code Rabbit, record the reason in the session summary.
