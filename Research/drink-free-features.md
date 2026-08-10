# Drink Free — perfect features list

**Date:** 9 Aug 2026  
**Tone north star:** Gamey / fintech-fun (Robinhood energy) — big numbers, green “gains,” streaks, levels, treats. Not clinical dark-mode therapy.  
**Related:** `drink-free-product-research.md` · landing `drink-free-landing/`

This is the **product north star** (“perfect”). Ship in layers: MVP → Core → Delight → Moat.

---

## Product loop (everything serves this)

```
See gains → Feel level-up → Act on a mission → Log craving/drink → Watch numbers move → Celebrate → Repeat
```

If a feature doesn’t feed **visible progress** or **a next action**, it doesn’t make the cut.

---

## Perfect feature list

### A. Onboarding & identity

| Feature | Why it’s perfect | Priority |
|---------|------------------|----------|
| Age gate 18+ | Safety / store | MVP |
| Track pick: **Quit** or **Cut back** (switchable) | Dual market | MVP |
| Baseline: drinks/week, £/$ per drink, start date | Powers money + charts | MVP |
| “Why you’re here” reasons (photos optional later) | Motivation on hard nights | MVP |
| Soft self-check (AUDIT-C style, non-diagnostic) + help links | Safety without SaMD claims | Core |
| Avatar / nickname / “player card” | Gamey identity | Delight |
| Optional Apple Health / Health Connect later | Richer stats | Moat |

### B. Home dashboard (Robinhood-style “portfolio”)

| Feature | Why it’s perfect | Priority |
|---------|------------------|----------|
| **Hero number** — days free *or* “on plan this week” | Emotional core | MVP |
| Live ticking timer (h/m/s under days) | Addiction to opening app | Core |
| **Money saved** big + sparkline | Fintech dopamine | MVP |
| **Calories not added** (drink counter × avg kcal) | Body/fitness proof peer to money | MVP |
| Drink presets with best-known calorie averages | Fast logging + trustworthy estimates | MVP |
| Units avoided | Extra gain line | Core |
| Weekly budget ring (cut-back) | Clear win/loss state | MVP |
| Health “level-ups” tiles (illustrative, not medical claims) | Progress theatre | Core |
| Treat countdown (“£42 to weekend away”) | Goal = game quest | Core |
| Today’s mission CTA on home | Always a next move | MVP |
| Widget (iOS) — days + £ saved | Retention | Delight |

### C. Money, calories & “gains” (must feel like investing in yourself)

| Feature | Why it’s perfect | Priority |
|---------|------------------|----------|
| Editable spend model (drink price, frequency) | Trust in the £/$ number | MVP |
| **Drink counter → calories not added** | Peer goal to money — fitness dopamine | MVP |
| Preset library: lager pint, wine 175/250, cider, spirit+mixer, cocktail, shot (avg kcal) | One-tap logging; honest “estimate” label | MVP |
| Custom usual drink (price + kcal override) | Accuracy without nutrition-app complexity | Core |
| Savings over time chart (7d / 30d / all) | Robinhood chart energy | MVP |
| Calories over time chart (toggle or dual) | Same visual language as money | MVP |
| Fun equivalents (“≈ N pints / walk-miles”) | Shareable, gamey | Delight |
| Projected yearly £ + kcal | Ambition | Core |
| Treat vault — save toward rewards | Gamified delayed gratification | Core |
| “Cash out” ritual when treat unlocked | Celebration | Delight |
| Multi-currency | UK/US launch | Core |

**Calorie model (product rule):** every skipped or under-budget drink adds `preset.kcal` (or user override) to **calories not added**. Always show “average / estimate” — never claim clinical weight-loss outcomes.

### D. Streaks, levels, badges (game layer)

| Feature | Why it’s perfect | Priority |
|---------|------------------|----------|
| Streak with gentle “shield” / freeze (1× month) | Reduce rage-quit after lapse | Core |
| Points from missions, logging, dry days (fills level bar) | Habit compounding | Core |
| Levels (e.g. Spark → Steady → Unstoppable) | Identity climb | Core |
| Badge shelf (first weekend, 30 days, budget boss…) | Collectible dopamine | Delight |
| Milestone confetti / haptics | Feels like a win | Delight |
| Non-shame lapse: “run ended — start a new one” | Keeps people in game | MVP |

### E. Cravings (combat system)

