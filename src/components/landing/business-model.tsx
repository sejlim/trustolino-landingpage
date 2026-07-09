import { 
  DocumentTextIcon, 
  CreditCardIcon, 
  CalendarDaysIcon,
  ReceiptPercentIcon, 
  CurrencyEuroIcon, 
  ShieldCheckIcon,
  ShieldExclamationIcon
} from "@heroicons/react/24/outline"
import { dictionaries, type Lang } from "@/lib/i18n"

export function BusinessModel({ lang }: { lang: Lang }) {
  const t = dictionaries[lang]
  const featureIcons = [DocumentTextIcon, CreditCardIcon, CalendarDaysIcon]

  return (
    <section id="business-model" className="scroll-mt-20 bg-background py-16 sm:py-24 border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-16 max-w-2xl text-left">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.businessModel.title}
          </h2>
          <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.businessModel.subtitle}
          </p>
        </div>

        {/* The Tools / Features */}
        <div className="mb-16 grid w-full gap-6 md:grid-cols-3">
          {t.appFeatures.items.map((item, i) => {
            const Icon = featureIcons[i]
            return (
              <div
                key={i}
                className="flex h-full items-start gap-4 rounded-3xl border border-border bg-card p-6 sm:p-8"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-extrabold text-foreground">{item.title}</h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  {'smallPrint' in item && item.smallPrint && (
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground/70 italic">
                      {item.smallPrint}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* The Conditions / Pricing */}
        <div className="grid w-full gap-6 md:grid-cols-2">
          {/* Fee block */}
          <div className="flex h-full items-start gap-4 rounded-3xl bg-primary/5 p-6 sm:p-8 border border-primary/10">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <ReceiptPercentIcon className="size-5" aria-hidden />
            </span>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-lg font-extrabold text-foreground">{t.businessModel.feeTitle}</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{t.businessModel.feeDesc}</p>
            </div>
          </div>

          {/* Privacy block */}
          <div className="flex h-full items-start gap-4 rounded-3xl bg-primary/5 p-6 sm:p-8 border border-primary/10">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <ShieldCheckIcon className="size-5" aria-hidden />
            </span>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-lg font-extrabold text-foreground">{t.businessModel.privacyTitle}</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{t.businessModel.privacyDesc}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex w-full items-start gap-4 rounded-3xl border border-primary/10 bg-primary/5 p-6 sm:p-8">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <ShieldExclamationIcon className="size-5" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-1.5">
            <h2 className="text-lg font-extrabold text-foreground">
              {t.offPlatform.title}
            </h2>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              {t.offPlatform.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
