# Drink Free — domain availability scan

**Date:** 10 Aug 2026 ~16:00 BST  
**Method:** RDAP (Verisign/Google/Identity Digital) + WHOIS + DNS NS lookup  
**Caveat:** Always confirm in registrar cart before paying — status can change; some TLDs return noisy WHOIS.

---

## Taken (do not plan on these)

| Domain | Notes |
|--------|--------|
| **drinkfree.com** | Registered since 1999; DNS on Afternic (likely **for sale**) |
| **drink-free.com** | Appears registered |
| **drinkfree.co.uk** | Live (Cloudflare NS + A record) |
| **drinkfreedays.com** | Registered |
| **sobergains.com** | Registered |
| **lessdrinking.com** | Registered |

---

## Likely available (strong signal)

| Domain | Signal | Fit for Drink Free |
|--------|--------|--------------------|
| **drinkfree.net** | RDAP 404 | Exact brand, weaker than .com |
| **drinkfree.ai** | RDAP 404 | Modern; less “health app” |
| **drinkfree.health** | RDAP 404 | On-brand; may cost more / restricted |
| **getdrinkfree.com** | RDAP 404 | Good CTA-style .com |
| **godrinkfree.com** | RDAP 404 | Action .com |
| **trydrinkfree.com** | RDAP 404 | Trial / Dry Jan vibe |
| **lovedrinkfree.com** | RDAP 404 | Tagline-adjacent |
| **imdrinkfree.com** | RDAP 404 | Identity |
| **bedrinkfree.com** | RDAP 404 | Imperative |
| **drinkgains.com** | RDAP 404 | Matches “gains” positioning |
| **drygains.com** | RDAP 404 | Twin-gains / Dry Jan |
| **drinkfrees.com** | RDAP 404 | Plural; weaker |
| **drinkfree.me** | WHOIS not found | Short personal |
| **drinkfree.co** | WHOIS not found | Startup-y |
| **drinkfree.io** | WHOIS not found | Tech-y |
| **drinkfree.app** / **drink-free.app** | No NS | Strong for apps; confirm at Google Registry |

---

## Recommendation (locked)

**Primary domain purchased:** **`godrinkfree.com`** (10 Aug 2026)

| Role | Domain |
|------|--------|
| Marketing / app site | **godrinkfree.com** |
| Nice-to-haves later | `drinkfree.app`, `drinkgains.com`, offer on `drinkfree.com` if cheap |

**Next:** Point DNS to Vercel when the Next.js landing deploys; use `www` → apex (or reverse) redirect.
