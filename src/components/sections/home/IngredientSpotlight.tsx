import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { INGREDIENTS } from "@/lib/constants";

const categoryBadgeVariant: Record<string, "default" | "gold" | "green" | "outline"> = {
  nootropic: "green",
  adaptogen: "outline",
  electrolyte: "default",
};

export function IngredientSpotlight() {
  const highlightIngredient = INGREDIENTS.find((i) => i.highlight);
  const otherIngredients = INGREDIENTS.filter((i) => !i.highlight);

  return (
    <section className="bg-navy-950 py-24">
      <Container>
        <FadeIn direction="up">
          <SectionHeading
            eyebrow="What's Inside"
            heading="Ingredients That Perform"
            dark
            className="mb-16"
          />
        </FadeIn>

        {/* Hero ingredient card: CognatiQ */}
        {highlightIngredient && (
          <FadeIn direction="up" delay={0.1}>
            <Card
              padding="lg"
              className="mb-12 border-2 border-gold-500/30 bg-gradient-to-br from-navy-900 to-navy-800"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                <div className="flex-1">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <Badge variant="gold">Star Ingredient</Badge>
                    <span className="text-sm font-medium text-white/50">
                      {highlightIngredient.amount}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {highlightIngredient.name}
                  </h3>
                  {highlightIngredient.aka && (
                    <p className="mt-1 text-sm text-gold-400">
                      {highlightIngredient.aka}
                    </p>
                  )}
                  <p className="mt-4 leading-relaxed text-white/70">
                    {highlightIngredient.description}
                  </p>
                </div>
                <div className="shrink-0 lg:w-64">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-400">
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {highlightIngredient.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-2 text-white/80"
                      >
                        <svg
                          className="h-4 w-4 shrink-0 text-gold-500"
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
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </FadeIn>
        )}

        {/* Grid of remaining ingredients */}
        <StaggerChildren staggerDelay={0.1} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherIngredients.map((ingredient) => (
            <Card
              key={ingredient.name}
              padding="md"
              hover
              className="bg-navy-900/50 backdrop-blur-sm"
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <Badge variant={categoryBadgeVariant[ingredient.category] ?? "default"}>
                  {ingredient.category}
                </Badge>
                <span className="text-sm font-semibold text-white/50">
                  {ingredient.amount}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                {ingredient.name}
              </h3>
              {ingredient.aka && (
                <p className="mt-0.5 text-xs text-white/40">{ingredient.aka}</p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {ingredient.description}
              </p>
            </Card>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
