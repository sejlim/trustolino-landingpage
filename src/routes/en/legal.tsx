import { createFileRoute, Link } from '@tanstack/react-router'
import { dictionaries } from '@/lib/i18n'

export const Route = createFileRoute('/en/legal')({
  component: LegalNotice,
  head: () => ({
    meta: [
      { title: 'Legal Notice | Trustolino' }
    ]
  })
})

function LegalNotice() {
  const t = dictionaries.en

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <div className="prose prose-sm sm:prose-base prose-slate max-w-none text-muted-foreground prose-headings:text-foreground prose-a:text-primary">
        <h1>Legal Notice</h1>
        <p>Information according to § 5 DDG</p>
        <p>
          Max Mustermann
          <br />
          <br />
          Musterstraße 1
          <br />
          12345 Musterstadt <br />
          Germany
        </p>
        <p>
          {" "}
          <strong>Represented by: </strong>
          <br />
          Max Mustermann
          <br />
        </p>
        <p>
          <strong>Contact:</strong> <br />
          Phone: <a href="tel:+49123456789">+49 (0) 123 456 789</a>
          <br />
          Email: <a href="mailto:info@trustolino.de">info@trustolino.de</a>
          <br />
        </p>
        <p>
          <strong>
            Consumer Dispute Resolution / Universal Arbitration Board
          </strong>
          <br />
          We do not participate in dispute resolution proceedings before a consumer arbitration board and are not obliged to do so.
        </p>
        <p>
          Privacy Policy:{" "}
          <Link to="/en/privacy">https://www.trustolino.de/en/privacy</Link>
        </p>
      </div>
    </main>
  )
}
