'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { clsx } from 'clsx'

export default function Navbar({ dict, lang }: { dict: any; lang: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'vn' : 'en'
    const segments = pathname?.split('/') || []
    if (segments.length > 1) {
      segments[1] = newLang
    }
    return segments.join('/')
  }

  const navLinks = [
    { name: dict.nav.home, href: `/${lang}` },
    { name: dict.nav.services, href: `/${lang}#services` },
    { name: dict.nav.expertise, href: `/${lang}#expertise` },
    { name: dict.nav.products, href: `/${lang}/products` },
    { name: dict.nav.cases, href: `/${lang}#cases` },
    { name: dict.nav.process, href: `/${lang}#process` },
    { name: dict.nav.blog, href: `/${lang}/blog` },
  ]

  return (
    <nav
      className={clsx(
        'fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300',
        scrolled || mobileMenuOpen
          ? 'border-white/10 bg-[#050505]/95 py-4 backdrop-blur-md'
          : 'border-transparent bg-transparent py-6'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href={`/${lang}`} className="relative z-[60] h-16 w-16">
          <Image
            src="/logo/White_ShortLogo.png"
            alt="Elastic Labs"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 md:flex">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-primary-400"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="h-6 w-px bg-white/10" />

          <div className="flex items-center gap-6">
            <Link
              href={toggleLang()}
              className="font-mono text-xs text-gray-400 transition-colors hover:text-primary-400"
            >
              {lang === 'en' ? 'VN' : 'EN'}
            </Link>
            <Link
              href={`/${lang}#contact`}
              className="hover:bg-solana-gradient bg-white px-5 py-2 text-sm font-bold uppercase tracking-wide text-black transition-all hover:text-white"
            >
              {dict.nav.contact}
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="relative z-[60] text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={clsx(
                'h-0.5 w-6 bg-white transition-all',
                mobileMenuOpen && 'translate-y-2 rotate-45'
              )}
            />
            <span
              className={clsx('h-0.5 w-6 bg-white transition-all', mobileMenuOpen && 'opacity-0')}
            />
            <span
              className={clsx(
                'h-0.5 w-6 bg-white transition-all',
                mobileMenuOpen && '-translate-y-2 -rotate-45'
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#050505] p-8 pt-32 backdrop-blur-xl md:hidden">
          <div className="mb-auto flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-akira text-3xl uppercase tracking-tighter text-white hover:text-primary-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-8 border-t border-white/10 pt-8 text-center">
            <Link
              href={toggleLang()}
              className="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-primary-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {lang === 'en' ? 'SWITCH TO VIETNAMESE' : 'CHUYỂN SANG TIẾNG ANH'}
            </Link>
            <Link
              href={`/${lang}#contact`}
              className="btn-primary justify-center py-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.nav.contact}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
