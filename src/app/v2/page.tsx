import type { Metadata } from "next";
import { brand, faq, seo } from "@/content/homepage";
import { SITE_URL } from "@/lib/site";
import logo from "@/assets/gp-wordmark-navy.png";
import { isPlaceholder } from "@/lib/home";
import { PageLabel } from "@/components/home/PageLabel";
import { AnnouncementBar } from "@/components/home/AnnouncementBar";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { ProofStrip } from "@/components/home/ProofStrip";
import { GolfMoments } from "@/components/home/GolfMoments";
import { BuyBox } from "@/components/home/BuyBox";
import { HowToUse } from "@/components/home/HowToUse";
import { WhatsInside } from "@/components/home/WhatsInside";
import { FoundersNote } from "@/components/home/FoundersNote";
import { Reviews } from "@/components/home/Reviews";
import { Quality } from "@/components/home/Quality";
import { FAQ } from "@/components/home/FAQ";
import { Join } from "@/components/home/Join";
import { Footer } from "@/components/home/Footer";
import { StickyMobileCta } from "@/components/home/StickyMobileCta";

const title = seo.title.text;
const description = seo.description.text;
const ogImages = isPlaceholder(seo.ogImage) ? undefined : [{ url: seo.ogImage, alt: seo.shareImageAlt }];

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  // Clear the old site's inherited keywords ("sports hydration", "electrolytes").
  keywords: null,
  alternates: { canonical: "/v2" },
  // A comparison build: keep it out of search until it replaces the main page.
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: brand.company,
    url: "/v2",
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

export default function HomeV2() {
  return (
    <div className="hp">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-hp focus:bg-hp-navy focus:px-4 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>
      <PageLabel />
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <GolfMoments />
        <BuyBox />
        <HowToUse />
        <WhatsInside />
        <FoundersNote />
        <Reviews />
        <Quality />
        <FAQ />
        <Join />
      </main>
      <Footer />
      <StickyMobileCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
    </div>
  );
}
