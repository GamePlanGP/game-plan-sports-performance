import type { Metadata } from "next";
import { faq, seo } from "@/content/homepage";
import { isPlaceholder } from "@/lib/home";
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

export const metadata: Metadata = {
  title: { absolute: seo.title },
  description: seo.description,
  // A comparison build: keep it out of search until it replaces the main page.
  robots: { index: false, follow: false },
  openGraph: {
    title: seo.title,
    description: seo.description,
    ...(isPlaceholder(seo.ogImage) ? {} : { images: [seo.ogImage] }),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer.text },
  })),
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
    </div>
  );
}
