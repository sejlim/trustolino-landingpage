import { useEffect, useState } from "react"
import { dictionaries, type Lang } from "@/lib/i18n"

const LAUNCH_DATE = import.meta.env.VITE_COUNTDOWN_TARGET || "2026-09-01T10:00:00+02:00"

function getRemaining(target: number) {
  const diff = Math.max(0, target - Date.now())
  const days = Math.floor(diff / 86_400_000)
  const hours = Math.floor((diff % 86_400_000) / 3_600_000)
  const minutes = Math.floor((diff % 3_600_000) / 60_000)
  const seconds = Math.floor((diff % 60_000) / 1000)
  return { diff, days, hours, minutes, seconds }
}

export function Countdown({ lang, variant = "light" }: { lang: Lang; variant?: "light" | "dark" }) {
  const t = dictionaries[lang]
  const target = new Date(LAUNCH_DATE).getTime()
  const [time, setTime] = useState(() => getRemaining(target))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTime(getRemaining(target))
    const id = setInterval(() => setTime(getRemaining(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = [
    { value: time.days, label: t.countdown.days },
    { value: time.hours, label: t.countdown.hours },
    { value: time.minutes, label: t.countdown.minutes },
    { value: time.seconds, label: t.countdown.seconds },
  ]

  const isDark = variant === "dark"

  if (mounted && time.diff <= 0) {
    return (
      <p className={`text-balance text-center text-lg font-extrabold ${isDark ? "text-primary-foreground" : "text-primary"}`}>
        {t.countdown.live}
      </p>
    )
  }

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      {units.map((u, i) => (
        <div key={i} className="flex flex-col items-center gap-1.5">
          <div
            key={u.value}
            className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 text-2xl font-extrabold tabular-nums sm:h-20 sm:w-20 sm:text-3xl ${
              isDark
                ? "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground"
                : "border-border bg-card text-foreground"
            }`}
          >
            {mounted ? String(u.value).padStart(2, "0") : "--"}
          </div>
          <span
            className={`text-xs font-bold uppercase tracking-wide ${
              isDark ? "text-primary-foreground/70" : "text-muted-foreground"
            }`}
          >
            {u.label}
          </span>
        </div>
      ))}
    </div>
  )
}
