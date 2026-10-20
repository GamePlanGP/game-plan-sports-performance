import { Container } from "@/components/ui/Container";

export default function ShopLoading() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image placeholder */}
          <div className="aspect-square w-full animate-pulse rounded-2xl bg-white/10" />

          {/* Product details placeholders */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Badge */}
            <div className="h-6 w-28 animate-pulse rounded-full bg-white/10" />

            {/* Title */}
            <div className="h-10 w-3/4 animate-pulse rounded-lg bg-white/10" />

            {/* Price */}
            <div className="h-8 w-32 animate-pulse rounded-lg bg-white/10" />

            {/* Rating */}
            <div className="h-5 w-40 animate-pulse rounded bg-white/10" />

            {/* Description line 1 */}
            <div className="space-y-3">
              <div className="h-4 w-full animate-pulse rounded bg-white/10" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-white/10" />
              <div className="h-4 w-4/6 animate-pulse rounded bg-white/10" />
            </div>

            {/* Quantity selector */}
            <div className="h-12 w-36 animate-pulse rounded-lg bg-white/10" />

            {/* CTA Button */}
            <div className="h-14 w-full animate-pulse rounded-lg bg-white/10" />

            {/* Trust badges */}
            <div className="flex gap-3">
              <div className="h-8 w-24 animate-pulse rounded-full bg-white/10" />
              <div className="h-8 w-28 animate-pulse rounded-full bg-white/10" />
              <div className="h-8 w-32 animate-pulse rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
