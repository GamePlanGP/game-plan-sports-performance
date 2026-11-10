import { flags, hero, nsf } from "@/content/homepage";
import { TextLink } from "./ui/TextLink";
import { PendingPill, Placeholder } from "./ui/Placeholder";
import { isPlaceholder } from "@/lib/home";
import { AccentBar, Eyebrow, Section } from "./ui/Section";
import { Txt } from "./ui/Txt";
import { Media } from "./ui/Media";
import { LaunchCta } from "./ui/LaunchCta";
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
          <AccentBar />
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1
            id="hero-heading"
            className="font-display mt-4 text-[2.9rem] leading-[1.02] font-medium text-balance sm:text-6xl lg:text-[4.75rem]"
          >
            <Txt v={hero.headline} />
          </h1>
          <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed md:text-base">
            <Txt v={hero.lead} />
          </p>
          <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed md:text-base">
            <Txt v={hero.subhead} />
          </p>

          <div className="mt-7">
            <LaunchCta location="hero" />
          </div>

          {nsf.visible ? (
            <div className="mt-7 flex items-center gap-4">
              <div className="w-14 shrink-0">
                {isPlaceholder(nsf.mark.src) ? (
                  <div
                    role="img"
                    aria-label={`Placeholder: ${nsf.mark.label}`}
                    className="flex aspect-square items-center justify-center rounded-hp border border-hp-line bg-hp-tint-2 text-[0.58rem] font-semibold tracking-[0.12em] text-hp-ink-soft uppercase"
                  >
                    Mark
                  </div>
                ) : (
                  <Media {...nsf.mark} ratio="1 / 1" />
                )}
              </div>
              <div>
                <p className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase">
                  {nsf.name}
                  {nsf.pending ? <PendingPill label={nsf.pendingLabel} /> : null}
                  {isPlaceholder(nsf.mark.src) ? <Placeholder id={nsf.mark.src} /> : null}
                </p>
                <p className="mt-1 text-sm text-hp-ink-soft">
                  <Txt v={nsf.hero.detail} />{" "}
                  <TextLink href={nsf.hero.link.href}>{nsf.hero.link.label}</TextLink>
                </p>
              </div>
            </div>
          ) : null}

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 border-t border-hp-line pt-5">
            {hero.trust.map((item) => (
              <li
                key={typeof item === "string" ? item : item.text}
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
