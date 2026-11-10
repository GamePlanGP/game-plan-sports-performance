import { cn } from "@/lib/utils";

const variantClasses = {
  default: "bg-silver-500/10 text-silver-400",
  accent: "bg-silver-500/10 text-silver-400",
  green: "bg-silver-500 text-navy-950",
  outline: "border border-silver-500/50 text-silver-500",
} as const;

interface BadgeProps {
  children: React.ReactNode;
  variant?: keyof typeof variantClasses;
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
