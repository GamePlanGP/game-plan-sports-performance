import { SiteChrome } from "@/components/layout/SiteChrome";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <SiteChrome>
      <section className="py-24 sm:py-32">
        <Container>
          <div className="flex flex-col items-center text-center">
            <p className="font-display text-[10rem] leading-none font-bold text-gold-500/20 select-none sm:text-[14rem]">
              404
            </p>

            <h1 className="font-display mt-2 text-3xl font-bold text-warm-white sm:text-4xl">
              Page Not Found
            </h1>

            <p className="mt-4 max-w-md text-lg text-silver">
              Looks like you&apos;ve gone off course.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" size="lg" href="/">
                Back to Home
              </Button>
              <Button variant="secondary" size="lg" href="/shop">
                Visit Shop
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </SiteChrome>
  );
}
