import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

const stepIcons: Record<string, string> = {
  tear: "\u2702\uFE0F",
  mix: "\uD83E\uDD64",
  play: "\u26F3",
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-navy-800 py-24">
      <Container>
        <FadeIn direction="up">
          <SectionHeading
            eyebrow="Simple as 1-2-3"
            heading="How It Works"
            className="mb-16"
          />
        </FadeIn>

        <div className="relative">
          {/* Connecting line between steps (desktop only) */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-20 hidden h-0.5 bg-gradient-to-r from-transparent via-silver-500/30 to-transparent lg:block"
            aria-hidden="true"
          />

          <StaggerChildren
            staggerDelay={0.2}
            className="grid gap-12 sm:grid-cols-3"
          >
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div key={step.step} className="relative text-center">
                {/* Large step number watermark */}
                <span
                  className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 font-display text-8xl font-bold text-silver-500/10 select-none"
                  aria-hidden="true"
                >
                  {step.step}
                </span>

                {/* Icon circle */}
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-2xl shadow-lg shadow-black/20 ring-4 ring-silver-500/20">
                  {stepIcons[step.icon] ?? "\u2728"}
                </div>

                {/* Arrow between steps (desktop, except after last step) */}
                {step.step < HOW_IT_WORKS_STEPS.length && (
                  <div
                    className="pointer-events-none absolute right-0 top-8 hidden translate-x-1/2 text-silver-500/40 lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                )}

                <h3 className="text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-silver leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </section>
  );
}
