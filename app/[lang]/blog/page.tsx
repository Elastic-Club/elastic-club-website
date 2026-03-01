import { dictionaries } from '@/app/i18n/dictionaries'
import { getAllFilesFrontMatter } from '@/utils/mdx'
import Link from 'next/link'
import Image from 'next/image'
import Contact from '@/components/sections/Contact'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'vn' }]
}

export default async function BlogPage({ params }: { params: { lang: 'en' | 'vn' } }) {
  const dict = dictionaries[params.lang]
  const posts = await getAllFilesFrontMatter('blog', params.lang)

  return (
    <>
      <div className="px-6 py-32">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <div className="section-label">{dict.blog.title}</div>
            <h1 className="mb-8 text-5xl font-black uppercase leading-[0.9] md:text-7xl">
              Insights. <br />
              <span className="text-gray-700">Perspective.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-400">
              {dict.blog.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${params.lang}/blog/${post.slug}`}
                className="card-base group block overflow-hidden border-white/5 !p-0"
              >
                <div className="items-center gap-8 md:grid md:grid-cols-2">
                  <div className="relative aspect-video h-full w-full overflow-hidden bg-gray-900">
                    {post.images?.[0] && (
                      <Image
                        src={post.images[0]}
                        alt={post.title}
                        fill
                        className="object-cover opacity-60 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-500">
                      {'// '}
                      {new Date(post.date).toLocaleDateString(
                        params.lang === 'vn' ? 'vi-VN' : 'en-US',
                        { year: 'numeric', month: 'long', day: 'numeric' }
                      )}
                    </div>
                    <h2 className="mb-6 text-3xl font-black uppercase leading-tight text-white transition-colors group-hover:text-cyan-400">
                      {post.title}
                    </h2>
                    <p className="mb-8 line-clamp-3 text-lg leading-relaxed text-gray-500">
                      {post.summary}
                    </p>
                    <div className="flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600 transition-colors group-hover:text-white">
                      {dict.blog.readMore}{' '}
                      <span className="ml-4 transition-transform group-hover:translate-x-2">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Contact dict={dict} />
    </>
  )
}
