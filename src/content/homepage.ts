/**
 * Homepage v2 content — every string, price, link and flag for the homepage (/).
 *
 * Conventions (see HOMEPAGE_BUILD_SPEC.md):
 *  - Unresolved values are `"{{ID}}"` strings; <Placeholder> renders them as
 *    yellow tags and `npm run check:placeholders` lists them.
 *  - Draft copy is `{ text, draft: true }`; the page shows a DRAFT pill.
 *  - Copy guardrails (Section 5) apply to everything below: no outcome
 *    promises, no medical claims, benefit language only from the approved
 *    list, "supports" + asterisk for Clarity+ itself.
 */

export type Copy = {
  text: string;
  draft?: boolean;
  /** Placeholders this line depends on; shown in the DRAFT pill tooltip. */
  dependsOn?: string[];
};

/** A number once decided, otherwise a `{{PLACEHOLDER}}` string. */
export type Value = number | string;

export type LaunchMode = "prelaunch" | "live";
export type PurchaseOptionId = "trial" | "bag" | "subscription";

/* -------------------------------------------------------------------------- */
/* Switches                                                                   */
/* -------------------------------------------------------------------------- */

export const LAUNCH_MODE: LaunchMode = "prelaunch";

/** Earned-only: never flip these on until the thing is real. */
export const flags = {
  SHOW_RATING: false,
  /** True only once the NSF certificate is issued. */
  SHOW_NSF_BADGE: false,
  SHOW_PRO_TESTIMONIALS: false,
  /** True only after Ryan's documented taste and mix tests (spec v1.1, 6.7b). */
  SHOW_COMPARISONS: false,
  /** False shows competitors as "Brand A / Brand B". */
  NAME_COMPETITORS: false,
};

/** Clean-label claims. Unconfirmed icons render grayed until set to `true`. */
export const cleanLabelFlags = {
  nonStimulant: false,
  sugar: false,
  glutenFree: false,
  vegan: false,
  thirdPartyTested: false,
  madeInUsa: false,
};

/* -------------------------------------------------------------------------- */
/* Shared                                                                     */
/* -------------------------------------------------------------------------- */

export const FDA_DISCLAIMER =
  "*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.";

export const cta = {
  get: "Get Clarity+",
  prelaunch: "Join the launch list",
  addToCart: "Add to cart",
};

export const brand = {
  company: "Game Plan Sports Performance",
  product: "Clarity+",
  logoAlt: "Game Plan Sports Performance",
};

/**
 * Stopgaps and not-yet-rendered items. They aren't shown on the page, but they
 * are open work, so they live here for `npm run check:placeholders`.
 */
export const openItems = {
  // Logos: Phase 1 recolors the existing wordmark; final exports still owed.
  logoWordmarkNavy: "{{LOGO_WORDMARK_NAVY}}",
  logoWordmarkWhite: "{{LOGO_WORDMARK_WHITE}}",
  logoMark: "{{LOGO_MARK}}",
  // Compliance
  fcApproval: "{{FC_APPROVAL}}",
  // Phase 2 integrations
  variantIdTrial: "{{VARIANT_ID_TRIAL}}",
  variantIdBag: "{{VARIANT_ID_BAG}}",
  sellingPlanIds: "{{SELLING_PLAN_IDS}}",
  omnisendFormId: "{{OMNISEND_FORM_ID}}",
  confirmJudgemeHeadless: "{{CONFIRM_JUDGEME_HEADLESS}}",
  confirmAffiliateTracking: "{{CONFIRM_AFFILIATE_TRACKING}}",
  analyticsProvider: "{{ANALYTICS_PROVIDER}}",
  minReviewsForRating: "{{MIN_REVIEWS_FOR_RATING}}",
};

/* -------------------------------------------------------------------------- */
/* Offer                                                                      */
/* -------------------------------------------------------------------------- */

