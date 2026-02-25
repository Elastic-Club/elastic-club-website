'use client'

import Image from 'next/image'

export default function Expertise({ dict }: { dict: any }) {
  return (
    <section id="expertise" className="relative overflow-hidden border-b border-white/5 px-6 py-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-24 lg:flex-row">
          <div className="lg:w-1/2">
            <div className="sticky top-32">
              <div className="section-label">{dict.expertise.title}</div>
              <h2 className="mb-12 text-5xl font-black uppercase leading-[0.85] md:text-8xl">
                {dict.process.title.split(' ').map((word: string, i: number) => (
                  <span key={i} className={i > 1 ? 'text-gray-700' : ''}>
                    {word} {i === 1 && <br />}
                  </span>
                ))}
              </h2>

              <div className="group relative aspect-square w-full border border-white/5 bg-black p-4">
                <div className="absolute left-0 top-0 h-2 w-2 bg-cyan-500" />
                <div className="absolute right-0 top-0 h-2 w-2 bg-cyan-500" />
                <div className="absolute bottom-0 left-0 h-2 w-2 bg-cyan-500" />
                <div className="absolute bottom-0 right-0 h-2 w-2 bg-cyan-500" />

                <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#0A0A0A]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.1)_0%,_transparent_70%)]" />
                  <Image
                    src="/images/3D_Illustration2.png"
                    alt="Agentic Engineering"
                    width={500}
                    height={500}
                    className="bw-image relative z-10 object-contain group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-20 lg:w-1/2">
            <div className="space-y-0">
              {dict.expertise.items.map((item: any, i: number) => (
                <div
                  key={i}
                  className="group relative border-t border-white/5 py-16 transition-colors hover:bg-white/[0.01]"
                >
                  {/* Beam animation */}
                  <div className="absolute left-0 top-0 h-[1px] w-full overflow-hidden bg-cyan-500/0 transition-colors group-hover:bg-cyan-500/30">
                    <div className="beam-line h-full w-full" />
                  </div>

                  <div className="mb-8 flex items-baseline justify-between">
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white transition-colors group-hover:text-cyan-400">
                      {item.title}
                    </h3>
                    <span className="font-mono text-xs font-bold tracking-[0.3em] text-gray-700">
                      MOD.0{i + 1}
                    </span>
                  </div>
                  <p className="max-w-lg text-lg leading-relaxed text-gray-500 transition-colors group-hover:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
              <div className="border-t border-white/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
