import { HeroSection } from "@/components/sections/home/HeroSection";
import { ProductShowcase } from "@/components/sections/home/ProductShowcase";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { IngredientSpotlight } from "@/components/sections/home/IngredientSpotlight";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { FAQSection } from "@/components/sections/home/FAQSection";
import { FinalCTA } from "@/components/sections/home/FinalCTA";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

// The previous homepage, kept at /v1 for reference. Never indexed.
export const metadata: Metadata = {
  title: "Homepage 1 (reference)",
  robots: { index: false, follow: false },
};

export default function HomepageV1() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ProductShowcase />
      <HowItWorks />
      <IngredientSpotlight />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
