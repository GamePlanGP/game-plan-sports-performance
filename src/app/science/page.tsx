import type { Metadata } from "next";
import { BrandStory } from "@/components/sections/science/BrandStory";
import { IngredientDeepDive } from "@/components/sections/science/IngredientDeepDive";
import { ScienceBehind } from "@/components/sections/science/ScienceBehind";
import { ClinicalStudies } from "@/components/sections/science/ClinicalStudies";

export const metadata: Metadata = {
  title: "The Science",
  description:
    "Discover the science behind Clarity. Clinically dosed nootropics, premium electrolytes, and powerful adaptogens — every ingredient backed by research.",
};

export default function SciencePage() {
  return (
    <>
      <BrandStory />
      <IngredientDeepDive />
      <ScienceBehind />
      <ClinicalStudies />
    </>
  );
}
