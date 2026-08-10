import { DEMO, formatKcal } from '@/data/drinkAverages'

/** Phone dashboard mock — money + calories as twin gains */
export function PhoneMock() {
  return (
    <div
      className="animate-rise w-[290px] rounded-[40px] border border-line bg-ink p-3 shadow-[0_32px_64px_rgba(11,14,17,0.18)]"
      aria-hidden
      style={{ animationDelay: '0.1s' }}
    >
      <div className="flex min-h-[520px] flex-col rounded-[32px] bg-white px-4 pt-4 pb-3">
        <div className="mb-4 flex items-center justify-between text-[0.7rem] font-semibold text-muted">
          <span>9:41</span>
          <span className="rounded-full bg-gain-soft px-2 py-0.5 text-gain-dark">
            Lv 7
          </span>
        </div>

        <p className="text-[0.75rem] font-bold tracking-[0.08em] text-muted uppercase">
          Alcohol free
        </p>
        <p className="mt-1 text-[2.75rem] leading-none font-extrabold tracking-[-0.05em]">
          24<span className="text-[1rem] text-muted">d</span>{' '}
          <span className="text-gain">6</span>
          <span className="text-[1rem] text-muted">h</span>
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-2xl bg-gain-soft p-3">
            <p className="text-[0.65rem] font-bold text-gain-dark uppercase">Saved</p>
            <p className="mt-1 text-[1.25rem] font-extrabold tracking-tight">
              £{DEMO.moneySaved.toFixed(0)}
            </p>
            <p className="text-[0.7rem] font-bold text-gain">▲ 12%</p>
          </div>
          <div className="rounded-2xl bg-sky/10 p-3">
            <p className="text-[0.65rem] font-bold text-sky uppercase">Not eaten</p>
            <p className="mt-1 text-[1.25rem] font-extrabold tracking-tight">
              {formatKcal(DEMO.kcalSaved)}
            </p>
            <p className="text-[0.7rem] font-bold text-sky">kcal</p>
          </div>
        </div>

        <div className="mt-3 rounded-2xl border border-line px-3 py-2.5">
          <div className="flex justify-between text-[0.7rem] font-bold text-muted">
            <span>Drinks skipped</span>
            <span className="text-ink">{DEMO.drinksSkipped}</span>
          </div>
          <svg viewBox="0 0 200 36" className="mt-1 h-9 w-full" preserveAspectRatio="none">
            <path
              d="M0 28 C25 26 40 20 55 18 C75 14 90 24 110 12 C130 4 150 10 170 8 C185 6 195 10 200 6"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ['Points', '1,280'],
            ['Streak', '24'],
            ['Avg kcal', `${DEMO.kcalPerDrink}`],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-line px-2 py-3 text-center">
              <p className="text-[0.62rem] font-bold text-muted uppercase">{label}</p>
              <p className="mt-1 text-[0.95rem] font-extrabold">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-xl border border-line p-3">
          <div className="mb-2 flex justify-between text-[0.75rem] font-semibold">
            <span>Weekly budget</span>
            <span className="text-gain">2 / 5</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-line">
            <div className="h-full w-[40%] rounded-full bg-gain" />
          </div>
        </div>

        <div className="mt-auto grid grid-cols-4 gap-1 border-t border-line pt-3 text-center text-[0.62rem] font-bold text-muted">
          <span className="text-gain">Home</span>
          <span>Missions</span>
          <span>Cravings</span>
          <span>Badges</span>
        </div>
      </div>
    </div>
  )
}
