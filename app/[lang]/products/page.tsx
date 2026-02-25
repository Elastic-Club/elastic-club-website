import { dictionaries } from '@/app/i18n/dictionaries'
import Image from 'next/image'
import Link from 'next/link'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'vn' }]
}

export default async function ProductsPage({ params }: { params: { lang: 'en' | 'vn' } }) {
  const dict = dictionaries[params.lang]

  return (
    <div className="px-6 py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-24 text-center">
          <div className="section-label mx-auto inline-flex">{dict.products.title}</div>
          <h1 className="mb-8 mt-8 text-5xl font-black uppercase leading-[0.9] md:text-7xl">
            Built to <br />
            <span className="text-gray-700">Accelerate.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-400">
            {dict.products.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {dict.products.items.map((item: any, i: number) => (
            <Link
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-base group block overflow-hidden border-white/5 bg-[#0A0A0A] !p-0"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={item.banner}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <div className="p-10">
                <div className="mb-6 flex items-start justify-between">
                  <h2 className="text-3xl font-black uppercase text-white transition-colors group-hover:text-cyan-400">
                    {item.title}
                  </h2>
                  <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-gray-700">
                    Active
                  </span>
                </div>
                <p className="mb-10 text-lg leading-relaxed text-gray-500 transition-colors group-hover:text-gray-400">
                  {item.description}
                </p>
                <div className="flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-500">
                  Open Project{' '}
                  <span className="ml-4 transition-transform group-hover:translate-x-2">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
