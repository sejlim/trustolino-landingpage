import { useLocation } from "@tanstack/react-router"
import { dictionaries } from "@/lib/i18n"
import { Button } from "./ui/button"
import { Link } from "@tanstack/react-router"

export function NotFound() {
  const location = useLocation()
  const isEn = location.pathname.startsWith('/en')
  const lang = isEn ? "en" : "de"
  const t = dictionaries[lang]

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-6xl font-extrabold text-primary">404</h1>
      <h2 className="mb-4 text-2xl font-bold">{t.common.notFoundTitle}</h2>
      <p className="mb-8 text-muted-foreground max-w-md">
        {t.common.notFoundDesc}
      </p>
      <Button asChild size="lg">
        <Link to={lang === "de" ? "/" : "/en"}>
          {t.common.notFoundCta}
        </Link>
      </Button>
    </div>
  )
}
