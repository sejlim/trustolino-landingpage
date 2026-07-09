import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/landing/hero'
import { UspSection } from '@/components/landing/usp'
import { HowItWorks } from '@/components/landing/how-it-works'
import { BusinessModel } from '@/components/landing/business-model'
import { VerificationProcessSection } from '@/components/landing/verification-process'
import { TrustedEducator } from '@/components/landing/trusted-educator'
import { AboutUsSection } from '@/components/landing/about-us'
import { PromiseSection } from '@/components/landing/promise'
import { OffPlatformSection } from '@/components/landing/off-platform'
import { SignupForm } from '@/components/landing/signup-form'

export const Route = createFileRoute('/')({
  component: Index,
  head: () => ({
    meta: [
      { title: 'Trustolino | Werde Trusted Educator' },
      { name: 'description', content: 'Die stressfreie App für Kinderbetreuung. Registriere dich jetzt als Betreuer, sichere dir Vorteile und werde Teil der Trustolino-Community!' },
      { property: 'og:title', content: 'Trustolino | Werde Trusted Educator' },
      { property: 'og:description', content: 'Die stressfreie App für Kinderbetreuung. Registriere dich jetzt als Betreuer, sichere dir Vorteile und werde Teil der Trustolino-Community!' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/logo.png' },
    ]
  })
})

function Index() {
  return (
    <main>
      <Hero lang="de" />
      <UspSection lang="de" />
      <HowItWorks lang="de" />
      <BusinessModel lang="de" />
      <VerificationProcessSection lang="de" />
      <TrustedEducator lang="de" />
      <AboutUsSection lang="de" />
      <PromiseSection lang="de" />
      <OffPlatformSection lang="de" />
      <div className="border-t border-border bg-background">
        <SignupForm lang="de" />
      </div>
    </main>
  )
}
