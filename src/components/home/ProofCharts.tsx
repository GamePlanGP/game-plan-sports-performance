"use client";

import { science } from "@/content/homepage";
import { useInView } from "@/hooks/useInView";
import { Txt } from "./ui/Txt";

const { decisiveness, impulse } = science.results;
const LINING = "[font-variant-numeric:lining-nums]";

function Caption({ title }: { title: string }) {
  return (
    <figcaption className="text-[0.68rem] font-semibold tracking-[0.18em] text-hp-ink-soft uppercase">{title}</figcaption>
  );
}

function BarLabels({ labels }: { labels: readonly { id: string; label: string }[] }) {
  return (
    <div className="mt-3 flex justify-around pl-11" aria-hidden="true">
      {labels.map((bar) => (
        <p key={bar.id} className="w-20 text-center text-[0.64rem] leading-snug font-semibold tracking-[0.14em] uppercase sm:w-28">
          {bar.label}
        </p>
      ))}
    </div>
  );
}

/** Placebo vs. CognatiQ® improvement; bars grow once on scroll (instantly under reduced motion). */
export function DecisivenessChart() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const summary = decisiveness.bars.map((b) => `${b.label.replace("®", "")} ${b.value}%`).join(", ");

  return (
    <figure ref={ref} className="m-0">
      <Caption title={decisiveness.title} />
      <div role="img" aria-label={`Bar chart, improvement in omission errors versus baseline: ${summary}`} className="mt-6">
        <div className="relative h-[260px] pl-11">
          {[0, 50, 100].map((t) => (
            <div key={t} className="absolute right-0 left-0" style={{ bottom: `${t}%` }} aria-hidden="true">
              <span className="absolute -top-2 left-0 w-9 text-right text-[0.68rem] text-hp-ink-soft">{t}%</span>
              <div className="ml-11 border-t border-hp-line" />
            </div>
          ))}
          <div className="relative flex h-full items-stretch justify-around">
            {decisiveness.bars.map((bar, i) => {
              const burgundy = bar.tone === "burgundy";
              return (
                <div key={bar.id} className="relative h-full w-20 sm:w-28">
                  <div
                    className={`absolute inset-x-0 bottom-0 origin-bottom rounded-t-hp transition-transform duration-[1100ms] ease-out motion-reduce:transition-none ${
                      burgundy ? "bg-hp-burgundy" : "bg-hp-silver"
                    } ${inView ? "scale-y-100" : "scale-y-0"}`}
                    style={{ height: `${bar.value}%`, transitionDelay: `${i * 160}ms` }}
                  />
                  <p
                    className={`font-display ${LINING} absolute inset-x-0 text-center text-4xl leading-none font-medium transition-opacity duration-700 motion-reduce:transition-none ${
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
        <BarLabels labels={decisiveness.bars} />
      </div>
      <p className="mt-6 border-t border-hp-line pt-4 text-[0.74rem] leading-relaxed text-hp-ink-soft">{decisiveness.axisLabel}</p>
      <p className="mt-4 leading-relaxed">
        <Txt v={decisiveness.plainEnglish} />
      </p>
    </figure>
  );
}

/** Diverging bars from a zero line: placebo errors up, CognatiQ® errors down. */
export function ImpulseChart() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const max = 75; // % on each side of zero; headroom for the value labels
  const summary = impulse.bars.map((b) => `${b.label.replace("®", "")} ${b.display}`).join(", ");

  return (
    <figure ref={ref} className="m-0">
      <Caption title={impulse.title} />
      <div role="img" aria-label={`Diverging bar chart, change in errors versus baseline: ${summary}`} className="mt-6">
        <div className="relative h-[260px] pl-11">
          {[50, 0, -50].map((t) => (
            <div key={t} className="absolute right-0 left-0" style={{ top: `${50 - (t / max) * 50}%` }} aria-hidden="true">
              <span className="absolute -top-2 left-0 w-9 text-right text-[0.68rem] text-hp-ink-soft">
                {t > 0 ? `+${t}%` : `${t}%`}
              </span>
              <div className={`ml-11 border-t ${t === 0 ? "border-hp-navy" : "border-hp-line"}`} />
            </div>
          ))}
          <div className="relative flex h-full items-stretch justify-around">
            {impulse.bars.map((bar, i) => {
              const burgundy = bar.tone === "burgundy";
              const up = bar.value > 0;
              const h = (Math.abs(bar.value) / max) * 50;
              return (
                <div key={bar.id} className="relative h-full w-20 sm:w-28">
                  <div
                    className={`absolute inset-x-0 transition-transform duration-[1100ms] ease-out motion-reduce:transition-none ${
                      up ? "bottom-1/2 origin-bottom rounded-t-hp" : "top-1/2 origin-top rounded-b-hp"
                    } ${burgundy ? "bg-hp-burgundy" : "bg-hp-silver"} ${inView ? "scale-y-100" : "scale-y-0"}`}
                    style={{ height: `${h}%`, transitionDelay: `${i * 160}ms` }}
                  />
                  <p
                    className={`font-display ${LINING} absolute inset-x-0 text-center text-4xl leading-none font-medium transition-opacity duration-700 motion-reduce:transition-none ${
                      burgundy ? "text-hp-burgundy" : "text-hp-navy"
                    } ${inView ? "opacity-100" : "opacity-0"}`}
                    style={{
                      ...(up ? { bottom: `calc(${50 + h}% + 10px)` } : { top: `calc(${50 + h}% + 10px)` }),
                      transitionDelay: `${700 + i * 160}ms`,
                    }}
                  >
                    {bar.display}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <BarLabels labels={impulse.bars} />
      </div>
      <p className="mt-6 border-t border-hp-line pt-4 text-[0.74rem] leading-relaxed text-hp-ink-soft">
        <Txt v={impulse.axisLabel} />
      </p>
      <p className="mt-4 leading-relaxed">
        <Txt v={impulse.plainEnglish} />
      </p>
    </figure>
  );
}
