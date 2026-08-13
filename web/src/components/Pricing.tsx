const tiers = [
  {
    name: 'Free',
    price: '$0',
    note: 'Always useful',
    points: [
      'Quit or cut-back track',
      'Basic twin gains (money + kcal)',
      '1 mission / day + starter badges',
      'Craving log + safety links',
    ],
  },
  {
    name: 'Pro',
    price: '$7.99',
    suffix: '/mo',
    alt: 'or $49.99/yr · £6.99 / £39.99',
    note: 'Less than a round a month',
    highlight: true,
    points: [
      'Full missions + richer charts',
      'Treat vault for your savings',
      'Custom drinks + reminders',
      'Seasonal / epic badges',
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-[1120px] px-6 py-16 md:px-8 md:py-20">
      <p className="text-[0.8rem] font-bold tracking-[0.1em] text-gain uppercase">
        Pricing honesty
      </p>
      <h2 className="mt-2 max-w-2xl text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold tracking-[-0.04em]">
        Free core. Pro when you want the full toolkit.
      </h2>
      <p className="mt-3 max-w-xl text-muted">
        Price before the waitlist — no surprise billing traps. Cancel anytime in App Store
        settings.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={`rounded-[28px] border p-6 md:p-8 ${
              tier.highlight
                ? 'border-gain bg-gain-soft shadow-sm'
                : 'border-line bg-white shadow-sm'
            }`}
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-[1.35rem] font-extrabold">{tier.name}</h3>
              <p className="text-[0.8rem] font-bold text-muted">{tier.note}</p>
            </div>
            <p className="mt-3 text-[2.4rem] font-extrabold tracking-tight">
              {tier.price}
              {tier.suffix && (
                <span className="text-[1rem] font-bold text-muted">{tier.suffix}</span>
              )}
            </p>
            {tier.alt && <p className="mt-1 text-[0.9rem] font-semibold text-muted">{tier.alt}</p>}
            <ul className="mt-6 space-y-2.5">
              {tier.points.map((p) => (
                <li key={p} className="flex gap-2 text-[0.95rem] text-ink">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gain" />
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
