import Link from "next/link";
import { SITE_CONFIG, FOOTER_LINKS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <Container size="wide" className="py-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-3 font-display text-sm italic text-gold-400">
              {SITE_CONFIG.tagline}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Engineered for athletes who refuse to leave performance to chance.
              Nootropic hydration designed for elite competition.
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Stay Updated
            </h3>
            <p className="mt-4 text-sm text-white/60">
              Get launch updates, exclusive pricing, and golf performance tips
              delivered to your inbox.
            </p>
            <form
              action="#"
              className="mt-4 flex gap-2"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="you@email.com"
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-gold-500 px-4 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-white/40">
            &copy; {currentYear} Game Plan Sports Performance. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/40 transition-colors hover:text-white/70"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
