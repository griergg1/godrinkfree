import type { MetadataRoute } from 'next'
import { getPublishedPosts } from '@/lib/blog'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://godrinkfree.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedPosts().map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...posts,
  ]
}
