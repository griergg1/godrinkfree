import type { NextConfig } from 'next'
import { withSentryConfig } from '@sentry/nextjs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  // Keep Turbopack rooted on this package (repo nest can confuse lockfile discovery).
  turbopack: {
    root,
  },
}

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: !process.env.CI,
  // Skip source-map upload when auth/org/project unset (local + early deploys).
  sourcemaps: {
    disable: !process.env.SENTRY_AUTH_TOKEN,
  },
})
