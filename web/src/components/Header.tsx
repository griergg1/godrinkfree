import Link from 'next/link'
import { Logo } from './Logo'

export function Header() {
  return (
    <header className="mx-auto flex max-w-[1120px] items-center justify-between gap-6 px-6 pt-6 md:px-8">
      <Link href="/" className="text-ink">
        <Logo />
      </Link>
      <nav
        className="hidden items-center gap-8 text-[0.95rem] font-semibold text-muted md:flex"
        aria-label="Primary"
      >
        <Link href="/#gains" className="hover:text-ink">
          Gains
        </Link>
        <Link href="/#play" className="hover:text-ink">
          How it works
        </Link>
        <Link href="/#tracks" className="hover:text-ink">
          Modes
        </Link>
        <Link href="/#pricing" className="hover:text-ink">
          Pricing
        </Link>
        <Link href="/blog" className="hover:text-ink">
          Blog
        </Link>
      </nav>
      <Link
        href="/#waitlist"
        className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-[0.85rem] font-bold text-white transition hover:bg-ink/90"
      >
        Get early access
      </Link>
    </header>
  )
}
