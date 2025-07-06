import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-terracotta focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-warm-terracotta to-warm-rose text-white shadow-lg hover:shadow-xl hover:scale-105",
        destructive: "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl",
        outline: "border-2 hover:scale-105 bg-transparent",
        secondary: "bg-warm-sand text-warm-charcoal hover:bg-warm-beige shadow-sm hover:shadow-md",
        ghost: "hover:bg-warm-sand/50 hover:text-warm-charcoal",
        link: "underline-offset-4 hover:underline text-warm-terracotta hover:text-warm-rose",
      },
      size: {
        default: "h-11 py-3 px-6",
        sm: "h-9 px-4 rounded-lg text-xs",
        lg: "h-12 px-8 rounded-2xl text-base",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const buttonClass = cn(buttonVariants({ variant, size, className }))
    
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        className: buttonClass,
        ref,
        ...props,
      })
    }

    return (
      <button
        className={buttonClass}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }