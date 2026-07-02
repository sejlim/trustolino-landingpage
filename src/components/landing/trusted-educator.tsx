import { CheckBadgeIcon, ChatBubbleBottomCenterTextIcon, ClockIcon } from "@heroicons/react/24/outline"
import { dictionaries, type Lang } from "@/lib/i18n"
import { motion } from "framer-motion"

export function TrustedEducator({ lang }: { lang: Lang }) {
  const t = dictionaries[lang]
  const icons = [CheckBadgeIcon, ChatBubbleBottomCenterTextIcon, ClockIcon]

  return (
    <section id="trusted" className="scroll-mt-20 pt-16 pb-8 sm:pt-24 sm:pb-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.trustedEducator.title}
          </h2>
          <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.trustedEducator.subtitle}
          </p>
        </div>

        <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-3">
          {t.trustedEducator.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div
                key={i}
                className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
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
