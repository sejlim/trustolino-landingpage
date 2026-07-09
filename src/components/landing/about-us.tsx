import { type Lang, dictionaries } from "@/lib/i18n"

export function AboutUsSection({ lang }: { lang: Lang }) {
  const t = dictionaries[lang]

  return (
    <section id="team" className="scroll-mt-20 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl text-left mb-16">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            {t.aboutUs.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.aboutUs.desc}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {t.aboutUs.team.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="size-24 rounded-full bg-muted mb-4 overflow-hidden ring-1 ring-border shadow-sm flex items-center justify-center text-muted-foreground font-medium text-xs">
                {/* Fallback image style since it's demo images */}
                Demo Image
              </div>
              <h4 className="font-extrabold text-foreground">{member.name}</h4>
              <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
