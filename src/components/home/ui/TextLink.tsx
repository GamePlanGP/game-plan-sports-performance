import type { ReactNode } from "react";
import { isPlaceholder, placeholderId } from "@/lib/home";
import { Placeholder } from "./Placeholder";

type Props = {
  href: string;
  children: ReactNode;
  onDark?: boolean;
  onClick?: () => void;
  className?: string;
};

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

/**
 * Secondary action: underlined uppercase text link. If `href` is still a
 * placeholder, shows the label with the placeholder tag instead of a dead link.
 */
export function TextLink({ href, children, onDark = false, onClick, className = "" }: Props) {
  const cls = `text-[0.72rem] font-semibold tracking-[0.16em] uppercase underline decoration-1 underline-offset-[5px] transition-colors motion-reduce:transition-none ${
    onDark ? "on-navy text-white hover:text-hp-silver" : "text-hp-navy hover:text-hp-ink-soft"
  } ${className}`;

  if (isPlaceholder(href)) {
    return (
      <span className={`inline-flex flex-wrap items-center gap-1 ${className}`}>
        <span className={`${cls} no-underline opacity-80`}>{children}</span>
        <Placeholder id={placeholderId(href) ?? href} />
      </span>
    );
  }
  const resolved = EMAIL.test(href) ? `mailto:${href}` : href;
  return (
    <a href={resolved} onClick={onClick} className={cls}>
      {children}
    </a>
  );
}
