import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://godrinkfree.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Drink Free — Drink-free gains',
    template: '%s · Drink Free',
  },
  description:
    'Drink Free — level up your drink-free gains. Quit or cut back with money charts, calorie tracking, mission points, and treats. iOS first.',
  applicationName: 'Drink Free',
  keywords: [
    'quit drinking',
    'cut back alcohol',
    'alcohol calories',
    'money saved not drinking',
    'dry january app',
  ],
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'Drink Free',
    title: 'Drink Free — Drink-free gains',
    description:
      'Quit or cut back with twin gains: money saved and calories not added. Missions, points, treats. iOS waitlist.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drink Free — Drink-free gains',
    description:
      'Quit or cut back with twin gains: money saved and calories not added. iOS waitlist.',
  },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className={`${jakarta.className} min-h-full`}>{children}</body>
    </html>
  )
}
