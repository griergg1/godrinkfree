import { BadgeShelf } from '@/components/BadgeShelf'
import { CaloriesPanel } from '@/components/CaloriesPanel'
import { Header } from '@/components/Header'
import { Logo } from '@/components/Logo'
import { MissionBoard } from '@/components/MissionBoard'
import { PhoneMock } from '@/components/PhoneMock'
import { Pricing } from '@/components/Pricing'
import { SavingsChart } from '@/components/SavingsChart'
import { TrackModes } from '@/components/TrackModes'
import { WaitlistForm } from '@/components/WaitlistForm'
import { DEMO, formatKcal } from '@/data/drinkAverages'

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(900px_500px_at_85%_-10%,rgba(0,200,5,0.12),transparent_55%),radial-gradient(700px_400px_at_10%_40%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(700px_400px_at_0%_10%,rgba(255,184,0,0.08),transparent_45%)]" />

      <Header />

      <main>
        <section className="mx-auto grid max-w-[1120px] items-center gap-10 px-6 pt-12 pb-16 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:px-8 md:pt-16">
          <div className="animate-rise">
            <p className="inline-flex items-center gap-2 rounded-full bg-gain-soft px-3 py-1 text-[0.8rem] font-bold text-gain-dark">
              <span className="h-2 w-2 rounded-full bg-gain" />
              Wallet gains · calorie gains
            </p>
            <h1 className="mt-5 text-[clamp(2.6rem,6vw,4.2rem)] leading-[1.02] font-extrabold tracking-[-0.05em]">
              Level up your
              <br />
              <span className="text-gain">drink-free gains</span>
            </h1>
            <p className="mt-5 max-w-md text-[1.1rem] leading-relaxed text-muted">
              Quit or cut back — same game. Stack money saved <em>and</em> calories not
              added (from real drink averages), earn points for missions, unlock treats.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-full bg-gain px-6 py-3.5 text-[0.95rem] font-extrabold text-ink transition hover:bg-gain-dark hover:text-white"
              >
                Get early access
              </a>
              <a
                href="#gains"
                className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3.5 text-[0.95rem] font-bold transition hover:border-ink"
              >
                See the gains
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-[0.9rem] font-semibold text-muted">
              <span>
                <strong className="text-ink">£ saved</strong> chart
              </span>
              <span>
                <strong className="text-ink">kcal</strong> not added
              </span>
              <span>
                <strong className="text-ink">Missions</strong> for points
              </span>
            </div>
          </div>

          <div className="relative flex justify-center">
            <PhoneMock />
            <div className="absolute top-8 -left-2 rotate-[-8deg] rounded-2xl border border-line bg-white px-3 py-2 text-[0.8rem] font-extrabold shadow-md md:left-0">
              ▲ £22 this week
            </div>
            <div className="absolute right-0 bottom-20 rotate-[6deg] rounded-2xl bg-sky px-3 py-2 text-[0.8rem] font-extrabold text-white shadow-md md:right-4">
              −{formatKcal(DEMO.kcalSaved)} kcal
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-white" aria-label="Sample stats">
          <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-8">
            {[
              ['24d streak', '+18%'],
              [`£${DEMO.moneySaved.toFixed(0)} saved`, 'Wallet'],
              [`${formatKcal(DEMO.kcalSaved)} kcal`, 'Not added'],
              [`${DEMO.drinksSkipped} drinks`, 'Skipped'],
            ].map(([a, b]) => (
              <div key={a} className="flex items-baseline gap-2">
                <span className="font-extrabold tracking-tight">{a}</span>
                <span className="text-[0.85rem] font-bold text-gain">{b}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="gains" className="mx-auto max-w-[1120px] px-6 py-16 md:px-8 md:py-20">
          <p className="text-[0.8rem] font-bold tracking-[0.1em] text-gain uppercase">
            Twin scoreboard
          </p>
          <h2 className="mt-2 max-w-2xl text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold tracking-[-0.04em]">
            Money you kept. Calories you never drank.
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Every skipped drink adds cash <em>and</em> estimated kcal from a built-in average
            (pint, wine, spirit… or your custom usual).
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <SavingsChart />
            <CaloriesPanel />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-line bg-gain-soft p-6 md:p-8">
              <p className="text-[0.8rem] font-bold tracking-[0.08em] text-gain-dark uppercase">
                Treat vault
              </p>
              <p className="mt-2 text-[2rem] font-extrabold tracking-tight">£72 / £86</p>
              <p className="mt-2 text-muted">
                New sneakers are 14 quid away. Keep stacking dry days.
              </p>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-white">
                <div className="h-full w-[84%] rounded-full bg-gain" />
              </div>
            </div>
            <div className="rounded-[28px] border border-line bg-white p-6 shadow-sm md:p-8">
              <p className="text-[0.8rem] font-bold tracking-[0.08em] text-muted uppercase">
                Level
              </p>
              <p className="mt-2 text-[1.75rem] font-extrabold">Steady · Lv 7</p>
              <p className="mt-2 text-muted">
                220 points to Unstoppable. Missions + survived cravings fill the bar.
              </p>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-line">
                <div className="h-full w-[62%] rounded-full bg-ink" />
              </div>
            </div>
          </div>
        </section>

        <section id="play" className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="text-[0.8rem] font-bold tracking-[0.1em] text-gain uppercase">
              How you play
            </p>
            <h2 className="mt-2 max-w-xl text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold tracking-[-0.04em]">
              Cravings are boss fights. Missions are daily quests.
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <MissionBoard />
              <BadgeShelf />
            </div>
          </div>
        </section>

        <TrackModes />

        <Pricing />

        <section id="trust" className="border-y border-line bg-white px-6 py-12 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[1.35rem] font-extrabold tracking-tight">
              Fun tool. Not a medical device.
            </h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
              Drink Free is a habit companion for adults 18+. Calorie figures are serve
              averages for motivation, not dietary advice. We don’t diagnose or treat alcohol
              use disorder — if you need clinical help, talk to a professional.
            </p>
          </div>
        </section>

        <section id="waitlist" className="px-6 py-20 text-center md:px-8">
          <div className="mx-auto mb-4 flex justify-center">
            <Logo markOnly className="scale-125" />
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold tracking-[-0.04em]">
            Hop on the waitlist
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[1.05rem] text-muted">
            iOS first. Charts for cash and calories — the gamey way to quit or cut back.
          </p>
          <WaitlistForm />
        </section>
      </main>

      <footer className="border-t border-line px-6 py-8 text-center text-[0.85rem] text-muted md:px-8">
        <div className="mb-3 flex justify-center">
          <Logo />
        </div>
        <p>Drink Free · Not medical advice · Not affiliated with Smoke Free</p>
      </footer>
    </div>
  )
}
