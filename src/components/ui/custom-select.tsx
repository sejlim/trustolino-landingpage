import { useEffect, useRef, useState } from "react"
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/16/solid"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

type Option = { value: string; label: string }

export function CustomSelect({
  options,
  value,
  onChange,
  placeholder,
}: {
  options: Option[]
  value: string
  onChange: (value: string) => void
  placeholder: string
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const selected = options.find((o) => o.value === value)

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          "h-11 w-full cursor-pointer rounded-xl border border-input bg-card px-3 pr-10 text-left text-base transition-[border-color,transform] duration-200 outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.98] md:text-sm",
          value ? "text-foreground" : "text-muted-foreground"
        )}
      >
        {selected ? selected.label : placeholder}
        <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground transition-transform duration-200" style={{ transform: open ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)' }} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
            className="absolute z-50 mt-1 w-full overflow-hidden rounded-xl border border-border bg-popover py-1 origin-top"
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value)
                  setOpen(false)
                }}
                className={cn(
                  "flex w-full cursor-pointer items-center gap-2 px-3 py-2.5 text-left text-sm transition-colors hover:bg-accent hover:text-accent-foreground active:scale-[0.98]",
                  opt.value === value && "bg-accent/50 font-medium text-accent-foreground"
                )}
              >
                <span className="flex-1">{opt.label}</span>
                {opt.value === value && <CheckIcon className="size-4 shrink-0" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
