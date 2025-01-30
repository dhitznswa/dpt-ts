import React from "react";
import { cx } from "class-variance-authority";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <>
      <div
        className={cx("w-full p-6 rounded-lg bg-white shadow", className)}
        {...props}
        ref={ref}
      />
    </>
  );
});

Card.displayName = "Card";

export default Card;
