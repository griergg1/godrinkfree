'use client'

import { useState } from 'react'

export function TrackModes() {
  const [mode, setMode] = useState<'quit' | 'cutback'>('quit')

  return (
    <section id="tracks" className="mx-auto max-w-[1120px] px-6 py-16 md:px-8 md:py-20">
      <p className="text-[0.8rem] font-bold tracking-[0.1em] text-gain uppercase">
        Two modes
      </p>
      <h2 className="mt-2 text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold tracking-[-0.04em]">
        Pick your mode
      </h2>

      <div className="mt-6 inline-flex rounded-full border border-line bg-white p-1">
        <button
          type="button"
          onClick={() => setMode('quit')}
          className={`rounded-full px-5 py-2.5 text-[0.9rem] font-bold transition ${
            mode === 'quit' ? 'bg-ink text-white' : 'text-muted'
          }`}
        >
          Quit
        </button>
        <button
          type="button"
          onClick={() => setMode('cutback')}
          className={`rounded-full px-5 py-2.5 text-[0.9rem] font-bold transition ${
            mode === 'cutback' ? 'bg-ink text-white' : 'text-muted'
          }`}
        >
          Cut back
        </button>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {(mode === 'quit'
          ? [
              ['Alcohol-free timer', 'Watch the clock climb, day after day.'],
              ['Twin gains', '£ and kcal stack every dry day.'],
              ['Lapse = fresh start', 'No shame screen. Reset and keep your points history.'],
              ['Identity card', 'You’re building a non-drinker streak, not a penance.'],
            ]
          : [
              ['Weekly drink budget', 'Green when you’re on plan — red when you’re not.'],
              ['Drank as planned', 'Honest logging beats fake perfection.'],
              ['Calories under budget', 'Undershoot the week → kcal “not added” still climbs.'],
              ['Social scripts', 'Missions for nights out without the spiral.'],
            ]
        ).map(([title, body]) => (
          <article
            key={title}
            className="rounded-[24px] border border-line bg-white p-5 shadow-sm"
          >
            <h3 className="text-[1.15rem] font-extrabold">{title}</h3>
            <p className="mt-2 text-muted">{body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
