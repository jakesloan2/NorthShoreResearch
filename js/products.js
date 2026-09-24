/* =========================================================
   PRODUCT CATALOGUE — SAMPLE RANGE FOR DESIGN ONLY.
   Every product, price, nutrition figure and batch below is an
   example. Replace all of it with your real products and their
   label information before launch.
   Each product:
     id, name, category, form (jar|pouch|bar|bottle), tint,
     short, description, badges[],
     options { Size:[...], Flavour:[...] },
     variants [{ sku, options:{Size,Flavour}, price, wasPrice?, stock, shopifyVariantId? }],
     nutrition [[label, per serving]], ingredients, allergens, features[], directions
   Health claims: only use authorised claims from the GB nutrition and
   health claims register, with their conditions of use. No claims to
   treat, prevent or cure anything.
   "Batch tested" badge: only where a real certificate exists in js/coa.js.
   wasPrice: only use if that was a genuine previous selling price.
   ========================================================= */
window.PRODUCTS = [
  {
    id: "GLP-3RT",
    name: "GLP-3RT",
    form: "vial",
    tint: "rgba(216,20,44,.45)",
    description: "RTTA is a synthetic peptide that acts as a triple agonist, targeting the Glucagon-like peptide-1 (GLP-1), Glucose-dependent insulinotropic polypeptide (GIP), and Glucagon (GCG) receptors. In laboratory research, it is utilized to study the potentiation of metabolic signaling and the regulation of nutrient-stimulated hormone secretion. Studies focus on its efficacy in modulating glucose homeostasis and observing the synergistic effects of triple-receptor activation on lipid metabolism in experimental models.",
    badges: ["Best seller", "Batch tested"],
    options: { Size: ["10 mg", "20 mg", "30mg"]},
    variants: [
      { sku: "WPI-10", options: { Size: "10 mg"},     price: 39.99, stock: 40 },
      { sku: "WPI-20", options: { Size: "20 mg"},   price: 74.99, stock: 32 },
      { sku: "WPI-30", options: { Size: "30 mg"},   price: 109.99, stock: 32 },

    ],
    nutrition: [["Energy", "112 kcal"], ["Protein", "26 g"], ["Carbohydrate", "1.2 g"], ["of which sugars", "0.8 g"], ["Fat", "0.5 g"], ["Salt", "0.2 g"]],
    ingredients: "Whey protein isolate (<b>milk</b>) (93%), flavouring, emulsifier (<b>soy</b> lecithin), sweetener (sucralose).",
    allergens: "Contains milk and soy. Made in a factory that also handles egg, gluten and nuts.",
    features: ["26 g protein per 30 g serving", "Instantised — no clumping", "Suitable for vegetarians", "Batch certificate published"],
    directions: "Mix one 30 g scoop with 250–300 ml of water or milk. Use as part of a balanced diet."
  },
  {
    id: "creatine-monohydrate",
    name: "Creatine Monohydrate",
    category: "Performance",
    form: "jar",
    tint: "rgba(216,20,44,.3)",
    short: "Micronised 200-mesh creatine. Unflavoured.",
    description: "Pure micronised creatine monohydrate. Fine mesh for easy mixing. Creatine increases physical performance in successive bursts of short-term, high-intensity exercise; the beneficial effect is obtained with a daily intake of 3 g.",
    badges: ["Batch tested"],
    options: { Size: ["250 g", "500 g", "1 kg"] },
    variants: [
      { sku: "CRE-250", options: { Size: "250 g" }, price: 12.99, stock: 60 },
      { sku: "CRE-500", options: { Size: "500 g" }, price: 19.99, stock: 45 },
      { sku: "CRE-1K",  options: { Size: "1 kg" },  price: 34.99, stock: 22 }
    ],
    nutrition: [["Creatine monohydrate", "5 g"], ["Energy", "0 kcal"]],
    ingredients: "Creatine monohydrate (100%).",
    allergens: "None of the 14 major allergens.",
    features: ["5 g per serving", "Micronised 200 mesh", "Unflavoured — add to anything", "Vegan"],
    directions: "Take one 5 g scoop daily with water or your shake."
  },
  {
    id: "pre-workout",
    name: "Pre-Workout Formula",
    category: "Performance",
    form: "jar",
    tint: "rgba(240,56,78,.35)",
    short: "Caffeine, citrulline and beta-alanine. 30 servings.",
    description: "A pre-workout with 200 mg caffeine, 6 g L-citrulline and 3.2 g beta-alanine per serving. High caffeine content: not recommended for children, under-18s or pregnant or breastfeeding women.",
    badges: ["New"],
    options: { Flavour: ["Blue Raspberry", "Tropical", "Cherry Cola"] },
    variants: [
      { sku: "PRE-BLU", options: { Flavour: "Blue Raspberry" }, price: 27.99, stock: 25 },
      { sku: "PRE-TRO", options: { Flavour: "Tropical" },       price: 27.99, stock: 25 },
      { sku: "PRE-CHE", options: { Flavour: "Cherry Cola" },    price: 27.99, stock: 8 }
    ],
    nutrition: [["Caffeine", "200 mg"], ["L-Citrulline", "6 g"], ["Beta-alanine", "3.2 g"], ["Taurine", "1 g"], ["Vitamin B12", "2.5 µg"]],
    ingredients: "L-citrulline, beta-alanine, taurine, acid (citric acid), flavouring, caffeine anhydrous, sweetener (sucralose), colour, cyanocobalamin.",
    allergens: "None of the 14 major allergens. High caffeine content (200 mg per serving).",
    features: ["200 mg caffeine per serving", "30 servings", "No proprietary blends — full label", "Not recommended for under-18s or pregnant women"],
    directions: "Mix one scoop with 300 ml water 20–30 minutes before training. Do not exceed one serving per day."
  },
  {
    id: "electrolytes",
    name: "Electrolyte Hydration",
    category: "Hydration",
    form: "jar",
    tint: "rgba(160,160,170,.35)",
    short: "Sodium, potassium and magnesium. Zero sugar.",
    description: "A sugar-free electrolyte drink mix with sodium, potassium and magnesium. Magnesium contributes to a reduction of tiredness and fatigue.",
    badges: [],
    options: { Flavour: ["Lemon & Lime", "Orange"] },
    variants: [
      { sku: "ELE-LEM", options: { Flavour: "Lemon & Lime" }, price: 16.99, stock: 30 },
      { sku: "ELE-ORA", options: { Flavour: "Orange" },       price: 16.99, stock: 30 }
    ],
    nutrition: [["Sodium", "500 mg"], ["Potassium", "250 mg"], ["Magnesium", "60 mg"], ["Sugars", "0 g"]],
    ingredients: "Sodium citrate, potassium chloride, magnesium citrate, acid (citric acid), flavouring, sweetener (steviol glycosides).",
    allergens: "None of the 14 major allergens.",
    features: ["Zero sugar", "40 servings", "Vegan"],
    directions: "Mix one scoop with 500 ml water."
  },
  {
    id: "protein-bar",
    name: "Protein Bar — Box of 12",
    category: "Snacks",
    form: "bar",
    tint: "rgba(216,20,44,.25)",
    short: "20 g protein, 2 g sugar. Twelve bars.",
    description: "A soft-baked high-protein bar for between meals or on the go. Twelve 60 g bars per box.",
    badges: ["Best seller"],
    options: { Flavour: ["Cookie Dough", "Salted Caramel", "Chocolate Brownie"] },
    variants: [
      { sku: "BAR-COO", options: { Flavour: "Cookie Dough" },       price: 21.99, stock: 40 },
      { sku: "BAR-SAL", options: { Flavour: "Salted Caramel" },     price: 21.99, stock: 40 },
      { sku: "BAR-BRO", options: { Flavour: "Chocolate Brownie" },  price: 21.99, stock: 12 }
    ],
    nutrition: [["Energy", "215 kcal"], ["Protein", "20 g"], ["Carbohydrate", "18 g"], ["of which sugars", "2 g"], ["Fat", "8 g"], ["Fibre", "6 g"]],
    ingredients: "Protein blend (<b>milk</b> protein, whey protein concentrate (<b>milk</b>)), fibre (inulin), <b>almonds</b>, cocoa butter, humectant (glycerol), flavouring.",
    allergens: "Contains milk and nuts (almonds). May contain soy, egg and wheat.",
    features: ["20 g protein per bar", "Low sugar", "Soft-baked texture"],
    directions: "One bar as a snack between meals."
  },
  {
    id: "omega-3",
    name: "Omega-3 Fish Oil",
    category: "Health",
    form: "bottle",
    tint: "rgba(240,56,78,.25)",
    short: "1000 mg per softgel, 90 capsules.",
    description: "High-strength omega-3 fish oil providing EPA and DHA, which contribute to the normal function of the heart (the beneficial effect is obtained with a daily intake of 250 mg of EPA and DHA).",
    badges: [],
    options: { Size: ["90 capsules", "180 capsules"] },
    variants: [
      { sku: "OM3-90",  options: { Size: "90 capsules" },  price: 11.99, stock: 50 },
      { sku: "OM3-180", options: { Size: "180 capsules" }, price: 19.99, stock: 35 }
    ],
    nutrition: [["Fish oil", "1000 mg"], ["EPA", "330 mg"], ["DHA", "220 mg"]],
    ingredients: "<b>Fish</b> oil, capsule shell (gelatine (bovine), humectant (glycerol)), antioxidant (vitamin E).",
    allergens: "Contains fish.",
    features: ["550 mg EPA + DHA per softgel", "Not suitable for vegetarians"],
    directions: "Take one to two softgels daily with food."
  },
  {
    id: "multivitamin",
    name: "Daily Multivitamin",
    category: "Health",
    form: "bottle",
    tint: "rgba(200,200,210,.3)",
    short: "Daily vitamins and minerals. 60 tablets.",
    description: "A daily multivitamin and mineral tablet.",
    badges: [],
    options: { Size: ["60 tablets"] },
    variants: [
      { sku: "MUL-60", options: { Size: "60 tablets" }, price: 9.99, stock: 80 }
    ],
    nutrition: [["Vitamin C", "80 mg (100% NRV)"], ["Vitamin D3", "10 µg (200% NRV)"], ["Zinc", "10 mg (100% NRV)"], ["Magnesium", "100 mg (27% NRV)"]],
    ingredients: "Bulking agent (microcrystalline cellulose), magnesium oxide, vitamin C, zinc citrate, cholecalciferol, anti-caking agent.",
    allergens: "None of the 14 major allergens.",
    features: ["One a day", "Vegetarian"],
    directions: "Take one tablet daily with food."
  },
  {
    id: "shaker",
    name: "North Shore Shaker 700 ml",
    category: "Accessories",
    form: "bottle",
    tint: "rgba(120,120,130,.35)",
    short: "Leak-proof, BPA-free, with mixing ball.",
    description: "A 700 ml BPA-free shaker with a secure screw lid, flip cap and stainless mixing ball. Dishwasher safe.",
    badges: [],
    options: { Colour: ["Navy", "Clear"] },
    variants: [
      { sku: "SHK-NAV", options: { Colour: "Navy" },  price: 7.99, stock: 100 },
      { sku: "SHK-CLR", options: { Colour: "Clear" }, price: 7.99, stock: 100 }
    ],
    nutrition: [],
    ingredients: "",
    allergens: "",
    features: ["700 ml capacity", "BPA-free", "Dishwasher safe"],
    directions: ""
  }
];

/* Categories shown on the home page and in filters */
window.CATEGORIES = [
  { id: "Protein",     blurb: "Whey, isolate and blends",      tint: "rgba(216,20,44,.6)" },
  { id: "Performance", blurb: "Creatine and pre-workout",      tint: "rgba(240,56,78,.5)" },
  { id: "Hydration",   blurb: "Electrolytes and intra-workout", tint: "rgba(216,20,44,.4)" },
  { id: "Health",      blurb: "Vitamins and essentials",       tint: "rgba(200,200,210,.35)" },
  { id: "Snacks",      blurb: "Bars and on-the-go",            tint: "rgba(240,56,78,.4)" },
  { id: "Accessories", blurb: "Shakers and kit",               tint: "rgba(150,150,160,.4)" }
];
