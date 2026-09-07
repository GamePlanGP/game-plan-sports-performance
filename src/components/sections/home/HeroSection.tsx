import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE_CONFIG } from "@/lib/constants";
import clarityBag from "@/assets/clarity-plus-bag.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden">
      {/* Subtle radial overlay for depth */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(255,255,255,0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(0,0,0,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Decorative background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <Container size="wide" className="relative flex min-h-screen items-center">
        <div className="grid w-full items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16">
          {/* Left column: Copy */}
          <div className="order-1">
            <FadeIn direction="up" delay={0}>
              <Badge variant="gold" className="mb-6">
                Coming Soon
              </Badge>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <h1 className="font-display text-5xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
                Perform at the
                <br />
                highest level.
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80 sm:text-xl">
                {SITE_CONFIG.description}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button variant="cta" size="lg" href="#waitlist">
                  Join the Waitlist
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="#how-it-works"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Right column: Product image */}
          <div className="order-2">
            <FadeIn direction="right" delay={0.4}>
              <Image
                src={clarityBag}
                alt="Clarity+ Peak Performance Drink — Game Plan Sports Performance stick-pack pouch"
                priority
                className="mx-auto w-full max-w-[18rem] drop-shadow-2xl sm:max-w-xs lg:max-w-sm"
              />
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
