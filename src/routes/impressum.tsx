import { createFileRoute } from '@tanstack/react-router'
import { dictionaries } from '@/lib/i18n'

export const Route = createFileRoute('/impressum')({
  component: Impressum,
  head: () => ({
    meta: [
      { title: 'Impressum | Trustolino' }
    ]
  })
})

function Impressum() {
  const t = dictionaries.de

  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-32">
      <div className="prose prose-slate dark:prose-invert">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
          {t.legal.imprintTitle}
        </h1>
        <div className="mt-8 whitespace-pre-wrap text-muted-foreground leading-relaxed">
          {t.legal.imprintContent}
        </div>
      </div>
    </main>
  )
}
