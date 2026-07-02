import { Link } from "@tanstack/react-router"
import { HeartIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid"
import { dictionaries, type Lang } from "@/lib/i18n"
import { Logo } from "@/components/landing/brand"

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = dictionaries[lang]

  return (
    <footer className="flex justify-center px-4 pt-0 sm:px-6">
      <div className="w-full max-w-6xl rounded-t-[2rem] border border-b-0 border-border bg-card px-6 py-8 md:px-10 md:py-12">
        <div className="flex flex-row items-center justify-between gap-4 md:grid md:grid-cols-2 md:items-start md:gap-10">
          {/* Brand column */}
          <div className="flex flex-col items-start gap-4 text-left">
            <div onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}>
              <Logo variant="logo" lang={lang} />
            </div>
            <p className="hidden max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground md:block">
              {t.footer.tagline}
            </p>
          </div>

          {/* Legal column */}
          <div className="flex flex-col items-end gap-1 md:items-start md:gap-4">
            <p className="hidden text-xs font-extrabold uppercase tracking-widest text-muted-foreground md:block">
              {t.footer.legalLabel}
            </p>
            <nav className="flex flex-col items-end gap-2 md:items-start md:gap-3">
              <Link
                to={lang === "de" ? "/impressum" : "/en/legal"}
                className="cursor-pointer text-sm font-bold text-muted-foreground transition-colors duration-200 hover:text-foreground active:scale-[0.96]"
              >
                {t.footer.imprint}
              </Link>
              <Link
                to={lang === "de" ? "/datenschutz" : "/en/privacy"}
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
