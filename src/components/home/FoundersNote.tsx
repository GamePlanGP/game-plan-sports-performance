import { founder } from "@/content/homepage";
import { Section, SectionHeading } from "./ui/Section";
import { Txt } from "./ui/Txt";
import { Media } from "./ui/Media";
import { DraftPill } from "./ui/Placeholder";

export function FoundersNote() {
  const { letter } = founder;
  return (
    <Section id="founder" tone="navy" labelledBy="founder-heading">
      <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Media {...founder.photo} ratio="4 / 5" tone="navy" sizes="(min-width: 1024px) 440px, 100vw" />

        <div>
          <SectionHeading id="founder-heading" heading={founder.heading} onDark />
          <div className="mt-7 space-y-5 text-base leading-relaxed md:text-lg">
            {letter.paragraphs.map((para, i) => (
              <p key={i}>
                {para}
                {letter.draft && i === letter.paragraphs.length - 1 ? <DraftPill /> : null}
              </p>
            ))}
          </div>

          <div className="mt-9 border-t border-hp-navy-line pt-6">
            <p className="font-display text-2xl font-semibold">
              <Txt v={founder.signoff} />
            </p>
            <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-hp-silver">
              <Txt v={founder.credentials} />
              <Txt v={founder.signature} />
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
