import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { BENEFITS } from "@/lib/constants";

const benefitIcons: Record<string, { emoji: string; bg: string }> = {
  focus: { emoji: "\uD83C\uDFAF", bg: "bg-gold-500/10 text-gold-500" },
  energy: { emoji: "\u26A1", bg: "bg-gold-500/10 text-gold-500" },
  hydration: { emoji: "\uD83D\uDCA7", bg: "bg-navy-800 text-gold-400" },
};

export function ProductShowcase() {
  return (
    <section className="relative bg-navy-900 py-24">
      <Container>
        <div className="relative">
          {/* Centered product image */}
          <FadeIn direction="up">
            <div className="mx-auto max-w-sm lg:max-w-md">
              <PlaceholderImage
                label="Product Showcase"
                icon="product"
                aspectRatio="aspect-[3/4]"
                dark
                className="shadow-2xl"
              />
            </div>
          </FadeIn>

          {/* Benefit cards: floating on desktop, stacked on mobile */}
          <div className="mt-12 lg:absolute lg:inset-0 lg:mt-0">
            <StaggerChildren
              staggerDelay={0.15}
              className="grid gap-6 sm:grid-cols-3 lg:block"
            >
              {BENEFITS.map((benefit, index) => {
                const iconData = benefitIcons[benefit.icon] ?? {
                  emoji: "\u2728",
                  bg: "bg-gold-500/10 text-gold-500",
                };

                // Desktop positioning: cards float around the central image
                const positionClasses = [
                  "lg:absolute lg:left-0 lg:top-1/2 lg:w-64 lg:-translate-y-1/2",
                  "lg:absolute lg:right-0 lg:top-0 lg:w-64",
                  "lg:absolute lg:right-0 lg:bottom-0 lg:w-64",
                ];

                return (
                  <div key={benefit.title} className={positionClasses[index]}>
                    <Card hover padding="md" className="lg:shadow-lg">
                      <div
                        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full text-xl ${iconData.bg}`}
                      >
                        {iconData.emoji}
                      </div>
                      <h3 className="text-lg font-bold text-warm-white">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-silver">
                        {benefit.description}
                      </p>
                    </Card>
                  </div>
                );
              })}
            </StaggerChildren>
          </div>
        </div>
      </Container>
    </section>
  );
}
