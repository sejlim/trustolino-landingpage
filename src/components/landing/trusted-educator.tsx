import { 
  CheckBadgeIcon, 
  ChatBubbleBottomCenterTextIcon, 
  ClockIcon,
  ClipboardDocumentCheckIcon, 
  DocumentMagnifyingGlassIcon, 
  UserGroupIcon 
} from "@heroicons/react/24/outline"
import { dictionaries, type Lang } from "@/lib/i18n"
import { motion } from "framer-motion"

export function TrustedEducator({ lang }: { lang: Lang }) {
  const t = dictionaries[lang]
  const icons = [CheckBadgeIcon, ChatBubbleBottomCenterTextIcon, ClockIcon]
  const verificationIcons = [ClipboardDocumentCheckIcon, DocumentMagnifyingGlassIcon, UserGroupIcon]

  return (
    <section id="trusted" className="scroll-mt-20 bg-primary pt-16 sm:pt-24 border-b border-primary-foreground/10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="mb-12 max-w-2xl text-left">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl text-primary-foreground">
            {t.trustedEducator.title}
          </h2>
          <p className="mt-3 text-pretty text-lg leading-relaxed text-primary-foreground/80">
            {t.trustedEducator.subtitle}
          </p>
        </div>

        <div className="grid max-w-6xl gap-6 md:grid-cols-3">
          {t.trustedEducator.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div
                key={i}
                className="flex items-start gap-4 rounded-3xl border border-primary-foreground/20 bg-primary-foreground/10 p-6"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-extrabold text-primary-foreground">{item.title}</h3>
                  <p className="text-pretty text-sm leading-relaxed text-primary-foreground/80">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <hr className="border-t border-primary-foreground/10 w-full" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-12 max-w-2xl text-left">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl text-primary-foreground">
            {t.verificationProcess.title}
          </h2>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-3">
          {t.verificationProcess.items.map((item, i) => {
            const Icon = verificationIcons[i]
            return (
              <div
                key={i}
                className="flex items-start gap-4 rounded-3xl border border-primary-foreground/20 bg-primary-foreground/10 p-6"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-extrabold text-primary-foreground">{item.title}</h3>
                  <p className="text-pretty text-sm leading-relaxed text-primary-foreground/80">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
