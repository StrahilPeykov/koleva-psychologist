import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-soft-blue focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-soft-blue text-white shadow-sm hover:bg-steel-blue",
        destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
        outline: "border border-gray-200 bg-transparent hover:bg-gray-50",
        secondary: "bg-gray-100 text-charcoal hover:bg-gray-200",
        ghost: "hover:bg-gray-100 hover:text-charcoal",
        link: "underline-offset-4 hover:underline text-soft-blue hover:text-steel-blue",
      },
      size: {
        default: "h-10 py-2.5 px-5",
        sm: "h-8 px-3 rounded-md text-xs",
        lg: "h-12 px-6 rounded-lg text-base",
        icon: "h-9 w-9 rounded-lg",
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