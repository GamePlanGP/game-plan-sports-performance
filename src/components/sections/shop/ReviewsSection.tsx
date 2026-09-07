import { PRODUCT, REVIEWS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

const RATING_DISTRIBUTION = [
  { stars: 5, percentage: 80 },
  { stars: 4, percentage: 15 },
  { stars: 3, percentage: 3 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 1 },
];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function RatingSummary() {
  return (
    <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
      {/* Average Rating */}
      <div className="flex flex-col items-center text-center">
        <span className="text-6xl font-bold text-warm-white">
          {PRODUCT.rating}
        </span>
        <StarRating rating={PRODUCT.rating} size="md" className="mt-2" />
        <p className="mt-1 text-sm text-silver">
          {PRODUCT.reviewCount} reviews
        </p>
      </div>

      {/* Distribution Bars */}
      <div className="w-full max-w-sm flex-1 space-y-2">
        {RATING_DISTRIBUTION.map(({ stars, percentage }) => (
          <div key={stars} className="flex items-center gap-3">
            <span className="w-12 text-right text-sm text-silver">
              {stars} star{stars !== 1 && "s"}
            </span>
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gold-500 transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className="w-10 text-sm text-silver">
              {percentage}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewCard({
  review,
}: {
  review: (typeof REVIEWS)[number];
}) {
  return (
    <Card padding="md">
      <div className="space-y-3">
        {/* Star Rating + Verified */}
        <div className="flex items-center justify-between">
          <StarRating rating={review.rating} size="sm" />
          {review.verified && (
            <Badge variant="green" className="text-[10px]">
              <svg
                className="mr-1 h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Verified Purchase
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="font-semibold text-warm-white">{review.title}</h3>

        {/* Date */}
        <p className="text-xs text-silver">
          {formatDate(review.date)}
        </p>

        {/* Review Text */}
        <p className="text-sm leading-relaxed text-silver">
          {review.text}
        </p>

        {/* Reviewer Name */}
        <p className="text-sm font-medium text-warm-white">{review.name}</p>
      </div>
    </Card>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-navy-800 py-16 lg:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Customer Reviews"
            heading="What Athletes Are Saying"
            subtitle="Real feedback from real athletes who have made Clarity+ part of their routine."
          />
        </FadeIn>

        {/* Rating Summary */}
        <FadeIn delay={0.1}>
          <div className="mx-auto mt-12 max-w-2xl">
            <RatingSummary />
          </div>
        </FadeIn>

        {/* Review Grid */}
        <FadeIn delay={0.2}>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </FadeIn>

        {/* Write a Review Button */}
        <FadeIn delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-2">
            <div className="relative">
              <Button
                variant="secondary"
                size="md"
                disabled
                className="cursor-not-allowed opacity-70"
              >
                Write a Review
              </Button>
              <Badge
                variant="gold"
                className="absolute -right-3 -top-3"
              >
                Soon
              </Badge>
            </div>
            <p className="text-xs text-silver">
              Reviews will be enabled at launch.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
