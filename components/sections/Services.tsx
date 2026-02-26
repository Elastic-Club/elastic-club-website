'use client'

import { BrainCircuit, Workflow, Bot, Cpu, GraduationCap } from 'lucide-react'

const icons = {
  0: BrainCircuit,
  1: Workflow,
  2: Bot,
  3: Cpu,
  4: GraduationCap,
}

export default function Services({ dict }: { dict: any }) {
  return (
    <section id="services" className="border-b border-white/5 bg-[#080808] px-6 py-32">
      <div className="container mx-auto">
        <div className="mb-24 flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="section-label">{dict.services.title}</div>
            <h2 className="font-akira text-4xl font-black uppercase leading-[1.1] sm:text-5xl md:text-6xl">
              {(dict.services.header || '').split(' ').map((word: string, i: number) => (
                <span key={i} className={i > 0 ? 'text-gray-500' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h2>
          </div>
          <p className="max-w-sm border-l border-white/10 pl-8 font-mono text-sm leading-relaxed text-gray-400">
            {dict.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {dict.services.items.map((item: any, i: number) => {
            const Icon = icons[i as keyof typeof icons] || Cpu
            return (
              <div
                key={i}
                className="card-base group cursor-default !border-0 !border-b border-r border-white/10 !bg-transparent p-8 sm:p-12"
              >
                <div className="absolute left-0 top-0 h-[1px] w-full overflow-hidden bg-primary-500/0 transition-colors group-hover:bg-primary-500/50">
                  <div className="beam-line h-full w-full opacity-50" />
                </div>

                <div className="mb-12 flex items-start justify-between">
                  <div className="text-primary-500 transition-all duration-500 group-hover:scale-110 group-hover:text-white">
                    <Icon size={48} strokeWidth={1} />
                  </div>
                  <span className="font-mono text-xs font-bold text-gray-500">0{i + 1}</span>
                </div>

                <h3 className="group-hover:text-solana-gradient mb-6 text-2xl font-black uppercase tracking-tight text-white transition-colors">
                  {item.title}
                </h3>

                <p className="mb-8 text-base leading-relaxed text-gray-400 transition-colors group-hover:text-gray-200">
                  {item.description}
                </p>

                {item.details && (
                  <ul className="mb-10 space-y-3">
                    {item.details.map((detail: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 font-mono text-[10px] uppercase tracking-widest text-gray-400"
                      >
                        <span className="mt-0.5 text-secondary-500">»</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 transition-colors group-hover:text-white">
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
