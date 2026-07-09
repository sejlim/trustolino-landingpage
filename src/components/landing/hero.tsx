import { HeartIcon, PlayIcon } from "@heroicons/react/16/solid"
import { dictionaries, type Lang } from "@/lib/i18n"
import { motion } from "framer-motion"

export function Hero({ lang }: { lang: Lang }) {
  const t = dictionaries[lang]

  return (
    <section id="top" className="relative min-h-dvh overflow-hidden bg-background border-b border-border">
      <div className="mx-auto grid min-h-[inherit] w-full max-w-6xl items-center gap-10 px-4 pb-16 pt-24 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pb-24 lg:pt-28">
        <div className="flex flex-col items-start gap-6 text-left">
          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {t.hero.titleA}
            <br />
            <span className="relative whitespace-nowrap text-primary">
              {t.hero.titleHighlight}
              <span className="absolute -bottom-1 left-0 -z-10 h-3 w-full rounded-full bg-accent/60" />
            </span>
          </h1>

          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.hero.intro}
          </p>

          <div className="flex flex-col items-start gap-4 pt-4">
            <a
              href="#signup"
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-accent border border-border px-8 text-lg font-extrabold text-accent-foreground transition-[transform,background-color] hover:bg-accent/90 active:scale-[0.96]"
            >
              {t.hero.ctaPrimary}
            </a>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-muted-foreground">
              {t.hero.trustBadges.map((badge, i) => (
                <span key={i} className="flex items-center gap-2">
                  {badge}
                  {i < t.hero.trustBadges.length - 1 && (
                    <span className="opacity-50">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

        </div>

        <div className="relative hidden w-full max-w-md ml-auto justify-end lg:flex lg:max-w-xl lg:pl-10">
          <img 
            src="/icon.svg" 
            alt="Trustolino Dino" 
            className="w-full h-auto object-contain object-right scale-110 origin-right" 
          />
        </div>
      </div>
    </section>
  );
}
