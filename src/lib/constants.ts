export const SITE_CONFIG = {
  name: "Game Plan Sports Performance",
  tagline: "Perform at the highest level.",
  secondaryTagline: "Find your Zone.",
  description:
    "Engineered for athletes who refuse to leave performance to chance. Every formulation is built on clinical science, designed for the demands of elite competition.",
  domain: "https://www.gameplansportsperformance.com",
  email: "hello@gameplansportsperformance.com",
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Science", href: "/science" },
  { label: "Contact", href: "/contact" },
] as const;

export const PRODUCT = {
  name: "Clarity",
  shortName: "Clarity",
  format: "Stick Pack",
  count: "10ct Box",
  price: 24.99,
  priceFormatted: "$24.99",
  pricePerServing: "$2.50",
  servings: 10,
  flavor: "Citrus Greens",
  rating: 4.8,
  reviewCount: 127,
  description:
    "A precision-engineered nootropic hydration blend designed for peak athletic performance. Each stick pack delivers clinically-backed cognitive enhancers, premium electrolytes, and adaptogenic herbs to keep you sharp from the first tee to the final hole.",
  shortDescription:
    "Nootropic hydration engineered for elite performance. Sharpen focus, sustain energy, and perform at your peak — every round.",
  howToUse: [
    "Tear open one stick pack",
    "Mix into 12-16 oz of cold water",
    "Drink 15-30 minutes before competition or during play",
    "Stay hydrated and focused for peak performance",
  ],
  trustBadges: [
    "Sugar-Free",
    "No Artificial Colors",
    "Third-Party Tested",
    "Made in USA",
    "GMP Certified",
    "Vegan Friendly",
  ],
};

export const SUBSCRIPTION_OPTIONS = [
  {
    label: "One-Time Purchase",
    price: 24.99,
    priceFormatted: "$24.99",
    savings: null,
  },
  {
    label: "Subscribe & Save 15%",
    price: 21.24,
    priceFormatted: "$21.24",
    savings: "Save $3.75",
    frequencies: ["Every 30 days", "Every 60 days", "Every 90 days"],
  },
];

export const INGREDIENTS = [
  {
    name: "CognatiQ\u00AE",
    aka: "Coffee Fruit Extract",
    amount: "100mg",
    category: "nootropic" as const,
    highlight: true,
    description:
      "Clinically shown to increase BDNF (Brain-Derived Neurotrophic Factor) by up to 143%. Enhances learning, memory, and cognitive processing speed.",
    benefits: ["Enhanced focus", "Improved memory", "Faster decision-making"],
    color: "gold",
  },
  {
    name: "Alpha-GPC",
    aka: "L-Alpha Glycerylphosphorylcholine",
    amount: "150mg",
    category: "nootropic" as const,
    highlight: false,
    description:
      "A premium choline source that crosses the blood-brain barrier to support acetylcholine production \u2014 the neurotransmitter essential for focus and muscle coordination.",
    benefits: ["Mental clarity", "Mind-muscle connection", "Sustained attention"],
    color: "gold",
  },
  {
    name: "L-Theanine",
    aka: "From Green Tea",
    amount: "200mg",
    category: "nootropic" as const,
    highlight: false,
    description:
      "Promotes calm, focused attention without drowsiness. Works synergistically with caffeine to deliver smooth, jitter-free energy.",
    benefits: ["Calm focus", "Reduced anxiety", "Smooth energy"],
    color: "gold",
  },
  {
    name: "Natural Caffeine",
    aka: "From Green Tea",
    amount: "100mg",
    category: "nootropic" as const,
    highlight: false,
    description:
      "Moderate caffeine dose (~1 cup of coffee) paired with L-Theanine for clean energy without the crash or jitters that can compromise your performance.",
    benefits: ["Clean energy", "Alertness", "No crash"],
    color: "gold",
  },
  {
    name: "Lion\u2019s Mane",
    aka: "Hericium erinaceus",
    amount: "250mg",
    category: "adaptogen" as const,
    highlight: false,
    description:
      "A powerful medicinal mushroom that supports nerve growth factor (NGF) production. Promotes long-term brain health and acute cognitive performance.",
    benefits: ["Neuroprotection", "Mental stamina", "Brain health"],
    color: "gold",
  },
  {
    name: "Rhodiola Rosea",
    aka: "Arctic Root",
    amount: "100mg",
    category: "adaptogen" as const,
    highlight: false,
    description:
      "An elite adaptogen used by athletes and military personnel to combat fatigue and enhance mental performance under stress.",
    benefits: ["Stress resilience", "Anti-fatigue", "Mental endurance"],
    color: "gold",
  },
  {
    name: "Electrolyte Complex",
    aka: "Sodium, Potassium, Magnesium",
    amount: "Full spectrum",
    category: "electrolyte" as const,
    highlight: false,
    description:
      "Optimally dosed electrolytes to prevent dehydration-related performance decline. Formulated for the unique demands of 4+ hours of competition.",
    benefits: ["Hydration", "Muscle function", "Cramp prevention"],
    color: "gold",
  },
];

