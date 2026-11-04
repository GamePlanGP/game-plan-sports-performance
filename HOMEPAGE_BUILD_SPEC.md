# SPEC — Game Plan Sports Performance homepage (Phase 1 skeleton · Palette v2) · v1.1

> **v1.1 (Nov 4, 2026):** merges the Messaging Update. **Section 9 amends Sections 1, 3, 4, 6, 7 and 8; where they disagree, Section 9 wins.** Section 5 is replaced in full. Ryan's decisions on conflicts with the build are in 9.0 and win over everything else.

## 1. Context

- **Company:** Game Plan Sports Performance, Inc.
- **Product:** Clarity+ — a cognitive-performance drink mix (stick packs) for golfers, featuring CognatiQ® (whole coffee fruit extract, supplied by FutureCeuticals).
- **Positioning:** see 9.1 (v1.1). Lead: decisions under pressure. Master line: *Studied first. Then stacked.* Never position on "calm." Never lead with hydration.
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

## 5. Copy guardrails (non-negotiable · v1.1, replaces v1.0)

1. Never promise better scores, lower handicaps, or any specific golf outcome.
2. Never claim Clarity+ treats, cures, or replaces medication for any condition. Never mention yips, anxiety, ADHD, or cognitive decline.
3. Clinical results belong to the **CognatiQ® ingredient**, not Clarity+. Clarity+ has not been studied as a finished product. Say so on the page.
4. **Approved benefits** (ingredient level, from FutureCeuticals). When describing Clarity+ itself, always use "supports" + an asterisk.
   - Decisiveness
   - Accuracy under pressure (fewer errors during working-memory challenges)
   - Cognitive control and cognitive impulse control
   - Working memory
   - Focus, attention, and alertness
   - Mental stamina (less mental fatigue during rapid working-memory challenges)
   - Fewer mental lockups
   - Processing speed while maintaining accuracy
   - Fast-acting: in as little as one hour
   - Sustained improvement in cognitive performance with daily use
   - How it works (ingredient level only): "CognatiQ® increases BDNF, a key neuroprotein that supports the protection, growth, and connections of brain cells."
   - Do **not** use FutureCeuticals' age-related cognitive decline language.
5. **Approved stats.** Always vs. baseline. Always with placebo beside it.

   | Stat | Detail | Placebo |
   |---|---|---|
   | Decisiveness: 80.7% improvement in omission errors | N-back test, 60 min after one dose | 11.1% |
   | Impulse control: 41% fewer errors | Response-inhibition test, timepoint `{{CONFIRM_IMPULSE_TIMEPOINT}}` | Errors rose more than 55% |
   | Accuracy: 11% overall, 25% on focused measures | **Do not use** until `{{CONFIRM_ACCURACY_PLACEBO}}` | — |

   - Study population: adults 40–65. State it. Don't stretch it.
   - "5 published clinical studies on CognatiQ®."
6. Every asterisked claim ties to the FDA disclaimer (footer, and small print under the proof charts).
7. Write **CognatiQ®** with the ® on first mention in each section.
8. **Game Plan Blend:** talk about effort and intent ("we didn't stop there," "built for a four-hour round"). Never claim the blend adds results. Banned: "next-level," "amplifies," "boosts CognatiQ®," "synergy." No benefit claims for individual blend ingredients. No individual blend doses.
9. **No full-disclosure language anywhere:** "No proprietary blends," "every dose," "every other dose," "mystery blend."
10. **Electrolytes:** restraint, measured doses, a long round. Never lead with hydration. No benefit claims for magnesium or calcium.
11. **Taste and mix:** show, don't claim. No "best on the market" or superiority line unless it comes from a documented test (6.7b). A taste or mix win never implies the product works better.
12. **NSF Certified for Sport®:** the mark and the word "certified" appear only when `SHOW_NSF_BADGE` is true. Follow NSF's mark-use rules. The "recommended by the PGA and LPGA" line needs `{{CONFIRM_NSF_PGA_WORDING}}`.
13. **Competitors:** never named unless `NAME_COMPETITORS` is true and the claim comes from a documented test.
14. **Never invent** reviews, ratings, testimonials, certifications, test results, press logos, or endorsements.
15. All new copy is DRAFT. Final copy goes to FutureCeuticals for claims review: `{{FC_APPROVAL}}`.

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

