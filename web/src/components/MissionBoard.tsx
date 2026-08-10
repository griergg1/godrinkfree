const missions = [
  {
    pts: '+40',
    title: 'Ride the wave',
    body: 'When a craving hits, start the 5-minute timer. Survive it → protect your streak.',
    tag: 'Combat',
  },
  {
    pts: '+25',
    title: 'Plan tonight',
    body: 'Pick your NA drink and exit time before you go out. Budget stays green.',
    tag: 'Quest',
  },
  {
    pts: '+60',
    title: 'Treat check',
    body: 'Move £10 of saved cash into your treat vault. Make the win feel real.',
    tag: 'Loot',
  },
]

export function MissionBoard() {
  return (
    <div className="rounded-[28px] border border-line bg-ink p-6 text-white shadow-sm md:p-8">
      <p className="text-[0.8rem] font-bold tracking-[0.08em] text-gain uppercase">
        Daily missions
      </p>
      <h3 className="mt-1 text-[1.5rem] font-extrabold tracking-tight">
        Tiny quests. Real points.
      </h3>
      <p className="mt-2 text-[0.9rem] text-white/60">
        Points = your score for showing up. Earn them from missions and dry days — they fill
        your level bar.
      </p>
      <ul className="mt-6 space-y-3">
        {missions.map((m) => (
          <li
            key={m.title}
            className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <div className="flex h-12 min-w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-gain px-2 text-ink">
              <span className="text-[0.85rem] font-extrabold leading-none">{m.pts}</span>
              <span className="text-[0.55rem] font-bold tracking-wide uppercase">pts</span>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-extrabold">{m.title}</p>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[0.65rem] font-bold text-gain">
                  {m.tag}
                </span>
              </div>
              <p className="mt-1 text-[0.9rem] leading-snug text-white/65">{m.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