export const ELECTROLYTE_PROFILE = [
  { mineral: "Sodium", amount: "500mg" },
  { mineral: "Potassium", amount: "200mg" },
  { mineral: "Magnesium", amount: "60mg" },
  { mineral: "Calcium", amount: "40mg" },
  { mineral: "Chloride", amount: "390mg" },
];

export const SUPPLEMENT_FACTS = {
  servingSize: "1 stick pack (7g)",
  servingsPerContainer: 10,
  calories: 5,
  ingredients: [
    { name: "Total Carbohydrate", amount: "1g", dv: "<1%" },
    { name: "Sodium (as Sodium Citrate)", amount: "500mg", dv: "22%" },
    { name: "Potassium (as Potassium Citrate)", amount: "200mg", dv: "4%" },
    { name: "Magnesium (as Magnesium Glycinate)", amount: "60mg", dv: "14%" },
    { name: "Calcium (as Calcium Citrate)", amount: "40mg", dv: "3%" },
    { name: "Chloride (as Pink Himalayan Salt)", amount: "390mg", dv: "17%" },
  ],
  proprietaryBlend: {
    totalAmount: "900mg",
    ingredients: [
      "Lion\u2019s Mane Extract (Hericium erinaceus)",
      "L-Theanine",
      "Alpha-GPC (L-Alpha Glycerylphosphorylcholine)",
      "CognatiQ\u00AE (Coffee Fruit Extract)",
      "Natural Caffeine (from Green Tea)",
      "Rhodiola Rosea Extract",
    ],
  },
  otherIngredients:
    "Citric Acid, Natural Flavors, Stevia Leaf Extract, Silicon Dioxide, Fruit & Vegetable Juice (for color).",
};

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Tear",
    description:
      "Open a single stick pack \u2014 perfectly portioned for your round.",
    icon: "tear" as const,
  },
  {
    step: 2,
    title: "Mix",
    description: "Pour into 12-16 oz of cold water. Dissolves in seconds.",
    icon: "mix" as const,
  },
  {
    step: 3,
    title: "Perform",
    description:
      "Experience sharper focus, sustained energy, and optimal hydration for peak performance.",
    icon: "play" as const,
  },
];

export const BENEFITS = [
  {
    title: "Laser Focus",
    description:
      "CognatiQ\u00AE and Alpha-GPC sharpen concentration for critical moments when precision matters most.",
    icon: "focus" as const,
  },
  {
    title: "Calm Energy",
    description:
      "L-Theanine + natural caffeine deliver smooth, jitter-free energy that lasts through full competition.",
    icon: "energy" as const,
  },
  {
    title: "Peak Hydration",
    description:
      "Precision electrolytes prevent the mental fog and fatigue that comes with dehydration.",
    icon: "hydration" as const,
  },
];