> **Removed from the homepage (Nov 3, 2026).** Ryan will rebuild this as a new CognatiQ® section covering the clinical trials. Until then: no `#science` section, no "The Science" nav or footer link, and no "See the science" link in the hero. The notes below are kept as reference for the rebuild.

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
  *Revised Nov 3, 2026 (Ryan): Hole 1 = composure / no first-tee jitters; Between clubs = decisiveness; Hole 17 = performance under pressure (not stamina — a second stick will be promoted as optional).*
  1. Eyebrow "Hole 1 · Tee box" — **The first tee.** (DRAFT) "Everyone's watching. Breathe, pick your target, and swing with a clear head — no stimulant jitters." — Tag: "Supports cognitive control*"
  2. Eyebrow "Approach · Club select" — **Between clubs.** (DRAFT) "7 or 8? Read the yardage, make the call, and commit to it." — Tag: "Supports decisiveness*"
  3. Eyebrow "Hole 17 · 3 ft" — **The 3-footer on 17.** (DRAFT) "Match on the line. Read the break, trust your line, and make a confident stroke." — Tag: "Supports accuracy under pressure*"
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

---

## 9. v1.1 amendments (Messaging Update, Nov 4, 2026)

### 9.0 Ryan's decisions on conflicts with the build (these win)
- **Proof charts live on `/science` only.** The homepage has no clinical section (removed Nov 3). Everything in 9.5 "Proof strip" is built on `/science`: both charts, the four stat tiles, "How it works," the footnote, and the Robinson et al. (2024) citation.
- **Golf moments copy:** "The first tee" and "The 3-footer on 17" keep the Nov 3 copy in 6.4, **not** the v1.0 lines the update repeated. "Four hours in" is out. The new "Go or lay up" card and the new "Between clubs" line come from 9.5. "Between clubs" is tagged "Supports working memory*" so it doesn't duplicate Hole 17's accuracy tag.
- **Guarantee:** "Better decision-making or your money back" stays as DRAFT pending FutureCeuticals' review.
- **Burgundy accent lines (Oct 20) stay** on the other light sections. Per 9.4, none in `#taste`: it uses silver hairlines and a navy heading rule instead.
- **Code paths:** the content file is `src/content/homepage.ts`. The homepage is `src/app/(home)/page.tsx` and the science page is `src/app/(home)/science/page.tsx`.

### 9.1 Positioning (replaces "Positioning" in Section 1)
- **Lead:** decisions under pressure. Clarity+ helps golfers commit to every shot.
- **Master line:** *Studied first. Then stacked.* Most focus mixes stack instead of study. Clarity+ starts with the full clinical dose, then adds more.
- **Message order:**
  1. **The proof:** 200mg CognatiQ®, the full clinically studied dose, disclosed.
  2. **The playbook:** the Game Plan Blend. Proprietary on purpose.
  3. **The +:** a measured electrolyte base for a four-hour round. Restraint is the message.
  4. **The finish:** taste, mix, color, aroma. Shown, not claimed.
- Never position on "calm." Never lead with hydration.

### 9.2 What changed
- The Focus Blend stays proprietary and becomes the **Game Plan Blend**. All full-disclosure language comes out.
- Expanded claims from FutureCeuticals' Structure/Function Claims sheet and 200mg Dose Claims Dossier. New second proof chart: impulse control.
- The "+" is the electrolyte base.
- New Taste & mix section (`#taste`), with competitor comparisons behind a flag.
- NSF Certified for Sport® copy is ready but gated until the certificate is issued.
- New `npm run check:claims` blocks banned phrases.

