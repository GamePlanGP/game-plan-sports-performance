import Image from "next/image";
import { FDA_DISCLAIMER, brand, footer } from "@/content/homepage";
import logo from "@/assets/gp-wordmark-white.png";
import { Txt } from "./ui/Txt";
import { isPlaceholder, placeholderId } from "@/lib/home";
import { Placeholder } from "./ui/Placeholder";

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function FooterLink({ label, href }: { label: string; href: string }) {
  if (isPlaceholder(href)) {
    return (
      <span className="inline-flex flex-wrap items-center gap-1 text-white/90">
        {label} <Placeholder id={placeholderId(href) ?? href} />
      </span>
    );
  }
  return (
    <a
      href={EMAIL.test(href) ? `mailto:${href}` : href}
      className="text-white transition-colors hover:text-hp-silver motion-reduce:transition-none"
    >
      {label}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="on-navy border-t border-hp-navy-line bg-hp-navy pt-14 pb-28 text-white md:pb-12">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_2.3fr]">
          <div>
            <Image src={logo} alt={brand.logoAlt} className="h-16 w-auto" />
            <p className="mt-5 flex flex-wrap items-center gap-2 text-sm text-hp-silver">
              <Txt v={footer.social} />
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {footer.columns.map((col) => (
              <div key={col.heading} className="min-w-0">
                <p className="text-[0.66rem] font-semibold tracking-[0.2em] text-hp-silver uppercase">{col.heading}</p>
                <ul className="mt-4 space-y-3 text-sm">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <FooterLink {...link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 space-y-3 border-t border-hp-navy-line pt-8 text-[0.74rem] leading-relaxed text-hp-silver">
          <p>{FDA_DISCLAIMER}</p>
          <p>
            <Txt v={footer.trademark} />
          </p>
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
