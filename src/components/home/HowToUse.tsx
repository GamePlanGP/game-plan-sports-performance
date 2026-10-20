import { how } from "@/content/homepage";
import { Section, SectionHeading } from "./ui/Section";
import { Txt } from "./ui/Txt";

export function HowToUse() {
  return (
    <Section id="how" tone="tint" labelledBy="how-heading">
      <SectionHeading id="how-heading" heading={how.heading} className="max-w-3xl" />

      <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10 lg:mt-14">
        {how.steps.map((step, i) => (
          <li key={step.title} className="border-t-2 border-hp-burgundy pt-5">
            <span className="font-display [font-variant-numeric:lining-nums] text-6xl leading-none font-medium" aria-hidden="true">
              {i + 1}
            </span>
            <h3 className="font-display mt-4 text-3xl font-semibold">{step.title}</h3>
            <p className="mt-2 leading-relaxed">
              <Txt v={step.body} />
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-12 max-w-3xl rounded-hp border border-hp-line bg-hp-white p-6 md:p-8">
        <p className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase">{how.expectation.label}</p>
        <p className="mt-3 text-base leading-relaxed md:text-lg">
          <Txt v={how.expectation.body} />
        </p>
        <p className="mt-4 border-t border-hp-line pt-4 text-sm text-hp-ink-soft">
          <Txt v={how.usageNote} />
        </p>
      </div>
    </Section>
  );
}
