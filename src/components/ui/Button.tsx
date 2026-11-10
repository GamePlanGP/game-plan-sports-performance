import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const variantClasses = {
  primary: "bg-silver-500 hover:bg-silver-400 text-navy-950",
  secondary:
    "border-2 border-silver-500 text-silver-500 hover:bg-silver-500 hover:text-navy-950",
  cta: "bg-silver-500 hover:bg-silver-400 text-navy-950 font-bold",
  ghost: "text-silver-500 hover:text-silver-400 hover:bg-white/5",
} as const;

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
} as const;

const baseClasses =
  "rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center";

type ButtonBaseProps = {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsLink = ButtonBaseProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type ButtonAsButton = ButtonBaseProps & {
  href?: undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  { variant = "primary", size = "md", className, href, children, ...rest },
  ref,
) {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    const { ...linkProps } = rest as Omit<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      "href"
    >;
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  );
});
