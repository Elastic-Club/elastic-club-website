'use client'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'

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
      {/* Background Frame Lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-20 w-20 border-l border-t border-white/20" />
        <div className="absolute right-10 top-10 h-20 w-20 border-r border-t border-white/20" />
        <div className="absolute bottom-10 left-10 h-20 w-20 border-b border-l border-white/20" />
        <div className="absolute bottom-10 right-10 h-20 w-20 border-b border-r border-white/20" />

        <div className="absolute left-10 top-10 h-1.5 w-1.5 bg-cyan-500" />
        <div className="absolute right-10 top-10 h-1.5 w-1.5 bg-cyan-500" />
        <div className="absolute bottom-10 left-10 h-1.5 w-1.5 bg-cyan-500" />
        <div className="absolute bottom-10 right-10 h-1.5 w-1.5 bg-cyan-500" />
      </div>

      <div className="container z-10 mx-auto grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="order-2 pt-10 lg:order-1">
          <div className="section-label">
            <span className="mr-2 inline-block animate-pulse">●</span>
            {lang === 'en' ? 'Strategic AI Partner' : 'Đối tác AI Chiến lược'}
          </div>

          <h1 className="mb-8 text-5xl font-black uppercase leading-[0.95] tracking-tighter text-white md:text-7xl xl:text-8xl">
            <span className="block bg-gradient-to-br from-white via-white to-gray-700 bg-clip-text text-transparent">
              {lang === 'en' ? 'Unlocking' : 'Đối tác'}
            </span>
            <span className="relative">
              {lang === 'en' ? 'New Limits' : 'AI Chiến lược'}
              <span className="animate-blink absolute -right-4 top-0 h-full w-1 bg-cyan-500" />
            </span>
          </h1>

          <p className="mb-10 max-w-xl border-l border-white/10 pl-8 text-lg leading-relaxed text-gray-400">
            {dict.hero.subtitle}
          </p>

          <div className="mb-12 flex flex-col gap-6 sm:flex-row">
            <a href="#contact" className="btn-primary group">
              {dict.hero.cta}
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#services" className="btn-secondary">
              {dict.hero.secondaryCta}
            </a>
          </div>

          <div className="space-y-4">
            {dict.hero.usps.map((usp: string, i: number) => (
              <div
                key={i}
                className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500"
              >
                <span className="h-px w-4 bg-cyan-500/50" />
                {usp}
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="pointer-events-none absolute inset-0 rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="relative aspect-square w-full max-w-[500px]">
            <Image
              src="/images/3D_Illustration1.png"
              alt="AI Core"
              fill
              className="animate-float bw-image object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Tech Marquee Strip */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-y border-white/5 bg-white/[0.02] py-6 backdrop-blur-sm">
        <Marquee speed={40} gradient={false} pauseOnHover>
          <div className="flex gap-12 px-6">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex items-center gap-4">
                <div className="tech-logo-container">
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