export const offer = {
  /** Replaces {{GUARANTEE_SHORT}}. Full terms (window, how to claim) are still {{GUARANTEE_TERMS}}. */
  guaranteeShort: {
    text: "Better decision-making or your money back",
    draft: true,
    dependsOn: ["{{GUARANTEE_TERMS}}", "{{FC_APPROVAL}}"],
  } as Copy,
  guaranteeTerms: "{{GUARANTEE_TERMS}}",
  shippingShort: "{{SHIPPING_SHORT}}",
  shippingTerms: "{{SHIPPING_TERMS}}",
  trial: { servings: "{{TRIAL_SERVINGS}}" as Value, price: "{{TRIAL_PRICE}}" as Value },
  bag: { servings: "{{BAG_SERVINGS}}" as Value, price: "{{BAG_PRICE}}" as Value },
  subscription: {
    discountPct: "{{SUB_DISCOUNT_PCT}}" as Value,
    cadences: "{{SUB_CADENCES}}" as string | number[],
    /** Suggested intervals, used for the select until cadences are decided. */
    suggestedCadences: [4, 6, 8],
  },
  defaultOption: "{{DEFAULT_PURCHASE_OPTION}}" as string,
  /** Preselected while `defaultOption` is still a placeholder. */
  fallbackOption: "subscription" as PurchaseOptionId,
  flavors: "{{FLAVORS}}" as string | string[],
};

/* -------------------------------------------------------------------------- */
/* Formula                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * The Game Plan Blend. Names and one-line factual descriptors only: no doses,
 * no per-ingredient benefits. `confirmed` lists label names in label order once
 * {{FINAL_FORMULA}} is final; until then the page shows placeholder cards.
 */
export const focusBlend = {
  /** One field so the blend name is a one-line swap. Must match the label. */
  name: "Game Plan Blend",
  nameMatchesLabel: "{{CONFIRM_BLEND_NAME_MATCHES_LABEL}}",
  totalMg: "{{BLEND_TOTAL_MG}}" as Value,
  formula: "{{FINAL_FORMULA}}",
  confirmed: [] as string[],
  placeholderCount: 6,
  descriptors: {
    "D-Ribose": { text: "A naturally occurring sugar", draft: true },
    "Alpha Lipoic Acid": { text: "A compound the body also makes on its own", draft: true },
    "N-Acetyl Cysteine": {
      text: "A form of the amino acid cysteine",
      draft: true,
      dependsOn: ["{{CONFIRM_NAC_STATUS}}"],
    },
    "Beet root powder": { text: "A whole-food root powder", draft: true },
    "Alpha-GPC": { text: "A source of choline", draft: true },
    "Rhodiola rosea": { text: "A botanical root extract", draft: true },
    "L-Theanine": { text: "An amino acid found in tea", draft: true },
  } as Record<string, Copy>,
};

/** The "+": each electrolyte as declared on the Supplement Facts panel. */
export const electrolytes = {
  panel: "{{ELECTROLYTE_PANEL}}",
  /** Fill from the label exactly; empty renders placeholder rows. */
  rows: [] as { name: string; mg: number; dv: string }[],
  placeholderRows: 4,
};

