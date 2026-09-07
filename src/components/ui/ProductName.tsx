import { cn } from "@/lib/utils";
import { PRODUCT } from "@/lib/constants";

interface ProductNameProps {
  className?: string;
}

/**
 * The product wordmark ("Clarity+") rendered in the Graduate font, with the
 * trailing "+" in the gold accent — matching the Clarity+ bag artwork. Use this
 * anywhere the product name appears as a branded title so the treatment stays
 * consistent across the site.
 */
export function ProductName({ className }: ProductNameProps) {
  const name = PRODUCT.name;
  const hasPlus = name.endsWith("+");
  const base = hasPlus ? name.slice(0, -1) : name;

  return (
    <span className={cn("font-[family-name:var(--font-graduate)]", className)}>
      {base}
      {hasPlus && <span className="text-gold-500">+</span>}
    </span>
  );
}