export const TESTIMONIALS = [
  {
    name: "Mike R.",
    location: "Scottsdale, AZ",
    rating: 5,
    text: "I've tried every golf supplement out there. Clarity is the first one that actually makes a noticeable difference on the back nine. My focus stays sharp through 18.",
    handicap: "8 handicap",
  },
  {
    name: "Sarah L.",
    location: "Austin, TX",
    rating: 5,
    text: "The taste is incredible \u2014 not chalky or overly sweet like other hydration mixes. And I genuinely feel more dialed in during my rounds. Game changer.",
    handicap: "14 handicap",
  },
  {
    name: "James K.",
    location: "Charlotte, NC",
    rating: 5,
    text: "As a club pro, I need to be on point for 8+ hours a day. Clarity keeps me mentally sharp from the first lesson to the last. My students have noticed the difference too.",
    handicap: "PGA Professional",
  },
  {
    name: "David T.",
    location: "San Diego, CA",
    rating: 4,
    text: "Love the clean energy \u2014 no crash at the turn like I used to get with energy drinks. The electrolytes actually work too. Huge fan of the citrus flavor.",
    handicap: "12 handicap",
  },
  {
    name: "Rachel M.",
    location: "Naples, FL",
    rating: 5,
    text: "Finally a product that understands what golfers actually need. Not just caffeine and sugar. The science behind this is legit, and you can feel it working.",
    handicap: "6 handicap",
  },
];

export const REVIEWS = [
  {
    name: "Michael R.",
    rating: 5,
    title: "Best golf supplement I've tried",
    date: "2024-12-15",
    verified: true,
    text: "After 20+ years of golf, I've tried everything from energy drinks to focus supplements. Clarity is the first product that genuinely improves my mental game without any jitters or crash. My back nine scores have improved noticeably.",
  },
  {
    name: "Sarah L.",
    rating: 5,
    title: "Great taste, real results",
    date: "2024-12-10",
    verified: true,
    text: "I was skeptical, but after a month of using Clarity before every round, I'm a believer. The citrus flavor is refreshing and not too sweet. More importantly, I feel focused and energized through all 18 holes.",
  },
  {
    name: "James K.",
    rating: 5,
    title: "A must for serious athletes",
    date: "2024-11-28",
    verified: true,
    text: "As a PGA teaching pro, I need to stay sharp all day. Clarity has become part of my daily routine. The combination of nootropics and electrolytes is perfect for the demands of competition.",
  },
  {
    name: "Tom W.",
    rating: 4,
    title: "Solid hydration with a mental edge",
    date: "2024-11-15",
    verified: true,
    text: "Good product overall. The electrolyte balance is spot-on and I definitely notice better focus during my rounds. Only wish they offered a few more flavor options. Would buy again.",
  },
  {
    name: "Emily P.",
    rating: 5,
    title: "Changed my tournament game",
    date: "2024-11-01",
    verified: true,
    text: "I play competitively and the mental side of the game is huge. Clarity gives me a calm, focused energy that helps me stay in the zone. No more mental fatigue in the final stretch.",
  },
];

export const FAQS = [
  {
    question: "How much caffeine is in Clarity?",
    answer:
      "Each serving contains 100mg of natural caffeine from green tea \u2014 roughly equivalent to one cup of coffee. Paired with 200mg of L-Theanine, it delivers smooth, focused energy without jitters or crash.",
  },
  {
    question: "When should I drink it?",
    answer:
      "For best results, mix one stick pack into cold water 15-30 minutes before your round. You can also sip it throughout your round to maintain hydration and focus. Many athletes keep a second pack for the back nine.",
  },
  {
    question: "Is it safe to take daily?",
    answer:
      "Yes! All ingredients are generally recognized as safe (GRAS) and dosed within clinically studied ranges. Clarity is third-party tested for purity and potency. As with any supplement, consult your doctor if you have specific health concerns.",
  },
  {
    question: "What does it taste like?",
    answer:
      'Our Citrus Greens flavor has a clean, refreshing citrus taste with subtle green tea notes. No artificial sweeteners, no chalky texture \u2014 just smooth, easy-drinking hydration. We\'ve heard "it actually tastes good" more times than we can count.',
  },
  {
    question: "Will this help my performance?",
    answer:
      "Clarity is designed to optimize the mental and physical factors that impact your performance: focus, energy, hydration, and stress management. While we can\u2019t guarantee results, our ingredients are clinically shown to enhance cognitive function, and our users consistently report feeling sharper and more focused during competition.",
  },
  {
    question: "Is it legal for tournament play?",
    answer:
      "Absolutely. Clarity contains no banned substances under USGA, R&A, or WADA guidelines. All ingredients are naturally derived and commonly found in food and beverages.",
  },
  {
    question: "What makes this different from regular electrolyte drinks?",
    answer:
      "Most hydration mixes stop at electrolytes. Clarity combines premium electrolytes with clinically-backed nootropics (CognatiQ\u00AE, Alpha-GPC, L-Theanine) and adaptogens (Lion\u2019s Mane, Rhodiola Rosea) specifically chosen for the cognitive demands of elite competition. It\u2019s hydration + mental performance in one.",
  },
  {
    question: "Do you offer a subscription?",
    answer:
      "We will! Subscribe & Save will be available at launch with a 15% discount on every order. Choose delivery every 30, 60, or 90 days. Cancel or modify anytime \u2014 no commitments.",
  },
];

