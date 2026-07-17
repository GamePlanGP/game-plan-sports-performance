"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";

const SCROLL_THRESHOLD = 50;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    }

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "transition-all duration-300",
        isScrolled
          ? "bg-navy-950/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-gold-500"
                    : "text-white/80 hover:text-white"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute right-4 bottom-0 left-4 h-0.5 rounded-full bg-gold-500" />
                )}
              </Link>
            );
          })}

          {/* CTA button */}
          <Link
            href="/#waitlist"
            className="ml-4 rounded-lg bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
          >
            Join Waitlist
          </Link>
        </nav>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="block h-0.5 w-6 rounded-full bg-white" />
          <span className="block h-0.5 w-6 rounded-full bg-white" />
          <span className="block h-0.5 w-6 rounded-full bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
