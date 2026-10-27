import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  size?: "md" | "sm";
  /** On a navy band: silver border, white hover. */
  onDark?: boolean;
  full?: boolean;
  className?: string;
  disabled?: boolean;
};

/** The one button style: silver fill, navy label, 1.5px outline, 2px radius. */
export function Button({
  children,
  href,
  onClick,
  type = "button",
  size = "md",
  onDark = false,
  full = false,
  className = "",
  disabled,
}: Props) {
  const cls = [
    "inline-flex items-center justify-center rounded-hp border-[1.5px] bg-hp-silver text-center text-[0.76rem] leading-tight font-semibold tracking-[0.16em] text-hp-navy uppercase transition-colors motion-reduce:transition-none",
    size === "sm" ? "min-h-[42px] px-5" : "min-h-[50px] px-7",
    onDark
      ? "on-navy border-hp-silver hover:bg-white hover:text-hp-navy"
      : "border-hp-navy hover:bg-hp-navy hover:text-white",
    full ? "w-full" : "",
    "disabled:cursor-not-allowed disabled:opacity-60",
    className,
  ].join(" ");

  if (href) {
    return (
      <a href={href} onClick={onClick} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {children}
    </button>
  );
}
