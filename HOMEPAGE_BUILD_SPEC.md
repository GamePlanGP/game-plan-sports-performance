# SPEC — Game Plan Sports Performance homepage (Phase 1 skeleton · Palette v2)

## 1. Context

- **Company:** Game Plan Sports Performance, Inc.
- **Product:** Clarity+ — a cognitive-performance drink mix (stick packs) for golfers, featuring CognatiQ® (whole coffee fruit extract, supplied by FutureCeuticals).
- **Positioning:** Decisions under pressure. Clarity+ helps golfers commit to every shot. We do **not** position on "calm" or "hydration."
- **Page goal:** Convert first-time visitors (influencer, affiliate, social, pro referrals) into a first order — or an email signup if they're not ready.
- **One product = the homepage is the sales page.** The buy box lives on the homepage.

---

## 2. Stack & constraints

- Existing site: **Next.js on Vercel**. Inspect the repo first. Follow its router (App vs Pages), styling approach, and folder conventions. If the repo has no styling system, use CSS Modules + the CSS variables in Section 3. No new UI frameworks.
- Commerce backend: **Shopify** (checkout + inventory only, no visible storefront).
- Subscriptions: **Seal Subscriptions** (Shopify selling plans). Reviews: **Judge.me**. Email/SMS: **Omnisend**. Affiliates: **UpPromote**.
- **Phase 1 has no live integrations.** Stub every button, form, and widget.
- Work on branch `homepage-v1`. Vercel preview deploys only.
- Secrets go in `.env.local` only. Never in the content file. Never committed.

---

## 3. Brand system

> **Palette v2 (Oct 20, 2026):** navy / silver / burgundy / white replaces the old navy / gold / warm-white. Nothing gold or warm-white should appear anywhere.

### Color tokens
```css
:root {
  /* Brand */
  --navy: #002D62;      /* primary: headlines, body text, logo, outlines, navy bands */
  --silver: #C4CED4;    /* primary: button fills, tints, hairlines, accents on navy */
  --burgundy: #862633;  /* highlight: clinical proof only */
  --white: #FFFFFF;     /* foundation */

  /* Derived tints of the brand colors (not new colors) */
  --tint: #F0F3F4;      /* silver at 25% on white: alternating light sections */
  --tint-2: #E4E9EC;    /* silver at 45%: skeleton bars, image placeholders */
  --line: #D3DADF;      /* silver at 75%: hairlines + card borders on light sections */
  --ink-soft: #4C6C91;  /* navy at 70%: secondary text on white/tint */
  --navy-2: #0A3A72;    /* raised surface on navy (success panel, placeholder stripes) */
  --navy-line: rgba(196, 206, 212, .26); /* hairlines + card outlines on navy */
}
```

### How each color is used
- **White** is the foundation. Light sections alternate between white and `--tint`.
- **Navy** carries the brand: headlines, body text, logo, outlines, focus rings, the announcement bar, and exactly **three** full-width bands — Golf Moments, Founder's Note, and Sign-up + Footer.
- **Silver** is every button fill, the section tint, all hairlines, the placebo chart bar, and secondary text, icons, and tags on navy.
- **Burgundy** has two jobs.
  - **Clinical proof (solid fills and text):** the CognatiQ® chart bar, the 80.7% label, and the 200mg figure on the CognatiQ® ingredient card. These are the only places burgundy is used as a fill or as text.
  - **Accent lines (added Oct 20, 2026):** 2px rules along the top and bottom edge of every silver (`--tint`) band; the 2px × 40px accent bar above each heading on a light section; the rule above each How-to-use step; the frame around the FAQ list and the marker on the open question; the rule between the announcement bar and the header; and the underline on text links on light backgrounds.
  - Never on buttons, badges, or icons, and never on navy (accent lines on light backgrounds only).

### Contrast rules (checked)
| Pairing | Ratio | Use |
|---|---|---|
| Navy on white | 13.5:1 | Default text |
| White on navy | 13.5:1 | Text on navy bands |
| Navy on silver | 8.5:1 | Button labels |
| Silver on navy | 8.5:1 | Secondary text, icons, tags on navy |
| Burgundy on white / tint | 9.0:1 / 8.1:1 | Proof figures only |
| `--ink-soft` on white / tint | 5.4:1 / 4.9:1 | Secondary text on light sections |
| **Silver on white** | **1.6:1** | **Never as text.** Fills and hairlines only. A silver button on a light section always has its navy outline. |
| **Burgundy on navy** | **1.5:1** | **Never for text or fills.** Burgundy sits on white or `--tint`; the one rule beside navy is the 2px line under the announcement bar. |

