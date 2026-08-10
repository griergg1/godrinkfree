import { Logo } from './Logo'

export function Header() {
  return (
    <header className="mx-auto flex max-w-[1120px] items-center justify-between gap-6 px-6 pt-6 md:px-8">
      <a href="#" className="text-ink">
        <Logo />
      </a>
      <nav
        className="hidden items-center gap-8 text-[0.95rem] font-semibold text-muted md:flex"
        aria-label="Primary"
      >
        <a href="#gains" className="hover:text-ink">
          Gains
        </a>
        <a href="#play" className="hover:text-ink">
          Play
        </a>
        <a href="#tracks" className="hover:text-ink">
          Modes
        </a>
        <a href="#pricing" className="hover:text-ink">
          Pricing
        </a>
      </nav>
      <a
        href="#waitlist"
        className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-[0.85rem] font-bold text-white transition hover:bg-ink/90"
      >
        Get early access
      </a>
    </header>
  )
}
