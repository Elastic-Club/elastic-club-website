'use client'

const icons = {
  0: '🧠',
  1: '🔄',
  2: '🤖',
  3: '📚',
  4: '🚀',
}

export default function Services({ dict }: { dict: any }) {
  return (
    <section id="services" className="border-b border-white/5 bg-[#080808] px-6 py-32">
      <div className="container mx-auto">
        <div className="mb-24 flex flex-col items-end justify-between gap-12 lg:flex-row">
          <div className="max-w-2xl">
            <div className="section-label">{dict.services.title}</div>
            <h2 className="text-5xl font-black uppercase leading-[0.9] md:text-7xl">
              Executable <br />
              <span className="text-gray-700">Intelligence.</span>
            </h2>
          </div>
          <p className="max-w-sm border-l border-white/10 pl-8 font-mono text-sm leading-relaxed text-gray-500">
            {dict.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {dict.services.items.map((item: any, i: number) => {
            const Icon = icons[i as keyof typeof icons] || '⚙️'
            return (
              <div
                key={i}
                className="card-base group cursor-default !border-0 !border-b border-r border-white/10 !bg-transparent !p-12"
              >
                <div className="absolute left-0 top-0 h-[1px] w-full overflow-hidden bg-cyan-500/0 transition-colors group-hover:bg-cyan-500/50">
                  <div className="beam-line h-full w-full opacity-50" />
                </div>

                <div className="mb-12 flex items-start justify-between">
                  <div className="text-5xl grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0">
                    {Icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-gray-700">0{i + 1}</span>
                </div>

                <h3 className="mb-6 text-2xl font-black uppercase tracking-tight text-white transition-colors group-hover:text-cyan-400">
                  {item.title}
                </h3>

                <p className="mb-8 text-base leading-relaxed text-gray-500 transition-colors group-hover:text-gray-400">
                  {item.description}
                </p>

                {item.details && (
                  <ul className="mb-10 space-y-3">
                    {item.details.map((detail: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 font-mono text-[10px] uppercase tracking-widest text-gray-600"
                      >
                        <span className="mt-0.5 text-cyan-500">»</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600 transition-colors group-hover:text-white">
                  Initialize Protocol{' '}
                  <span className="ml-4 transition-transform group-hover:translate-x-2">→</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
