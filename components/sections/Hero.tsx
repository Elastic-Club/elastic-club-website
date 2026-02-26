'use client'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import siteMetadata from '@/data/siteMetadata'

const techStack = [
  { name: 'Rust', logo: '/logo/technologies/rust-logo.png' },
  { name: 'TypeScript', logo: '/logo/technologies/typescript.png' },
  { name: 'Node.js', logo: '/logo/technologies/nodejs-logo.svg' },
  { name: 'React', logo: '/logo/technologies/react-logo.png' },
  { name: 'LangGraph', logo: '/logo/technologies/langgraph-logo.png' },
  { name: 'LangChain', logo: '/logo/technologies/langchain-logo.png' },
  { name: 'CrewAI', logo: '/logo/technologies/crewai-logo.png' },
  { name: 'n8n', logo: '/logo/technologies/n8n-logo.jpg' },
  { name: 'AWS', logo: '/logo/technologies/aws-logo.png' },
  { name: 'NVIDIA CUDA', logo: '/logo/technologies/nvidia-cuda-logo.jpg' },
  { name: 'vLLM', logo: '/logo/technologies/vllm-logo.png' },
  { name: 'SGLang', logo: '/logo/technologies/sglang-logo.png' },
  { name: 'Railway', logo: '/logo/technologies/railway-logo.png' },
]

export default function Hero({ dict, lang }: { dict: any; lang: string }) {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-20">
      {/* Video Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video className="h-full w-full object-cover opacity-20" autoPlay muted loop playsInline>
          <source src="/videos/upper-background.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlay to blend video with background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* Background Frame Lines */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-10 top-10 h-20 w-20 border-l border-t border-white/20" />
        <div className="absolute right-10 top-10 h-20 w-20 border-r border-t border-white/20" />
        <div className="absolute bottom-10 left-10 h-20 w-20 border-b border-l border-white/20" />
        <div className="absolute bottom-10 right-10 h-20 w-20 border-b border-r border-white/20" />

        <div className="absolute left-10 top-10 h-1.5 w-1.5 bg-cyan-500" />
        <div className="absolute right-10 top-10 h-1.5 w-1.5 bg-cyan-500" />
        <div className="absolute bottom-10 left-10 h-1.5 w-1.5 bg-cyan-500" />
        <div className="absolute bottom-10 right-10 h-1.5 w-1.5 bg-cyan-500" />
      </div>

      <div className="container z-20 mx-auto grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="order-2 pt-10 lg:order-1">
          <div className="section-label">
            <span className="mr-2 inline-block animate-pulse text-primary-500">●</span>
            {lang === 'en' ? 'Unlocking New Limits' : 'Khai phá giới hạn mới'}
          </div>

          <h1 className="mb-8 font-akira text-4xl font-black uppercase leading-[1.1] tracking-tighter text-white sm:text-6xl xl:text-7xl">
            <span className="block bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent">
              {lang === 'en' ? 'Your AI' : 'Đối tác'}
            </span>
            <span className="text-solana-gradient relative">
              {lang === 'en' ? 'Integration Partner' : 'Tích hợp AI'}
              <span className="animate-blink absolute -right-4 top-0 h-full w-1 bg-primary-500" />
            </span>
          </h1>

          <p className="mb-10 max-w-xl border-l border-white/10 pl-8 text-base leading-relaxed text-gray-300 md:text-lg">
            {dict.hero.subtitle}
          </p>

          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <a
              href={siteMetadata.consultingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group w-full justify-center sm:w-auto"
            >
              {dict.hero.cta}
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#services" className="btn-secondary w-full justify-center sm:w-auto">
              {dict.hero.secondaryCta}
            </a>
          </div>

          <div className="space-y-4">
            {dict.hero.usps.map((usp: string, i: number) => (
              <div
                key={i}
                className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400"
              >
                <span className="h-px w-4 bg-primary-500/50" />
                {usp}
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-1 flex justify-center lg:order-2 lg:justify-between">
          <div className="pointer-events-none absolute inset-0 rounded-full bg-primary-500/10 blur-[120px]" />
          <div className="relative aspect-square w-full max-w-[550px]">
            <Image
              src="/images/3D_illustration5.webp"
              alt="AI Core"
              fill
              className="animate-float rotate-12 object-contain opacity-90"
              priority
            />
          </div>
        </div>
      </div>

      {/* Tech Marquee Strip */}
      <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden border-y border-white/5 bg-white/[0.01] py-6 backdrop-blur-sm">
        <Marquee speed={40} gradient={false} pauseOnHover>
          <div className="flex gap-12 px-6">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex items-center gap-4">
                <div className="tech-logo-container border border-white/10 bg-white/5">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  )
}