/** NSF Certified for Sport® copy. Renders only when flags.SHOW_NSF_BADGE is true. */
export const nsf = {
  name: "NSF Certified for Sport®",
  mark: {
    src: "{{NSF_MARK}}",
    alt: "NSF Certified for Sport® mark",
    label: "Official NSF mark (per NSF usage rules)",
    size: "per NSF",
  },
  detail: {
    text: "Tested for {{NSF_SUBSTANCE_COUNT}}+ substances banned in sport, with repeat audits. Our recipe is private. What's in it is verified.",
    draft: true,
  } as Copy,
  listing: { label: "Look us up", href: "{{NSF_LISTING_URL}}" },
  pgaLine: { text: "Recommended by {{CONFIRM_NSF_PGA_WORDING}}.", draft: true } as Copy,
  /** NSF reviews marketing use of the program; every line below waits on it. */
  copyApproval: "{{CONFIRM_NSF_COPY}}",
  hero: {
    detail: { text: "Independently tested for substances banned in sport.", draft: true } as Copy,
    link: { label: "What that means", href: "/#nsf" },
  },
  /** The #nsf section. Describes what the program checks; no invented test results. */
  section: {
    eyebrow: "Independently verified",
    heading: { text: "Our recipe is private. What's in it is verified.", draft: true } as Copy,
    intro: {
      text: "The Game Plan Blend stays our recipe. NSF Certified for Sport® means an independent lab knows exactly what's in Clarity+, and checks it on your behalf.",
      draft: true,
    } as Copy,
    why: {
      heading: { text: "Why it matters on the course.", draft: true } as Copy,
      body: {
        text: "If you play competitively, what goes in your bottle matters as much as what's in your bag. NSF Certified for Sport® is the supplement standard athletes and sports organizations look for when banned substances are on the line.",
        draft: true,
      } as Copy,
    },
    checksHeading: { text: "What the testing checks.", draft: true } as Copy,
    checks: [
      {
        icon: "flag",
        title: "Banned substances",
        body: { text: "Screened for {{NSF_SUBSTANCE_COUNT}}+ substances banned in sport.", draft: true } as Copy,
      },
      {
        icon: "seal",
        title: "Label accuracy",
        body: { text: "What's on the label is what's in the stick.", draft: true } as Copy,
      },
      {
        icon: "flask",
        title: "Contaminants",
        body: { text: "Tested for contaminants such as heavy metals.", draft: true } as Copy,
      },
      {
        icon: "factory",
        title: "Ongoing audits",
        body: { text: "The facility is audited and the product is retested on an ongoing basis.", draft: true } as Copy,
      },
    ] as const,
    meaning: {
      heading: { text: "What that says about Clarity+.", draft: true } as Copy,
      points: [
        { text: "Clean: nothing in it that shouldn't be.", draft: true },
        { text: "Honest: the label matches the product.", draft: true },
        { text: "Consistent: checked again, not just once.", draft: true },
      ] as Copy[],
    },
    /** Keeps certification separate from performance claims. */
    scope: {
      text: "Certification verifies what's in the product and screens for banned substances. It doesn't evaluate how well a product works.",
      draft: true,
    } as Copy,
    markNote: "{{NSF_MARK_ATTRIBUTION}}",
  },
};

/* -------------------------------------------------------------------------- */
/* Page chrome                                                                */
/* -------------------------------------------------------------------------- */

