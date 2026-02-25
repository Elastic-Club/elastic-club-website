'use client'

import Image from 'next/image'

export default function Vision({ dict }: { dict: any }) {
  return (
    <section id="vision" className="relative border-b border-white/5 px-6 py-32">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 hidden h-full w-px bg-white/5 lg:block" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-2">
          <div className="relative flex flex-col justify-center">
            <div className="section-label">{dict.vision.title}</div>
            <h2 className="mb-10 text-4xl font-black uppercase leading-[1.1] md:text-6xl">
              {dict.vision.title.split(' ').map((word: string, i: number) => (
                <span key={i} className={i > 1 ? 'text-gray-700' : ''}>
                  {word} {i === 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="mb-16 max-w-md text-xl leading-relaxed text-gray-400">
              {dict.vision.description}
            </p>

            <div className="space-y-8">
              {dict.whyUs.points.map((point: any, i: number) => (
                <div key={i} className="card-base group">
                  {/* Decorative corner square */}
                  <div className="absolute left-0 top-0 h-2 w-2 bg-cyan-500/50" />

                  <div className="flex items-start gap-8">
                    <div className="font-mono text-3xl font-black text-gray-800 transition-colors group-hover:text-cyan-500/20">
                      0{i + 1}
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl uppercase tracking-tight text-white">
                        {point.title}
                      </h3>
                      <p className="leading-relaxed text-gray-400">{point.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="group relative">
            <div className="pointer-events-none absolute -inset-4 border border-white/5" />
            <div className="absolute left-0 top-0 h-4 w-4 border-l border-t border-cyan-500" />
            <div className="absolute -bottom-4 -right-4 h-4 w-4 border-b border-r border-cyan-500" />

            <div className="relative h-full min-h-[600px] overflow-hidden bg-black">
              <Image
                src="/images/ProductDevelopment.jpg"
                alt="Vision"
                fill
                className="bw-image object-cover opacity-40"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* Technical Overlay */}
              <div className="absolute left-12 top-12">
                <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-500">
                  {'// System.Diagnostic.ROI'}
                </div>
                <div className="text-5xl font-black text-white">98.2%</div>
              </div>

              <div className="absolute bottom-12 right-12 text-right">
                <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500">
                  {'// Scale.Capability'}
                </div>
                <div className="text-5xl font-black text-cyan-500">10X</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
