import { dictionaries } from '@/app/i18n/dictionaries'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export async function generateStaticParams() {
  const params = []
  for (const lang of ['en', 'vn']) {
    const dict = dictionaries[lang as 'en' | 'vn']
    for (const item of dict.products.items) {
      params.push({ lang, slug: item.slug })
    }
  }
  return params
}

export async function generateMetadata({ 
  params 
}: { 
  params: { lang: 'en' | 'vn'; slug: string } 
}): Promise<Metadata> {
  const dict = dictionaries[params.lang]
  const product = dict.products.items.find((p: any) => p.slug === params.slug)

  if (!product) return {}

  return {
    title: `${product.title} | Elastic Labs`,
    description: product.description,
    openGraph: {
      title: `${product.title} | Elastic Labs`,
      description: product.description,
      images: [{ url: product.banner }],
    },
  }
}

export default async function ProductDetailPage({ 
  params 
}: { 
  params: { lang: 'en' | 'vn'; slug: string } 
}) {
  const dict = dictionaries[params.lang]
  const product = dict.products.items.find((p: any) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="px-6 py-32">
      <div className="container mx-auto max-w-4xl">
        <Link 
          href={`/${params.lang}/products`}
          className="mb-12 inline-flex items-center font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-cyan-500 transition-colors"
        >
          <span className="mr-4">←</span> Back to Products
        </Link>

        <div className="relative mb-16 aspect-video w-full overflow-hidden rounded-2xl border border-white/5 bg-[#0A0A0A]">
          <Image
            src={product.banner}
            alt={product.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="mb-20">
          <div className="section-label mb-8">Active Project</div>
          <h1 className="mb-8 text-4xl font-black uppercase leading-[0.9] sm:text-5xl md:text-7xl">
            {product.title}
          </h1>
          <p className="text-lg leading-relaxed text-gray-400 md:text-xl">
            {product.description}
          </p>
          <div className="mt-12 md:mt-20">
            <a 
              href={product.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex w-full justify-center sm:inline-flex sm:w-auto"
            >
              Explore Project <span className="ml-4">→</span>
            </a>
          </div>
        </div>

        {product.howWeBuild && (
          <div className="border-t border-white/10 pt-16 md:pt-20">
            <div className="section-label mb-8">Engineering & Craft</div>
            <h2 className="mb-12 text-3xl font-black uppercase text-white md:text-4xl">
              {product.howWeBuild.title}
            </h2>
            <p className="mb-16 text-base leading-relaxed text-gray-500 md:text-lg">
              {product.howWeBuild.description}
            </p>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              {product.howWeBuild.points.map((point: any, i: number) => (
                <div key={i} className="group relative">
                  <div className="mb-6 h-px w-12 bg-cyan-500/50 transition-all group-hover:w-full" />
                  <h3 className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
