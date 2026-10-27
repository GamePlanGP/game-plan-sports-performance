import { moments } from "@/content/homepage";
import { Section, SectionHeading } from "./ui/Section";
import { Txt } from "./ui/Txt";
import { LaunchCta } from "./ui/LaunchCta";
import { ClubsIcon, HoleIcon, TeeIcon } from "./ui/Icons";

const ICONS = { tee: TeeIcon, clubs: ClubsIcon, hole: HoleIcon } as const;

export function GolfMoments() {
  return (
    <Section id="moments" tone="navy" labelledBy="moments-heading">
      <SectionHeading
        id="moments-heading"
        eyebrow={moments.eyebrow}
        heading={moments.heading}
        onDark
        className="max-w-2xl"
      />

      <ul className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-14">
        {moments.cards.map((card) => {
          const Icon = ICONS[card.icon as keyof typeof ICONS];
          return (
            <li key={card.title} className="flex flex-col rounded-hp border border-hp-navy-line p-7 lg:p-8">
              <Icon className="h-9 w-9 text-hp-silver" />
              <p className="mt-6 text-[0.64rem] font-semibold tracking-[0.2em] text-hp-silver uppercase">
                {card.eyebrow}
              </p>
              <h3 className="font-display mt-2 text-3xl leading-tight font-semibold">{card.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed">
                <Txt v={card.body} />
              </p>
              <p className="mt-6 self-start rounded-hp border border-hp-silver px-3 py-1.5 text-[0.62rem] leading-snug font-semibold tracking-[0.14em] text-hp-silver uppercase">
                {card.tag}
              </p>
            </li>
          );
        })}
      </ul>

      <div className="mt-12 flex justify-center">
        <LaunchCta location="moments" onDark />
      </div>
    </Section>
  );
}
