import Link from 'next/link'
import { Header } from '@/components/Header'
import { Logo } from '@/components/Logo'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(900px_500px_at_85%_-10%,rgba(0,200,5,0.1),transparent_55%),radial-gradient(700px_400px_at_10%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
      <Header />
      {children}
      <footer className="border-t border-line px-6 py-8 text-center text-[0.85rem] text-muted md:px-8">
        <div className="mb-3 flex justify-center">
          <Logo />
        </div>
        <p>
          <Link href="/" className="font-semibold text-ink hover:text-gain-dark">
            Home
          </Link>
          {' · '}
          <Link href="/blog" className="font-semibold text-ink hover:text-gain-dark">
            Blog
          </Link>
          {' · '}
          Drink Free · Not medical advice
        </p>
      </footer>
    </div>
  )
}
