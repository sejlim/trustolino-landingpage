import { type Lang, dictionaries } from "@/lib/i18n"
import { HeartIcon } from "@heroicons/react/24/solid"

export function PromiseSection({ lang }: { lang: Lang }) {
  const t = dictionaries[lang]

  return (
    <section className="bg-primary text-primary-foreground py-16 sm:py-24 border-b border-primary/20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <div className="flex justify-center mb-8">
          <HeartIcon className="size-12 text-accent" />
        </div>
        <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl text-primary-foreground">
          {t.promise.title}
        </h2>
        <p className="mt-6 text-pretty text-xl leading-relaxed text-primary-foreground/90 font-medium">
          {t.promise.desc}
        </p>
      </div>
    </section>
  )
}
