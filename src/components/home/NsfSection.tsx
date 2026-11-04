import { flags, nsf } from "@/content/homepage";
import { Section, SectionHeading, Eyebrow } from "./ui/Section";
import { Txt } from "./ui/Txt";
import { Media } from "./ui/Media";
import { TextLink } from "./ui/TextLink";
import { CheckIcon, FactoryIcon, FlagIcon, FlaskIcon, SealIcon } from "./ui/Icons";

const ICONS = { flag: FlagIcon, seal: SealIcon, flask: FlaskIcon, factory: FactoryIcon } as const;

/**
 * Why NSF Certified for Sport® matters (#nsf). Renders only once the
 * certificate is issued (flags.SHOW_NSF_BADGE).
 */
export function NsfSection() {
  if (!flags.SHOW_NSF_BADGE) return null;
  const { section } = nsf;
  return (
    <Section id="nsf" tone="white" labelledBy="nsf-heading">
      <div className="grid items-start gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
        <div>
          <SectionHeading id="nsf-heading" eyebrow={section.eyebrow} heading={section.heading} className="max-w-3xl" />
          <p className="mt-5 max-w-2xl text-base leading-relaxed md:text-lg">
            <Txt v={section.intro} />
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 lg:items-end">
          <div className="w-32 md:w-40">
            <Media {...nsf.mark} ratio="1 / 1" />
          </div>
          <TextLink href={nsf.listing.href}>{nsf.listing.label}</TextLink>
        </div>
      </div>

      <div className="mt-12 max-w-3xl border-t border-hp-line pt-8">
        <h3 className="font-display text-3xl font-semibold">
          <Txt v={section.why.heading} />
        </h3>
        <p className="mt-3 leading-relaxed">
          <Txt v={section.why.body} />
        </p>
        <p className="mt-3 text-sm text-hp-ink-soft">
          <Txt v={nsf.pgaLine} />
        </p>
      </div>

      <div className="mt-12">
        <Eyebrow>
          <Txt v={section.checksHeading} />
        </Eyebrow>
        <ul className="mt-5 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {section.checks.map((check) => {
            const Icon = ICONS[check.icon];
            return (
              <li key={check.title} className="border-t border-hp-line pt-6">
                <Icon className="h-9 w-9 text-hp-navy" />
                <h4 className="font-display mt-5 text-2xl font-semibold">{check.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-hp-ink-soft">
                  <Txt v={check.body} />
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-12 rounded-hp border border-hp-navy p-6 md:p-10">
        <h3 className="font-display text-3xl font-semibold">
          <Txt v={section.meaning.heading} />
        </h3>
        <ul className="mt-6 grid gap-5 md:grid-cols-3">
          {section.meaning.points.map((point) => (
            <li key={point.text} className="flex items-start gap-3">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-hp-navy" />
              <span className="leading-relaxed">
                <Txt v={point} />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 max-w-3xl space-y-2 text-[0.74rem] leading-relaxed text-hp-ink-soft">
        <p>
          <Txt v={section.scope} />
        </p>
        <p>
          <Txt v={section.markNote} /> <Txt v={nsf.copyApproval} />
        </p>
      </div>
    </Section>
  );
}
