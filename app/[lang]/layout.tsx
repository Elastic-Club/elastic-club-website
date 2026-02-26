import dynamic from 'next/dynamic'
import { dictionaries } from '@/app/i18n/dictionaries'
import Navbar from '@/components/Navbar'
import MouseTracker from '@/components/MouseTracker'

const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), {
  ssr: false,
})

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: 'en' | 'vn' }
}) {
  const dict = dictionaries[params.lang] || dictionaries.en
  const lang = params.lang || 'en'

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-white selection:bg-cyan-500 selection:text-black">
      <MouseTracker />
      <ParticleBackground />
      <Navbar dict={dict} lang={lang} />

      {/* Architectural Background Lines */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-20">
        <div className="beam-line absolute left-[10%] top-0 h-full w-px bg-white/10" />
        <div className="absolute left-[30%] top-0 h-full w-px bg-white/10" />
        <div className="beam-line absolute left-[50%] top-0 h-full w-px bg-white/10" />
        <div className="absolute left-[70%] top-0 h-full w-px bg-white/10" />
        <div className="beam-line absolute left-[90%] top-0 h-full w-px bg-white/10" />
      </div>

      <main className="relative z-10 flex flex-col">{children}</main>

      <footer className="relative z-10 border-t border-white/5 bg-black/50 py-12 text-center text-sm text-gray-500 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="mb-8 flex justify-center gap-8 font-mono text-[10px] uppercase tracking-widest text-gray-400">
            <a href="#vision" className="transition-colors hover:text-primary-500">
              {dict.nav.home}
            </a>
            <a href="#services" className="transition-colors hover:text-primary-500">
              {dict.nav.services}
            </a>
            <a href="#contact" className="transition-colors hover:text-primary-500">
              {dict.nav.contact}
            </a>
          </div>
          <div className="text-gray-600">{dict.footer.copyright}</div>
        </div>
      </footer>
    </div>
  )
}
