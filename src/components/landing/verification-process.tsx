import { type Lang, dictionaries } from "@/lib/i18n"
import { ClipboardDocumentCheckIcon, DocumentMagnifyingGlassIcon, UserGroupIcon } from "@heroicons/react/24/outline"

export function VerificationProcessSection({ lang }: { lang: Lang }) {
  const t = dictionaries[lang]
  const icons = [ClipboardDocumentCheckIcon, DocumentMagnifyingGlassIcon, UserGroupIcon]

  return (
    <section className="bg-card py-16 sm:py-24 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 md:text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            {t.verificationProcess.title}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[28px] left-[16%] right-[16%] h-0.5 bg-border -z-10" />
          
          {t.verificationProcess.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div key={i} className="flex flex-col items-start md:items-center text-left md:text-center relative bg-card">
                <div className="flex size-14 items-center justify-center rounded-full bg-background border-4 border-card text-primary mb-6 ring-1 ring-border shadow-sm">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
