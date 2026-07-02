import { ReceiptPercentIcon, CurrencyEuroIcon, ShieldCheckIcon } from "@heroicons/react/24/outline"
import { dictionaries, type Lang } from "@/lib/i18n"
import { motion } from "framer-motion"

export function BusinessModel({ lang }: { lang: Lang }) {
  const t = dictionaries[lang]

  return (
    <section id="business-model" className="scroll-mt-20 py-16 sm:py-24 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl text-left">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.businessModel.title}
          </h2>
          <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.businessModel.subtitle}
          </p>
        </div>

        <div className="grid max-w-5xl gap-6 md:grid-cols-2">
          {/* Fee block */}
          <div className="flex h-full items-start gap-4 rounded-3xl border border-border bg-card p-6">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <ReceiptPercentIcon className="size-5" aria-hidden />
            </span>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-lg font-extrabold text-foreground">{t.businessModel.feeTitle}</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{t.businessModel.feeDesc}</p>
            </div>
          </div>

          {/* Privacy block */}
          <div className="flex h-full items-start gap-4 rounded-3xl border border-border bg-card p-6">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <ShieldCheckIcon className="size-5" aria-hidden />
            </span>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-lg font-extrabold text-foreground">{t.businessModel.privacyTitle}</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{t.businessModel.privacyDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
