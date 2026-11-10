import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  subtitle,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn(centered && "text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "uppercase tracking-widest text-sm font-semibold text-silver-500",
            centered && "mx-auto",
          )}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl lg:text-5xl font-bold",
          eyebrow && "mt-3",
          dark ? "text-white" : "text-white",
        )}
      >
        {heading}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg",
            dark ? "text-white/70" : "text-silver",
            centered && "mx-auto max-w-2xl",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
