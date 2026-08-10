import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  // Keep Turbopack rooted on this package (repo nest can confuse lockfile discovery).
  turbopack: {
    root,
  },
}

export default nextConfig