export const CLINICAL_STUDIES = [
  {
    ingredient: "CognatiQ\u00AE",
    title: "BDNF Enhancement Study",
    finding:
      "Increased Brain-Derived Neurotrophic Factor (BDNF) levels by up to 143% in clinical trials.",
    source: "Published in British Journal of Nutrition",
    year: 2013,
  },
  {
    ingredient: "Alpha-GPC",
    title: "Cognitive Function & Attention",
    finding:
      "Demonstrated significant improvements in attention, memory, and cognitive processing in multiple clinical trials.",
    source: "Published in Journal of the International Society of Sports Nutrition",
    year: 2015,
  },
  {
    ingredient: "L-Theanine + Caffeine",
    title: "Synergistic Focus Enhancement",
    finding:
      "The combination improved both speed and accuracy of attention-switching tasks and reduced susceptibility to distracting information.",
    source: "Published in Nutritional Neuroscience",
    year: 2010,
  },
  {
    ingredient: "Lion\u2019s Mane",
    title: "Nerve Growth Factor Support",
    finding:
      "Shown to stimulate Nerve Growth Factor (NGF) synthesis and improve mild cognitive impairment in a double-blind, placebo-controlled trial.",
    source: "Published in Phytotherapy Research",
    year: 2009,
  },
  {
    ingredient: "Rhodiola Rosea",
    title: "Anti-Fatigue & Stress Resilience",
    finding:
      "Significantly reduced mental fatigue and improved performance on work-related tasks under stress conditions.",
    source: "Published in Planta Medica",
    year: 2012,
  },
];

export const BRAND_STORY = {
  headline: "Born on the Course. Backed by Science.",
  paragraphs: [
    "Game Plan Sports Performance started with a simple observation: golf is as much a mental game as a physical one, yet most golfers fuel their rounds with sugary sports drinks or nothing at all.",
    "Our founders \u2014 a team of athletes, nutritional scientists, and product formulators \u2014 set out to create something different: a hydration product engineered specifically for the cognitive demands of elite competition.",
    "After 18 months of formulation, testing, and real-world feedback from athletes of every level, Clarity was born. Every ingredient was chosen with intention. Every dose backed by clinical research. Every sip designed to help you perform at your best.",
    "We believe that what you put in your body directly impacts what you get out of your game. Game Plan isn\u2019t just hydration \u2014 it\u2019s your competitive edge.",
  ],
};

export const FOOTER_LINKS = {
  product: [
    { label: "Shop", href: "/shop" },
    { label: "Science", href: "/science" },
    { label: "Ingredients", href: "/science#ingredients" },
    { label: "FAQ", href: "/#faq" },
  ],
  company: [
    { label: "Our Story", href: "/science#story" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Shipping Policy", href: "#" },
    { label: "Return Policy", href: "#" },
  ],
};

export const INGREDIENT_CATEGORIES = [
  {
    name: "Nootropics",
    description: "Cognitive enhancers for focus, memory, and mental clarity",
    icon: "brain" as const,
  },
  {
    name: "Electrolytes",
    description: "Essential minerals for hydration and muscle function",
    icon: "droplet" as const,
  },
  {
    name: "Adaptogens",
    description: "Natural herbs that help your body manage stress and fatigue",
    icon: "leaf" as const,
  },
];
