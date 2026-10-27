import { FDA_DISCLAIMER, proof } from "@/content/homepage";
import { Section, SectionHeading } from "./ui/Section";
import { Txt } from "./ui/Txt";
import { TextLink } from "./ui/TextLink";
import { ProofChart } from "./ProofChart";

export function ProofStrip() {
  return (
    <Section id="science" tone="tint" labelledBy="science-heading">
      <SectionHeading id="science-heading" heading={proof.heading} className="max-w-2xl" />

      <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div className="rounded-hp border border-hp-line bg-hp-white p-5 sm:p-8">
          <ProofChart />
        </div>

        <div className="flex flex-col">
          <p className="text-base leading-relaxed md:text-lg">
            <Txt v={proof.plainEnglish} />
          </p>

          <dl className="mt-8 grid gap-6">
            {proof.stats.map((stat) => (
              <div key={stat.value} className="border-t border-hp-navy pt-4">
                <dt className="font-display [font-variant-numeric:lining-nums] text-5xl leading-none font-medium">{stat.value}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-hp-ink-soft">{stat.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <TextLink href={proof.studyLink.href}>{proof.studyLink.label}</TextLink>
          </div>
        </div>
      </div>

      <div className="mt-10 max-w-4xl space-y-2 text-[0.72rem] leading-relaxed text-hp-ink-soft">
        <p>
          <Txt v={proof.footnote} />
        </p>
        <p>{FDA_DISCLAIMER}</p>
      </div>
    </Section>
  );
}
