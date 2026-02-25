'use client'

import Image from 'next/image'

const techs = [
  { name: 'Rust', logo: '/logo/technologies/rust-logo.png', type: 'High Perf' },
  { name: 'TypeScript', logo: '/logo/technologies/typescript.png', type: 'Frontend/Backend' },
  { name: 'Node.js', logo: '/logo/technologies/nodejs-logo.svg', type: 'Runtime' },
  { name: 'React', logo: '/logo/technologies/react-logo.png', type: 'UI' },
  { name: 'LangGraph', logo: '/logo/technologies/langgraph-logo.png', type: 'AI Agent' },
  { name: 'CrewAI', logo: '/logo/technologies/crewai-logo.png', type: 'Orchestration' },
  { name: 'n8n', logo: '/logo/technologies/n8n-logo.jpg', type: 'Automation' },
  { name: 'vLLM', logo: '/logo/technologies/vllm-logo.png', type: 'Inference' },
]

export default function TechStack({ dict }: { dict: any }) {
  return (
    <section className="border-b border-white/5 py-32">
      <div className="container mx-auto px-6">
        <div className="mb-24 flex flex-col items-center justify-between md:flex-row">
          <div className="section-label mb-0">{dict.techStack.title}</div>
          <div className="mx-8 hidden h-px flex-1 bg-white/10 md:block" />
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-600">
            {'// POWERED BY MODERN STACK'}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-4">
          {techs.map((tech, i) => (
            <div
              key={i}
              className="group flex cursor-default flex-col items-center justify-center bg-[#050505] p-12 transition-all duration-500 hover:bg-[#080808]"
            >
              <div className="tech-logo-container mb-6 scale-125">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="mb-2 text-sm font-bold uppercase tracking-widest text-gray-400 transition-colors group-hover:text-white">
                {tech.name}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-500 opacity-0 transition-opacity group-hover:opacity-100">
                {tech.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
