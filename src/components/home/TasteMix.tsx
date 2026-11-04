import { LAUNCH_MODE, comparisons, flags, taste } from "@/content/homepage";
import { isPlaceholder, toNumber } from "@/lib/home";
import { Txt } from "./ui/Txt";
import { Video } from "./ui/Video";

/** "Brand A" until NAME_COMPETITORS is on, then the real name. */
function competitorName(real: string, anon: string): string {
  return flags.NAME_COMPETITORS ? real : anon;
}

/** Headline generated from test data, never freeform. */
function tasteHeadline(preferred: string | number, competitor: string): string {
  const { sampleSize } = comparisons.tasteTest;
  return `Golfers preferred Clarity+ ${preferred} of ${sampleSize} times vs. ${competitor}.`;
}

function tasteFootnote(): string {
  const { sampleSize, testDate } = comparisons.tasteTest;
  return `Blind taste test, randomized order, ${sampleSize} golfers, ${testDate}. Each product mixed per its own label. Reflects taste preference only.`;
}

function mixFootnote(): string {
  return `Single unedited take, ${comparisons.mixTest.testDate}. Same water volume and shake count. Each product at its labeled serving.`;
}

function PlaceholderMark() {
  return (
    <span className="rounded-hp border border-yellow-700 bg-yellow-100 px-1.5 py-px text-[0.55rem] font-bold tracking-[0.12em] text-yellow-950 uppercase">
      Placeholder
    </span>
  );
}

function Comparisons({ skeleton }: { skeleton: boolean }) {
  const { tasteTest, mixTest } = comparisons;
  const card = "rounded-hp border border-hp-line bg-hp-white p-6";
  return (
    <div className="mt-12 grid gap-5 lg:grid-cols-2">
      <div className={card}>
        <div className="flex items-center justify-between gap-3">
          <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-hp-ink-soft uppercase">
            {taste.comparisonLabels.tasteHeading}
          </p>
          {skeleton ? <PlaceholderMark /> : null}
        </div>
        <ul className="mt-5 space-y-4">
          {tasteTest.results.map((r) => {
            const name = competitorName(r.competitor, r.anonLabel);
            const n = toNumber(r.preferred);
            return (
              <li key={r.anonLabel} className="border-t border-hp-line pt-4">
                <p className="font-display text-2xl leading-snug font-medium">
                  <Txt v={tasteHeadline(n ?? String(r.preferred), name)} />
                </p>
              </li>
            );
          })}
        </ul>
        <p className="mt-5 text-[0.72rem] leading-relaxed text-hp-ink-soft">
          <Txt v={tasteFootnote()} />
        </p>
      </div>

      <div className={card}>
        <div className="flex items-center justify-between gap-3">
          <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-hp-ink-soft uppercase">
            {taste.comparisonLabels.mixHeading} · Clarity+ vs.{" "}
            {mixTest.competitors
              .map((c, i) => competitorName(c, mixTest.anonLabels[i]))
              .filter((c) => !isPlaceholder(c))
              .join(" / ")}
          </p>
          {skeleton ? <PlaceholderMark /> : null}
        </div>
        <div className="mt-5">
          <Video
            src={mixTest.video}
            poster=""
            alt={taste.comparisonLabels.mixVideoLabel}
            label={taste.comparisonLabels.mixVideoLabel}
            ratio="16 / 9"
          />
        </div>
        <p className="mt-5 text-[0.72rem] leading-relaxed text-hp-ink-soft">
          <Txt v={mixFootnote()} />
        </p>
      </div>
    </div>
  );
}

/**
 * Taste & mix (#taste). Shown, not claimed. No burgundy in this section:
 * silver hairlines instead of the band's accent rules.
 */
export function TasteMix() {
  const skeleton = LAUNCH_MODE !== "live";
  const showComparisons = flags.SHOW_COMPARISONS || skeleton;
  return (
    <section
      id="taste"
      aria-labelledby="taste-heading"
      className="scroll-mt-16 border-y border-hp-line bg-hp-tint py-16 text-hp-navy md:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span aria-hidden="true" className="mb-5 block h-[2px] w-10 bg-hp-navy" />
            <h2 id="taste-heading" className="font-display text-[2.1rem] leading-[1.08] font-medium text-balance md:text-5xl">
              <Txt v={taste.heading} />
            </h2>
            <p className="mt-4 text-base md:text-lg">
              <Txt v={taste.subline} />
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
              {taste.sensory.map((item) => (
                <div key={item.label} className="border-t border-hp-silver pt-4">
                  <dt className="text-[0.66rem] font-semibold tracking-[0.18em] text-hp-ink-soft uppercase">{item.label}</dt>
                  <dd className="mt-2 text-sm leading-relaxed">
                    <Txt v={item.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <Video {...taste.video} ratio="4 / 5" />
          </div>
        </div>

        {showComparisons ? <Comparisons skeleton={!flags.SHOW_COMPARISONS} /> : null}
      </div>
    </section>
  );
}
