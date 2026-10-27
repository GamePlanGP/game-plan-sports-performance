import { flags, reviews } from "@/content/homepage";
import { Section, SectionHeading } from "./ui/Section";
import { Txt } from "./ui/Txt";
import { StarIcon } from "./ui/Icons";

/** Marks a skeleton card so it can never be mistaken for a real review. */
function PlaceholderMark() {
  return (
    <span className="absolute top-3 right-3 rounded-hp border border-yellow-700 bg-yellow-100 px-1.5 py-px text-[0.55rem] font-bold tracking-[0.12em] text-yellow-950 uppercase">
      Placeholder
    </span>
  );
}

function ReviewSkeleton({ freeProduct }: { freeProduct: boolean }) {
  return (
    <li className="relative rounded-hp border border-hp-line bg-hp-white p-6 pt-10">
      <PlaceholderMark />
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 shrink-0 rounded-full bg-hp-tint-2" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <p className="text-[0.62rem] font-semibold tracking-[0.14em] text-hp-ink-soft uppercase">First name + last initial</p>
          <p className="mt-1 text-[0.62rem] tracking-[0.1em] text-hp-ink-soft uppercase">Handicap · Home course</p>
        </div>
      </div>
      <div className="mt-5 flex text-hp-silver" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4" />
        ))}
      </div>
      <div className="mt-4 space-y-2" aria-hidden="true">
        <div className="h-2.5 w-full rounded-hp bg-hp-tint-2" />
        <div className="h-2.5 w-11/12 rounded-hp bg-hp-tint-2" />
        <div className="h-2.5 w-2/3 rounded-hp bg-hp-tint-2" />
      </div>
      {freeProduct ? (
        <p className="mt-5 inline-block rounded-hp border border-hp-line px-2 py-1 text-[0.6rem] font-semibold tracking-[0.14em] text-hp-ink-soft uppercase">
          {reviews.receivedFreeProduct}
        </p>
      ) : null}
    </li>
  );
}

export function Reviews() {
  return (
    <Section id="reviews" tone="tint" labelledBy="reviews-heading">
      <SectionHeading id="reviews-heading" heading={reviews.heading} className="max-w-2xl" />

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:mt-14">
        {Array.from({ length: reviews.skeletonCount }).map((_, i) => (
          <ReviewSkeleton key={i} freeProduct={i === 0 || i === 3} />
        ))}
      </ul>

      {flags.SHOW_PRO_TESTIMONIALS ? (
        <div className="mt-14 border-t border-hp-silver pt-8">
          <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-hp-ink-soft uppercase">{reviews.proHeading}</p>
          <p className="mt-4">
            <Txt v={reviews.proTestimonials} />
          </p>
        </div>
      ) : null}
    </Section>
  );
}
