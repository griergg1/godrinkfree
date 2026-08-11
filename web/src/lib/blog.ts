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

/** Reserved for future posts not yet drafted as MDX files */
export const UPCOMING_POSTS: BlogPostMeta[] = []

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
