import { flags, quality } from "@/content/homepage";
import { Section, SectionHeading } from "./ui/Section";
import { Txt } from "./ui/Txt";
import { TextLink } from "./ui/TextLink";
import { FactoryIcon, FlagIcon, FlaskIcon, SealIcon } from "./ui/Icons";

const ICONS = { flask: FlaskIcon, factory: FactoryIcon, flag: FlagIcon, seal: SealIcon } as const;

export function Quality() {
  const tiles = quality.tiles.filter((t) => !("requiresFlag" in t) || flags[t.requiresFlag]);
  return (
    <Section id="quality" tone="white" labelledBy="quality-heading">
      <SectionHeading id="quality-heading" heading={quality.heading} className="max-w-2xl" />

      <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
        {tiles.map((tile) => {
          const Icon = ICONS[tile.icon];
          return (
            <li key={tile.id} className="border-t border-hp-line pt-6">
              <Icon className="h-9 w-9 text-hp-navy" />
              <h3 className="font-display mt-5 text-2xl font-semibold">{tile.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-hp-ink-soft">
                {tile.detail ? <Txt v={tile.detail} /> : null}
              </p>
            </li>
          );
        })}
      </ul>

      <div className="mt-10">
        <TextLink href={quality.coa.href}>{quality.coa.label}</TextLink>
      </div>
    </Section>
  );
}
