/**
 * Analytics stub. Phase 1 is a no-op; Phase 2 wires `{{ANALYTICS_PROVIDER}}`.
 * Events: cta_click, option_select, add_to_cart, email_signup, faq_open.
 */
export type TrackEvent =
  | "cta_click"
  | "option_select"
  | "add_to_cart"
  | "email_signup"
  | "faq_open";

export function track(
  event: TrackEvent,
  props: Record<string, string | number | boolean> = {},
): void {
  void event;
  void props;
}
