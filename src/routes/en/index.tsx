import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/landing/hero'
import { TrustedEducator } from '@/components/landing/trusted-educator'
import { HowItWorks } from '@/components/landing/how-it-works'
import { BusinessModel } from '@/components/landing/business-model'
import { SignupForm } from '@/components/landing/signup-form'

export const Route = createFileRoute('/en/')({
  component: Index,
  head: () => ({
    meta: [
      { title: 'Trustolino | Become a Trusted Educator' },
      { name: 'description', content: 'The stress-free app for childcare. Register now as a caregiver, secure early benefits, and join the Trustolino community!' },
      { property: 'og:title', content: 'Trustolino | Become a Trusted Educator' },
      { property: 'og:description', content: 'The stress-free app for childcare. Register now as a caregiver, secure early benefits, and join the Trustolino community!' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/logo.png' },
    ]
  })
})

function Index() {
  return (
    <main>
      <Hero lang="en" />
      <HowItWorks lang="en" />
      <BusinessModel lang="en" />
      <TrustedEducator lang="en" />
      <div className="border-t border-border bg-background">
        <SignupForm lang="en" />
      </div>
    </main>
  )
}
