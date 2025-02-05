import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex w-full px-3 py-1 bg-transparent placeholder:text-slate-400 text-sm focus:border-primary focus:ring-0 focus:outline-0 font-medium",
  {
    variants: {
      variant: {
        default: "border-2 border-slate-400 rounded-md",
        outline: "border-b border-slate-400",
        textOnly: "focus:text-primary",
        outline_error: "border-b border-red-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant, className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={inputVariants({ variant, className })}
        {...props}
        ref={ref}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