### 9.3 Build rules (amends Section 4)
- **Anchors:** add `#taste` between `#inside` and `#founder`.
- **Nav:** add "Taste" (`#taste`) after "Ingredients."
- **Flags:** `SHOW_RATING`, `SHOW_NSF_BADGE` (true only once the NSF certificate is issued), `SHOW_PRO_TESTIMONIALS`, `SHOW_COMPARISONS` (true only after Ryan's documented tests), `NAME_COMPETITORS` (false = "Brand A / Brand B"). All default `false`.
- **`npm run check:claims`** (`scripts/check-claims.mjs`): scans the content file, skipping the FDA disclaimer field. Case-insensitive.
  - **Fail** on: `proprietary blends`, `every dose`, `every other dose`, `mystery blend`, `yips`, `anxiety`, `adhd`, `cognitive decline`, `orders of magnitude`, `next-level`, `next level`, `amplif`, `synerg`, `lower your handicap`, `lower scores`, `better scores`, `best on the market`, `clinically proven`.
  - **Warn** on: `hydrat`, `calm`, `certified`, `better than`, `#1`.
  - Prints file + line for every hit. Exits non-zero on any fail. Phase 3 requires zero fails.
- **Videos:** native `<video>`, muted, `playsinline`, poster image, lazy-loaded. Autoplay loop only when `prefers-reduced-motion` is off; otherwise show the poster with a play button.

### 9.4 Brand system (amends Section 3)
- **Burgundy fills and figures** mark CognatiQ® proof only: the CognatiQ® bar and figure on **both** proof charts, and the 200mg figure on the CognatiQ® card. Never in `#taste`. Never on comparison visuals. (Accent lines: see 9.0.)
- **Comparison visuals:** Clarity+ in navy, competitors in silver / `--tint-2`.
- **Navy bands stay at three:** Golf Moments, Founder's Note, Sign-up + Footer.
- **Section backgrounds:** add **Taste & mix = Tint**, between What's inside (white) and Founder's note (navy).

### 9.5 Page changes, top to bottom

**Hero (6.2)**
- **Subhead (DRAFT):** "Clarity+ supports faster, more accurate decisions under pressure.* Built on the full clinical 200mg dose of CognatiQ®, plus our Game Plan Blend and a measured electrolyte base. One stick before you tee off."
- **Trust row:** unchanged. When `SHOW_NSF_BADGE` is true, the third item becomes "NSF Certified for Sport®." The guarantee stays in the announcement bar and buy box.

**Proof strip (6.3) — built on `/science` per 9.0**
- Heading stays. **Subline (DRAFT):** "Five published clinical studies on CognatiQ®. Here's what the latest one showed."
- **Two charts**, side by side on desktop and stacked on mobile, in the same white card style. CSS/SVG, animated on scroll unless reduced motion.
  1. **Decisiveness:** placebo 11.1% (silver bar, navy label), CognatiQ® 200mg 80.7% (burgundy bar, burgundy label). Plain-English line unchanged.
  2. **Impulse control:** diverging bars from a zero line. Placebo up, labeled ">+55%" (silver, navy label). CognatiQ® 200mg down, labeled "−41%" (burgundy, burgundy label). Axis label: "Change in errors vs. baseline, response-inhibition test, `{{CONFIRM_IMPULSE_TIMEPOINT}}`." **Plain-English line (DRAFT):** "Response inhibition is holding back the wrong move. Errors went down with CognatiQ®. They went up with placebo."
- **How it works (DRAFT):** "CognatiQ® increases BDNF, a key neuroprotein that supports the protection, growth, and connections of brain cells.*"
- **Stat tiles (4):** **60 min** — "Measured 60 minutes after a single dose" · **28 days** — "Sustained improvement with daily use" · **200mg** — "The full clinically studied dose, in every stick" (`{{CONFIRM_DOSE_200MG}}`) · **40–65** — "Age range of the study participants"
- **Footnote (DRAFT):** "Results from a randomized, double-blind, placebo-controlled human clinical trial of the CognatiQ® ingredient in adults 40–65. Clarity+ has not been studied as a finished product." + citation + FDA disclaimer.
- **`STUDY_CITATION` (prefilled, DRAFT):** "Robinson J., et al. (2024). Whole Coffee Cherry Extract Improves Working Memory and Response Inhibition: Acute and Longitudinal Results from a Remote, Randomized, Double-Blind, Placebo-Controlled Clinical Trial." `{{STUDY_URL}}` stays open.

**Golf moments (6.4)** — four cards: 1 column at 375px, 2×2 at 768px, 4 across at 1280px+. Copy per 9.0:
1. "Hole 1 · Tee box" — **The first tee.** (Nov 3 copy)
2. **New:** "Par 5 · Second shot" — **Go or lay up.** (DRAFT) "The hero shot is calling. Stick to the game plan." — Tag: "Supports cognitive impulse control*"
3. "Approach · Club select" — **Between clubs.** (DRAFT) "Hold the number, the wind, the line. Choose, commit, swing." — Tag: "Supports working memory*"
4. "Hole 17 · 3 ft" — **The 3-footer on 17.** (Nov 3 copy)

**Buy box (6.5)**
- **Price anchor (DRAFT):** under the prices, `{{PRICE_ANCHOR_LINE}}` (e.g., "Less per round than one premium ball."). Fill once pricing locks. Remove if it isn't true.

**What's inside (6.7, rebuilt)**
- **Heading (DRAFT):** "Studied first. Then stacked." **Subline (DRAFT):** "We could have stopped at the clinical dose. We didn't."
- **"Ask any focus mix" row** (3 items, hairline above each):
  - "Was it tested in humans?" → "Yes. A randomized, double-blind, placebo-controlled trial of CognatiQ®."
  - "At what dose?" → "200mg."
  - "Is that dose in the stick?" → "All of it. Every stick." (`{{CONFIRM_DOSE_200MG}}`)
- **Three tiers, stacked**, each with a small uppercase label:
  - **Tier 1 — The proof.** CognatiQ® card (full width, 1px navy border, burgundy "200mg"). Body (DRAFT): "The full clinically studied dose. Disclosed. Never shorted to make room for anything else."
  - **Tier 2 — The playbook.** Game Plan Blend card (white, 1px `--line`).
    - Name: `focusBlend.name` = "Game Plan Blend" (DRAFT, one field). Must match the label: `{{CONFIRM_BLEND_NAME_MATCHES_LABEL}}`.
    - Total weight: `{{BLEND_TOTAL_MG}}` mg, as declared on the label.
    - Pull line (Cormorant Garamond, DRAFT): "You don't publish your game plan." Body (DRAFT): "Our own formula, built for a four-hour round."
    - Roster cards: ingredient name + one-line descriptor. **No doses. No benefit claims.** 2 columns on mobile, 3 on desktop. Only ingredients confirmed in `{{FINAL_FORMULA}}`, in label order; until then, 6 placeholder cards. Descriptors (DRAFT, factual only): D-Ribose — A naturally occurring sugar · Alpha Lipoic Acid — A compound the body also makes on its own · N-Acetyl Cysteine — A form of the amino acid cysteine (`{{CONFIRM_NAC_STATUS}}`) · Beet root powder — A whole-food root powder · Alpha-GPC — A source of choline · Rhodiola rosea — A botanical root extract · L-Theanine — An amino acid found in tea.
  - **Tier 3 — The +.** Electrolyte panel (white, 1px `--line`). Label "The +". Heading (DRAFT): "Dosed with restraint." Body (DRAFT): "A measured electrolyte base for a four-hour round. Enough to matter. No salt bomb. No megadoses." Table (name · mg · %DV) from `{{ELECTROLYTE_PANEL}}`, matching the Supplement Facts panel exactly.
- "View full label" and the clean-label icon row stay.

**Taste & mix — `#taste` (6.7b, new · tint)**
- **Heading (DRAFT):** "Premium you can taste." **Subline (DRAFT):** "Not too sweet. Mixes in seconds."
- **Sensory row** (4 items, hairline above): Flavor `{{FLAVORS}}` · Color `{{SENSORY_COLOR}}` · Aroma `{{SENSORY_AROMA}}` · Sweetness "`{{SUGAR_G}}`g sugar · sweetened with `{{SWEETENER}}`"
- **Mix video:** `{{MIX_VIDEO}}`. One unedited take, about 10 seconds: stick into a water bottle, a few shakes, clear. 1080×1350 (4:5) with a poster image.
- **Comparisons:** render only when `SHOW_COMPARISONS` is true. In the prelaunch skeleton, placeholder blocks marked PLACEHOLDER.
  - Blind taste-test card. Headline generated from data: "Golfers preferred Clarity+ {preferred} of {sampleSize} times vs. {competitor}." One line per competitor.
  - Side-by-side mix video: `{{MIX_COMPARISON_VIDEO}}`.
  - Footnotes generated from data. Taste: "Blind taste test, randomized order, {sampleSize} golfers, {testDate}. Each product mixed per its own label. Reflects taste preference only." Mix: "Single unedited take, {testDate}. Same water volume and shake count. Each product at its labeled serving."
  - Competitors show their real name only when `NAME_COMPETITORS` is true; otherwise "Brand A / Brand B." Data shape: `comparisons.tasteTest` (`testDate`, `sampleSize`, `results[]` of `{ competitor, anonLabel, preferred }`) and `comparisons.mixTest` (`testDate`, `video`, `competitors[]`).

**Founder's note (6.8)** — letter replaced (DRAFT, Ryan rewrites in his own voice):
> Golfers spend thousands on clubs, lessons, and range balls. Then they lose strokes standing over the ball — second-guessing the club, the line, the shot.
>
> I wanted something built for decision-making under pressure. Not caffeine. Not a guess. A clinically studied ingredient at its full studied dose.
>
> That could have been enough. I kept going: our own Game Plan Blend, and a measured electrolyte base for a four-hour round.
>
> That's Clarity+. Try it for your next few rounds. If it's not for you, I'll make it right.

**Quality (6.10)**
- **NSF tile** (only when `SHOW_NSF_BADGE`): official mark `{{NSF_MARK}}` + "NSF Certified for Sport®" + detail (DRAFT): "Tested for `{{NSF_SUBSTANCE_COUNT}}`+ substances banned in sport, with repeat audits. Our recipe is private. What's in it is verified." + text link "Look us up" → `{{NSF_LISTING_URL}}`. Optional: "Recommended by `{{CONFIRM_NSF_PGA_WORDING}}`."

**FAQ (6.11)**
- **"Is it safe for tournament play?"** When `SHOW_NSF_BADGE`: (DRAFT) "Clarity+ is NSF Certified for Sport®, tested for `{{NSF_SUBSTANCE_COUNT}}`+ substances banned in sport. Check the listing: `{{NSF_LISTING_URL}}`." Otherwise `{{COMPETITION_SAFE_STATEMENT}}`.
- **"What's in it?"** (DRAFT) "The full clinical 200mg dose of CognatiQ®, our Game Plan Blend, and a measured electrolyte base. Every ingredient is on the label." + link to `#inside`.
- **New, after "What's in it?": "Why is the Game Plan Blend proprietary?"** (DRAFT) "Every ingredient is on the label, along with the blend's total weight. The exact recipe stays ours. You don't publish your game plan. What we always publish: the full clinical 200mg dose of CognatiQ®." When `SHOW_NSF_BADGE`, append: "And NSF Certified for Sport® independently verifies what's in it."
- **New: "How does it taste?"** (DRAFT) "`{{FLAVORS}}`, and not too sweet: `{{SUGAR_G}}`g sugar, sweetened with `{{SWEETENER}}`. Mixes in seconds in plain water."
- "Round days only, or every day?" stays `{{USAGE_FREQUENCY_GUIDANCE}}`. Note: the study showed results within an hour of one dose *and* sustained improvement with daily use over 28 days. Daily use also supports the subscription.
- FAQPage JSON-LD picks up the new questions automatically (answers still holding placeholders are left out until filled).

**Footer (6.13)**
- **Trademark line (prefilled, DRAFT):** "CognatiQ® is a registered trademark of VDF FutureCeuticals, Inc. Pat. fcpatent.com" — from FutureCeuticals' claims sheet. Confirm it's their required wording.

### 9.6 Acceptance checklist additions (Phase 1)
- [ ] `npm run check:claims` passes with zero fails.
- [ ] No full-disclosure language renders anywhere on the page.
- [ ] Both proof charts render. Placebo sits beside every CognatiQ® figure. The impulse-chart timepoint tag shows until confirmed.
- [ ] Burgundy fills and figures appear only on CognatiQ® figures (both charts, 200mg card). None in `#taste`.
- [ ] Game Plan Blend shows ingredient names in label order and total weight. No individual doses. No per-ingredient benefit claims.
- [ ] With `SHOW_NSF_BADGE` false, the NSF mark and the word "certified" appear nowhere on the rendered page. With it true, the tile, trust-row item, FAQ answers, and listing link appear.
- [ ] Comparisons stay hidden unless `SHOW_COMPARISONS` is true. Headlines and footnotes are generated from data. Real competitor names appear only when `NAME_COMPETITORS` is true.
- [ ] Golf moments shows four cards correctly at 375px and 1440px.
- [ ] Videos don't autoplay under reduced motion.
- [ ] FAQPage JSON-LD includes the new questions.

### 9.7 Placeholder register additions (adds to Section 8)

| ID | What to provide | Section | Needed by |
|---|---|---|---|
| **Proof** | | | |
| `CONFIRM_IMPULSE_TIMEPOINT` | When the 41% / >55% response-inhibition results were measured (ask FutureCeuticals) | Science | Phase 3 |
| `CONFIRM_ACCURACY_PLACEBO` | Placebo figures for the 11% / 25% accuracy stats, before using them | Future use | Optional |
| `STUDY_URL` | PubMed link for Robinson et al. (2024) | Science | Phase 3 |
| **Formula** | | | |
| `CONFIRM_BLEND_NAME_MATCHES_LABEL` | Blend name on the site matches the blend name on the label | Inside | Phase 3 |
| `BLEND_TOTAL_MG` | Blend total weight, as declared on the label | Inside | Phase 3 |
| `CONFIRM_NAC_STATUS` | NAC regulatory check (if NAC stays in the formula) | Inside | Phase 3 |
| `ELECTROLYTE_PANEL` | Each electrolyte's mg and %DV, matching the label | Inside | Phase 3 |
| `PRICE_ANCHOR_LINE` | Per-round price comparison, once pricing locks | Buy | Phase 3 |
| **Taste & mix** | | | |
| `SENSORY_COLOR` / `SENSORY_AROMA` | How it looks in the bottle; how it smells | Taste | Phase 3 |
| `SUGAR_G` / `SWEETENER` | Grams of sugar; sweetener used | Taste, FAQ | Phase 3 |
| `MIX_VIDEO` / `MIX_VIDEO_POSTER` | 10-second unedited mix video + poster image | Taste | Phase 3 |
| `TASTE_TEST_*` / `COMPETITOR_*` | Blind taste-test date, sample size, competitors, results | Taste | When ready |
| `MIX_COMPARISON_VIDEO` / `MIX_TEST_DATE` | Side-by-side mix video + date | Taste | When ready |
| **NSF** | | | |
| `NSF_MARK` | Official mark file, per NSF usage rules | Quality | At certification |
| `NSF_LISTING_URL` | Your listing on nsfsport.com | Quality, FAQ | At certification |
| `NSF_SUBSTANCE_COUNT` | Current number of substances screened, per NSF | Quality, FAQ | At certification |
| `CONFIRM_NSF_PGA_WORDING` | Approved wording for the PGA / LPGA recommendation | Quality | At certification |

**Now prefilled (still DRAFT):** `STUDY_CITATION`, `CONFIRM_TRADEMARK_LINE` (FutureCeuticals' sheet wording).
