'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HomeProducts({ dict, lang }: { dict: any; lang: string }) {
  return (
    <section id="products" className="border-b border-white/5 bg-[#080808] px-6 py-32">
      <div className="container mx-auto">
        <div className="mb-24 flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="section-label">{dict.nav.products}</div>
            <h2 className="font-akira text-4xl font-black uppercase leading-[1.1] sm:text-5xl md:text-6xl">
              {(dict.products.header || '').split(' ').map((word: string, i: number) => (
                <span key={i} className={i > 0 ? 'text-gray-500' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h2>
          </div>
          <div className="flex flex-col items-start gap-6">
            <p className="max-w-sm border-l border-white/10 pl-8 font-mono text-sm leading-relaxed text-gray-400">
              {dict.products.subtitle}
            </p>
            <Link
              href={`/${lang}/products`}
              className="ml-8 text-[10px] font-bold uppercase tracking-[0.3em] text-primary-500 transition-colors hover:text-white"
            >
              Explore All Products <span>→</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {dict.products.items.map((item: any, i: number) => (
            <Link
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-base group block overflow-hidden border-white/5 bg-black !p-0"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={item.banner}
                  alt={item.title}
                  fill
                  className="object-cover opacity-60 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <div className="p-8 sm:p-10">
                <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-primary-500">
                  {'// '}Product.Active
                </div>
                <h3 className="mb-6 text-2xl font-black uppercase text-white transition-colors group-hover:text-solana-gradient sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mb-8 line-clamp-2 text-base leading-relaxed text-gray-400 transition-colors group-hover:text-gray-200 md:text-lg">
                  {item.description}
                </p>
                <div className="flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 transition-colors group-hover:text-white">
                  Launch Project{' '}
                  <span className="ml-4 transition-transform group-hover:translate-x-2">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
