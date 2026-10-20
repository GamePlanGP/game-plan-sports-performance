import type { Value } from "@/content/homepage";
import { money, toNumber } from "@/lib/home";
import { Txt } from "./Txt";

/** A decided number renders as money; anything else renders its placeholder tag. */
export function Price({ value }: { value: Value }) {
  const n = toNumber(value);
  return n === null ? <Txt v={String(value)} /> : <>{money(n)}</>;
}

/** A servings/pct value: number as-is, otherwise its placeholder tag. */
export function Amount({ value, suffix = "" }: { value: Value; suffix?: string }) {
  const n = toNumber(value);
  return n === null ? (
    <>
      <Txt v={String(value)} />
      {suffix}
    </>
  ) : (
    <>
      {n}
      {suffix}
    </>
  );
}
