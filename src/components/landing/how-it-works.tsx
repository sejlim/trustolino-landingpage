import { UserIcon, CalendarDaysIcon, ShieldCheckIcon, DocumentTextIcon } from "@heroicons/react/24/outline"
import { dictionaries, type Lang } from "@/lib/i18n"

export function HowItWorks({ lang }: { lang: Lang }) {
  const t = dictionaries[lang]
  const icons = [UserIcon, CalendarDaysIcon, ShieldCheckIcon, DocumentTextIcon]

  return (
    <section id="howItWorks" className="scroll-mt-20 bg-secondary/40 py-16 sm:py-24 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.howItWorks.title}
          </h2>
          <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2">
          {t.howItWorks.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div
                key={i}
                className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="text-lg font-extrabold text-foreground">{item.title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
