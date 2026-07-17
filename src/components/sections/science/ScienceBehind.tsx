import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { FadeIn } from "@/components/animations/FadeIn";
import { INGREDIENT_CATEGORIES, INGREDIENTS } from "@/lib/constants";

const categoryToKey: Record<string, string> = {
  Nootropics: "nootropic",
  Electrolytes: "electrolyte",
  Adaptogens: "adaptogen",
};

const pillarIcons: Record<string, React.ReactNode> = {
  brain: (
    <svg
      className="h-10 w-10 text-gold-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
      />
    </svg>
  ),
  droplet: (
    <svg
      className="h-10 w-10 text-gold-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  ),
  leaf: (
    <svg
      className="h-10 w-10 text-gold-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  ),
};

export function ScienceBehind() {
  return (
    <section className="bg-navy-900 py-24 sm:py-32">
      <Container size="wide">
        <SectionHeading
          eyebrow="The Science"
          heading="The Synergy Stack"
          subtitle="Three pillars of performance, working together to unlock your zone."
          dark
        />

        {/* 3 Pillars with connecting elements */}
        <div className="mt-16 sm:mt-20">
          <StaggerChildren
            staggerDelay={0.15}
            className="grid items-stretch gap-6 md:grid-cols-3 lg:gap-4"
          >
            {INGREDIENT_CATEGORIES.map((category, index) => {
              const categoryKey = categoryToKey[category.name] ?? "";
              const categoryIngredients = INGREDIENTS.filter(
                (ing) => ing.category === categoryKey,
              );
              const isLast = index === INGREDIENT_CATEGORIES.length - 1;

              return (
                <div key={category.name} className="relative flex">
                  {/* Pillar card */}
                  <Card
                    padding="lg"
                    className={cn(
                      "flex flex-1 flex-col bg-navy-950/60 text-white backdrop-blur-sm",
                      "border border-white/10",
                    )}
                  >
                    {/* Icon */}
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                      {pillarIcons[category.icon]}
                    </div>

                    {/* Category name */}
                    <h3 className="font-display text-2xl font-bold text-white">
                      {category.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {category.description}
                    </p>

                    {/* Ingredient list */}
                    <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-6">
                      {categoryIngredients.map((ing) => (
                        <li key={ing.name} className="flex items-center gap-3">
                          <span className="flex h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                          <span className="text-sm text-white/80">
                            {ing.name}
                            <span className="ml-1.5 text-xs text-white/40">
                              {ing.amount}
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  {/* Plus sign connector between pillars (visible on md+) */}
                  {!isLast && (
                    <div className="hidden items-center md:flex">
                      <div className="flex h-10 w-10 -mr-5 ml-1 items-center justify-center rounded-full border border-gold-500/30 bg-navy-900 text-xl font-bold text-gold-400 lg:-mr-3 lg:ml-3">
                        +
                      </div>
                    </div>
                  )}

                  {/* Plus sign connector for mobile (between stacked cards) */}
                  {!isLast && (
                    <div className="flex items-center justify-center md:hidden">
                      <div className="absolute -bottom-3 left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-gold-500/30 bg-navy-900 text-lg font-bold text-gold-400">
                        +
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </StaggerChildren>
        </div>

        {/* Conclusion: equals peak performance */}
        <FadeIn direction="up" delay={0.4}>
          <div className="mt-16 text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-500 bg-gold-500/10 text-2xl font-bold text-gold-400">
              =
            </div>
            <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Peak Performance
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
              When nootropics, electrolytes, and adaptogens work in concert, you
              get more than the sum of their parts — you get a competitive edge
              that lasts the entire competition.
            </p>
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
