import { Link } from "@tanstack/react-router"
import { HeartIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid"
import { dictionaries, type Lang } from "@/lib/i18n"
import { Logo } from "@/components/landing/brand"

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = dictionaries[lang]

  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary/30">
      <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Brand column */}
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <div onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}>
              <Logo variant="logo" lang={lang} />
            </div>
            <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          {/* Legal column */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
              {t.footer.legalLabel}
            </p>
            <nav className="flex flex-col items-center gap-3 md:items-start">
              <Link
                to={lang === "de" ? "/impressum" : "/en/imprint"}
                className="cursor-pointer text-sm font-bold text-muted-foreground transition-colors duration-200 hover:text-foreground active:scale-[0.96]"
              >
                {t.footer.imprint}
              </Link>
              <Link
                to={lang === "de" ? "/datenschutz" : "/en/privacy-policy"}
                className="cursor-pointer text-sm font-bold text-muted-foreground transition-colors duration-200 hover:text-foreground active:scale-[0.96]"
              >
                {t.footer.privacy}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