- Focus rings: 2px navy on light sections, 2px white on navy sections.

### Type
- Headings: **Cormorant Garamond**, weight 500 (H3 at 600).
- Body / UI: **Montserrat**, 400–600.
- Labels (buttons, nav links, eyebrows, tags, form labels, trust row): Montserrat 600, **uppercase**, letter-spacing .14–.22em, small (.62–.76rem).
- "Clarity+" product wordmark: **Graduate**.
- Load all three with `next/font/google`.

### Logos
Ryan will provide final logo exports later: `{{LOGO_WORDMARK_NAVY}}` (script wordmark, #002D62, transparent, for the white header), `{{LOGO_WORDMARK_WHITE}}` (script wordmark, #FFFFFF, transparent, for the navy footer), and `{{LOGO_MARK}}` (GP mark for the favicon). SVG preferred.

**For Phase 1:** look for the existing GamePlan script wordmark in the repo. If it's a single-color image on a transparent background, make navy (#002D62) and white versions from it. If you can't find one, or can't recolor it cleanly, show a labeled placeholder box at logo size. Never use gold versions.

### Look and feel
Clean, high-end, heritage. White space does the work.
- **2px corner radius** on everything: buttons, cards, inputs, badges, image frames. No pill shapes (review markers excepted).
- **Hairlines, not shadows.** Cards on light sections are white with a 1px `--line` border. Cards on navy are outline-only (1px `--navy-line`), no fill.
- No gradients. No drop shadows, except a faint top shadow on the sticky mobile bar.
- Generous section padding (about 64–120px top and bottom).
- Real photography over stock. No clutter.

### Buttons — one style everywhere
- **Primary:** silver fill, navy label, **1.5px navy border**, 2px radius, min height 50px (small: 42px). Label uppercase, .76rem, letter-spacing .16em, weight 600.
  - Hover: navy fill, white label.
  - On navy bands: border is silver. Hover: white fill, navy label.
- **Secondary actions** ("See the science", "Read the study", "View full label") are **underlined uppercase text links**, not buttons. One filled button per view keeps the hierarchy clear.
- **Badges** ("Try it first", "Best value"): navy fill, white label, 2px radius, uppercase.

### Section backgrounds
| Section | Background |
|---|---|
| Announcement bar | Navy |
| Header | White, 1px `--line` bottom border |
| Hero | White |
| Proof strip | Tint |
| Golf moments | **Navy** |
| Buy box | White |
| How to use | Tint |
| What's inside | White |
| Founder's note | **Navy** |
| Reviews | Tint |
| Quality | White |
| FAQ | Tint |
| Email / SMS | **Navy** |
| Footer | **Navy**, 1px `--navy-line` top border |
| Sticky mobile CTA | White, 1px `--line` top border |

---

## 4. Build rules

1. **Mobile-first.** Design at 375px, then 768px, then 1280px+.
2. **One H1** (hero headline). Each section gets an anchor id:
   `#top, #science, #moments, #buy, #how, #inside, #founder, #reviews, #quality, #faq, #join`
3. **One component per section:** `components/home/<SectionName>.tsx`. The homepage composes them in the order in Section 6.
4. **All copy, prices, links, and flags live in `content/homepage.ts`.** Components never hardcode copy.
5. **Placeholder system:**
   - Any unresolved value is a string wrapped in double braces, e.g. `"{{TRIAL_PRICE}}"`.
   - A `<Placeholder>` component renders it as a visible **yellow dashed tag** showing the ID.
   - `<ImagePlaceholder id label ratio size>` renders a gray box with the label and recommended pixel size.
   - Copy fields use `{ text: string; draft?: boolean }`. `draft: true` shows a small **DRAFT** pill.
   - Add `scripts/check-placeholders.mjs` + `npm run check:placeholders`. It lists every remaining `{{…}}` and every `draft: true`. Production deploy (Phase 3) requires zero.
6. **Launch mode:** `LAUNCH_MODE: "prelaunch" | "live"` in the content file. Default `"prelaunch"`.
   - Prelaunch: every buy CTA reads **"Join the launch list"** and scrolls to `#join`. The buy box still shows options and pricing.
   - Live: normal buying.
7. **Earned-only flags** (default `false`): `SHOW_RATING`, `SHOW_NSF_BADGE`, `SHOW_PRO_TESTIMONIALS`. Never show a rating, certification, or endorsement until it's real.
8. **Sticky mobile CTA bar:** appears after the hero scrolls out of view, hides when `#buy` is in view. Shows "Get Clarity+" and the lowest price.
9. **Price per serving** is computed in code (price ÷ servings, 2 decimals). If either value is still a placeholder, show `{{PER_SERVING}}`.
10. **Accessibility:** alt text on every image, visible focus states, keyboard-accessible accordion and option cards, respect `prefers-reduced-motion`.
11. **Performance:** `next/image` for all images. The proof chart is CSS/SVG, not an image. No heavy libraries.
12. **Analytics stub:** a `track(event, props)` helper that no-ops in Phase 1. Fire it on: `cta_click` (with location), `option_select`, `add_to_cart`, `email_signup`, `faq_open`.
13. **SEO:** page title `{{SEO_TITLE}}`, description `{{SEO_DESCRIPTION}}`, OG image `{{OG_IMAGE}}`. Generate FAQPage JSON-LD from the FAQ content.

### Content file shape (example)
```ts
export const LAUNCH_MODE: "prelaunch" | "live" = "prelaunch";

export const flags = {
  SHOW_RATING: false,
  SHOW_NSF_BADGE: false,
  SHOW_PRO_TESTIMONIALS: false,
};

export const offer = {
  guaranteeShort: "{{GUARANTEE_SHORT}}",
  trial: { servings: "{{TRIAL_SERVINGS}}", price: "{{TRIAL_PRICE}}" },
  bag: { servings: "{{BAG_SERVINGS}}", price: "{{BAG_PRICE}}" },
  subscription: {
    discountPct: "{{SUB_DISCOUNT_PCT}}",
    cadences: "{{SUB_CADENCES}}", // e.g. [4, 6, 8] weeks
  },
  defaultOption: "{{DEFAULT_PURCHASE_OPTION}}",
};

export const hero = {
  headline: { text: "Commit to every shot.", draft: true },
  // ...
};
```

---

## 5. Copy guardrails (non-negotiable)

1. **Never** promise better scores, lower handicaps, or any specific golf outcome.
2. **Never** claim Clarity+ treats, cures, or replaces medication for any condition (anxiety, ADHD, etc.).
3. Clinical stats belong to the **CognatiQ® ingredient study**, not Clarity+. Say so on the page.
4. The 80.7% figure is improvement **vs. baseline**. Always show placebo (11.1%) beside it.
5. Benefit language comes **only** from this approved list:
   - Improves decisiveness
   - Enhances accuracy under pressure
   - Strengthens cognitive control
   - Boosts working memory
   - Increases focus and mental stamina

   When describing Clarity+ itself, use **"supports"** + an asterisk.
6. Every asterisked claim ties to the FDA disclaimer (footer, and small print under the proof strip).
7. Write **CognatiQ®** with the ® on first mention in each section.
8. **Never invent** reviews, ratings, testimonials, certifications, press logos, or athlete endorsements. Placeholders only, clearly labeled.
9. Draft copy in this spec is marked **DRAFT**. Use it, but flag it `draft: true`.
10. Final copy goes to FutureCeuticals for claims review before launch: `{{FC_APPROVAL}}`.

---

## 6. Page structure — top to bottom

### 6.0 Header
- Sticky. White background, 1px `--line` bottom border. Left: `{{LOGO_WORDMARK_NAVY}}`.
- Desktop nav: The Science (`#science`) · How to Use (`#how`) · Ingredients (`#inside`) · Reviews (`#reviews`) · FAQ (`#faq`). Uppercase tracked labels in `--ink-soft`; navy on hover.
- Below 1080px: hamburger menu (white panel, hairline dividers).
- Right: small primary button **"Get Clarity+"** → `#buy` (hidden under 560px; the sticky mobile bar takes over). Cart icon slot (Phase 2).

### 6.1 Announcement bar
- Sits **above** the header. Navy background, white text, silver shield icon. One message only: `{{GUARANTEE_SHORT}}`
- Links to the guarantee FAQ item and opens it.
- **Why:** risk reversal is the #1 objection for a new supplement brand.

### 6.2 Hero — `#top`
- Background: white.
- Rating badge slot above the H1 — renders only when `SHOW_RATING`. Shows `{{JUDGEME_RATING}}` (stars + average + count).
- Eyebrow: "Clarity+ by Game Plan Sports Performance"
- **H1 (DRAFT):** "Commit to every shot." Navy, Cormorant Garamond 500, large.
- **Subhead (DRAFT):** "Clarity+ supports faster, more accurate decisions under pressure* — with a clinically studied 200mg dose of CognatiQ®. Non-stimulant. One stick before you tee off."
  - Depends on `{{CONFIRM_DOSE_200MG}}` and `{{CONFIRM_NON_STIMULANT}}`.
- Primary CTA: **"Get Clarity+"** → `#buy` (prelaunch: "Join the launch list" → `#join`).
- Secondary action: **"See the science →"** as an underlined text link → `#science`. Not a second button.
- Trust row (3 items, uppercase labels, small navy square bullets, hairline above): "200mg CognatiQ®" · "Non-stimulant" · `{{GUARANTEE_SHORT}}`
- Image: `{{HERO_IMAGE}}` — product on the course, or a golfer over a putt. Desktop 1600×1200; mobile crop 800×1000.
- Layout: desktop two columns (copy left, image right). Mobile: copy + CTA first, image below. The CTA must be visible without scrolling on a 375×667 screen.

### 6.3 Proof strip — `#science`
- Background: tint. Chart sits in a white card with a 1px `--line` border.
- **Heading (DRAFT):** "Backed by a clinical study. Not a hunch."
- **Chart:** two vertical bars, CSS/SVG. Animate bar growth on scroll (skip if reduced motion).
  - Placebo — **11.1%** (silver bar, navy label)
  - CognatiQ® 200mg — **80.7%** (burgundy bar, burgundy label)
  - Axis label: "% improvement in omission errors vs. baseline, 60 minutes after one dose"
- **Plain-English line (DRAFT):** "Omission errors are missed responses caused by hesitation. Fewer misses means more decisive play."
- **Stat tiles (3)**, each with a 1px navy rule on top and the number in Cormorant Garamond:
  - **60 min** — "Measured 60 minutes after a single dose"
  - **200mg** — "The clinically studied dose, in every stick" (`{{CONFIRM_DOSE_200MG}}`)
  - **5** — "Published clinical studies on CognatiQ®"
- **Footnote (small print):** "Results from a double-blind, placebo-controlled human clinical study of the CognatiQ® ingredient (N-back test). Clarity+ has not been studied as a finished product. `{{STUDY_CITATION}}`" + FDA disclaimer.
- Text link: "Read the study" → `{{STUDY_URL}}`
- **Why:** no golf competitor shows real clinical data. This is the differentiator.

### 6.4 Three golf moments — `#moments`
- Background: navy.
- **Heading (DRAFT):** "Where rounds are won and lost."
- Eyebrow: "On the course"
- Three outline-only cards (1px `--navy-line`, no fill), each with: silver line icon, scorecard eyebrow, title, one line, benefit tag. Tags: silver outline, uppercase.
  1. Eyebrow "Hole 1 · Tee box" — **The first tee.** (DRAFT) "Everyone's watching. Pick a target. Pull the trigger." — Tag: "Supports decisiveness*"
  2. Eyebrow "Approach · Club select" — **Between clubs.** (DRAFT) "7 or 8? Choose, commit, swing." — Tag: "Supports accuracy under pressure*"
  3. Eyebrow "Hole 17 · 3 ft" — **The 3-footer on 17.** (DRAFT) "Four hours in. Stay sharp to the last putt." — Tag: "Supports focus and mental stamina*"
- CTA under the cards: primary button **"Get Clarity+"** → `#buy` (silver border on navy).
- **Why:** translates lab language into what golfers feel on the course.

### 6.5 Buy box — `#buy`
- Background: white.
- Layout: desktop two columns (gallery left, options right). Mobile: gallery carousel on top.
- Gallery: `{{PRODUCT_IMAGES}}` — minimum 4 (bag front, stick pack, Supplement Facts, lifestyle). 1200×1200 each.
- Title: **Clarity+** (Graduate font). Subline (DRAFT): "Decision-making drink mix for golfers."
- Rating line: only when `SHOW_RATING`.
- Flavor selector: only if `{{FLAVORS}}` has more than one.
- **Purchase options** (radio cards, keyboard accessible). White cards, 1px `--line` border; the selected card gets a navy border plus a 1px navy inner ring. Both badges are navy.
  - **a. Trial** — `{{TRIAL_SERVINGS}}` sticks — `{{TRIAL_PRICE}}` — per-serving shown. Badge: "Try it first"
  - **b. One bag** — `{{BAG_SERVINGS}}` servings — `{{BAG_PRICE}}` — per-serving shown.
  - **c. Subscribe & save `{{SUB_DISCOUNT_PCT}}`%** — `{{BAG_SERVINGS}}` servings — computed price — per-serving shown. Badge: "Best value".
    - Cadence select: `{{SUB_CADENCES}}` (suggested: every 4, 6, or 8 weeks).
    - Microcopy: "Skip, pause, or cancel anytime." (`{{CONFIRM_SUB_TERMS}}`)
  - Default selected: `{{DEFAULT_PURCHASE_OPTION}}`
- Primary button, full width: **"Add to cart"** (prelaunch: "Join the launch list").
- Under the button: guarantee badge `{{GUARANTEE_SHORT}}` · shipping line `{{SHIPPING_SHORT}}` · payment icons (Phase 2).
- **Why:** one-page funnel, price per serving, low-cost trial, and a subscription cadence built around how often golfers actually play.

**Phase 2 integration notes (do NOT build in Phase 1):**
- Use the Shopify **Storefront API**: `cartCreate` / `cartLinesAdd` with `merchandiseId` (variant GID) and, for subscriptions, `sellingPlanId` (from Seal). Redirect to `cart.checkoutUrl`.
- Shopify's standard Buy Button may not support selling plans. Verify before relying on it. Cart permalinks with a `selling_plan` parameter are a fallback — verify that too.
- Env vars: `SHOPIFY_STORE_DOMAIN`, `SHOPIFY_STOREFRONT_TOKEN`.
- Content: `{{VARIANT_ID_TRIAL}}`, `{{VARIANT_ID_BAG}}`, `{{SELLING_PLAN_IDS}}`.
- Affiliate attribution must carry through to Shopify checkout on a non-Shopify front end: `{{CONFIRM_AFFILIATE_TRACKING}}`.

### 6.6 How to use — `#how`
- Background: tint. Step numbers in navy Cormorant Garamond, hairline above each step.
- **Heading (DRAFT):** "One stick. Sixty minutes before you tee off."
- Three numbered steps:
  1. **Mix.** One stick in `{{WATER_OZ}}` oz of water.
  2. **Drink.** About 60 minutes before your tee time. (DRAFT: "That's when the study measured results.")
  3. **Play.** (DRAFT) "Commit to every shot."
- **Expectation box (DRAFT)** — white panel, 1px `--line` border, navy uppercase label "What you'll feel": "What you'll feel: no buzz, no crash. Clarity+ isn't a stimulant — it's built to support clear, decisive thinking.*" (`{{CONFIRM_NON_STIMULANT}}`)
- Usage note: `{{USAGE_FREQUENCY_GUIDANCE}}` (round days only vs. daily).
- **Why:** sets expectations up front. Protects your refund rate and your reviews.

### 6.7 What's inside — `#inside`
- Background: white.
- **Heading (DRAFT):** "Every ingredient. Every dose. No proprietary blends."
- Ingredient cards from an `ingredients[]` array: name, dose, one-line golf reason.
  - **CognatiQ®** (whole coffee fruit extract) — 200mg — full-width card with a 1px navy border; the "200mg" figure in burgundy — (DRAFT) "The clinically studied ingredient behind decisiveness and accuracy under pressure.*"
  - All others: `{{FINAL_FORMULA}}` — render 4 placeholder cards until provided.
- "View full label" expands `{{SUPPLEMENT_FACTS_IMAGE}}`.
- **Clean-label icon row:** each icon has a boolean flag, default `false`. In skeleton, unconfirmed icons render grayed with "UNCONFIRMED." In production, only `true` icons render.
  - Non-stimulant · Sugar claim · Gluten-free · Vegan · Third-party tested · Made in USA — all under `{{CLEAN_LABEL_FLAGS}}`
- **Why:** full transparency is a differentiator in a category full of proprietary blends.

### 6.8 Founder's note — `#founder`
- Background: navy.
- Layout: photo left `{{FOUNDER_PHOTO}}` (on course, 1000×1250), letter right.
- **Heading (DRAFT):** "Why I built Clarity+"
- **Letter (DRAFT — Ryan rewrites in his own voice):**
  > Golfers spend thousands on clubs, lessons, and range balls. Then they lose strokes standing over the ball — second-guessing the club, the line, the shot.
  >
  > I wanted something that targets decision-making under pressure. Not caffeine. Not a mystery blend. A clinically studied ingredient at the studied dose, with every other dose on the label.
  >
  > That's Clarity+. Try it for your next few rounds. If it's not for you, I'll make it right.
- Sign-off: `{{FOUNDER_SIGNOFF}}` (name + title). Optional: `{{FOUNDER_SIGNATURE}}` image, `{{FOUNDER_CREDENTIALS}}` one-liner.

### 6.9 Reviews & pro voices — `#reviews`
- Background: tint. Review cards are white with a 1px `--line` border.
- **Heading (DRAFT):** "Golfers who've played with it."
- **Phase 1:** six skeleton review cards (gray bars, no invented text) showing the fields: photo, first name + last initial, handicap, home course, star rating, quote, and a "Received free product" tag where applicable. **Every card is visibly marked PLACEHOLDER. Never ship placeholder reviews.**
- **Pro voices row** (only when `SHOW_PRO_TESTIMONIALS`): `{{PRO_TESTIMONIALS}}` — name, title, club, quote, headshot. Written permission on file for each.
- **Phase 2:** Judge.me. Confirm how its widgets render on a headless Next.js site: `{{CONFIRM_JUDGEME_HEADLESS}}`. Add custom review fields for handicap and home course.
- FTC: any review from seeded or free product shows a visible disclosure.

### 6.10 Competition-safe & quality — `#quality`
- Background: white. Navy line icons, hairline above each tile.
- **Heading (DRAFT):** "Quality you can check."
- Four tiles (line icon + title + detail):
  - **Third-party tested** — `{{TESTING_DETAILS}}`
  - **Manufacturing standard** — `{{MANUFACTURING_CLAIM}}` (confirm exact wording with the manufacturer)
  - **Competition safe** — `{{COMPETITION_SAFE_STATEMENT}}` (verified against the current WADA Prohibited List)
  - **NSF Certified for Sport®** — only when `SHOW_NSF_BADGE`
- Optional link: Certificate of Analysis → `{{COA_URL}}`

### 6.11 FAQ — `#faq`
- Background: tint. Hairline dividers between questions. Two columns on desktop: heading left (sticky), accordion right. Generates FAQPage JSON-LD.
- **Heading (DRAFT):** "Questions golfers ask." Under it: "Still unsure? Email `{{CONTACT_EMAIL}}`"
1. **Does Clarity+ have caffeine?** → `{{ANSWER_CAFFEINE}}`
2. **When should I take it?** → (DRAFT) "Mix one stick about 60 minutes before your tee time."
3. **Round days only, or every day?** → `{{USAGE_FREQUENCY_GUIDANCE}}`
4. **Will I feel it?** → (DRAFT) "Not as a buzz. Clarity+ isn't built to jolt you — it's built to support clear, decisive thinking.*"
5. **Is it safe for tournament play?** → `{{COMPETITION_SAFE_STATEMENT}}`
6. **What's in it?** → (DRAFT) "Every ingredient and dose is listed on the label." + link to `#inside`
7. **What's your guarantee?** → `{{GUARANTEE_TERMS}}`
8. **Can I skip, pause, or cancel my subscription?** → (DRAFT) "Yes. Anytime, from your account." (`{{CONFIRM_SUB_TERMS}}`)
9. **How fast does it ship?** → `{{SHIPPING_TERMS}}`
10. **Can I take it with medication?** → (DRAFT) "Talk to your doctor before using any supplement, especially if you take medication, are pregnant or nursing, or have a medical condition."
11. **Can my pro shop or club carry Clarity+?** → (DRAFT) "Yes — reach out here." + `{{WHOLESALE_CONTACT}}`

### 6.12 Email / SMS capture — `#join`
- Background: navy. Inputs: transparent fill, 1px silver border at 50%, white text, uppercase silver labels; focus = white border. Submit = primary button (silver).
- **Heading:**
  - Prelaunch (DRAFT): "Be first in line for Clarity+."
  - Live: `{{EMAIL_OFFER}}`
- Subline (DRAFT): "Launch news, first access, and nothing you didn't ask for."
- Fields: email (required, validated), phone (optional) + SMS consent checkbox with `{{SMS_CONSENT_TEXT}}` (use Omnisend's compliant wording).
- Button (DRAFT): "Count me in"
- Phase 1: no real submit. Show a local success state.
- Phase 2: Omnisend `{{OMNISEND_FORM_ID}}`.
- No popups in v1.

### 6.13 Footer
- Navy background, 1px `--navy-line` top border. `{{LOGO_WORDMARK_WHITE}}`. Column headings: silver, uppercase, tracked. Links: white, silver on hover.
- Columns:
  - **Shop:** Clarity+ → `#buy`
  - **Learn:** The Science · How to Use · FAQ
  - **Company:** Contact `{{CONTACT_EMAIL}}` · Wholesale & pro shops `{{WHOLESALE_CONTACT}}` · Affiliate program `{{AFFILIATE_SIGNUP_URL}}`
  - **Policies:** Shipping `{{POLICY_SHIPPING_URL}}` · Refunds `{{POLICY_REFUND_URL}}` · Subscription terms `{{POLICY_SUBSCRIPTION_URL}}` · Privacy `{{POLICY_PRIVACY_URL}}` · Terms `{{POLICY_TERMS_URL}}`
- Social icons: `{{SOCIAL_URLS}}`
- FDA disclaimer (exact text):
  > *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
- Trademark line: `{{CONFIRM_TRADEMARK_LINE}}` (FutureCeuticals' required CognatiQ® attribution)
- "© 2026 Game Plan Sports Performance, Inc."

### 6.14 Sticky mobile CTA
- See Build Rule 8. White bar, 1px `--line` top border, "Clarity+" in Graduate, small primary button.

---

## 7. Phases

### Phase 1 — Skeleton (this build)
All sections, layout, brand styling, draft copy, visible placeholders. No integrations.

**Acceptance checklist**
- [ ] All sections render in order at 375px and 1440px.
- [ ] Every placeholder shows as a yellow tag. Every draft shows a DRAFT pill.
- [ ] Flipping `LAUNCH_MODE` switches every buy CTA.
- [ ] Earned-only flags hide rating, NSF badge, and pro voices when `false`.
- [ ] Proof chart is CSS/SVG and animates (or not, under reduced motion).
- [ ] Palette v2 only: no gold or warm-white anywhere. Section backgrounds match the table in Section 3.
- [ ] Contrast rules hold: no silver text on white, no burgundy text or fills on navy, burgundy fills and text only on the three proof elements (accent lines per Section 3 are allowed).
- [ ] One button style everywhere (silver fill + navy outline); secondary actions are text links.
- [ ] Buy box option cards and FAQ accordion work by keyboard.
- [ ] `npm run check:placeholders` lists every open item.
- [ ] Build passes. No console errors. Vercel **preview** link shared. Nothing on production.

### Phase 2 — Integrations
Shopify cart + Seal subscriptions, Judge.me, Omnisend, UpPromote attribution, analytics (`{{ANALYTICS_PROVIDER}}`).

### Phase 3 — Launch
Real photos, final copy approved, FutureCeuticals sign-off, `check:placeholders` returns zero, `LAUNCH_MODE = "live"`, production deploy.

---

## 8. Placeholder register — what Ryan still owes

| ID | What to provide | Section | Needed by |
|---|---|---|---|
| **Offer & pricing** | | | |
| `GUARANTEE_SHORT` | One-line guarantee (e.g., window + promise) | Bar, Hero, Buy | Phase 3 |
| `GUARANTEE_TERMS` | Full guarantee terms | FAQ, Policy | Phase 3 |
| `TRIAL_SERVINGS` / `TRIAL_PRICE` | Trial pack size and price | Buy | Phase 2 |
| `BAG_SERVINGS` / `BAG_PRICE` | Bag size and price | Buy | Phase 2 |
| `SUB_DISCOUNT_PCT` | Subscribe & save discount | Buy | Phase 2 |
| `SUB_CADENCES` | Delivery intervals (suggested 4/6/8 weeks) | Buy | Phase 2 |
| `DEFAULT_PURCHASE_OPTION` | Which option is preselected | Buy | Phase 2 |
| `CONFIRM_SUB_TERMS` | Confirm skip/pause/cancel anytime is true in Seal | Buy, FAQ | Phase 2 |
| `SHIPPING_SHORT` / `SHIPPING_TERMS` | Shipping line + full answer | Buy, FAQ | Phase 3 |
| `EMAIL_OFFER` | Signup incentive once live | Join | Phase 3 |
| **Product & formula** | | | |
| `FLAVORS` | Flavor name(s) | Buy | Phase 2 |
| `FINAL_FORMULA` | Every ingredient, dose, and a one-line golf reason | Inside | Phase 3 |
| `CONFIRM_DOSE_200MG` | Final formula has 200mg CognatiQ® per stick | Hero, Science | Phase 3 |
| `CONFIRM_NON_STIMULANT` | Final formula supports a "non-stimulant" claim | Hero, How | Phase 3 |
| `ANSWER_CAFFEINE` | Caffeine content answer | FAQ | Phase 3 |
| `WATER_OZ` | Mixing volume | How | Phase 3 |
| `USAGE_FREQUENCY_GUIDANCE` | Round days only vs. daily | How, FAQ | Phase 3 |
| `CLEAN_LABEL_FLAGS` | True/false for each icon claim | Inside | Phase 3 |
| **Proof & compliance** | | | |
| `STUDY_CITATION` / `STUDY_URL` | Study reference from FutureCeuticals | Science | Phase 3 |
| `FC_APPROVAL` | FutureCeuticals sign-off on final copy | All | Phase 3 |
| `CONFIRM_TRADEMARK_LINE` | Required CognatiQ® attribution text | Footer | Phase 3 |
| `COMPETITION_SAFE_STATEMENT` | Verified banned-substance statement | Quality, FAQ | Phase 3 |
| `TESTING_DETAILS` | Third-party testing details | Quality | Phase 3 |
| `MANUFACTURING_CLAIM` | Approved manufacturing wording | Quality | Phase 3 |
| `COA_URL` | Certificate of Analysis link (optional) | Quality | Optional |
| `SMS_CONSENT_TEXT` | Compliant SMS consent wording | Join | Phase 2 |
| `PRO_TESTIMONIALS` | Pro quotes + written permission | Reviews | When ready |
| `MIN_REVIEWS_FOR_RATING` | Review count before showing a rating | Hero, Buy | Phase 3 |
| **Media** | | | |
| `LOGO_WORDMARK_NAVY` | Script wordmark in #002D62, transparent (stopgap allowed — see Section 3) | Header | Phase 3 |
| `LOGO_WORDMARK_WHITE` | Script wordmark in #FFFFFF, transparent (stopgap allowed) | Footer | Phase 3 |
| `LOGO_MARK` | GP mark in the new palette | Favicon | Phase 3 |
| `HERO_IMAGE` | Hero photo, desktop + mobile crops | Hero | Phase 3 |
| `PRODUCT_IMAGES` | 4+ product shots, 1200×1200 | Buy | Phase 3 |
| `SUPPLEMENT_FACTS_IMAGE` | Final label panel | Inside | Phase 3 |
| `FOUNDER_PHOTO` | Ryan on course, 1000×1250 | Founder | Phase 3 |
| `FOUNDER_SIGNOFF` | Name + title for the letter | Founder | Phase 3 |
| `FOUNDER_SIGNATURE` / `FOUNDER_CREDENTIALS` | Optional | Founder | Optional |
| `OG_IMAGE` | Social share image, 1200×630 | SEO | Phase 3 |
| **Integrations** | | | |
| `VARIANT_ID_TRIAL` / `VARIANT_ID_BAG` | Shopify variant IDs | Buy | Phase 2 |
| `SELLING_PLAN_IDS` | Seal selling plan IDs | Buy | Phase 2 |
| `OMNISEND_FORM_ID` | Omnisend form/list | Join | Phase 2 |
| `CONFIRM_JUDGEME_HEADLESS` | How Judge.me displays on Next.js | Reviews | Phase 2 |
| `CONFIRM_AFFILIATE_TRACKING` | How UpPromote tracks on a non-Shopify front end | Buy | Phase 2 |
| `ANALYTICS_PROVIDER` | GA4 / Meta pixel IDs | Site-wide | Phase 2 |
| `JUDGEME_RATING` | Pulled automatically from Judge.me once `MIN_REVIEWS_FOR_RATING` is met | Hero, Buy | Phase 2 |
| **Links & SEO** | | | |
| `CONTACT_EMAIL` | Support email | Footer | Phase 3 |
| `WHOLESALE_CONTACT` | Pro shop / wholesale contact | FAQ, Footer | Phase 3 |
| `AFFILIATE_SIGNUP_URL` | UpPromote signup link | Footer | Phase 3 |
| `POLICY_*_URL` (5) | Shipping, refund, subscription, privacy, terms | Footer | Phase 3 |
| `SOCIAL_URLS` | Instagram, etc. | Footer | Phase 3 |
| `SEO_TITLE` / `SEO_DESCRIPTION` | Page title + meta description | SEO | Phase 3 |
| **All DRAFT copy** | Approve or rewrite | All | Phase 3 |
