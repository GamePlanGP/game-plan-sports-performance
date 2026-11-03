import { AnnouncementBar } from "@/components/home/AnnouncementBar";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";

/** Chrome for the new-design pages (homepage, The Science). */
export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="hp">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-hp focus:bg-hp-navy focus:px-4 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>
      <AnnouncementBar />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
