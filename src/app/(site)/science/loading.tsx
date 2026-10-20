import { Container } from "@/components/ui/Container";

export default function ScienceLoading() {
  return (
    <>
      {/* Hero area skeleton */}
      <section className="bg-navy-950 py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <div className="mx-auto h-8 w-40 animate-pulse rounded-full bg-white/10" />
            <div className="mx-auto h-12 w-3/4 animate-pulse rounded-lg bg-white/10" />
            <div className="mx-auto h-5 w-2/3 animate-pulse rounded bg-white/10" />
            <div className="mx-auto h-5 w-1/2 animate-pulse rounded bg-white/10" />
          </div>
        </Container>
      </section>

      {/* Content blocks skeleton */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="space-y-20">
            {/* Block 1: image left, text right */}
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="aspect-[4/3] w-full animate-pulse rounded-2xl bg-white/10" />
              <div className="space-y-4">
                <div className="h-8 w-2/3 animate-pulse rounded-lg bg-white/10" />
                <div className="h-4 w-full animate-pulse rounded bg-white/10" />
                <div className="h-4 w-5/6 animate-pulse rounded bg-white/10" />
                <div className="h-4 w-4/6 animate-pulse rounded bg-white/10" />
              </div>
            </div>

            {/* Block 2: text left, image right */}
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="order-2 space-y-4 lg:order-1">
                <div className="h-8 w-2/3 animate-pulse rounded-lg bg-white/10" />
                <div className="h-4 w-full animate-pulse rounded bg-white/10" />
                <div className="h-4 w-5/6 animate-pulse rounded bg-white/10" />
                <div className="h-4 w-3/6 animate-pulse rounded bg-white/10" />
              </div>
              <div className="order-1 aspect-[4/3] w-full animate-pulse rounded-2xl bg-white/10 lg:order-2" />
            </div>

            {/* Block 3: image left, text right */}
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="aspect-[4/3] w-full animate-pulse rounded-2xl bg-white/10" />
              <div className="space-y-4">
                <div className="h-8 w-1/2 animate-pulse rounded-lg bg-white/10" />
                <div className="h-4 w-full animate-pulse rounded bg-white/10" />
                <div className="h-4 w-4/6 animate-pulse rounded bg-white/10" />
                <div className="h-4 w-5/6 animate-pulse rounded bg-white/10" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
