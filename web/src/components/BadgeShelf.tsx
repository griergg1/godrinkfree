import type { ReactNode } from 'react'

/**
 * Badge shelf — Duolingo / Nike Run Club / Apple Fitness energy:
 * chunky medals, vivid fills, rarity tiers, progress on locked, glossy shine.
 */

type Rarity = 'common' | 'rare' | 'epic'

type Badge = {
  id: string
  name: string
  blurb: string
  rarity: Rarity
  unlocked: boolean
  progress?: number // 0–1 when locked
  Icon: () => ReactNode
  medal: string
  rim: string
}

const rarityLabel: Record<Rarity, string> = {
  common: 'Common',
  rare: 'Rare',
  epic: 'Epic',
}

const rarityChip: Record<Rarity, string> = {
  common: 'bg-[#E5E5E5] text-[#777]',
  rare: 'bg-[#1CB0F6]/15 text-[#1899D6]',
  epic: 'bg-[#CE82FF]/20 text-[#A568DF]',
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
      <circle cx="24" cy="24" r="14" fill="#FFF4C4" />
      <path
        d="M28 12a12 12 0 1 0 8 20 14 14 0 1 1-8-20Z"
        fill="#FFC800"
      />
      <circle cx="18" cy="20" r="1.5" fill="#E5A800" />
      <circle cx="22" cy="28" r="1" fill="#E5A800" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
      <path
        d="M24 8l14 6v10c0 10-6 16-14 18-8-2-14-8-14-18V14l14-6Z"
        fill="#58CC02"
      />
      <path d="M24 14l8 3.5v6c0 6-3.5 9.5-8 11-4.5-1.5-8-5-8-11v-6L24 14Z" fill="#89E219" />
      <path d="M21 24l3 3 6-7" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function WalletIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
      <rect x="10" y="14" width="28" height="22" rx="4" fill="#1CB0F6" />
      <rect x="10" y="14" width="28" height="8" rx="4" fill="#1899D6" />
      <circle cx="32" cy="28" r="3.5" fill="#FFC800" />
      <path d="M14 20h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

function FlameIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
      <path
        d="M24 8c4 8 12 10 12 20a12 12 0 1 1-24 0c0-6 4-10 6-14 2 4 4 4 6-6Z"
        fill="#FF4B4B"
      />
      <path
        d="M24 22c2 3 6 4 6 9a6 6 0 1 1-12 0c0-3 2-5 3-7 1 2 2 2 3-2Z"
        fill="#FFC800"
      />
    </svg>
  )
}

function SwordIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
      <path d="M34 8l6 6-16 16-6-6L34 8Z" fill="#CE82FF" />
      <path d="M24 24l6 6" stroke="#A568DF" strokeWidth="3" />
      <rect x="14" y="30" width="14" height="4" rx="1" transform="rotate(-45 21 32)" fill="#FF9600" />
      <circle cx="16" cy="36" r="3" fill="#FFC800" />
      <path d="M36 10l2 2-14 14-2-2L36 10Z" fill="#E8C4FF" />
    </svg>
  )
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
      <rect x="12" y="22" width="24" height="16" rx="2" fill="#FF9600" />
      <rect x="10" y="18" width="28" height="8" rx="2" fill="#FFC800" />
      <rect x="22" y="18" width="4" height="20" fill="#FF4B4B" />
      <path
        d="M24 18c-4-6-10-4-10 0 0 2 2 4 10 4 8 0 10-2 10-4 0-4-6-6-10 0Z"
        fill="#FF4B4B"
      />
    </svg>
  )
}

