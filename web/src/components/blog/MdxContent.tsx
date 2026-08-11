import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'
import remarkGfm from 'remark-gfm'
import { DRINK_PRESETS } from '@/data/drinkAverages'
import { BlogCta } from './BlogCta'

function CalorieTable() {
  return (
    <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-line bg-white">
      <table className="w-full min-w-[32rem] text-left text-[0.9rem]">
        <thead className="border-b border-line bg-paper text-[0.75rem] font-bold tracking-wide text-muted uppercase">
          <tr>
            <th className="px-4 py-3">Drink</th>
            <th className="px-4 py-3">Serve</th>
            <th className="px-4 py-3">Avg kcal</th>
            <th className="px-4 py-3">UK price guide</th>
          </tr>
        </thead>
        <tbody>
          {DRINK_PRESETS.map((d) => (
            <tr key={d.id} className="border-b border-line last:border-0">
              <td className="px-4 py-3 font-semibold text-ink">{d.label}</td>
              <td className="px-4 py-3 text-muted">{d.serve}</td>
              <td className="px-4 py-3 font-bold text-gain-dark">{d.kcal}</td>
              <td className="px-4 py-3 text-muted">£{d.defaultPriceGbp.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-line px-4 py-3 text-[0.8rem] text-muted">
        Averages for habit tracking — not lab nutrition facts. Edit your usuals in Drink Free.
      </p>
    </div>
  )
}

function SavingsTable() {
  const rows = [
    { label: 'Cut back (3 nights → 1)', drinks: 8, price: 5.5 },
    { label: 'Quit weeknight drinks', drinks: 10, price: 5.5 },
    { label: 'Quit (US cocktail nights)', drinks: 8, price: 12 },
  ]

  return (
    <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-line bg-white">
      <table className="w-full min-w-[28rem] text-left text-[0.9rem]">
        <thead className="border-b border-line bg-paper text-[0.75rem] font-bold tracking-wide text-muted uppercase">
          <tr>
            <th className="px-4 py-3">Scenario / week</th>
            <th className="px-4 py-3">Drinks skipped</th>
            <th className="px-4 py-3">Weekly</th>
            <th className="px-4 py-3">Year</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => {
            const weekly = r.drinks * r.price
            return (
              <tr key={r.label} className="border-b border-line last:border-0">
                <td className="px-4 py-3 font-semibold text-ink">{r.label}</td>
                <td className="px-4 py-3 text-muted">{r.drinks}</td>
                <td className="px-4 py-3 font-bold text-gain-dark">
                  {r.price >= 10 ? `$${weekly.toFixed(0)}` : `£${weekly.toFixed(0)}`}
                </td>
                <td className="px-4 py-3 font-bold text-ink">
                  {r.price >= 10
                    ? `$${(weekly * 52).toLocaleString()}`
                    : `£${(weekly * 52).toLocaleString()}`}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function AppsCompareTable() {
  const rows = [
    {
      name: 'Drink Free',
      free: 'Core tracking planned',
      dual: 'Quit + cut-back',
      twin: 'Money + kcal',
      billing: 'Free / Pro on site first',
    },
    {
      name: 'Reframe',
      free: 'Check current free tier',
      dual: 'Program-led',
      twin: 'Verify in-app',
      billing: 'Confirm trial terms',
    },
    {
      name: 'I Am Sober',
      free: 'Strong free streak core',
      dual: 'Quit-focused',
      twin: 'Money (generic)',
      billing: 'Optional IAP — verify',
    },
    {
      name: 'Try Dry',
      free: 'Seasonal / charity model',
      dual: 'Dry Jan focus',
      twin: 'Units / money typical',
      billing: 'Confirm on site/store',
    },
    {
      name: 'Sunnyside',
      free: 'Often trial-led',
      dual: 'Cut-back / mindful',
      twin: 'Mindful drinks',
      billing: 'Confirm sub terms',
    },
  ]

  return (
    <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-line bg-white">
      <table className="w-full min-w-[36rem] text-left text-[0.85rem]">
        <thead className="border-b border-line bg-paper text-[0.7rem] font-bold tracking-wide text-muted uppercase">
          <tr>
            <th className="px-3 py-3">App</th>
            <th className="px-3 py-3">Free core</th>
            <th className="px-3 py-3">Dual track</th>
            <th className="px-3 py-3">Twin gains</th>
            <th className="px-3 py-3">Billing clarity</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-b border-line last:border-0">
              <td className="px-3 py-3 font-semibold text-ink">{r.name}</td>
              <td className="px-3 py-3 text-muted">{r.free}</td>
              <td className="px-3 py-3 text-muted">{r.dual}</td>
              <td className="px-3 py-3 text-muted">{r.twin}</td>
              <td className="px-3 py-3 text-muted">{r.billing}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-line px-4 py-3 text-[0.8rem] text-muted">
        Directional research snapshot (Aug 2026) — features and prices change. Verify on each
        app’s site or store listing before you buy.
      </p>
    </div>
  )
}

const components = {
  CalorieTable,
  SavingsTable,
  AppsCompareTable,
  BlogCta,
  a: ({ href, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const className = 'font-semibold text-gain-dark underline-offset-2 hover:underline'
    if (href?.startsWith('/') || href?.startsWith('#')) {
      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      )
    }
    return (
      <a href={href} className={className} rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  },
}

type MdxContentProps = {
  source: string
}

export function MdxContent({ source }: MdxContentProps) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
    />
  )
}

export function FaqList({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}): ReactNode {
  if (!faqs.length) return null
  return (
    <section className="not-prose mt-12">
      <h2 className="text-[1.5rem] font-extrabold tracking-tight text-ink">FAQ</h2>
      <dl className="mt-5 space-y-5">
        {faqs.map((f) => (
          <div key={f.question} className="rounded-2xl border border-line bg-white px-5 py-4">
            <dt className="font-bold text-ink">{f.question}</dt>
            <dd className="mt-2 text-[0.95rem] leading-relaxed text-muted">{f.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
