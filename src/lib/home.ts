import type { Value } from "@/content/homepage";

const TOKEN = /\{\{([A-Z0-9_]+)\}\}/g;

export function isPlaceholder(v: unknown): v is string {
  return typeof v === "string" && /\{\{[A-Z0-9_]+\}\}/.test(v);
}

/** "{{TRIAL_PRICE}}" -> "TRIAL_PRICE" (first token), or null. */
export function placeholderId(v: string): string | null {
  const m = /\{\{([A-Z0-9_]+)\}\}/.exec(v);
  return m ? m[1] : null;
}

export type Segment = { kind: "text"; value: string } | { kind: "ph"; id: string };

/** Splits a string into plain text and `{{ID}}` placeholder segments. */
export function splitPlaceholders(s: string): Segment[] {
  const out: Segment[] = [];
  let last = 0;
  for (const m of s.matchAll(TOKEN)) {
    if (m.index > last) out.push({ kind: "text", value: s.slice(last, m.index) });
    out.push({ kind: "ph", id: m[1] });
    last = m.index + m[0].length;
  }
  if (last < s.length) out.push({ kind: "text", value: s.slice(last) });
  return out;
}

export function toNumber(v: Value): number | null {
  return typeof v === "number" && Number.isFinite(v) ? v : null;
}

export function money(n: number): string {
  return `$${n.toFixed(2)}`;
}

/** price ÷ servings, 2 decimals; `{{PER_SERVING}}` while either is unresolved. */
export function perServing(price: Value, servings: Value): string {
  const p = toNumber(price);
  const s = toNumber(servings);
  if (p === null || s === null || s <= 0) return "{{PER_SERVING}}";
  return money(p / s);
}

/** Subscribe & save price: bag price less the discount; placeholder if unknown. */
export function subscriptionPrice(bagPrice: Value, discountPct: Value): Value {
  const p = toNumber(bagPrice);
  const d = toNumber(discountPct);
  if (p === null || d === null) return "{{SUB_PRICE}}";
  return Math.round(p * (1 - d / 100) * 100) / 100;
}

/** Opens a FAQ item (announcement bar -> guarantee answer). */
export const OPEN_FAQ_EVENT = "hp:open-faq";

export function openFaq(id: string): void {
  window.dispatchEvent(new CustomEvent(OPEN_FAQ_EVENT, { detail: id }));
}
