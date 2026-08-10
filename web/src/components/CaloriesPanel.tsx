import { DEMO, DRINK_PRESETS, formatKcal } from '@/data/drinkAverages'

const caloriePoints = [900, 1400, 2100, 2800, 3600, 4200, 5100, 5800, 6400, 7000, 7400, DEMO.kcalSaved]

export function CaloriesPanel() {
  const max = Math.max(...caloriePoints)
  const w = 320
  const h = 120
  const pad = 6
  const coords = caloriePoints.map((p, i) => {
    const x = pad + (i / (caloriePoints.length - 1)) * (w - pad * 2)
    const y = h - pad - (p / max) * (h - pad * 2)
    return [x, y] as const
  })
  const line = coords.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x} ${y}`).join(' ')
  const area = `${line} L${coords[coords.length - 1][0]} ${h} L${coords[0][0]} ${h} Z`

  return (
    <div className="overflow-hidden rounded-[28px] border border-line bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[0.8rem] font-bold tracking-[0.08em] text-sky uppercase">
            Calories not added
          </p>
          <p className="mt-2 text-[clamp(2.2rem,4vw,3rem)] leading-none font-extrabold tracking-[-0.05em]">
            {formatKcal(DEMO.kcalSaved)}
            <span className="ml-1 text-[1rem] font-bold text-muted">kcal</span>
          </p>
          <p className="mt-2 text-[0.95rem] font-bold text-sky">
            ▲ {DEMO.drinksSkipped} drinks skipped · ~{DEMO.kcalPerDrink} kcal avg each
          </p>
        </div>
        <span className="rounded-full bg-sky/10 px-3 py-1.5 text-[0.75rem] font-bold text-sky">
          Estimates
        </span>
      </div>

      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="mt-5 h-28 w-full"
        role="img"
        aria-label="Calories avoided climbing over time"
      >
        <defs>
          <linearGradient id="calFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#calFill)" />
        <path
          d={line}
          fill="none"
          stroke="#3B82F6"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p className="mt-2 text-[0.8rem] text-muted">
        That’s roughly <strong className="text-ink">{Math.round(DEMO.kcalSaved / 3500)} lb</strong> of
        energy not drunk* — or about{' '}
        <strong className="text-ink">{Math.round(DEMO.kcalSaved / 182)} pints</strong> of lager.
      </p>

      <div className="mt-5 border-t border-line pt-5">
        <p className="text-[0.7rem] font-bold tracking-[0.08em] text-muted uppercase">
          Built-in averages (per serve)
        </p>
        <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {DRINK_PRESETS.slice(0, 6).map((d) => (
            <li
              key={d.id}
              className="rounded-xl border border-line bg-paper px-2.5 py-2"
            >
              <p className="text-[0.75rem] font-extrabold leading-tight">{d.label}</p>
              <p className="text-[0.65rem] text-muted">{d.serve}</p>
              <p className="mt-1 text-[0.9rem] font-extrabold text-sky">{d.kcal} kcal</p>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[0.7rem] leading-snug text-muted">
          *Illustrative only (~3,500 kcal ≈ 1 lb body-energy rule of thumb). Averages, not lab
          labels — users can set their usual drink.
        </p>
      </div>
    </div>
  )
}
