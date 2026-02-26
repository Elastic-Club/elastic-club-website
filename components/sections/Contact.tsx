'use client'

import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function Contact({ dict }: { dict: any }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="relative bg-black px-6 py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-start gap-24 lg:grid-cols-2">
          <div className="relative">
            <div className="section-label">{dict.nav.contact}</div>
            <h2 className="mb-12 text-4xl font-black uppercase leading-[0.85] sm:text-5xl md:text-8xl">
              {dict.cta.title.split(' ').map((word: string, i: number) => (
                <span key={i} className={i % 2 !== 0 ? 'text-gray-700' : ''}>
                  {word} {i === 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="mb-16 max-w-md text-lg leading-relaxed text-gray-400 md:text-xl">
              {dict.cta.description}
            </p>

            <div className="space-y-10">
              <div className="group flex flex-col gap-2 text-center sm:text-left">
                <a
                  href={siteMetadata.consultingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary justify-center sm:justify-start"
                >
                  {dict.cta.primary} <span className="ml-4">→</span>
                </a>
              </div>

              <div className="group flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-600">
                  {'// Electronic Mail'}
                </span>
                <a
                  href="mailto:team@elasticlabs.org"
                  className="text-2xl font-bold text-white transition-colors hover:text-cyan-400 sm:text-3xl"
                >
                  team@elasticlabs.org
                </a>
              </div>
            </div>
          </div>

          <div className="group_relative group relative">
            <div className="pointer-events-none absolute -inset-4 border border-white/[0.03] md:-inset-10" />
            <div className="absolute -top-4 left-4 h-2 w-2 bg-gray-800 md:-top-10 md:left-10" />
            <div className="absolute -top-4 right-4 h-2 w-2 bg-gray-800 md:-top-10 md:right-10" />
            <div className="absolute -bottom-4 -left-4 h-2 w-2 bg-gray-800 md:-bottom-10 md:-left-10" />
            <div className="absolute -bottom-4 -right-4 h-2 w-2 bg-gray-800 md:-bottom-10 md:-right-10" />

            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden border border-white/10 bg-[#0A0A0A] p-8 sm:p-12"
            >
              <div className="absolute left-0 top-0 h-1 w-full overflow-hidden bg-cyan-500/20">
                <div className="beam-line h-full w-full" />
              </div>

              {status === 'success' ? (
                <div className="py-20 text-center">
                  <div className="mb-6 text-5xl">✓</div>
                  <h3 className="mb-4 text-2xl font-black uppercase text-white">
                    Transmission Successful
                  </h3>
                  <p className="text-gray-500">
                    We have received your request and will get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-10 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-500"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
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
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="NAME / ORGANIZATION"
                        className="border-b border-white/10 bg-transparent py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors placeholder:text-gray-800 focus:border-cyan-500 focus:outline-none"
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
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="EMAIL ADDRESS"
                        className="border-b border-white/10 bg-transparent py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors placeholder:text-gray-800 focus:border-cyan-500 focus:outline-none"
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
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="TYPE YOUR MESSAGE HERE..."
                      className="resize-none border border-white/10 bg-transparent p-6 text-sm font-bold uppercase tracking-widest text-white transition-colors placeholder:text-gray-800 focus:border-cyan-500 focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary group w-full justify-center disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Transmitting...' : dict.cta.secondary}{' '}
                    <span className="transition-transform group-hover:translate-x-2">→</span>
                  </button>

                  {status === 'error' && (
                    <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-red-500">
                      Error in transmission. Please try again.
                    </p>
                  )}
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
