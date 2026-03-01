import { dictionaries } from '@/app/i18n/dictionaries'
import { getFileBySlug, getAllFilesFrontMatter } from '@/utils/mdx'
import { genPageMetadata } from 'app/seo'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypePrism from 'rehype-prism-plus'
import rehypeKatex from 'rehype-katex'
import Contact from '@/components/sections/Contact'

import 'katex/dist/katex.min.css'
import '@/css/prism.css'

export async function generateMetadata({
  params,
}: {
  params: { lang: 'en' | 'vn'; slug: string }
}) {
  const post = await getFileBySlug('blog', params.slug, params.lang)
  if (!post) return
  return genPageMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.summary,
    image: post.frontmatter.images?.[0],
    alternates: {
      canonical: `/${params.lang}/blog/${params.slug}`,
      languages: {
        en: `/en/blog/${params.slug}`,
        vn: `/vn/blog/${params.slug}`,
      },
    },
  })
}

export async function generateStaticParams() {
  const [enPosts, vnPosts] = await Promise.all([
    getAllFilesFrontMatter('blog', 'en'),
    getAllFilesFrontMatter('blog', 'vn'),
  ])

  return [
    ...enPosts.map((post) => ({ lang: 'en' as const, slug: post.slug })),
    ...vnPosts.map((post) => ({ lang: 'vn' as const, slug: post.slug })),
  ]
}

export default async function BlogPostPage({
  params,
}: {
  params: { lang: 'en' | 'vn'; slug: string }
}) {
  const post = await getFileBySlug('blog', params.slug, params.lang)
  const dict = dictionaries[params.lang]

  if (!post) return <div>Post not found</div>

  return (
    <>
      <article className="px-6 py-32">
        <div className="container mx-auto max-w-3xl">
          <Link
            href={`/${params.lang}/blog`}
            className="mb-12 inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-500 transition-colors hover:text-white"
          >
            ← Back to Blog
          </Link>

          <header className="mb-16">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-gray-600">
              {'// '}
              {new Date(post.frontmatter.date).toLocaleDateString(
                params.lang === 'vn' ? 'vi-VN' : 'en-US',
                { year: 'numeric', month: 'long', day: 'numeric' }
              )}
            </div>
            <h1 className="mb-8 text-4xl font-black uppercase leading-tight text-white md:text-6xl">
              {post.frontmatter.title}
            </h1>
            <div className="mb-12 flex gap-4">
              {post.frontmatter.tags?.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan-400"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {post.frontmatter.images?.[0] && (
              <div className="relative mb-16 aspect-video w-full overflow-hidden border border-white/10 bg-gray-900">
                <Image
                  src={post.frontmatter.images[0]}
                  alt={post.frontmatter.title}
                  fill
                  className="bw-image object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            )}
          </header>

          <div className="prose prose-cyan prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm as any, remarkMath as any]}
              rehypePlugins={[rehypePrism as any, rehypeKatex as any]}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          <footer className="mt-20 border-t border-white/5 pt-12">
            <div className="section-label">Share this Protocol</div>
            <div className="mt-8 flex gap-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-white"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-white"
              >
                GitHub
              </a>
            </div>
          </footer>
        </div>
      </article>
      <Contact dict={dict} />
    </>
  )
}
