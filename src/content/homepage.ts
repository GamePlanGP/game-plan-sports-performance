/**
 * Homepage v2 content — every string, price, link and flag for /v2.
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
  SHOW_NSF_BADGE: false,
  SHOW_PRO_TESTIMONIALS: false,
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
  guaranteeShort: "{{GUARANTEE_SHORT}}",
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
/* Page chrome                                                                */
/* -------------------------------------------------------------------------- */

export const nav = [
  { label: "The Science", href: "#science" },
  { label: "How to Use", href: "#how" },
  { label: "Ingredients", href: "#inside" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export const announcement = {
  message: offer.guaranteeShort,
  /** Opens this FAQ item. */
  faqId: "guarantee",
};

/* -------------------------------------------------------------------------- */
/* Sections                                                                   */
/* -------------------------------------------------------------------------- */

export const hero = {
  eyebrow: "Clarity+ by Game Plan Sports Performance",
  headline: { text: "Commit to every shot.", draft: true } as Copy,
  subhead: {
    text: "Clarity+ supports faster, more accurate decisions under pressure* — with a clinically studied 200mg dose of CognatiQ®. Non-stimulant. One stick before you tee off.",
    draft: true,
    dependsOn: ["{{CONFIRM_DOSE_200MG}}", "{{CONFIRM_NON_STIMULANT}}"],
  } as Copy,
  secondary: { label: "See the science", href: "#science" },
  trust: ["200mg CognatiQ®", "Non-stimulant", offer.guaranteeShort],
  rating: "{{JUDGEME_RATING}}",
  image: {
    src: "{{HERO_IMAGE}}",
    alt: "Clarity+ on the course",
    label: "Hero photo: product on the course, or a golfer over a putt",
    size: "1600×1200 desktop · 800×1000 mobile crop",
  },
};

export const proof = {
  heading: { text: "Backed by a clinical study. Not a hunch.", draft: true } as Copy,
  chartTitle: "CognatiQ® ingredient study · N-back test",
  bars: [
    { id: "placebo", label: "Placebo", value: 11.1, tone: "silver" },
    { id: "cognatiq", label: "CognatiQ® 200mg", value: 80.7, tone: "burgundy" },
  ] as const,
  axisLabel: "% improvement in omission errors vs. baseline, 60 minutes after one dose",
  plainEnglish: {
    text: "Omission errors are missed responses caused by hesitation. Fewer misses means more decisive play.",
    draft: true,
  } as Copy,
  stats: [
    { value: "60 min", label: "Measured 60 minutes after a single dose" },
    {
      value: "200mg",
      label: "The clinically studied dose, in every stick",
      dependsOn: ["{{CONFIRM_DOSE_200MG}}"],
    },
    { value: "5", label: "Published clinical studies on CognatiQ®" },
  ],
  footnote:
    "Results from a double-blind, placebo-controlled human clinical study of the CognatiQ® ingredient (N-back test). Clarity+ has not been studied as a finished product. {{STUDY_CITATION}}",
  studyLink: { label: "Read the study", href: "{{STUDY_URL}}" },
};

export const moments = {
  eyebrow: "On the course",
  heading: { text: "Where rounds are won and lost.", draft: true } as Copy,
  cards: [
    {
      icon: "tee",
      eyebrow: "Hole 1 · Tee box",
      title: "The first tee.",
      body: { text: "Everyone's watching. Pick a target. Pull the trigger.", draft: true } as Copy,
      tag: "Supports decisiveness*",
    },
    {
      icon: "clubs",
      eyebrow: "Approach · Club select",
      title: "Between clubs.",
      body: { text: "7 or 8? Choose, commit, swing.", draft: true } as Copy,
      tag: "Supports accuracy under pressure*",
    },
    {
      icon: "hole",
      eyebrow: "Hole 17 · 3 ft",
      title: "The 3-footer on 17.",
      body: { text: "Four hours in. Stay sharp to the last putt.", draft: true } as Copy,
      tag: "Supports focus and mental stamina*",
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
  heading: { text: "Every ingredient. Every dose. No proprietary blends.", draft: true } as Copy,
  featured: {
    name: "CognatiQ®",
    kind: "Whole coffee fruit extract",
    dose: "200mg",
    reason: {
      text: "The clinically studied ingredient behind decisiveness and accuracy under pressure.*",
      draft: true,
    } as Copy,
  },
  /** Rendered as skeleton cards until the final formula is provided. */
  others: ["{{FINAL_FORMULA}}", "{{FINAL_FORMULA}}", "{{FINAL_FORMULA}}", "{{FINAL_FORMULA}}"],
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
      "I wanted something that targets decision-making under pressure. Not caffeine. Not a mystery blend. A clinically studied ingredient at the studied dose, with every other dose on the label.",
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
    { id: "nsf", icon: "seal", title: "NSF Certified for Sport®", detail: "", requiresFlag: "SHOW_NSF_BADGE" },
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
      answer: { text: "{{COMPETITION_SAFE_STATEMENT}}" },
    },
    {
      id: "inside",
      question: "What's in it?",
      answer: { text: "Every ingredient and dose is listed on the label.", draft: true },
      link: { label: "See every ingredient", href: "#inside" },
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
    { heading: "Shop", links: [{ label: "Clarity+", href: "#buy" }] },
    {
      heading: "Learn",
      links: [
        { label: "The Science", href: "#science" },
        { label: "How to Use", href: "#how" },
        { label: "FAQ", href: "#faq" },
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
  trademark: "{{CONFIRM_TRADEMARK_LINE}}",
  copyright: "© 2026 Game Plan Sports Performance, Inc.",
};

export const seo = {
  title: "{{SEO_TITLE}}",
  description: "{{SEO_DESCRIPTION}}",
  ogImage: "{{OG_IMAGE}}",
};
