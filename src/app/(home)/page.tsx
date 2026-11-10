import type { Metadata } from "next";
import { brand, faq, seo } from "@/content/homepage";
import { SITE_URL } from "@/lib/site";
import logo from "@/assets/gp-wordmark-navy.svg";
import { isPlaceholder } from "@/lib/home";
import { Hero } from "@/components/home/Hero";
import { GolfMoments } from "@/components/home/GolfMoments";
import { BuyBox } from "@/components/home/BuyBox";
import { HowToUse } from "@/components/home/HowToUse";
import { WhatsInside } from "@/components/home/WhatsInside";
import { TasteMix } from "@/components/home/TasteMix";
import { FoundersNote } from "@/components/home/FoundersNote";
import { NsfSection } from "@/components/home/NsfSection";
import { Reviews } from "@/components/home/Reviews";
import { Quality } from "@/components/home/Quality";
import { FAQ } from "@/components/home/FAQ";
import { Join } from "@/components/home/Join";
import { StickyMobileCta } from "@/components/home/StickyMobileCta";

const title = seo.title.text;
const description = seo.description.text;
const ogImages = isPlaceholder(seo.ogImage) ? undefined : [{ url: seo.ogImage, alt: seo.shareImageAlt }];

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  // Clear the old site's inherited keywords ("sports hydration", "electrolytes").
  keywords: null,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: brand.company,
    url: "/",
    title,
    description,
    ...(ogImages ? { images: ogImages } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    ...(ogImages ? { images: ogImages } : {}),
  },
};

/** Structured data skips anything still unresolved, so no {{ID}} reaches search engines. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.items
    .filter((item) => !isPlaceholder(item.answer.text))
    .map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer.text },
    })),
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.company,
  legalName: `${brand.company}, Inc.`,
  url: SITE_URL,
  logo: `${SITE_URL}${logo.src}`,
};

export default function Home() {
  return (
    <>
      <Hero />
      <GolfMoments />
      <BuyBox />
      <HowToUse />
      <WhatsInside />
      <TasteMix />
      <FoundersNote />
      <NsfSection />
      <Reviews />
      <Quality />
      <FAQ />
      <Join />
      <StickyMobileCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
    </>
  );
}
