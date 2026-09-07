import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Accordion } from "@/components/ui/Accordion";
import { FadeIn } from "@/components/animations/FadeIn";
import { FAQS } from "@/lib/constants";

export function FAQSection() {
  return (
    <section id="faq" className="bg-navy-800 py-24">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left column: heading + intro + image */}
          <div className="lg:col-span-2">
            <FadeIn direction="up">
              <SectionHeading
                eyebrow="Got Questions?"
                heading="Frequently Asked Questions"
                align="left"
                className="mb-6"
              />
              <p className="mb-8 text-silver leading-relaxed">
                Everything you need to know about Clarity+.
                Can&apos;t find what you&apos;re looking for? Reach out to our
                team and we&apos;ll get back to you within 24 hours.
              </p>
              <PlaceholderImage
                label="FAQ Illustration"
                icon="golf"
                aspectRatio="aspect-[4/3]"
                dark={false}
                className="hidden lg:flex"
              />
            </FadeIn>
          </div>

          {/* Right column: accordion */}
          <div className="lg:col-span-3">
            <FadeIn direction="up" delay={0.15}>
              <Accordion items={FAQS} />
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
