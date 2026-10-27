import { pageLabel } from "@/content/homepage";

/** Slim bar naming this build ("Homepage 2"). Turn off with pageLabel.show. */
export function PageLabel() {
  if (!pageLabel.show) return null;
  return (
    <div className="border-b border-hp-navy bg-hp-silver text-hp-navy">
      <p className="mx-auto max-w-[1200px] px-5 py-1.5 text-center text-[0.68rem] font-semibold tracking-[0.22em] uppercase md:px-8">
        {pageLabel.text}
      </p>
    </div>
  );
}
