import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond, Graduate } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

// Product wordmark font — the "Clarity+" name renders in Graduate (matches the
// Clarity+ bag artwork).
const graduate = Graduate({
  variable: "--font-graduate",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Game Plan Sports Performance | Nootropic Hydration for Peak Performance",
    template: "%s | Game Plan Sports Performance",
  },
  description:
    "Engineered for athletes who refuse to leave performance to chance. Nootropic hydration designed for the demands of elite competition.",
  keywords: [
    "sports hydration",
    "nootropic",
    "golf supplement",
    "sports performance",
    "electrolytes",
    "focus",
    "mental clarity",
    "CognatiQ",
  ],
  metadataBase: new URL("https://www.gameplansportsperformance.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gameplansportsperformance.com",
    siteName: "Game Plan Sports Performance",
    title: "Game Plan Sports Performance | Nootropic Hydration for Peak Performance",
    description:
      "Engineered for athletes who refuse to leave performance to chance. Nootropic hydration designed for the demands of elite competition.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Game Plan Sports Performance",
    description:
      "Nootropic hydration engineered for elite performance. Find your Zone.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${cormorant.variable} ${graduate.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
