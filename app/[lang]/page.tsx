import { dictionaries } from '@/app/i18n/dictionaries'
import Hero from '@/components/sections/Hero'
import Vision from '@/components/sections/Vision'
import Services from '@/components/sections/Services'
import Expertise from '@/components/sections/Expertise'
import CaseStudies from '@/components/sections/CaseStudies'
import HomeProducts from '@/components/sections/HomeProducts'
import Team from '@/components/sections/Team'
import TechStack from '@/components/sections/TechStack'
import Contact from '@/components/sections/Contact'
import { Metadata } from 'next'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'vn' }]
}

export async function generateMetadata({
  params,
}: {
  params: { lang: 'en' | 'vn' }
}): Promise<Metadata> {
  const dict = dictionaries[params.lang]

  return {
    title: dict.hero.title,
    description: dict.vision.description,
    openGraph: {
      title: dict.hero.title,
      description: dict.vision.description,
    },
  }
}

export default function Page({ params }: { params: { lang: 'en' | 'vn' } }) {
  const dict = dictionaries[params.lang]

  return (
    <>
      <Hero dict={dict} lang={params.lang} />
      <Services dict={dict} />
      <Expertise dict={dict} />
      <HomeProducts dict={dict} lang={params.lang} />
      <CaseStudies dict={dict} />
      <Team dict={dict} />
      <Vision dict={dict} />
      <TechStack dict={dict} />
      <Contact dict={dict} />
    </>
  )
}