const badges: Badge[] = [
  {
    id: 'first-night',
    name: 'First Night',
    blurb: 'Survived night one',
    rarity: 'common',
    unlocked: true,
    medal: '#FFC800',
    rim: '#E5A800',
    Icon: MoonIcon,
  },
  {
    id: 'weekend',
    name: 'Weekend Warrior',
    blurb: 'Fri–Sun dry',
    rarity: 'rare',
    unlocked: true,
    medal: '#58CC02',
    rim: '#58A700',
    Icon: ShieldIcon,
  },
  {
    id: 'budget',
    name: 'Budget Boss',
    blurb: 'Week under cap',
    rarity: 'rare',
    unlocked: true,
    medal: '#1CB0F6',
    rim: '#1899D6',
    Icon: WalletIcon,
  },
  {
    id: '30-day',
    name: '30-Day Legend',
    blurb: '18 / 30 days',
    rarity: 'epic',
    unlocked: false,
    progress: 18 / 30,
    medal: '#CE82FF',
    rim: '#A568DF',
    Icon: FlameIcon,
  },
  {
    id: 'craving',
    name: 'Craving Slayer',
    blurb: '10 urges beaten',
    rarity: 'rare',
    unlocked: true,
    medal: '#FF4B4B',
    rim: '#EA2B2B',
    Icon: SwordIcon,
  },
  {
    id: 'treat',
    name: 'Treat Unlocked',
    blurb: '£72 / £86 vault',
    rarity: 'epic',
    unlocked: false,
    progress: 72 / 86,
    medal: '#FF9600',
    rim: '#E08600',
    Icon: GiftIcon,
  },
]

function Medal({ badge }: { badge: Badge }) {
  const { Icon, unlocked, progress = 0, medal, rim } = badge
  const size = 88
  const stroke = 6
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const dash = unlocked ? c : progress * c

  return (
    <div className="relative mx-auto h-[88px] w-[88px]">
      {/* Progress ring (locked) — Apple Fitness / NRC vibe */}
      {!unlocked && (
        <svg className="absolute inset-0 -rotate-90" viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="#E5E5E5"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={medal}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${dash} ${c}`}
            opacity={0.9}
          />
        </svg>
      )}

      {/* Chunky 3D medal — Duolingo lip */}
      <div
        className={`absolute inset-[6px] flex items-center justify-center rounded-full border-[3px] border-ink/10 ${
          unlocked ? '' : 'grayscale-[0.35] opacity-80'
        }`}
        style={{
          background: `radial-gradient(circle at 35% 30%, #ffffffaa 0%, ${medal} 45%, ${rim} 100%)`,
          boxShadow: unlocked
            ? `0 4px 0 ${rim}, 0 8px 16px rgba(0,0,0,0.12)`
            : `0 3px 0 #CFCFCF`,
        }}
      >
        {/* Gloss */}
        <div className="pointer-events-none absolute top-2 left-3 h-4 w-8 rotate-[-20deg] rounded-full bg-white/50 blur-[1px]" />
        <Icon />
        {!unlocked && (
          <div className="absolute -right-0.5 -bottom-0.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-ink shadow">
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
              <rect x="3" y="7" width="10" height="7" rx="1.5" fill="#FFC800" />
              <path
                d="M5 7V5.5a3 3 0 0 1 6 0V7"
                stroke="#FFC800"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}

export function BadgeShelf() {
  const unlockedCount = badges.filter((b) => b.unlocked).length

  return (
    <div className="rounded-[28px] border-2 border-ink/8 bg-white p-6 shadow-[0_4px_0_#E5E5E5] md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.8rem] font-bold tracking-[0.08em] text-[#FF9600] uppercase">
            Trophy case
          </p>
          <h3 className="mt-1 text-[1.5rem] font-extrabold tracking-tight">
            Shiny badges, juicy wins
          </h3>
          <p className="mt-1 text-[0.85rem] text-muted">
            Think Duolingo awards + Nike milestone medals — early wins, rare flexes.
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-ink px-3 py-1 text-[0.75rem] font-bold text-white">
          {unlockedCount} / {badges.length}
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {badges.map((b) => (
          <article
            key={b.id}
            className={`relative overflow-hidden rounded-[22px] border-2 px-3 pt-4 pb-3 text-center transition ${
              b.unlocked
                ? 'border-ink/10 bg-[#FAFAFA] hover:-translate-y-0.5 hover:shadow-[0_6px_0_#E5E5E5]'
                : 'border-dashed border-ink/15 bg-[#F3F3F3]'
            }`}
          >
            <span
              className={`absolute top-2 right-2 rounded-full px-2 py-0.5 text-[0.6rem] font-extrabold tracking-wide uppercase ${rarityChip[b.rarity]}`}
            >
              {rarityLabel[b.rarity]}
            </span>
            <Medal badge={b} />
            <p className="mt-2 text-[0.85rem] font-extrabold leading-tight">{b.name}</p>
            <p className="mt-0.5 text-[0.7rem] font-semibold text-muted">{b.blurb}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
