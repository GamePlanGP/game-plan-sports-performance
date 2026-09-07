import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

const SUBSCRIPTION_PERKS = [
  "Save on every order",
  "Choose a delivery schedule that fits your routine",
  "Skip, pause, or cancel anytime",
];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-gold-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export function SubscribeAndSave() {
  return (
    <section className="bg-navy-900 py-16 lg:py-24">
      <Container size="narrow">
        <FadeIn>
          <Card padding="lg" className="relative overflow-hidden">
            {/* Coming Soon Overlay Banner */}
            <div className="absolute right-0 top-0 z-10">
              <div className="bg-gold-500 px-4 py-1.5 text-xs font-bold text-navy-950">
                Coming Soon
              </div>
            </div>

            <div className="space-y-8">
              {/* Heading */}
              <div>
                <h2 className="font-display text-2xl font-bold text-warm-white sm:text-3xl">
                  Subscribe &amp; Save
                </h2>
                <p className="mt-2 text-sm text-silver">
                  Never run out before your next competition. Lock in savings
                  with a flexible subscription — plans and pricing will be
                  available through our store at launch.
                </p>
              </div>

              {/* Perks */}
              <ul className="space-y-3">
                {SUBSCRIPTION_PERKS.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-silver">{perk}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant="cta"
                size="lg"
                disabled
                className="w-full cursor-not-allowed opacity-70"
              >
                Coming Soon
              </Button>
            </div>
          </Card>
        </FadeIn>
      </Container>
    </section>
  );
}
