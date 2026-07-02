import { dictionaries, type Lang } from "@/lib/i18n"
import { LanguageToggle, Logo } from "@/components/landing/brand"

export function SiteHeader({ lang }: { lang: Lang }) {
  const t = dictionaries[lang]

  const links = [
    { href: "#howItWorks", label: t.nav.features },
    { href: "#business-model", label: t.nav.businessModel },
    { href: "#trusted", label: t.nav.trustedEducator },
  ]

  return (
    <header className="absolute left-0 right-0 top-0 z-50 flex justify-center px-4 pt-0 sm:px-6">
      <div className="flex w-full max-w-6xl items-center justify-between gap-2 rounded-b-[2rem] border border-t-0 border-border bg-card px-4 py-2.5 sm:gap-4 sm:px-6">
        <div className="shrink-0">
          <Logo lang={lang} />
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 text-sm font-bold text-muted-foreground lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="cursor-pointer rounded-lg px-3 py-1.5 transition-[color,background-color,transform] duration-200 hover:bg-primary hover:text-white active:scale-[0.96]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle lang={lang} />
        </div>
      </div>
    </header>
  )
}
