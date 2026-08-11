import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BlogDisclaimer } from '@/components/blog/BlogDisclaimer'
import { FaqList, MdxContent } from '@/components/blog/MdxContent'
import { formatPostDate, getPostBySlug, getPublishedPosts } from '@/lib/blog'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getPublishedPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Post not found' }

  return {
    title: post.title,
    description: post.description,
    keywords: [post.primaryKw],
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      url: `/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const faqs = post.faqs ?? []
  const faqJsonLd =
    faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer,
            },
          })),
        }
      : null

  return (
    <main className="mx-auto max-w-[720px] px-6 pt-12 pb-20 md:px-8 md:pt-16">
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}

      <p className="text-[0.8rem] font-semibold text-muted">
        <Link href="/blog" className="hover:text-ink">
          Blog
        </Link>
        <span className="mx-2 text-line">/</span>
        {formatPostDate(post.date)}
      </p>
      <h1 className="mt-4 text-[clamp(2rem,4.5vw,2.85rem)] leading-[1.08] font-extrabold tracking-[-0.04em]">
        {post.title}
      </h1>
      <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">{post.description}</p>

      <article className="prose-blog mt-10">
        <MdxContent source={post.content} />
      </article>

      <FaqList faqs={faqs} />
      <BlogDisclaimer />

      <p className="mt-8 text-[0.9rem] font-semibold text-muted">
        More:{' '}
        <Link href="/blog" className="text-ink hover:text-gain-dark">
          All posts
        </Link>
        {' · '}
        <Link href="/#gains" className="text-ink hover:text-gain-dark">
          Twin gains
        </Link>
        {' · '}
        <Link href="/#waitlist" className="text-ink hover:text-gain-dark">
          Waitlist
        </Link>
      </p>
    </main>
  )
}
