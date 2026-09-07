"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PRODUCT, INGREDIENTS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/animations/FadeIn";

const TABS = ["Description", "How to Use", "Ingredients"] as const;
type Tab = (typeof TABS)[number];

const BENEFITS = [
  "Clinically-backed nootropics for enhanced focus and mental clarity",
  "Premium electrolytes formulated for 4+ hours of competition",
  "Adaptogenic herbs for stress resilience and sustained energy",
  "Clean, caffeine-free energy — no stimulants, no jitters, no crash",
  "Sugar-free with no artificial colors or sweeteners",
  "Convenient stick pack format — just mix and play",
];

const CATEGORY_BADGE_VARIANT: Record<string, "default" | "gold" | "green" | "outline"> = {
  nootropic: "gold",
  adaptogen: "green",
  electrolyte: "default",
};

function DescriptionTab() {
  return (
    <div className="space-y-8">
      <p className="max-w-3xl text-lg leading-relaxed text-silver">
        {PRODUCT.description}
      </p>
      <div>
        <h3 className="mb-4 text-lg font-semibold text-warm-white">
          Key Benefits
        </h3>
        <ul className="space-y-3">
          {BENEFITS.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-gold-500"
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
              <span className="text-silver">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function HowToUseTab() {
  return (
    <div className="max-w-2xl">
      <ol className="space-y-6">
        {PRODUCT.howToUse.map((step, idx) => (
          <li key={idx} className="flex items-start gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-500 text-sm font-bold text-navy-950">
              {idx + 1}
            </span>
            <div className="pt-1">
              <p className="text-base leading-relaxed text-warm-white">
                {step}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-8 rounded-xl bg-gold-500/10 p-6">
        <p className="text-sm font-medium text-gold-400">
          Pro tip: For tournament play, mix one pack 15 minutes before your
          round and keep a second pack in your bag for the back nine.
        </p>
      </div>
    </div>
  );
}

function IngredientsTab() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {INGREDIENTS.map((ingredient) => (
        <Card key={ingredient.name} padding="md" hover>
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-semibold text-warm-white">
                {ingredient.name}
              </h4>
              <Badge
                variant={CATEGORY_BADGE_VARIANT[ingredient.category] ?? "default"}
                className="shrink-0"
              >
                {ingredient.category}
              </Badge>
            </div>
            {ingredient.aka && (
              <p className="text-xs text-silver">{ingredient.aka}</p>
            )}
            <p className="text-sm font-medium text-gold-500">
              {ingredient.amount}
            </p>
            <p className="text-sm leading-relaxed text-silver">
              {ingredient.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}

export function ProductDetails() {
  const [activeTab, setActiveTab] = useState<Tab>("Description");

  return (
    <section className="bg-navy-900 py-16 lg:py-24">
      <Container>
        <FadeIn>
          {/* Tab Navigation */}
          <div className="mb-10 border-b border-white/10">
            <nav className="-mb-px flex gap-8" aria-label="Product details">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "whitespace-nowrap border-b-2 pb-4 text-sm font-medium transition-colors sm:text-base",
                    activeTab === tab
                      ? "border-gold-500 font-bold text-gold-500"
                      : "border-transparent text-silver hover:border-white/20 hover:text-warm-white"
                  )}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="min-h-[300px]">
            {activeTab === "Description" && <DescriptionTab />}
            {activeTab === "How to Use" && <HowToUseTab />}
            {activeTab === "Ingredients" && <IngredientsTab />}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
