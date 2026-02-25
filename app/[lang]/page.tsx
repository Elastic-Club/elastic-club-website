import { dictionaries } from '@/app/i18n/dictionaries'
import Hero from '@/components/sections/Hero'
import Vision from '@/components/sections/Vision'
import Services from '@/components/sections/Services'
import Expertise from '@/components/sections/Expertise'
import CaseStudies from '@/components/sections/CaseStudies'
import TechStack from '@/components/sections/TechStack'
import Contact from '@/components/sections/Contact'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'vn' }]
}

export default function Page({ params }: { params: { lang: 'en' | 'vn' } }) {
  const dict = dictionaries[params.lang]

  return (
    <>
      <Hero dict={dict} lang={params.lang} />
      <Services dict={dict} />
      <Expertise dict={dict} />
      <CaseStudies dict={dict} />
      <Vision dict={dict} />
      <TechStack dict={dict} />
      <Contact dict={dict} />
    </>
  )
}
