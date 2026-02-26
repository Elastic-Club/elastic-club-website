'use client'

import { useState } from 'react'
import Image from 'next/image'
import { clsx } from 'clsx'

export default function Team({ dict }: { dict: any }) {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({})

  const toggleExpand = (i: number) => {
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }))
  }

  return (
    <section id="team" className="relative border-b border-white/5 bg-[#050505] px-6 py-32">
      <div className="container mx-auto">
        <div className="mb-24 text-center">
          <div className="section-label mx-auto inline-flex">{dict.nav.team}</div>
          <h2 className="mb-8 mt-8 text-4xl font-black uppercase leading-[0.9] sm:text-5xl md:text-7xl">
            The Core <br />
            <span className="text-gray-700">Team.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
            {dict.team.subtitle}
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:gap-16 lg:grid-cols-2">
          {dict.team.members.map((member: any, i: number) => (
            <div key={i} className="group relative">
              {/* Decorative Frame */}
              <div className="pointer-events-none absolute -inset-2 border border-white/5 transition-colors group-hover:border-cyan-500/20 md:-inset-4" />

              <div className="relative flex flex-col items-center gap-6 overflow-hidden border border-white/10 bg-[#0A0A0A] p-6 sm:p-8 md:flex-row md:items-start md:gap-8">
                {/* Background Shimmer */}
                <div className="absolute inset-0 animate-[shimmer_20s_infinite_linear] bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%]" />

                <div className="h-32 w-32 shrink-0 border border-white/10 bg-black p-1 md:h-40 md:w-40">
                  <div className="relative h-full w-full overflow-hidden bg-[#111] grayscale transition-all duration-700 hover:grayscale-0">
                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-black uppercase text-gray-800">
                      {member.name
                        .split(' ')
                        .map((n: string) => n[0])
                        .join('')}
                    </div>
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
                      onError={(e) => {
                        ;(e.target as any).style.display = 'none'
                      }}
                    />
                  </div>
                  <div className="absolute -left-1 -top-1 h-2 w-2 bg-cyan-500" />
                  <div className="absolute -bottom-1 -right-1 h-2 w-2 bg-cyan-500" />
                </div>

                <div className="relative flex flex-col text-center md:text-left">
                  <span className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-500">
                    {'// '}
                    {member.role}
                  </span>
                  <h3 className="mb-4 text-3xl font-black uppercase tracking-tighter text-white transition-colors group-hover:text-cyan-400">
                    {member.name}
                  </h3>

                  <div className="relative mb-6">
                    <p
                      className={clsx(
                        'text-sm leading-relaxed text-gray-500 transition-all duration-500',
                        !expanded[i] && 'line-clamp-3'
                      )}
                    >
                      {member.bio}
                    </p>
                    {member.bio.length > 150 && (
                      <button
                        onClick={() => toggleExpand(i)}
                        className="mt-2 font-mono text-[10px] uppercase tracking-widest text-cyan-500 transition-colors hover:text-white"
                      >
                        {expanded[i] ? `[ ${dict.team.readLess} ]` : `[ ${dict.team.readMore} ]`}
                      </button>
                    )}
                  </div>

                  <div className="mt-auto flex justify-center gap-4 md:justify-start">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b border-white/5 pb-1 font-mono text-[10px] uppercase tracking-widest text-gray-700 transition-colors hover:text-white"
                      >
                        LinkedIn
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b border-white/5 pb-1 font-mono text-[10px] uppercase tracking-widest text-gray-700 transition-colors hover:text-white"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
