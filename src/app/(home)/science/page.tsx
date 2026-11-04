import type { Metadata } from "next";
import { FDA_DISCLAIMER, footer, science, type Copy } from "@/content/homepage";
import { DecisivenessChart, ImpulseChart } from "@/components/home/ProofCharts";
import { TextLink } from "@/components/home/ui/TextLink";
import { Section, SectionHeading, Eyebrow, AccentBar } from "@/components/home/ui/Section";
import { Txt } from "@/components/home/ui/Txt";
import { Media } from "@/components/home/ui/Media";
import { Placeholder } from "@/components/home/ui/Placeholder";
import { LaunchCta } from "@/components/home/ui/LaunchCta";

export const metadata: Metadata = {
  title: science.seo.title,
  description: science.seo.description.text,
  keywords: null,
  alternates: { canonical: "/science" },
  openGraph: { url: "/science", title: science.seo.title, description: science.seo.description.text },
};

function Block({ label, value }: { label: string; value: string | Copy }) {
  return (
    <div className="border-t border-hp-line pt-4">
      <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-hp-ink-soft uppercase">{label}</p>
      <p className="mt-2 leading-relaxed">
        <Txt v={value} />
      </p>
    </div>
  );
}

export default function SciencePage() {
  const { intro, ingredient, results, studies, dose } = science;
  return (
    <>
      <Section tone="white" pad="pt-12 pb-16 md:py-24" labelledBy="science-heading">
        <div className="max-w-3xl">
          <AccentBar />
          <Eyebrow>{intro.eyebrow}</Eyebrow>
          <h1 id="science-heading" className="font-display mt-4 text-[2.9rem] leading-[1.02] font-medium text-balance sm:text-6xl">
            <Txt v={intro.heading} />
          </h1>
          <p className="mt-6 text-base leading-relaxed md:text-lg">
            <Txt v={intro.body} />
          </p>
        </div>
      </Section>

      <Section tone="tint" labelledBy="results-heading">
        <SectionHeading id="results-heading" heading={results.heading} className="max-w-2xl" />
        <p className="mt-4 max-w-2xl text-base md:text-lg">
          <Txt v={results.subline} />
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-hp border border-hp-line bg-hp-white p-5 sm:p-8">
            <DecisivenessChart />
          </div>
          <div className="rounded-hp border border-hp-line bg-hp-white p-5 sm:p-8">
            <ImpulseChart />
          </div>
        </div>
        <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {results.stats.map((stat) => (
            <div key={stat.value} className="border-t border-hp-navy pt-4">
              <dt className="font-display text-5xl leading-none font-medium [font-variant-numeric:lining-nums]">{stat.value}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-hp-ink-soft">
                <Txt v={stat.label} />
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 max-w-4xl space-y-2 text-[0.72rem] leading-relaxed text-hp-ink-soft">
          <p>
            <Txt v={results.footnote} />
          </p>
          <p>
            <Txt v={results.citation} />
          </p>
          <p>{FDA_DISCLAIMER}</p>
          <p className="pt-2">
            <TextLink href={results.studyLink.href}>{results.studyLink.label}</TextLink>
          </p>
        </div>
      </Section>

      <Section tone="white" labelledBy="ingredient-heading">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading id="ingredient-heading" heading={ingredient.heading} />
            <div className="mt-8 space-y-6">
              <Block label="Overview" value={ingredient.overview} />
              <Block label="Where it comes from" value={ingredient.source} />
              <Block label="How it works" value={ingredient.mechanism} />
            </div>
          </div>
          <Media {...ingredient.image} ratio="4 / 3" />
        </div>
      </Section>


      <Section tone="tint" labelledBy="studies-heading">
        <SectionHeading id="studies-heading" heading={studies.heading} className="max-w-2xl" />
        <p className="mt-5 max-w-2xl leading-relaxed">
          <Txt v={studies.intro} />
        </p>
        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {studies.items.map((id, i) => (
            <li key={id} className="rounded-hp border border-hp-line bg-hp-white p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="font-display text-3xl leading-none font-medium [font-variant-numeric:lining-nums]">
                  Study {i + 1}
                </p>
                <Placeholder id={id} />
              </div>
              <dl className="mt-5 space-y-3">
                {studies.fields.map((field) => (
                  <div key={field} className="border-t border-hp-line pt-3">
                    <dt className="text-[0.62rem] font-semibold tracking-[0.16em] text-hp-ink-soft uppercase">{field}</dt>
                    <dd className="mt-2 h-2.5 w-3/4 rounded-hp bg-hp-tint-2" aria-hidden="true" />
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white" labelledBy="dose-heading">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <SectionHeading id="dose-heading" heading={dose.heading} />
          <div className="space-y-4 leading-relaxed">
            <p>
              <Txt v={dose.body} />
            </p>
            <p className="text-sm text-hp-ink-soft">
              Pending <Txt v={dose.dependsOn} />
            </p>
          </div>
        </div>
        <div className="mt-14 max-w-4xl space-y-2 border-t border-hp-line pt-6 text-[0.74rem] leading-relaxed text-hp-ink-soft">
          <p>{science.ingredientNotProduct}</p>
          <p>{FDA_DISCLAIMER}</p>
          <p>
            <Txt v={footer.trademark} />
          </p>
        </div>
      </Section>

      <Section tone="navy" labelledBy="science-cta-heading" pad="py-16 md:py-20">
        <div className="flex flex-col items-center gap-8 text-center">
          <SectionHeading id="science-cta-heading" heading={science.cta.heading} onDark />
          <LaunchCta location="science_page" onDark />
        </div>
      </Section>
    </>
  );
}
