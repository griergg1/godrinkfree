const points = [42, 55, 48, 70, 88, 95, 120, 140, 155, 168, 175, 186]

export function SavingsChart() {
  const max = Math.max(...points)
  const w = 560
  const h = 200
  const pad = 8
  const coords = points.map((p, i) => {
    const x = pad + (i / (points.length - 1)) * (w - pad * 2)
    const y = h - pad - (p / max) * (h - pad * 2)
    return [x, y] as const
  })
  const line = coords.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x} ${y}`).join(' ')
  const area = `${line} L${coords[coords.length - 1][0]} ${h} L${coords[0][0]} ${h} Z`

  return (
    <div className="overflow-hidden rounded-[28px] border border-line bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[0.8rem] font-bold tracking-[0.08em] text-muted uppercase">
            Portfolio of you
          </p>
          <p className="mt-2 text-[clamp(2.4rem,5vw,3.4rem)] leading-none font-extrabold tracking-[-0.05em]">
            £186.40
          </p>
          <p className="mt-2 text-[1rem] font-bold text-gain">
            ▲ £22.80 this week · not spent on rounds
          </p>
        </div>
        <div className="flex gap-2">
          {['1W', '1M', 'All'].map((t, i) => (
            <span
              key={t}
              className={`rounded-full px-3 py-1.5 text-[0.75rem] font-bold ${
                i === 2 ? 'bg-ink text-white' : 'bg-paper text-muted'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="mt-6 h-44 w-full md:h-52"
        role="img"
        aria-label="Money saved climbing over time"
      >
        <defs>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00C805" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#00C805" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#chartFill)" />
        <path
          d={line}
          fill="none"
          stroke="#00C805"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx={coords[coords.length - 1][0]}
          cy={coords[coords.length - 1][1]}
          r="7"
          fill="#00C805"
          className="animate-pulse-soft"
        />
      </svg>

      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-line pt-5">
        {[
          ['Drinks skipped', String(42)],
          ['Avg kcal / drink', '~180'],
          ['Next treat', '£14 away'],
        ].map(([label, value]) => (
          <div key={label}>
            <p className="text-[0.7rem] font-bold text-muted uppercase">{label}</p>
            <p className="mt-1 text-[1.15rem] font-extrabold tracking-tight">{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
