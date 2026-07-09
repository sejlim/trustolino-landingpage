import { UserIcon, CalendarDaysIcon, ShieldCheckIcon, DocumentTextIcon, InformationCircleIcon } from "@heroicons/react/24/outline"
import { dictionaries, type Lang } from "@/lib/i18n"

export function HowItWorks({ lang }: { lang: Lang }) {
  const t = dictionaries[lang]
  const icons = [UserIcon, CalendarDaysIcon, DocumentTextIcon]

  return (
    <section id="howItWorks" className="scroll-mt-20 bg-primary py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        
        {/* Info Box: Begriffsstrategie */}
        <div className="mb-16 rounded-3xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground text-primary">
            <InformationCircleIcon className="size-8" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-primary-foreground mb-2">
              {t.howItWorks.infoTitle}
            </h3>
            <p className="text-pretty text-base leading-relaxed text-primary-foreground/90">
              {t.howItWorks.infoText}
            </p>
          </div>
        </div>

        <div className="mb-16 max-w-2xl text-left">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl text-primary-foreground">
            {t.howItWorks.title}
          </h2>
          <p className="mt-3 text-pretty text-lg leading-relaxed text-primary-foreground/80">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-2">
          {t.howItWorks.items.map((item, i) => {
            const Icon = icons[i] || DocumentTextIcon
            // Make the 3rd item span 2 columns on desktop
            const isLast = i === 2
            
            return (
              <div
                key={i}
                className={`flex items-start gap-4 rounded-3xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 ${isLast ? 'md:col-span-2' : ''}`}
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-extrabold text-primary-foreground">{item.title}</h3>
                  <p className="text-pretty text-sm leading-relaxed text-primary-foreground/80">{item.desc}</p>
                  
                  {/* Small Print if available */}
                  {'smallPrint' in item && item.smallPrint && (
                    <p className="mt-2 text-xs leading-relaxed text-primary-foreground/60 italic">
                      {item.smallPrint}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
