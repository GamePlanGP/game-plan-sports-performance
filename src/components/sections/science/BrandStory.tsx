import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { FadeIn } from "@/components/animations/FadeIn";
import { ParallaxWrapper } from "@/components/animations/ParallaxWrapper";
import { BRAND_STORY } from "@/lib/constants";

export function BrandStory() {
  const [firstParagraph, ...restParagraphs] = BRAND_STORY.paragraphs;

  return (
    <section id="story" className="relative overflow-hidden bg-navy-950 py-24 sm:py-32 lg:py-40">
      {/* Parallax background image */}
      <div className="absolute inset-0 opacity-40">
        <ParallaxWrapper speed={0.3} className="h-full">
          <PlaceholderImage
            icon="golf"
            dark
            label="Brand Story"
            aspectRatio="aspect-auto"
            className="h-full min-h-[120%] w-full rounded-none"
          />
        </ParallaxWrapper>
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/70" />

      <Container size="wide" className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text content */}
          <div className="max-w-3xl">
            <FadeIn direction="up">
              <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                {BRAND_STORY.headline}
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="mt-8 border-l-4 border-silver-500 pl-6">
                <p className="text-lg font-medium leading-relaxed text-white/90 sm:text-xl">
                  {firstParagraph}
                </p>
              </div>
            </FadeIn>

            <div className="mt-8 space-y-6">
              {restParagraphs.map((paragraph, index) => (
                <FadeIn key={index} direction="up" delay={0.3 + index * 0.1}>
                  <p className="text-base leading-relaxed text-white/70 sm:text-lg">
                    {paragraph}
                  </p>
                </FadeIn>
              ))}
            </div>

            {/* Decorative accent */}
            <FadeIn direction="up" delay={0.6}>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-silver-500 to-transparent" />
                <span className="text-sm font-semibold uppercase tracking-widest text-silver-500">
                  Est. 2025
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-silver-500 to-transparent" />
              </div>
            </FadeIn>
          </div>

          {/* Right side decorative image */}
          <FadeIn direction="right" delay={0.3} className="hidden lg:block">
            <PlaceholderImage
              icon="golf"
              dark
              label="Our Story"
              aspectRatio="aspect-[3/4]"
              className="rounded-2xl border border-white/10"
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
