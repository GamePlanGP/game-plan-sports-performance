"use client";

import { proof } from "@/content/homepage";
import { useInView } from "@/hooks/useInView";
import { Txt } from "./ui/Txt";

const TICKS = [0, 50, 100];

/** CSS-only bar chart; bars grow once on scroll (instantly under reduced motion). */
export function ProofChart() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const summary = proof.bars.map((b) => `${b.label.replace("®", "")} ${b.value}%`).join(", ");

  return (
    <figure ref={ref} className="m-0">
      <figcaption className="text-[0.68rem] font-semibold tracking-[0.18em] text-hp-ink-soft uppercase">
        <Txt v={proof.chartTitle} />
      </figcaption>

      <div role="img" aria-label={`Bar chart, improvement in omission errors versus baseline: ${summary}`} className="mt-6">
        <div className="relative h-[300px] pl-11">
          {TICKS.map((t) => (
            <div key={t} className="absolute right-0 left-0" style={{ bottom: `${t}%` }} aria-hidden="true">
              <span className="absolute -top-2 left-0 w-9 text-right text-[0.68rem] text-hp-ink-soft">{t}%</span>
              <div className="ml-11 border-t border-hp-line" />
            </div>
          ))}

          <div className="relative flex h-full items-stretch justify-around">
            {proof.bars.map((bar, i) => {
              const burgundy = bar.tone === "burgundy";
              return (
                <div key={bar.id} className="relative h-full w-24 sm:w-32">
                  <div
                    className={`absolute inset-x-0 bottom-0 origin-bottom rounded-t-hp transition-transform duration-[1100ms] ease-out motion-reduce:transition-none ${
                      burgundy ? "bg-hp-burgundy" : "bg-hp-silver"
                    } ${inView ? "scale-y-100" : "scale-y-0"}`}
                    style={{ height: `${bar.value}%`, transitionDelay: `${i * 160}ms` }}
                  />
                  <p
                    className={`font-display [font-variant-numeric:lining-nums] absolute inset-x-0 text-center text-4xl leading-none font-medium transition-opacity duration-700 motion-reduce:transition-none sm:text-5xl ${
                      burgundy ? "text-hp-burgundy" : "text-hp-navy"
                    } ${inView ? "opacity-100" : "opacity-0"}`}
                    style={{ bottom: `calc(${bar.value}% + 10px)`, transitionDelay: `${700 + i * 160}ms` }}
                  >
                    {bar.value}%
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-3 flex justify-around pl-11" aria-hidden="true">
          {proof.bars.map((bar) => (
            <p
              key={bar.id}
              className="w-24 text-center text-[0.66rem] leading-snug font-semibold tracking-[0.14em] uppercase sm:w-32"
            >
              {bar.label}
            </p>
          ))}
        </div>
      </div>

      <p className="mt-6 border-t border-hp-line pt-4 text-[0.74rem] leading-relaxed text-hp-ink-soft">
        {proof.axisLabel}
      </p>
    </figure>
  );
}
