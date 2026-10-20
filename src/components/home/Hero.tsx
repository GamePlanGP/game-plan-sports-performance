import { flags, hero } from "@/content/homepage";
import { Eyebrow, Section } from "./ui/Section";
import { Txt } from "./ui/Txt";
import { Media } from "./ui/Media";
import { LaunchCta } from "./ui/LaunchCta";
import { TextLink } from "./ui/TextLink";
import { StarIcon } from "./ui/Icons";

/** Only rendered when SHOW_RATING is on. Values come from Judge.me in Phase 2. */
function RatingBadge() {
  return (
    <div className="mb-5 flex items-center gap-2 text-hp-navy">
      <span className="flex" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4" />
        ))}
      </span>
      <Txt v={hero.rating} />
    </div>
  );
}

export function Hero() {
  const { image } = hero;
  return (
    <Section id="top" tone="white" pad="pt-9 pb-14 md:py-20 lg:py-24" labelledBy="hero-heading">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
        <div>
          {flags.SHOW_RATING ? <RatingBadge /> : null}
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1
            id="hero-heading"
            className="font-display mt-4 text-[2.9rem] leading-[1.02] font-medium text-balance sm:text-6xl lg:text-[4.75rem]"
          >
            <Txt v={hero.headline} />
          </h1>
          <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed md:text-base">
            <Txt v={hero.subhead} />
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
            <LaunchCta location="hero" />
            <TextLink href={hero.secondary.href}>{hero.secondary.label} →</TextLink>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 border-t border-hp-line pt-5">
            {hero.trust.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-[0.66rem] font-semibold tracking-[0.16em] uppercase"
              >
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-hp-navy" />
                <Txt v={item} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="md:hidden">
            <Media {...image} ratio="4 / 5" priority sizes="100vw" />
          </div>
          <div className="hidden md:block">
            <Media {...image} ratio="4 / 3" priority sizes="(min-width: 1024px) 560px, 50vw" />
          </div>
        </div>
      </div>
    </Section>
  );
}
