import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

/**
 * Brand lockup: the "Game Plan" wordmark (Kaushan Script) stacked above the
 * "Sports Performance" descriptor in the gold accent.
 */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Game Plan Sports Performance — home"
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      <span className="font-[family-name:var(--font-kaushan)] text-2xl leading-none text-white sm:text-3xl">
        Game Plan
      </span>
      <span className="mt-1 text-[0.5rem] font-semibold uppercase tracking-[0.28em] text-gold-500 sm:text-[0.625rem]">
        Sports Performance
      </span>
    </Link>
  );
}
