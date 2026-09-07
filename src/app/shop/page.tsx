import type { Metadata } from "next";
import { PRODUCT, SITE_CONFIG } from "@/lib/constants";
import { ProductHero } from "@/components/sections/shop/ProductHero";
import { ProductDetails } from "@/components/sections/shop/ProductDetails";
import { SupplementFacts } from "@/components/sections/shop/SupplementFacts";
import { SubscribeAndSave } from "@/components/sections/shop/SubscribeAndSave";
import { ReviewsSection } from "@/components/sections/shop/ReviewsSection";

export const metadata: Metadata = {
  title: "Shop",
  description: `Shop ${PRODUCT.name} — ${PRODUCT.shortDescription} ${PRODUCT.count}.`,
  openGraph: {
    title: `Shop ${PRODUCT.shortName} | ${SITE_CONFIG.name}`,
    description: PRODUCT.shortDescription,
    url: `${SITE_CONFIG.domain}/shop`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: PRODUCT.name,
  description: PRODUCT.description,
  brand: {
    "@type": "Brand",
    name: SITE_CONFIG.name,
  },
  offers: {
    "@type": "Offer",
    url: `${SITE_CONFIG.domain}/shop`,
    priceCurrency: "USD",
    price: PRODUCT.price,
    availability: "https://schema.org/PreOrder",
    priceValidUntil: "2026-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: PRODUCT.rating,
    reviewCount: PRODUCT.reviewCount,
    bestRating: 5,
    worstRating: 1,
  },
};

export default function ShopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductHero />
      <ProductDetails />
      <SupplementFacts />
      <SubscribeAndSave />
      <ReviewsSection />
    </>
  );
}
