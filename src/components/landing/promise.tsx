import { type Lang, dictionaries } from "@/lib/i18n"
import { HeartIcon } from "@heroicons/react/24/solid"

export function PromiseSection({ lang }: { lang: Lang }) {
  const t = dictionaries[lang]

  return (
    <section className="bg-primary text-primary-foreground py-16 sm:py-24 border-b border-primary-foreground/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl text-left">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl text-primary-foreground">
            {t.promise.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
            {t.promise.desc}
          </p>
        </div>
      </div>
    </section>
  )
}
