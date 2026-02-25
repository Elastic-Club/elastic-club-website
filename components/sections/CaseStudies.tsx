'use client'

export default function CaseStudies({ dict }: { dict: any }) {
  return (
    <section
      id="cases"
      className="relative overflow-hidden border-b border-white/5 bg-[#050505] px-6 py-32"
    >
      <div className="container mx-auto">
        <div className="mb-24 text-center">
          <div className="section-label mx-auto inline-flex">{dict.cases.title}</div>
          <h2 className="mt-8 text-5xl font-black uppercase leading-[0.9] md:text-7xl">
            Battle <br />
            <span className="text-gray-700">Tested.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {dict.cases.items.map((item: any, i: number) => (
            <div
              key={i}
              className="card-base group flex cursor-default flex-col overflow-hidden !p-0"
            >
              <div className="border-b border-white/5 bg-white/[0.01] p-10">
                <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-500">
                  {'// '}
                  {item.category}
                </div>
                <h3 className="mb-6 text-2xl font-black uppercase tracking-tighter text-white transition-colors group-hover:text-cyan-400">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-white/5 bg-black p-8">
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gray-700">
                    Status
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                    Deployed
                  </span>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-gray-600 transition-all group-hover:border-cyan-500/50 group-hover:text-cyan-500">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
