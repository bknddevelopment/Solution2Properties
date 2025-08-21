import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 font-button min-h-[48px]",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-gold to-gold-dark text-navy hover:from-gold-light hover:to-gold hover:shadow-lg hover:translate-y-[-2px] active:translate-y-0",
        secondary:
          "bg-gradient-to-b from-navy to-navy-dark text-white hover:from-navy-light hover:to-navy hover:shadow-lg hover:translate-y-[-2px] active:translate-y-0",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
        outline:
          "border-2 border-navy bg-transparent text-navy hover:bg-navy hover:text-white active:bg-navy-dark",
        ghost:
          "hover:bg-gray-100 hover:text-navy active:bg-gray-200",
        link: 
          "text-gold underline-offset-4 hover:underline hover:text-gold-dark min-h-0",
        premium:
          "bg-gradient-to-b from-gold to-gold-dark text-navy hover:from-gold-light hover:to-gold hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0 font-bold",
        glass:
          "bg-white/90 backdrop-blur-sm border border-gray-200 text-navy hover:bg-white active:bg-gray-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-xs",
        lg: "h-11 px-6 text-base",
        xl: "h-12 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }