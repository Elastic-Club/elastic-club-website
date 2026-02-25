'use client'

export default function Contact({ dict }: { dict: any }) {
  return (
    <section id="contact" className="relative bg-black px-6 py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-start gap-24 lg:grid-cols-2">
          <div className="relative">
            <div className="section-label">{dict.nav.contact}</div>
            <h2 className="mb-12 text-5xl font-black uppercase leading-[0.85] md:text-8xl">
              {dict.cta.title.split(' ').map((word: string, i: number) => (
                <span key={i} className={i % 2 !== 0 ? 'text-gray-700' : ''}>
                  {word} {i === 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="mb-16 max-w-md text-xl leading-relaxed text-gray-400">
              {dict.cta.description}
            </p>

            <div className="space-y-10">
              <div className="group flex flex-col gap-2 text-center sm:text-left">
                <a href="#contact" className="btn-primary justify-center sm:justify-start">
                  {dict.cta.primary} <span className="ml-4">→</span>
                </a>
              </div>

              <div className="group flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-600">
                  {'// Electronic Mail'}
                </span>
                <a
                  href="mailto:contact@elasticlabs.io"
                  className="text-3xl font-bold text-white transition-colors hover:text-cyan-400"
                >
                  contact@elasticlabs.io
                </a>
              </div>
            </div>
          </div>

          <div className="group_relative group relative">
            <div className="pointer-events-none absolute -inset-10 border border-white/[0.03]" />
            <div className="absolute -top-10 left-10 h-2 w-2 bg-gray-800" />
            <div className="absolute -top-10 right-10 h-2 w-2 bg-gray-800" />
            <div className="absolute -bottom-10 -left-10 h-2 w-2 bg-gray-800" />
            <div className="absolute -bottom-10 -right-10 h-2 w-2 bg-gray-800" />

            <form className="relative overflow-hidden border border-white/10 bg-[#0A0A0A] p-12">
              <div className="absolute left-0 top-0 h-1 w-full overflow-hidden bg-cyan-500/20">
                <div className="beam-line h-full w-full" />
              </div>

              <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2">
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="name"
                    className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500"
                  >
                    Identification
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="NAME / ORGANIZATION"
                    className="order-b border-white/10 bg-transparent py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors placeholder:text-gray-800 focus:border-cyan-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="email"
                    className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500"
                  >
                    Communication
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="order-b border-white/10 bg-transparent py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors placeholder:text-gray-800 focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-16 flex flex-col gap-4">
                <label
                  htmlFor="message"
                  className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500"
                >
                  Requirements.log
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="TYPE YOUR MESSAGE HERE..."
                  className="resize-none border border-white/10 bg-transparent p-6 text-sm font-bold uppercase tracking-widest text-white transition-colors placeholder:text-gray-800 focus:border-cyan-500 focus:outline-none"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary group w-full justify-center">
                {dict.cta.secondary}{' '}
                <span className="transition-transform group-hover:translate-x-2">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
