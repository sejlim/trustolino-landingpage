import * as React from "react"
import { cn } from "@/lib/utils"

export function CustomInput({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "h-11 w-full rounded-xl border border-input bg-white px-3 py-2 text-base text-zinc-900 transition-[border-color,transform] duration-200 outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}
