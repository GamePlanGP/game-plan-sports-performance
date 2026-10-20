import type { ReactNode } from "react";
import type { Copy } from "@/content/homepage";
import { Txt } from "./Txt";

const TONES = {
  white: "bg-hp-white text-hp-navy",
  tint: "border-y-2 border-hp-burgundy bg-hp-tint text-hp-navy",
  navy: "on-navy bg-hp-navy text-white",
} as const;

type SectionProps = {
  id?: string;
  tone: keyof typeof TONES;
  children: ReactNode;
  className?: string;
  /** Vertical padding override (defaults to the standard section rhythm). */
  pad?: string;
  /** Aria label when the section has no visible heading. */
  label?: string;
  labelledBy?: string;
};

/** Full-width band with the page's standard vertical rhythm and container. */
export function Section({
  id,
  tone,
  children,
  className = "",
  pad = "py-16 md:py-24 lg:py-28",
  label,
  labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      aria-labelledby={labelledBy}
      className={`scroll-mt-16 ${pad} ${TONES[tone]} ${className}`}
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">{children}</div>
    </section>
  );
}

/** Short burgundy rule that opens a heading on a light section. */
export function AccentBar({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`mb-5 block h-[2px] w-10 bg-hp-burgundy ${className}`} />;
}

export function Eyebrow({ children, onDark = false, className = "" }: { children: ReactNode; onDark?: boolean; className?: string }) {
  return (
    <p
      className={`text-[0.68rem] font-semibold tracking-[0.22em] uppercase ${
        onDark ? "text-hp-silver" : "text-hp-ink-soft"
      } ${className}`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  heading,
  onDark = false,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  heading: Copy;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      {onDark ? null : <AccentBar />}
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <h2
        id={id}
        className={`font-display text-[2.1rem] leading-[1.08] font-medium text-balance md:text-5xl ${eyebrow ? "mt-3" : ""}`}
      >
        <Txt v={heading} />
      </h2>
    </div>
  );
}
