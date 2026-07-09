import { type Lang, dictionaries } from "@/lib/i18n"
import { ShieldExclamationIcon } from "@heroicons/react/24/outline"

export function OffPlatformSection({ lang }: { lang: Lang }) {
  const t = dictionaries[lang]

  return (
    <section className="bg-card py-16 sm:py-24 border-b border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-background p-8 md:p-10 shadow-sm flex flex-col md:flex-row gap-8 items-start">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <ShieldExclamationIcon className="size-8" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground mb-3">
              {t.offPlatform.title}
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              {t.offPlatform.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
