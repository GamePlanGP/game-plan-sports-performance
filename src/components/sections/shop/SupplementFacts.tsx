import { SUPPLEMENT_FACTS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function SupplementFacts() {
  return (
    <section className="bg-navy-800 py-16 lg:py-24">
      <Container size="narrow">
        <div className="mx-auto max-w-md">
          {/* Supplement Facts Label */}
          <div className="overflow-hidden rounded-lg border-2 border-charcoal bg-warm-white">
            {/* Header */}
            <div className="border-b-8 border-charcoal bg-warm-white px-4 pb-1 pt-2">
              <h2 className="text-2xl font-black tracking-tight text-charcoal">
                Supplement Facts
              </h2>
            </div>

            <div className="px-4 py-1">
              {/* Serving Info */}
              <div className="border-b border-charcoal pb-1">
                <p className="text-sm font-bold text-charcoal">
                  Serving Size: {SUPPLEMENT_FACTS.servingSize}
                </p>
                <p className="text-sm font-bold text-charcoal">
                  Servings Per Container:{" "}
                  {SUPPLEMENT_FACTS.servingsPerContainer}
                </p>
              </div>

              {/* Amount Per Serving / % DV Header */}
              <div className="border-b-4 border-charcoal py-0.5">
                <div className="flex justify-between text-xs text-charcoal">
                  <span className="font-bold">Amount Per Serving</span>
                  <span className="font-bold">% Daily Value*</span>
                </div>
              </div>

              {/* Calories */}
              <div className="flex justify-between border-b border-charcoal py-1">
                <span className="text-sm font-bold text-charcoal">
                  Calories
                </span>
                <span className="text-sm font-bold text-charcoal">
                  {SUPPLEMENT_FACTS.calories}
                </span>
              </div>

              {/* Horizontal Rule */}
              <div className="border-b-4 border-charcoal" />

              {/* Main Ingredients */}
              {SUPPLEMENT_FACTS.ingredients.map((ingredient) => (
                <div
                  key={ingredient.name}
                  className="flex justify-between border-b border-charcoal py-1"
                >
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-charcoal">
                      {ingredient.name}
                    </span>
                    <span className="text-sm text-charcoal">
                      {ingredient.amount}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-charcoal">
                    {ingredient.dv}
                  </span>
                </div>
              ))}

              {/* Electrolyte Blend */}
              <div className="border-b border-charcoal py-1">
                <div className="flex justify-between">
                  <span className="text-sm font-bold text-charcoal">
                    {SUPPLEMENT_FACTS.electrolyteBlend.name}
                  </span>
                  <span className="text-sm font-bold text-charcoal">**</span>
                </div>
              </div>

              {/* Electrolyte Blend Ingredients */}
              {SUPPLEMENT_FACTS.electrolyteBlend.ingredients.map(
                (ingredient, idx) => (
                  <div
                    key={ingredient}
                    className={
                      idx <
                      SUPPLEMENT_FACTS.electrolyteBlend.ingredients.length - 1
                        ? "border-b border-charcoal py-1 pl-4"
                        : "border-b-8 border-charcoal py-1 pl-4"
                    }
                  >
                    <span className="text-xs text-charcoal">{ingredient}</span>
                  </div>
                )
              )}

              {/* Cognitive Performance Blend */}
              <div className="border-b border-charcoal py-1">
                <div className="flex justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-charcoal">
                      {SUPPLEMENT_FACTS.proprietaryBlend.name}
                    </span>
                    <span className="text-sm text-charcoal">
                      {SUPPLEMENT_FACTS.proprietaryBlend.totalAmount}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-charcoal">
                    **
                  </span>
                </div>
              </div>

              {/* Proprietary Blend Ingredients */}
              {SUPPLEMENT_FACTS.proprietaryBlend.ingredients.map(
                (ingredient, idx) => (
                  <div
                    key={ingredient}
                    className={
                      idx <
                      SUPPLEMENT_FACTS.proprietaryBlend.ingredients.length - 1
                        ? "border-b border-charcoal py-1 pl-4"
                        : "border-b-4 border-charcoal py-1 pl-4"
                    }
                  >
                    <span className="text-xs text-charcoal">{ingredient}</span>
                  </div>
                )
              )}

              {/* Footnotes */}
              <div className="py-2">
                <p className="text-[10px] leading-tight text-charcoal">
                  * Percent Daily Values are based on a 2,000 calorie diet.
                </p>
                <p className="text-[10px] leading-tight text-charcoal">
                  ** Daily Value not established.
                </p>
              </div>

              {/* Other Ingredients */}
              <div className="border-t border-charcoal py-2">
                <p className="text-xs text-charcoal">
                  <span className="font-bold">Other Ingredients: </span>
                  {SUPPLEMENT_FACTS.otherIngredients}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
