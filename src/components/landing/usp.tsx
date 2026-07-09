import { type Lang, dictionaries } from "@/lib/i18n"
import { ShieldCheckIcon } from "@heroicons/react/24/outline"

export function UspSection({ lang }: { lang: Lang }) {
  const t = dictionaries[lang]

  return (
    <section className="bg-background py-16 sm:py-24 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl text-left">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            {t.usp.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.usp.desc}
          </p>
        </div>
      </div>
    </section>
  )
}
