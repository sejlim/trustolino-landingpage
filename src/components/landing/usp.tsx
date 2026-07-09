import { type Lang, dictionaries } from "@/lib/i18n"
import { ShieldCheckIcon } from "@heroicons/react/24/outline"

export function UspSection({ lang }: { lang: Lang }) {
  const t = dictionaries[lang]

  return (
    <section className="border-b border-border bg-card py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10">
            <ShieldCheckIcon className="size-7 text-primary" aria-hidden="true" />
          </div>
        </div>
        <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
          {t.usp.title}
        </h2>
        <p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground">
          {t.usp.desc}
        </p>
      </div>
    </section>
  )
}
