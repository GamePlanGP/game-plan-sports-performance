"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { brand, nav } from "@/content/homepage";
import logo from "@/assets/gp-wordmark-navy.png";
import { LaunchCta } from "./ui/LaunchCta";
import { CloseIcon, MenuIcon } from "./ui/Icons";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-t-2 border-b border-t-hp-burgundy border-b-hp-line bg-hp-white">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-5 md:px-8">
        <a href="#top" aria-label={`${brand.company} — top of page`} className="inline-flex shrink-0 items-center">
          <Image src={logo} alt={brand.logoAlt} priority className="h-12 w-auto" />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 min-[1080px]:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.68rem] font-semibold tracking-[0.18em] text-hp-ink-soft uppercase transition-colors hover:text-hp-navy motion-reduce:transition-none"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LaunchCta location="header" size="sm" className="max-[559px]:hidden" />
          {/* Cart icon slot — Phase 2 */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="hp-mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-hp text-hp-navy min-[1080px]:hidden"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="hp-mobile-menu"
          aria-label="Mobile"
          className="border-t border-hp-line bg-hp-white min-[1080px]:hidden"
        >
          <ul className="mx-auto max-w-[1200px] px-5 md:px-8">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-hp-line last:border-b-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-[0.74rem] font-semibold tracking-[0.18em] text-hp-navy uppercase"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