| Feature | Why it’s perfect | Priority |
|---------|------------------|----------|
| One-tap “Craving now” | Speed > perfection | MVP |
| Severity slider + context tags | Pattern learning | MVP |
| 2–10 min “ride it out” tools (breathe, delay, walk, text) | Instant action | Core |
| What worked log | Personal playbook | Core |
| Trigger heat map (time / day / place tags) | Insight graph | Core |
| Craving survived → points + streak protect narrative | Turn urge into win | Delight |

### F. Drink logging (especially cut-back)

| Feature | Why it’s perfect | Priority |
|---------|------------------|----------|
| Log drink / skip / **drank as planned** | Honest moderation UX | MVP |
| Unit & type presets | Fast logging | Core |
| Weekly vs budget chart | Win condition | MVP |
| Weekend vs weekday split | Pattern truth | Core |
| Social / stress / habit tags | Why, not just what | Core |

### G. Missions & check-ins (daily quests)

| Feature | Why it’s perfect | Priority |
|---------|------------------|----------|
| Daily mission queue (3 max) | Smoke Free–proven mechanic, game-skinned | MVP |
| Mission types: urge surf, plan night, NA swap, text buddy, gratitude | Behaviour change | Core |
| Difficulty / point weights | Choice & skill | Delight |
| Weekly check-in boss fight (reflect + adjust budget/goal) | Retention anchor | Core |
| Streak missions calendar | Visual completion | Delight |

### H. Social / accountability (careful)

| Feature | Why it’s perfect | Priority |
|---------|------------------|----------|
| Optional accountability buddy (invite 1 person) | Light social, low moderation | Delight |
| Share card (days + £ saved) — privacy-safe | Viral + pride | Core |
| Anonymous community later | Expensive; not day one | Moat |

### I. Coaching & content

| Feature | Why it’s perfect | Priority |
|---------|------------------|----------|
| Tip library / “plays” (short cards) | Help without clinician tone | Core |
| Scripted coach / FAQ bot | Scale support | Delight |
| Live humans / clinics | Smoke Free moat; costly | Moat / skip early |

### J. Notifications & widgets

| Feature | Why it’s perfect | Priority |
|---------|------------------|----------|
| Smart reminders (evening risk windows) | Just-in-time | Core |
| “You’re up £X this week” push | Robinhood portfolio ping | Core |
| Craving follow-up (“still with you?”) | Close the loop | Delight |
| Quiet hours | Trust | MVP |

### K. Safety & trust (non-negotiable, keep light in UI)

| Feature | Why it’s perfect | Priority |
|---------|------------------|----------|
| Wellness disclaimer | Regulatory | MVP |
| Crisis / help resources | Duty of care | MVP |
| No diagnose/treat AUD claims | Stay wellness | MVP |
| Export / delete data | Privacy | Core |

---

## MVP slice (ship first on iOS)

1. Dual-track onboarding + baseline spend  
2. Home: days / budget + **money saved** + **calories not added** + sparklines  
3. Log craving + log drink/skip/as-planned (preset kcal + price)  
4. Daily missions (small content pack)  
5. Lapse-friendly reset  
6. Push: daily mission + weekly savings  
7. Safety links + disclaimer  

Everything else is sequenced Core → Delight.

---

## Landing must show (visual proof)

These belong on the marketing site so the product *looks* like the game:

- Big green **money saved** + upward chart  
- Big **calories not added** (drink × avg kcal) + preset cheat-sheet  
- Streak / level / badge visuals  
- Phone dashboard mock with rings + budget  
- Mission cards as quests  
- Dual-track switch (Quit / Cut back)  
- Fun logo mark (not a clinical heart)  

Tone: light background, green gains, playful — **not** navy therapy app.

---

## Appendix — default drink calorie averages

Used in-app and on the landing (`drink-free-landing/src/data/drinkAverages.ts`). Always labelled as estimates.

| Drink | Serve | Avg kcal |
|-------|-------|----------|
| Lager / ale | pint (568ml) | 182 |
| Beer | bottle (330ml) | 142 |
| Cider | pint (568ml) | 210 |
| Wine | 175ml | 158 |
| Wine | 250ml | 228 |
| Prosecco | 125ml | 89 |
| Spirit + mixer | single 25ml | 120 |
| Spirit + mixer | double 50ml | 180 |
| Cocktail | typical | 220 |
| Shot | 25–30ml | 65 |

**Default blend** (before user picks a usual): **180 kcal/drink**.  
Formula: `calories_not_added = drinks_skipped × kcal_per_drink` (preset or custom).
