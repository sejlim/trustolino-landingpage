import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/landing/hero'
import { TrustedEducator } from '@/components/landing/trusted-educator'
import { HowItWorks } from '@/components/landing/how-it-works'
import { BusinessModel } from '@/components/landing/business-model'
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
      { property: 'og:image', content: '/logo.svg' },
    ]
  })
})

function Index() {
  return (
    <main>
      <Hero lang="de" />
      <HowItWorks lang="de" />
      <BusinessModel lang="de" />
      <TrustedEducator lang="de" />
      <div className="border-t border-border bg-background">
        <SignupForm lang="de" />
      </div>
    </main>
  )
}
