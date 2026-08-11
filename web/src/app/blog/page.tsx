import type { Metadata } from 'next'
import Link from 'next/link'
import { formatPostDate, getAllIndexEntries } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Drink Free guides on alcohol calories, money saved, quit vs cut back, sober curious, and Dry January — twin gains without the lecture.',
  openGraph: {
    title: 'Blog · Drink Free',
    description:
      'Alcohol calories, money saved, quit vs cut back, and more — practical guides toward the waitlist.',
  },
}

export default function BlogIndexPage() {
  const posts = getAllIndexEntries()
  const published = posts.filter((p) => p.status === 'published')
  const upcoming = posts.filter((p) => p.status === 'upcoming')

  return (
    <main className="mx-auto max-w-[720px] px-6 pt-12 pb-20 md:px-8 md:pt-16">
      <p className="text-[0.8rem] font-bold tracking-wide text-gain-dark uppercase">Blog</p>
      <h1 className="mt-3 text-[clamp(2.2rem,5vw,3.2rem)] leading-[1.05] font-extrabold tracking-[-0.04em]">
        Twin gains, plain English
      </h1>
      <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-muted">
        Alcohol calories, money saved, quit vs cut back — practical reads that point back to Drink
        Free. No clinical lecture.
      </p>

      <section className="mt-12" aria-labelledby="published-heading">
        <h2 id="published-heading" className="text-[1.1rem] font-extrabold text-ink">
          Published
        </h2>
        <ul className="mt-5 space-y-4">
          {published.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-line bg-white px-5 py-5 transition hover:border-ink"
              >
                <p className="text-[0.8rem] font-semibold text-muted">
                  {formatPostDate(post.date)}
                  <span className="mx-2 text-line">·</span>
                  {post.primaryKw}
                </p>
                <h3 className="mt-1 text-[1.15rem] leading-snug font-extrabold tracking-tight group-hover:text-gain-dark">
                  {post.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14" aria-labelledby="upcoming-heading">
        <h2 id="upcoming-heading" className="text-[1.1rem] font-extrabold text-ink">
          Coming soon
        </h2>
        <ul className="mt-5 space-y-3">
          {upcoming.map((post) => (
            <li
              key={post.slug}
              className="rounded-2xl border border-dashed border-line bg-white/60 px-5 py-4"
            >
              <p className="text-[0.8rem] font-semibold text-muted">
                {formatPostDate(post.date)}
                <span className="mx-2 text-line">·</span>
                Upcoming
              </p>
              <p className="mt-1 font-bold text-ink">{post.title}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
