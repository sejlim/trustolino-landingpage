import { CheckBadgeIcon, ChatBubbleBottomCenterTextIcon, ClockIcon } from "@heroicons/react/24/outline"
import { dictionaries, type Lang } from "@/lib/i18n"
import { motion } from "framer-motion"

export function TrustedEducator({ lang }: { lang: Lang }) {
  const t = dictionaries[lang]
  const icons = [CheckBadgeIcon, ChatBubbleBottomCenterTextIcon, ClockIcon]

  return (
    <section id="trusted" className="scroll-mt-20 pt-16 pb-8 sm:pt-24 sm:pb-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl text-left">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.trustedEducator.title}
          </h2>
          <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.trustedEducator.subtitle}
          </p>
        </div>

        <div className="grid max-w-6xl gap-6 md:grid-cols-3">
          {t.trustedEducator.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div
                key={i}
                className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 lg:flex-row lg:items-start"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-extrabold text-foreground">{item.title}</h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
