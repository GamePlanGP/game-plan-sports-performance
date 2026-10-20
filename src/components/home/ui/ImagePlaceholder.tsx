import { Placeholder } from "./Placeholder";

type Props = {
  id: string;
  label: string;
  /** CSS aspect-ratio, e.g. "4 / 5". */
  ratio: string;
  size?: string;
  tone?: "light" | "navy";
  className?: string;
};

/** Gray labeled box standing in for a photo that hasn't been supplied yet. */
export function ImagePlaceholder({ id, label, ratio, size, tone = "light", className = "" }: Props) {
  const light = tone === "light";
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      style={{ aspectRatio: ratio }}
      className={`flex w-full flex-col items-center justify-center gap-2 rounded-hp border p-4 text-center ${
        light
          ? "border-hp-line bg-hp-tint-2 text-hp-ink-soft"
          : "border-hp-navy-line bg-hp-navy-2 text-hp-silver"
      } ${className}`}
    >
      <span className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase">{label}</span>
      {size ? <span className="text-[0.68rem] opacity-80">{size}</span> : null}
      <Placeholder id={id} />
    </div>
  );
}