/** Hrefs are "/#id" so the header works from every page, not just the homepage. */
export const nav = [
  { label: "The Science", href: "/science" },
  { label: "How to Use", href: "/#how" },
  { label: "Ingredients", href: "/#inside" },
  { label: "Taste", href: "/#taste" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
];

export const announcement = {
  message: offer.guaranteeShort,
  /** Scrolls to and opens the guarantee FAQ item, from any page. */
  href: "/#faq-guarantee",
};

/* -------------------------------------------------------------------------- */
/* Sections                                                                   */
/* -------------------------------------------------------------------------- */

export const hero = {
  eyebrow: "Clarity+ by Game Plan Sports Performance",
  headline: { text: "Commit to every shot.", draft: true } as Copy,
  subhead: {
    text: `Clarity+ supports faster, more accurate decisions under pressure.* Built on the full clinical 200mg dose of CognatiQ®, plus our ${focusBlend.name} and a measured electrolyte base. One stick before you tee off.`,
    draft: true,
    dependsOn: ["{{CONFIRM_DOSE_200MG}}", "{{CONFIRM_NON_STIMULANT}}"],
  } as Copy,
  /** NSF has its own hero badge (gated), so the trust row keeps the guarantee. */
  trust: ["200mg CognatiQ®", "Non-stimulant", offer.guaranteeShort] as (string | Copy)[],
  rating: "{{JUDGEME_RATING}}",
  image: {
    src: "{{HERO_IMAGE}}",
    alt: "Clarity+ on the course",
    label: "Hero photo: product on the course, or a golfer over a putt",
    size: "1600×1200 desktop · 800×1000 mobile crop",
  },
};

export const moments = {
  eyebrow: "On the course",
  heading: { text: "Where rounds are won and lost.", draft: true } as Copy,
  cards: [
    {
      icon: "tee",
      eyebrow: "Hole 1 · Tee box",
      title: "The first tee.",
      body: {
        text: "Everyone's watching. Breathe, pick your target, and swing with a clear head — no stimulant jitters.",
        draft: true,
      } as Copy,
      tag: "Supports cognitive control*",
    },
    {
      icon: "split",
      eyebrow: "Par 5 · Second shot",
      title: "Go or lay up.",
      body: { text: "The hero shot is calling. Stick to the game plan.", draft: true } as Copy,
      tag: "Supports cognitive impulse control*",
    },
    {
      icon: "clubs",
      eyebrow: "Approach · Club select",
      title: "Between clubs.",
      body: { text: "Hold the number, the wind, the line. Choose, commit, swing.", draft: true } as Copy,
      tag: "Supports working memory*",
    },
    {
      icon: "hole",
      eyebrow: "Hole 17 · 3 ft",
      title: "The 3-footer on 17.",
      body: {
        text: "Match on the line. Read the break, trust your line, and make a confident stroke.",
        draft: true,
      } as Copy,
      tag: "Supports accuracy under pressure*",
    },
  ],
};

export const buy = {
  title: "Clarity+",
  subline: { text: "Decision-making drink mix for golfers.", draft: true } as Copy,
  gallery: {
    src: "{{PRODUCT_IMAGES}}",
    size: "1200×1200",
    slides: [
      { alt: "Clarity+ bag, front", label: "Bag front" },
      { alt: "Clarity+ stick pack", label: "Stick pack" },
      { alt: "Clarity+ Supplement Facts panel", label: "Supplement Facts" },
      { alt: "Clarity+ on the course", label: "Lifestyle" },
    ],
  },
  /** Under the prices. Fill once pricing locks; remove if it isn't true. */
  priceAnchor: { text: "{{PRICE_ANCHOR_LINE}}", draft: true } as Copy,
  options: {
    trial: { name: "Trial", unit: "sticks", badge: "Try it first" },
    bag: { name: "One bag", unit: "servings" },
    subscription: {
      name: "Subscribe & save",
      unit: "servings",
      badge: "Best value",
      cadenceLabel: "Deliver every",
      microcopy: {
        text: "Skip, pause, or cancel anytime.",
        dependsOn: ["{{CONFIRM_SUB_TERMS}}"],
      } as Copy,
    },
  },
};

export const how = {
  heading: { text: "One stick. Sixty minutes before you tee off.", draft: true } as Copy,
  steps: [
    { title: "Mix.", body: { text: "One stick in {{WATER_OZ}} oz of water." } as Copy },
    {
      title: "Drink.",
      body: { text: "About 60 minutes before your tee time. That's when the study measured results.", draft: true } as Copy,
    },
    { title: "Play.", body: { text: "Commit to every shot.", draft: true } as Copy },
  ],
  expectation: {
    label: "What you'll feel",
    body: {
      text: "No buzz, no crash. Clarity+ isn't a stimulant — it's built to support clear, decisive thinking.*",
      draft: true,
      dependsOn: ["{{CONFIRM_NON_STIMULANT}}"],
    } as Copy,
  },
  usageNote: "{{USAGE_FREQUENCY_GUIDANCE}}",
};

export const inside = {
  heading: { text: "Studied first. Then stacked.", draft: true } as Copy,
  subline: { text: "We could have stopped at the clinical dose. We didn't.", draft: true } as Copy,
  ask: {
    eyebrow: "Ask any focus mix",
    rows: [
      {
        question: "Was it tested in humans?",
        answer: {
          text: "Yes. A randomized, double-blind, placebo-controlled trial of CognatiQ®.",
          draft: true,
        } as Copy,
      },
      { question: "At what dose?", answer: { text: "200mg.", draft: true } as Copy },
      {
        question: "Is that dose in the stick?",
        answer: { text: "All of it. Every stick.", draft: true, dependsOn: ["{{CONFIRM_DOSE_200MG}}"] } as Copy,
      },
    ],
  },
  proof: {
    tier: "The proof",
    name: "CognatiQ®",
    kind: "Whole coffee fruit extract",
    dose: "200mg",
    body: {
      text: "The full clinically studied dose. Disclosed. Never shorted to make room for anything else.",
      draft: true,
    } as Copy,
  },
  playbook: {
    tier: "The playbook",
    pull: { text: "You don't publish your game plan.", draft: true } as Copy,
    body: { text: "Our own formula, built for a four-hour round.", draft: true } as Copy,
    totalLabel: "Total blend weight",
  },
  plus: {
    tier: "The +",
    heading: { text: "Dosed with restraint.", draft: true } as Copy,
    body: {
      text: "A measured electrolyte base for a four-hour round. Enough to matter. No salt bomb. No megadoses.",
      draft: true,
    } as Copy,
    columns: ["Electrolyte", "Amount", "% Daily Value"],
  },
  label: {
    open: "View full label",
    close: "Hide full label",
    image: {
      src: "{{SUPPLEMENT_FACTS_IMAGE}}",
      alt: "Clarity+ Supplement Facts panel",
      label: "Supplement Facts panel",
      size: "final label art",
    },
  },
  cleanLabel: {
    note: "{{CLEAN_LABEL_FLAGS}}",
    unconfirmed: "Unconfirmed",
    items: [
      { id: "nonStimulant", label: "Non-stimulant" },
      { id: "sugar", label: "Sugar claim" },
      { id: "glutenFree", label: "Gluten-free" },
      { id: "vegan", label: "Vegan" },
      { id: "thirdPartyTested", label: "Third-party tested" },
      { id: "madeInUsa", label: "Made in USA" },
    ] as const,
  },
};

export const taste = {
  heading: { text: "Premium you can taste.", draft: true } as Copy,
  subline: { text: "Not too sweet. Mixes in seconds.", draft: true } as Copy,
  sensory: [
    { label: "Flavor", value: "{{FLAVORS}}" },
    { label: "Color", value: "{{SENSORY_COLOR}}" },
    { label: "Aroma", value: "{{SENSORY_AROMA}}" },
    { label: "Sweetness", value: "{{SUGAR_G}}g sugar · sweetened with {{SWEETENER}}" },
  ],
  video: {
    src: "{{MIX_VIDEO}}",
    poster: "{{MIX_VIDEO_POSTER}}",
    label: "Mix video: one unedited take, about 10 seconds",
    size: "1080×1350 (4:5) + poster image",
    alt: "A Clarity+ stick mixed into a water bottle",
  },
  comparisonLabels: {
    tasteHeading: "Blind taste test",
    mixHeading: "Side-by-side mix",
    mixVideoLabel: "Side-by-side mix video",
  },
};

/**
 * Comparison data. Headlines and footnotes are generated from these fields,
 * never written freeform. Shown only when flags.SHOW_COMPARISONS is true.
 */
export const comparisons = {
  tasteTest: {
    testDate: "{{TASTE_TEST_DATE}}",
    sampleSize: "{{TASTE_SAMPLE_SIZE}}" as Value,
    results: [
      { competitor: "{{COMPETITOR_1}}", anonLabel: "Brand A", preferred: "{{TASTE_PREFERRED_1}}" as Value },
      { competitor: "{{COMPETITOR_2}}", anonLabel: "Brand B", preferred: "{{TASTE_PREFERRED_2}}" as Value },
    ],
  },
  mixTest: {
    testDate: "{{MIX_TEST_DATE}}",
    video: "{{MIX_COMPARISON_VIDEO}}",
    competitors: ["{{COMPETITOR_1}}", "{{COMPETITOR_2}}"],
    anonLabels: ["Brand A", "Brand B"],
  },
};

export const founder = {
  heading: { text: "Why I built Clarity+", draft: true } as Copy,
  photo: {
    src: "{{FOUNDER_PHOTO}}",
    alt: "Ryan on the course",
    label: "Founder photo, on course",
    size: "1000×1250",
  },
  letter: {
    draft: true,
    paragraphs: [
      "Golfers spend thousands on clubs, lessons, and range balls. Then they lose strokes standing over the ball — second-guessing the club, the line, the shot.",
      "I wanted something built for decision-making under pressure. Not caffeine. Not a guess. A clinically studied ingredient at its full studied dose.",
      `That could have been enough. I kept going: our own ${focusBlend.name}, and a measured electrolyte base for a four-hour round.`,
      "That's Clarity+. Try it for your next few rounds. If it's not for you, I'll make it right.",
    ],
  },
  signoff: "{{FOUNDER_SIGNOFF}}",
  signature: "{{FOUNDER_SIGNATURE}}",
  credentials: "{{FOUNDER_CREDENTIALS}}",
};

export const reviews = {
  heading: { text: "Golfers who've played with it.", draft: true } as Copy,
  /** Skeleton cards only. No review text is ever invented. */
  skeletonCount: 6,
  receivedFreeProduct: "Received free product",
  proTestimonials: "{{PRO_TESTIMONIALS}}",
  proHeading: "Pro voices",
};

export const quality = {
  heading: { text: "Quality you can check.", draft: true } as Copy,
  tiles: [
    { id: "tested", icon: "flask", title: "Third-party tested", detail: "{{TESTING_DETAILS}}" },
    { id: "manufacturing", icon: "factory", title: "Manufacturing standard", detail: "{{MANUFACTURING_CLAIM}}" },
    { id: "competition", icon: "flag", title: "Competition safe", detail: "{{COMPETITION_SAFE_STATEMENT}}" },
  ] as const,
  coa: { label: "Certificate of Analysis", href: "{{COA_URL}}" },
};

export type FaqItem = {
  id: string;
  question: string;
  answer: Copy;
  link?: { label: string; href: string };
};

export const faq = {
  heading: { text: "Questions golfers ask.", draft: true } as Copy,
  contactPrompt: "Still unsure? Email",
  contactEmail: "{{CONTACT_EMAIL}}",
  items: [
    { id: "caffeine", question: "Does Clarity+ have caffeine?", answer: { text: "{{ANSWER_CAFFEINE}}" } },
    {
      id: "when",
      question: "When should I take it?",
      answer: { text: "Mix one stick about 60 minutes before your tee time.", draft: true },
    },
    {
      id: "frequency",
      question: "Round days only, or every day?",
      answer: { text: "{{USAGE_FREQUENCY_GUIDANCE}}" },
    },
    {
      id: "feel",
      question: "Will I feel it?",
      answer: {
        text: "Not as a buzz. Clarity+ isn't built to jolt you — it's built to support clear, decisive thinking.*",
        draft: true,
      },
    },
    {
      id: "competition",
      question: "Is it safe for tournament play?",
      answer: flags.SHOW_NSF_BADGE
        ? {
            text: "Clarity+ is NSF Certified for Sport®, tested for {{NSF_SUBSTANCE_COUNT}}+ substances banned in sport. Check the listing: {{NSF_LISTING_URL}}",
            draft: true,
          }
        : { text: "{{COMPETITION_SAFE_STATEMENT}}" },
    },
    {
      id: "inside",
      question: "What's in it?",
      answer: {
        text: `The full clinical 200mg dose of CognatiQ®, our ${focusBlend.name}, and a measured electrolyte base. Every ingredient is on the label.`,
        draft: true,
      },
      link: { label: "See what's inside", href: "/#inside" },
    },
    {
      id: "blend",
      question: `Why is the ${focusBlend.name} proprietary?`,
      answer: {
        text:
          "Every ingredient is on the label, along with the blend's total weight. The exact recipe stays ours. You don't publish your game plan. What we always publish: the full clinical 200mg dose of CognatiQ®." +
          (flags.SHOW_NSF_BADGE ? " And NSF Certified for Sport® independently verifies what's in it." : ""),
        draft: true,
      },
    },
    {
      id: "taste",
      question: "How does it taste?",
      answer: {
        text: "{{FLAVORS}}, and not too sweet: {{SUGAR_G}}g sugar, sweetened with {{SWEETENER}}. Mixes in seconds in plain water.",
        draft: true,
      },
    },
    { id: "guarantee", question: "What's your guarantee?", answer: { text: "{{GUARANTEE_TERMS}}" } },
    {
      id: "subscription",
      question: "Can I skip, pause, or cancel my subscription?",
      answer: { text: "Yes. Anytime, from your account.", draft: true, dependsOn: ["{{CONFIRM_SUB_TERMS}}"] },
    },
    { id: "shipping", question: "How fast does it ship?", answer: { text: "{{SHIPPING_TERMS}}" } },
    {
      id: "medication",
      question: "Can I take it with medication?",
      answer: {
        text: "Talk to your doctor before using any supplement, especially if you take medication, are pregnant or nursing, or have a medical condition.",
        draft: true,
      },
    },
    {
      id: "wholesale",
      question: "Can my pro shop or club carry Clarity+?",
      answer: { text: "Yes — reach out here. {{WHOLESALE_CONTACT}}", draft: true },
    },
  ] as FaqItem[],
};

export const join = {
  heading: {
    prelaunch: { text: "Be first in line for Clarity+.", draft: true } as Copy,
    live: { text: "{{EMAIL_OFFER}}" } as Copy,
  },
  subline: { text: "Launch news, first access, and nothing you didn't ask for.", draft: true } as Copy,
  emailLabel: "Email",
  phoneLabel: "Mobile (optional)",
  smsConsent: "{{SMS_CONSENT_TEXT}}",
  button: { text: "Count me in", draft: true } as Copy,
  emailError: "Enter a valid email address.",
  success: {
    heading: { text: "You're on the list.", draft: true } as Copy,
    body: { text: "We'll be in touch with launch news and first access.", draft: true } as Copy,
  },
};

export const footer = {
  columns: [
    { heading: "Shop", links: [{ label: "Clarity+", href: "/#buy" }] },
    {
      heading: "Learn",
      links: [
        { label: "The Science", href: "/science" },
        { label: "How to Use", href: "/#how" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "Contact", href: "{{CONTACT_EMAIL}}" },
        { label: "Wholesale & pro shops", href: "{{WHOLESALE_CONTACT}}" },
        { label: "Affiliate program", href: "{{AFFILIATE_SIGNUP_URL}}" },
      ],
    },
    {
      heading: "Policies",
      links: [
        { label: "Shipping", href: "{{POLICY_SHIPPING_URL}}" },
        { label: "Refunds", href: "{{POLICY_REFUND_URL}}" },
        { label: "Subscription terms", href: "{{POLICY_SUBSCRIPTION_URL}}" },
        { label: "Privacy", href: "{{POLICY_PRIVACY_URL}}" },
        { label: "Terms", href: "{{POLICY_TERMS_URL}}" },
      ],
    },
  ],
  social: "{{SOCIAL_URLS}}",
  /** From FutureCeuticals' claims sheet; confirm it's their required wording. */
  trademark: {
    text: "CognatiQ® is a registered trademark of VDF FutureCeuticals, Inc. Pat. fcpatent.com",
    draft: true,
    dependsOn: ["{{CONFIRM_TRADEMARK_LINE}}"],
  } as Copy,
  copyright: "© 2026 Game Plan Sports Performance, Inc.",
};

/**
 * Search and social-share text for the homepage. Drafts replace {{SEO_TITLE}} and
 * {{SEO_DESCRIPTION}}; same guardrails as the page copy (no claims or
 * asterisks in the snippet). Title ~60 chars max, description ~155.
 */
export const seo = {
  title: { text: "Clarity+ | Decision-Making Drink Mix for Golfers", draft: true } as Copy,
  description: {
    text: "A non-stimulant drink mix for golfers, built around a clinically studied 200mg dose of CognatiQ®. One stick before you tee off.",
    draft: true,
    dependsOn: ["{{CONFIRM_DOSE_200MG}}", "{{CONFIRM_NON_STIMULANT}}"],
  } as Copy,
  /** Until supplied, the homepage uses a generated navy card (src/app/(home)/opengraph-image.tsx). */
  ogImage: "{{OG_IMAGE}}",
  shareImageAlt: "Clarity+ by Game Plan Sports Performance",
};

/* -------------------------------------------------------------------------- */
/* The Science page (/science)                                                */
/* -------------------------------------------------------------------------- */

/**
 * Skeleton for the CognatiQ® page. Every data slot is a placeholder until
 * FutureCeuticals supplies the study details; nothing here is invented.
 * Guardrails: stats belong to the CognatiQ® ingredient studies, not Clarity+,
 * and 80.7% is always shown beside placebo (11.1%).
 */
export const science = {
  seo: {
    title: "The Science",
    description: {
      text: "The research behind CognatiQ®, the clinically studied coffee fruit extract in Clarity+.",
      draft: true,
    } as Copy,
  },
  intro: {
    eyebrow: "The Science",
    heading: { text: "The ingredient behind Clarity+.", draft: true } as Copy,
    body: {
      text: "Clarity+ is built around CognatiQ®, a whole coffee fruit extract from FutureCeuticals that has been studied in published human clinical trials. Here's what that research looked at, and what it found.",
      draft: true,
    } as Copy,
  },
  ingredient: {
    heading: { text: "What is CognatiQ®?", draft: true } as Copy,
    overview: "{{COGNATIQ_OVERVIEW}}",
    source: "{{COGNATIQ_SOURCE}}",
    mechanism: {
      text: "CognatiQ® increases BDNF, a key neuroprotein that supports the protection, growth, and connections of brain cells.*",
      draft: true,
    } as Copy,
    image: {
      src: "{{COGNATIQ_IMAGE}}",
      alt: "Coffee fruit, the source of CognatiQ®",
      label: "Coffee fruit / ingredient photo",
      size: "1200×900",
    },
  },
  results: {
    heading: { text: "Backed by a clinical study. Not a hunch.", draft: true } as Copy,
    subline: {
      text: "Five published clinical studies on CognatiQ®. Here's what the latest one showed.",
      draft: true,
    } as Copy,
    decisiveness: {
      title: "Decisiveness · N-back test",
      bars: [
        { id: "placebo", label: "Placebo", value: 11.1, tone: "silver" },
        { id: "cognatiq", label: "CognatiQ® 200mg", value: 80.7, tone: "burgundy" },
      ] as const,
      axisLabel: "% improvement in omission errors vs. baseline, 60 minutes after one dose",
      plainEnglish: {
        text: "Omission errors are missed responses caused by hesitation. Fewer misses means more decisive play.",
        draft: true,
      } as Copy,
    },
    impulse: {
      title: "Impulse control · Response-inhibition test",
      /** Change in errors vs. baseline; placebo rose more than 55%. */
      bars: [
        { id: "placebo", label: "Placebo", value: 55, display: ">+55%", tone: "silver" },
        { id: "cognatiq", label: "CognatiQ® 200mg", value: -41, display: "−41%", tone: "burgundy" },
      ] as const,
      axisLabel: "Change in errors vs. baseline, response-inhibition test, {{CONFIRM_IMPULSE_TIMEPOINT}}",
      plainEnglish: {
        text: "Response inhibition is holding back the wrong move. Errors went down with CognatiQ®. They went up with placebo.",
        draft: true,
      } as Copy,
    },
    stats: [
      { value: "60 min", label: "Measured 60 minutes after a single dose" },
      { value: "28 days", label: "Sustained improvement with daily use" },
      {
        value: "200mg",
        label: { text: "The full clinically studied dose, in every stick", dependsOn: ["{{CONFIRM_DOSE_200MG}}"] } as Copy,
      },
      { value: "40–65", label: "Age range of the study participants" },
    ],
    footnote: {
      text: "Results from a randomized, double-blind, placebo-controlled human clinical trial of the CognatiQ® ingredient in adults 40–65. Clarity+ has not been studied as a finished product.",
      draft: true,
    } as Copy,
    citation: {
      text: "Robinson J., et al. (2024). Whole Coffee Cherry Extract Improves Working Memory and Response Inhibition: Acute and Longitudinal Results from a Remote, Randomized, Double-Blind, Placebo-Controlled Clinical Trial.",
      draft: true,
    } as Copy,
    studyLink: { label: "Read the study", href: "{{STUDY_URL}}" },
  },
  studies: {
    heading: { text: "Published clinical studies.", draft: true } as Copy,
    intro: "{{COGNATIQ_STUDIES_INTRO}}",
    /** One card per published study (spec: 5). Fields stay placeholders until supplied. */
    fields: ["Title", "Year · Journal", "Design", "Participants", "Dose", "Key finding", "Citation"],
    items: [
      "{{COGNATIQ_STUDY_1}}",
      "{{COGNATIQ_STUDY_2}}",
      "{{COGNATIQ_STUDY_3}}",
      "{{COGNATIQ_STUDY_4}}",
      "{{COGNATIQ_STUDY_5}}",
    ],
  },
  dose: {
    heading: { text: "Why 200mg.", draft: true } as Copy,
    body: "{{COGNATIQ_DOSE_RATIONALE}}",
    dependsOn: "{{CONFIRM_DOSE_200MG}}",
  },
  /** Fixed compliance copy (guardrail 3). */
  ingredientNotProduct:
    "These studies were conducted on the CognatiQ® ingredient. Clarity+ has not been studied as a finished product.",
  cta: {
    heading: { text: "Ready to play with it?", draft: true } as Copy,
  },
};
