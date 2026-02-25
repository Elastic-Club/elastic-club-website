'use client'

import Image from 'next/image'

export default function TechStack({ dict }: { dict: any }) {
  return (
    <section id="expertise" className="border-b border-white/5 py-32">
      <div className="container mx-auto px-6">
        <div className="mb-24 flex flex-col items-center justify-between md:flex-row">
          <div className="section-label mb-0">{dict.techStack.title}</div>
          <div className="mx-8 hidden h-px flex-1 bg-white/10 md:block" />
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-600">
            {'// CONSULTING & INTEGRATION'}
          </div>
        </div>

        <div className="space-y-20">
          {dict.techStack.categories.map((category: any, idx: number) => (
            <div key={idx}>
              <div className="mb-10 flex items-center gap-6">
                <h3 className="text-xl font-black uppercase tracking-widest text-white">
                  {category.title}
                </h3>
                <div className="h-px flex-1 bg-white/5" />
              </div>

              <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-4 lg:grid-cols-6">
                {category.techs.map((tech: any, i: number) => (
                  <div
                    key={i}
                    className="group flex cursor-default flex-col items-center justify-center bg-[#050505] p-10 transition-all duration-500 hover:bg-[#080808]"
                  >
                    {tech.logo ? (
                      <div className="tech-logo-container mb-6">
                        <Image
                          src={tech.logo}
                          alt={tech.name}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 font-mono text-[10px] font-bold text-gray-600 transition-colors group-hover:border-cyan-500/50 group-hover:text-cyan-500">
                        {tech.name
                          .split(' ')
                          .map((n: string) => n[0])
                          .join('')}
                      </div>
                    )}
                    <span className="text-center text-[10px] font-bold uppercase tracking-widest text-gray-500 transition-colors group-hover:text-white">
                      {tech.name}
                    </span>
                    {tech.type && (
                      <span className="mt-2 font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-500 opacity-0 transition-opacity group-hover:opacity-100">
                        {tech.type}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
