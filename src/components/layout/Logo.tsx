import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import logo from "@/components/layout/game-plan-logo.png";

interface LogoProps {
  className?: string;
}

/**
 * Brand lockup: the "Game Plan / Sports Performance" script logo (white brand
 * art on transparent, sized to sit on the navy header and footer).
 */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Game Plan Sports Performance — home"
      className={cn("group inline-flex items-center", className)}
    >
      <Image
        src={logo}
        alt="Game Plan Sports Performance"
        priority
        className="h-11 w-auto sm:h-14"
      />
    </Link>
  );
}
