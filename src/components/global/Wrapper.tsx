import React from "react";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const Wrapper = React.forwardRef<HTMLElement, Props>(
  ({ id, className, children, ...props }, ref) => {
    return (
      <section
        id={id}
        className={cn(
          "h-full mx-auto w-full px-6 md:px-12 lg:px-4 py-16 md:py-24",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Wrapper.displayName = "Wrapper";

export default Wrapper;
