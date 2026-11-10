import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";
import { INGREDIENTS } from "@/lib/constants";

const categoryLabels: Record<string, string> = {
  nootropic: "Nootropic",
  adaptogen: "Adaptogen",
  electrolyte: "Electrolyte",
};

export function IngredientDeepDive() {
  return (
    <section id="ingredients" className="bg-navy-900 py-24 sm:py-32">
      <Container size="wide">
        <SectionHeading
          eyebrow="The Formula"
          heading="Every Ingredient, Intentional"
          subtitle="Clinically dosed, research-backed ingredients chosen specifically for the cognitive and physical demands of elite competition."
        />

        <div className="mt-16 space-y-20 sm:mt-20 lg:space-y-28">
          {INGREDIENTS.map((ingredient, index) => {
            const isEven = index % 2 === 1;
            const isHighlight = ingredient.highlight;

            return (
              <FadeIn
                key={ingredient.name}
                direction={isEven ? "right" : "left"}
                delay={0.1}
              >
                <div
                  className={cn(
                    "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
                    isHighlight && "relative",
                  )}
                >
                  {/* Highlight glow effect */}
                  {isHighlight && (
                    <div className="pointer-events-none absolute -inset-6 rounded-3xl border-2 border-silver-500/20 bg-silver-500/5 sm:-inset-8" />
                  )}

                  {/* Image side */}
                  <div
                    className={cn(
                      "relative z-10",
                      isEven && "lg:order-2",
                    )}
                  >
                    <PlaceholderImage
                      icon="ingredient"
                      dark={isHighlight}
                      label={ingredient.name}
                      aspectRatio="aspect-[4/3]"
                      className={cn(
                        "rounded-2xl",
                        isHighlight && "ring-2 ring-silver-500/40",
                      )}
                    />
                  </div>

                  {/* Text side */}
                  <div
                    className={cn(
                      "relative z-10",
                      isEven && "lg:order-1",
                    )}
                  >
                    {/* Star ingredient badge */}
                    {isHighlight && (
                      <Badge variant="accent" className="mb-4">
                        Star Ingredient
                      </Badge>
                    )}

                    {/* Category badge */}
                    <Badge
                      variant={isHighlight ? "accent" : "default"}
                      className={cn(!isHighlight && "mb-4", isHighlight && "mb-4 ml-2")}
                    >
                      {categoryLabels[ingredient.category] ?? ingredient.category}
                    </Badge>

                    {/* Ingredient name */}
                    <h3
                      className={cn(
                        "font-display font-bold text-white",
                        isHighlight
                          ? "text-3xl sm:text-4xl"
                          : "text-2xl sm:text-3xl",
                      )}
                    >
                      {ingredient.name}
                    </h3>

                    {/* AKA */}
                    {ingredient.aka && (
                      <p className="mt-1 text-sm text-silver">
                        ({ingredient.aka})
                      </p>
                    )}

                    {/* Amount stat callout */}
                    <div
                      className={cn(
                        "mt-6 inline-flex flex-col rounded-xl px-5 py-3",
                        isHighlight
                          ? "bg-silver-500/10 border border-silver-500/20"
                          : "bg-navy-800 border border-white/10",
                      )}
                    >
                      <span
                        className={cn(
                          "text-2xl font-bold sm:text-3xl",
                          isHighlight ? "text-silver-600" : "text-silver-500",
                        )}
                      >
                        {ingredient.amount}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-wide text-silver">
                        Per Serving
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-6 text-base leading-relaxed text-silver sm:text-lg">
                      {ingredient.description}
                    </p>

                    {/* Benefits pills */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {ingredient.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className={cn(
                            "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
                            isHighlight
                              ? "bg-silver-500/10 text-silver-600"
                              : "bg-silver-500/10 text-silver-400",
                          )}
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
