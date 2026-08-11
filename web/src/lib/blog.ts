import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

export type BlogFaq = {
  question: string
  answer: string
}

export type BlogPostMeta = {
  title: string
  description: string
  slug: string
  date: string
  primaryKw: string
  status: 'published' | 'upcoming'
  faqs?: BlogFaq[]
}

export type BlogPost = BlogPostMeta & {
  content: string
}

/** Series map posts 6–12 — index only until drafted */
export const UPCOMING_POSTS: BlogPostMeta[] = [
  {
    title: 'Reframe App Alternatives If You Want Tracking Without the Heavy Program',
    description:
      'Looking past Reframe for lighter alcohol tracking? What to compare before you pick a quit or cut-back app.',
    slug: 'reframe-app-alternatives',
    date: '2026-09-01',
    primaryKw: 'reframe app',
    status: 'upcoming',
  },
  {
    title: 'I Am Sober vs Alcohol-Specific Apps: What’s the Difference?',
    description:
      'I Am Sober is great for streaks. Here’s how alcohol-specific apps differ — and when twin gains matter.',
    slug: 'i-am-sober-vs-alcohol-apps',
    date: '2026-09-08',
    primaryKw: 'i am sober',
    status: 'upcoming',
  },
  {
    title: 'Dry January 2027: How to Actually Finish the Month',
    description:
      'A practical Dry January plan: weekends, social scripts, and tracking money + calories so you finish strong.',
    slug: 'dry-january-2027-finish-the-month',
    date: '2026-11-01',
    primaryKw: 'dry january',
    status: 'upcoming',
  },
  {
    title: 'Damp January Explained: Cut Back Without Going Fully Dry',
    description:
      'Damp January is cut-back season. How to set a weekly drink budget without all-or-nothing pressure.',
    slug: 'damp-january-explained',
    date: '2026-11-08',
    primaryKw: 'damp january',
    status: 'upcoming',
  },
  {
    title: 'Dry January App Guide: Try Dry, Reframe, and What to Use Year-Round',
    description:
      'Compare Dry January apps and what to keep using after January if quit or cut-back is a longer game.',
    slug: 'dry-january-app-guide',
    date: '2026-12-01',
    primaryKw: 'try dry',
    status: 'upcoming',
  },
  {
    title: 'Day 10 of Dry January: How to Survive the First Weekend',
    description:
      'The first Dry January weekend is when plans wobble. Scripts, swaps, and how to protect your streak.',
    slug: 'dry-january-day-10-first-weekend',
    date: '2027-01-10',
    primaryKw: 'dry january',
    status: 'upcoming',
  },
  {
    title: 'You Finished Dry January — Now What? (Keep the Gains)',
    description:
      'Dry January done. How to keep money and calorie gains without sliding back into old defaults.',
    slug: 'after-dry-january-keep-the-gains',
    date: '2027-02-01',
    primaryKw: 'dry january',
    status: 'upcoming',
  },
]

function toIsoDate(value: unknown): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10)
  }
  if (typeof value === 'string' || typeof value === 'number') {
    const d = new Date(value)
    if (!Number.isNaN(d.getTime())) return d.toISOString().slice(0, 10)
    const asString = String(value).slice(0, 10)
    if (/^\d{4}-\d{2}-\d{2}$/.test(asString)) return asString
  }
  throw new Error(`Invalid blog date: ${String(value)}`)
}

function parsePost(fileName: string): BlogPost {
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), 'utf8')
  const { data, content } = matter(raw)
  const meta = data as BlogPostMeta

  if (!meta.slug || !meta.title || !meta.date) {
    throw new Error(`Invalid blog frontmatter in ${fileName}`)
  }

  return {
    title: meta.title,
    description: meta.description ?? '',
    slug: meta.slug,
    date: toIsoDate(meta.date),
    primaryKw: meta.primaryKw ?? '',
    status: meta.status === 'upcoming' ? 'upcoming' : 'published',
    faqs: meta.faqs,
    content,
  }
}

export function getPublishedPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map(parsePost)
    .filter((p) => p.status === 'published')
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPostBySlug(slug: string): BlogPost | null {
  const match = getPublishedPosts().find((p) => p.slug === slug)
  return match ?? null
}

export function getAllIndexEntries(): BlogPostMeta[] {
  const published: BlogPostMeta[] = getPublishedPosts().map(
    ({ title, description, slug, date, primaryKw, status, faqs }) => ({
      title,
      description,
      slug,
      date,
      primaryKw,
      status,
      faqs,
    }),
  )
  return [...published, ...UPCOMING_POSTS].sort((a, b) => a.date.localeCompare(b.date))
}

export function formatPostDate(iso: string): string {
  const d = new Date(`${iso}T12:00:00Z`)
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
