import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const ShieldIcon = (p: P) => (
  <svg {...base} viewBox="0 0 20 20" {...p}>
    <path d="M10 2.5 4 4.8v4.6c0 3.7 2.4 6.5 6 8.1 3.6-1.6 6-4.4 6-8.1V4.8L10 2.5Z" />
    <path d="m7.4 9.8 1.9 1.9 3.4-3.6" />
  </svg>
);
export const MenuIcon = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" strokeWidth={1.6} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const CloseIcon = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" strokeWidth={1.6} {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);
export const PlusIcon = ({ open, ...p }: P & { open?: boolean }) => (
  <svg {...base} viewBox="0 0 24 24" strokeWidth={1.6} {...p}>
    <path d="M5 12h14" />
    <path d="M12 5v14" className={`origin-center transition-transform motion-reduce:transition-none ${open ? "scale-y-0" : ""}`} style={{ transformBox: "fill-box" }} />
  </svg>
);
export const ChevronIcon = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" strokeWidth={1.6} {...p}>
    <path d="m9 5 7 7-7 7" />
  </svg>
);
export const StarIcon = (p: P) => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...p}>
    <path d="m10 1.8 2.4 5.2 5.7.6-4.3 3.8 1.2 5.6L10 14.2l-5 2.8 1.2-5.6L1.9 7.6l5.7-.6L10 1.8Z" />
  </svg>
);
export const CheckIcon = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" strokeWidth={1.8} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

/* Golf moments */
export const TeeIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="16" cy="9" r="4.5" />
    <path d="M12.5 15.5h7L17.4 27h-2.8l-2.1-11.5Z" />
    <path d="M9 27.5h14" />
  </svg>
);
export const ClubsIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 5.5 17 24" />
    <path d="M17 24c.9 1.6 3.2 1.9 5.1.8" />
    <path d="M26 5.5 15 24" />
    <path d="M15 24c-.9 1.6-3.2 1.9-5.1.8" />
  </svg>
);
export const HoleIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M16 4v17" />
    <path d="M16 4.5 24.5 8 16 11.5" />
    <ellipse cx="16" cy="24.5" rx="9" ry="2.8" />
    <circle cx="11.8" cy="22.4" r="1.2" />
  </svg>
);

/* Quality */
export const FlaskIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 4.5h8M13.5 4.5v7.2L7 24.4a2 2 0 0 0 1.8 2.9h14.4a2 2 0 0 0 1.8-2.9l-6.5-12.7V4.5" />
    <path d="M10 19.5h12" />
  </svg>
);
export const FactoryIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 26.5V13l7 4.5V13l7 4.5V8h5v18.5H5Z" />
    <path d="M10 26.5v-4M15 26.5v-4M20 26.5v-4" />
  </svg>
);
export const FlagIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M8 27V5" />
    <path d="M8 6c4-2 7 2 11 0s5-1 5-1v11s-1-1-5 1-7-2-11 0" />
  </svg>
);
export const SealIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="16" cy="14" r="8" />
    <path d="m11.5 21 -2 7 6.5-3 6.5 3-2-7" />
    <path d="m12.5 14 2.5 2.5 4.5-5" />
  </svg>
);
