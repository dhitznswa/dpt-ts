import React from "react";
import { cva, cx, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center tracking-wide text-sm gap-2 font-medium rounded transition-colors duration-300",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white shadow-sm hover:bg-primary/80",
        secondary: "bg-secondary text-white shadow-sm hover:bg-secondary/80",
        ghost: "bg-slate-300 text-slate-900 shadow-sm hover:bg-slate-300/90",
      },
      size: {
        default: "px-3 py-2",
        sm: "px-2 py-1",
        lg: "px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    return (
      <button
        className={cx(buttonVariants({ variant, size, className }))}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
