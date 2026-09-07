"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PRODUCT } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { StarRating } from "@/components/ui/StarRating";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { FadeIn } from "@/components/animations/FadeIn";

const THUMBNAIL_LABELS = [
  "Front View",
  "Back View",
  "Nutrition Label",
  "Lifestyle",
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export function ProductHero() {
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);

  return (
    <section className="bg-navy-900 pt-28 pb-12 lg:pt-32 lg:pb-20">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column — Image Gallery */}
          <FadeIn direction="left">
            <div className="space-y-4">
              <PlaceholderImage
                label={THUMBNAIL_LABELS[activeThumb]}
                icon="product"
                aspectRatio="aspect-square"
                className={cn(
                  "w-full rounded-2xl border border-white/10",
                  "transition-all duration-300"
                )}
              />
              <div className="grid grid-cols-4 gap-3">
                {THUMBNAIL_LABELS.map((label, idx) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setActiveThumb(idx)}
                    className={cn(
                      "overflow-hidden rounded-xl border-2 transition-all duration-200",
                      activeThumb === idx
                        ? "border-gold-500 ring-2 ring-gold-500/20"
                        : "border-transparent hover:border-white/20"
                    )}
                  >
                    <PlaceholderImage
                      label={label}
                      icon="product"
                      aspectRatio="aspect-square"
                      className="w-full"
                    />
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right Column — Product Info */}
          <FadeIn direction="right" delay={0.15}>
            <div className="flex flex-col gap-6">
              {/* Coming Soon Badge */}
              <div>
                <Badge variant="gold">Coming Soon</Badge>
              </div>

              {/* Product Name */}
              <h1 className="font-display text-3xl font-bold text-warm-white sm:text-4xl lg:text-5xl">
                {PRODUCT.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <StarRating rating={PRODUCT.rating} />
                <a
                  href="#reviews"
                  className="text-sm text-silver transition-colors hover:text-gold-500"
                >
                  {PRODUCT.rating} ({PRODUCT.reviewCount} reviews)
                </a>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-warm-white">
                  {PRODUCT.priceFormatted}
                </span>
                <span className="text-sm text-silver">
                  ({PRODUCT.pricePerServing} per serving)
                </span>
              </div>

              {/* Description */}
              <p className="text-base leading-relaxed text-silver">
                {PRODUCT.shortDescription}
              </p>

              {/* Format + Count */}
              <div className="flex items-center gap-4 text-sm text-warm-white">
                <span className="font-medium">
                  {PRODUCT.format} &middot; {PRODUCT.count}
                </span>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-warm-white">
                  Quantity:
                </label>
                <QuantitySelector value={quantity} onChange={setQuantity} />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3">
                <Button
                  variant="cta"
                  size="lg"
                  disabled
                  className="w-full cursor-not-allowed opacity-70"
                >
                  Coming Soon
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  href="/waitlist"
                  className="w-full"
                >
                  Join Waitlist for Early Access
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="border-t border-white/10 pt-6">
                <div className="flex flex-wrap gap-2">
                  {PRODUCT.trustBadges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/20 bg-gold-500/10 px-3 py-1.5 text-xs font-medium text-gold-400"
                    >
                      <CheckIcon className="h-3.5 w-3.5 text-gold-500" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
