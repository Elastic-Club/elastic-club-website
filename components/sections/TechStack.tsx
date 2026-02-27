'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function TechStack({ dict, lang }: { dict: any; lang: string }) {
  return (
    <section id="expertise" className="border-b border-white/5 py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="section-label mb-0">{dict.techStack.title}</div>
          <div className="mx-8 hidden h-px flex-1 bg-white/10 md:block" />
          <div className="font-mono text-[8px] uppercase tracking-[0.3em] text-gray-500 md:text-[10px]">
            {'// CONSULTING & INTEGRATION'}
          </div>
        </div>

        <div className="mb-24 max-w-3xl">
          <p className="text-xl leading-relaxed text-gray-400 sm:text-2xl">
            {dict.techStack.summary}
          </p>
          <div className="mt-10">
            <Link
              href={`/${lang}/blog/future-of-ai`}
              className="group flex w-fit items-center gap-4 border border-white/10 bg-white/5 px-8 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:border-primary-500/50 hover:bg-primary-500/5"
            >
              {dict.techStack.viewArticle}
              <span className="transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {dict.techStack.categories.map((category: any, idx: number) => (
            <div key={idx} className="card-base flex flex-col !p-0">
              <div className="flex-1 p-8 sm:p-10">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-akira text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
                    {category.title}
                  </h3>
                  <span className="font-mono text-xs font-bold text-gray-500">0{idx + 1}</span>
                </div>

                <p className="mb-10 text-sm leading-relaxed text-gray-400">
                  {category.description}
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {category.techs.map((tech: any, i: number) => (
                    <div
                      key={i}
                      className="group flex flex-col items-center gap-2"
                      title={tech.name}
                    >
                      {tech.logo ? (
                        <div className="tech-logo-container !h-10 !w-10 border border-white/10 bg-white/5">
                          <Image
                            src={tech.logo}
                            alt={tech.name}
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 font-mono text-[8px] font-bold text-gray-400 transition-colors group-hover:border-primary-500/50 group-hover:text-primary-500">
                          {tech.name
                            .split(' ')
                            .map((n: string) => n[0])
                            .join('')}
                        </div>
                      )}
                      <span className="text-center text-[8px] font-bold uppercase tracking-wider text-gray-500 transition-colors group-hover:text-white">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/5 bg-white/[0.01] px-8 py-4">
                <div className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 transition-colors group-hover:text-white">
                  Technical Proficiency <span className="ml-2 text-primary-500">95%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
