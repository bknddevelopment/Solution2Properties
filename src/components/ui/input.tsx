import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  variant?: 'default' | 'premium' | 'glass'
}

function Input({ className, type, variant = 'default', ...props }: InputProps) {
  const variants = {
    default: "border-gray-200 bg-white dark:bg-navy/30 dark:border-white/10",
    premium: "border-gold/30 bg-gradient-to-r from-white to-gray-50 dark:from-navy/50 dark:to-navy/30 shadow-sm hover:shadow-gold/20",
    glass: "glass-premium border-white/20"
  }

  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-gold selection:text-navy-dark flex h-12 w-full min-w-0 rounded-lg border-2 px-4 py-3 text-base font-medium transition-all duration-300 outline-none file:inline-flex file:h-10 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus:border-gold focus:ring-2 focus:ring-gold focus:ring-offset-2 hover:border-gold/50",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Input }
