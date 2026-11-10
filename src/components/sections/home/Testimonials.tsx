"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { StarRating } from "@/components/ui/StarRating";
import { FadeIn } from "@/components/animations/FadeIn";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(":scope > div")?.offsetWidth ?? 320;
    el.scrollBy({
      left: direction === "left" ? -cardWidth - 24 : cardWidth + 24,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="bg-navy-900 py-24">
      <Container>
        <FadeIn direction="up">
          <SectionHeading
            eyebrow="Real Athletes, Real Results"
            heading="What Athletes Are Saying"
            className="mb-12"
          />
        </FadeIn>
      </Container>

      {/* Full-width scroll area */}
      <div className="relative">
        {/* Left/right arrow buttons (desktop) */}
        <button
          type="button"
          onClick={() => scroll("left")}
          className={cn(
            "absolute left-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-navy-800 border border-white/10 shadow-lg shadow-black/20 transition-all lg:flex",
            canScrollLeft
              ? "opacity-100 hover:shadow-lg"
              : "pointer-events-none opacity-0",
          )}
          aria-label="Scroll left"
        >
          <svg
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          className={cn(
            "absolute right-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-navy-800 border border-white/10 shadow-lg shadow-black/20 transition-all lg:flex",
            canScrollRight
              ? "opacity-100 hover:shadow-lg"
              : "pointer-events-none opacity-0",
          )}
          aria-label="Scroll right"
        >
          <svg
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="-mx-4 flex gap-6 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scroll-smooth sm:px-6 lg:px-8"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Leading spacer for centering on large screens */}
          <div className="hidden shrink-0 lg:block lg:w-[calc((100vw-72rem)/2)]" />

          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="w-[85vw] shrink-0 snap-center sm:w-[400px]"
            >
              <Card hover padding="lg" className="flex h-full flex-col">
                <StarRating rating={testimonial.rating} />
                <blockquote className="mt-4 flex-1 text-white leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-silver">
                      {testimonial.location}
                    </p>
                  </div>
                  <Badge variant="outline">{testimonial.handicap}</Badge>
                </div>
              </Card>
            </div>
          ))}

          {/* Trailing spacer */}
          <div className="hidden shrink-0 lg:block lg:w-[calc((100vw-72rem)/2)]" />
        </div>
      </div>
    </section>
  );
}
