import Link from 'next/link'

type BlogCtaProps = {
  slug: string
  headline?: string
  body?: string
}

export function BlogCta({
  slug,
  headline = 'Track money + calories in Drink Free',
  body = 'Quit or cut back — same goal. Twin gains you can watch add up. Join the iOS waitlist.',
}: BlogCtaProps) {
  const href = `/?utm_source=blog&utm_medium=cta&utm_campaign=${encodeURIComponent(slug)}#waitlist`

  return (
    <aside className="not-prose my-10 rounded-2xl border border-line bg-gain-soft/60 px-6 py-7 md:px-8">
      <p className="text-[0.75rem] font-bold tracking-wide text-gain-dark uppercase">
        Twin gains
      </p>
      <h2 className="mt-2 text-[1.35rem] font-extrabold tracking-tight text-ink">{headline}</h2>
      <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-muted">{body}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center justify-center rounded-full bg-gain px-5 py-2.5 text-[0.9rem] font-extrabold text-ink transition hover:bg-gain-dark hover:text-white"
      >
        Get early access
      </Link>
    </aside>
  )
}
