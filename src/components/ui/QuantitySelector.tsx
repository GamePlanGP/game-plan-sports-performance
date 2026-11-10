"use client";

import { useCallback } from "react";
import { cn } from "@/lib/utils";

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 10,
}: QuantitySelectorProps) {
  const atMin = value <= min;
  const atMax = value >= max;

  const decrement = useCallback(() => {
    if (value > min) onChange(value - 1);
  }, [value, min, onChange]);

  const increment = useCallback(() => {
    if (value < max) onChange(value + 1);
  }, [value, max, onChange]);

  return (
    <div className="inline-flex items-center rounded-lg border border-white/20">
      <button
        type="button"
        onClick={decrement}
        disabled={atMin}
        aria-label="Decrease quantity"
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-l-lg text-lg font-medium transition-colors",
          atMin
            ? "cursor-not-allowed text-gray-300"
            : "text-white hover:bg-navy-800 hover:text-silver-500",
        )}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
        </svg>
      </button>

      <span
        className="flex h-10 w-12 items-center justify-center border-x border-white/20 text-sm font-semibold text-white tabular-nums"
        aria-live="polite"
        aria-label={`Quantity: ${value}`}
      >
        {value}
      </span>

      <button
        type="button"
        onClick={increment}
        disabled={atMax}
        aria-label="Increase quantity"
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-r-lg text-lg font-medium transition-colors",
          atMax
            ? "cursor-not-allowed text-gray-300"
            : "text-white hover:bg-navy-800 hover:text-silver-500",
        )}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
}
