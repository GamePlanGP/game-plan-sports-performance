import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/** Announcement bar + header + footer shared by every page except /v2. */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-30">
        <AnnouncementBar />
        <Header />
      </div>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
