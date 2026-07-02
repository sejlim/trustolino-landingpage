import { Link } from "@tanstack/react-router"
import type { Lang } from "@/lib/i18n"

export function Logo({ className, variant = "label", lang = "de" }: { className?: string; variant?: "label" | "logo"; lang?: Lang }) {
  const isLogo = variant === "logo"
  return (
    <a href={lang === "de" ? "/" : "/en"} className={`flex items-center gap-2 cursor-pointer ${className ?? ""}`} aria-label="Trustolino">
      <img
        src={isLogo ? "/logo.svg" : "/label.svg"}
        alt="Trustolino"
        width={isLogo ? 220 : 120}
        height={isLogo ? 60 : 20}
        className={isLogo ? "h-14 w-auto object-contain md:h-16 transition-transform duration-200 active:scale-[0.96]" : "h-5 w-auto object-contain md:h-6 transition-transform duration-200 active:scale-[0.96]"}
      />
    </a>
  )
}

export function LanguageToggle({ lang }: { lang: Lang }) {
  // If we are on German page, show EN button to go to /en
  // If we are on English page, show DE button to go to /
  
  if (lang === "de") {
    return (
      <Link
        to="/en"
        className="inline-flex h-9 items-center justify-center rounded-xl bg-accent border border-border px-4 py-2 text-sm font-extrabold text-accent-foreground transition-[transform,background-color] hover:bg-accent/90 cursor-pointer active:scale-[0.96] duration-200"
        aria-label="Switch to English"
      >
        EN
      </Link>
    )
  }

  return (
    <Link
      to="/"
      className="inline-flex h-9 items-center justify-center rounded-xl bg-accent border border-border px-4 py-2 text-sm font-extrabold text-accent-foreground shadow-sm transition-[transform,background-color] hover:bg-accent/90 cursor-pointer active:scale-[0.96] duration-200"
      aria-label="Auf Deutsch wechseln"
    >
      DE
    </Link>
  )
}
