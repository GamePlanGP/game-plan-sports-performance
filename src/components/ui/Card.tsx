import { cn } from "@/lib/utils";

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
} as const;

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: keyof typeof paddingClasses;
  hover?: boolean;
}

export function Card({
  children,
  className,
  padding = "md",
  hover = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white/5 rounded-2xl border border-white/10",
        paddingClasses[padding],
        hover &&
          "hover:border-silver-500/30 hover:-translate-y-1 transition-all duration-300",
        className,
      )}
    >
      {children}
    </div>
  );
}
