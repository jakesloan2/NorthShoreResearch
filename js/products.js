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
    category: "Research Compound",
    form: "vial",
    tint: "rgba(216,20,44,.45)",
    Short: "Molecular formula - C₁₀₁H₁₅₂N₂₈O₂₂S₂.",
    description: "RTTA is a synthetic peptide that acts as a triple agonist, targeting the Glucagon-like peptide-1 (GLP-1), Glucose-dependent insulinotropic polypeptide (GIP), and Glucagon (GCG) receptors. In laboratory research, it is utilized to study the potentiation of metabolic signaling and the regulation of nutrient-stimulated hormone secretion. Studies focus on its efficacy in modulating glucose homeostasis and observing the synergistic effects of triple-receptor activation on lipid metabolism in experimental models.",
    badges: ["Best seller", "Batch tested"],
    options: { Size: ["10 mg", "20 mg", "30mg"]},
    variants: [
      { sku: "GLP-10", options: { Size: "10 mg"},     price: 39.99, stock: 40 },
      { sku: "GLP-20", options: { Size: "20 mg"},   price: 74.99, stock: 32 },
      { sku: "GLP-30", options: { Size: "30 mg"},   price: 109.99, stock: 32 },

    ],
  },
  {
    id: "BPC-157",
    name: "BPC-157",
    category: "Research Compound",
    form: "Vial",
    tint: "rgba(216,20,44,.3)",
    Short: "Molecular formula - C₁₀₁H₁₅₂N₂₈O₂₂S₂.",
    description: "BPC-157 is a synthetic pentadecapeptide whose sequence corresponds to a partial fragment of a protein identified in gastric juice. In laboratory settings it is studied for its effect on angiogenic signalling, including VEGFR2 pathway activation, and on fibroblast migration and adhesion. Research is conducted in cell culture and animal models.",
    badges: ["Best Seller", "Batch tested"],
    options: { Size: ["10 mg"] },
    variants: [
      { sku: "BPC-10", options: { Size: "10 mg" }, price: 39.99, stock: 60 },
    ],
  },
  {
    id: "GHK-CU",
    name: "GHK-CU",
    category: "Research Compound",
    form: "jar",
    tint: "rgba(240,56,78,.35)",
    Short: "Molecular formula - C₁₀₁H₁₅₂N₂₈O₂₂S₂.",
    description: "GHK-Cu is the tripeptide glycyl-L-histidyl-L-lysine in complex with copper(II). In laboratory settings it is studied as a copper-binding ligand, with research focusing on extracellular matrix remodelling, collagen and metalloproteinase expression, and antioxidant signalling in fibroblast models.",
    badges: ["New"],
    options: { Size: ["100 mg"] },
    variants: [
      { sku: "GHK-100", options: { Size: "100 mg" }, price: 39.99, stock: 25 },
    ],
  },
  {
    id: "BACTERIOSTATIC WATER",
    name: "BACTERIOSTATIC WATER",
    category: "Research Compound",
    form: "vial",
    tint: "rgba(160,160,170,.35)",
    Short: "Molecular formula - C₁₀₁H₁₅₂N₂₈O₂₂S₂.",
    description: "Bacteriostatic water is sterile water containing benzyl alcohol as a bacteriostatic preservative, measured at 0.91% on the current lot. It is used in the laboratory to reconstitute lyophilised material for in vitro work, and the preservative allows a reconstituted vial to be drawn from more than once.",
    badges: ["Best Seller"],
    options: { Size: ["10 ml"] },
    variants: [
      { sku: "BAC-10", options: { Size: "10 ml"},       price: 9.99, stock: 80 },
         ],
  },
  {
    id: "MOTS-C",
    name: "MOTS-C",
    category: "Research Compound",
    form: "Vial",
    tint: "rgba(216,20,44,.25)",
    Short: "Molecular formula - C₁₀₁H₁₅₂N₂₈O₂₂S₂.",
    description: "MOTS-c (Mitochondrial Open Reading Frame of the 12S rRNA-c) is a 16-amino acid peptide encoded by the mitochondrial genome rather than the cell nucleus. In laboratory settings, it is studied as a 'mitokine' that facilitates mitochondrial-nuclear communication. Research primarily explores its role in activating the AMPK pathway, modulating the folate-methionine cycle, and its influence on metabolic homeostasis and cellular stress resistance in various animal and in vitro models.",
    options: { Size: ["10mg"] },
    variants: [
      { sku: "MOT-SC1", options: { Size: "10 mg" },       price: 39.99, stock: 40 },
    ],
  },
  {
    id: "MT-2",
    name: "MT-2",
    category: "Research Compound",
    form: "Vial",
    tint: "rgba(240,56,78,.25)",
    Short: "Molecular formula - C₁₀₁H₁₅₂N₂₈O₂₂S₂.",
    description: "MT-2 is a cyclic lactam analogue of alpha-melanocyte-stimulating hormone and a non-selective melanocortin receptor ligand. In laboratory settings research examines its activity across the MC1R, MC3R and MC4R subtypes and the cyclic AMP signalling that follows receptor binding.",
    badges: [],
    options: { Size: ["10mg"] },
    variants: [
      { sku: "MT2-10",  options: { Size: "10 mg" },  price: 29.99, stock: 50 },
    ],
  },
  {
    id: "Tesamorelin",
    name: "Tesamorelin",
    category: "Research Compound",
    form: "Vial",
    tint: "rgba(200,200,210,.3)",    
    Short: "Molecular formula - C₁₀₁H₁₅₂N₂₈O₂₂S₂.",
    description: "TESAMORELIN is a stabilized analog of Growth Hormone-Releasing Factor (GRF). Research applications involve the study of its selective action on growth hormone secretion and its impact on visceral adipose tissue metabolism. It is frequently used to observe the regulation of the IGF-1 axis and the lipolytic response in metabolic syndrome laboratory models.",
    badges: ["Best Seller"],
    options: { Size: ["10 mg", "20 mg",]},
    variants: [
      { sku: "TES-10", options: { Size: "10 mg" }, price: 79.99, stock: 80 },
      { sku: "TES-20", options: { Size: "20 mg" }, price: 129.99, stock: 80 },

    ],
  },
  {
    id: "NAD+",
    name: "NAD+",
    category: "Research Compound",
    form: "Vial",
    tint: "rgba(120,120,130,.35)",
    Short: "Molecular formula - C21H27N7O14P2.",
    description: "NAD+ is nicotinamide adenine dinucleotide, a coenzyme present in every living cell and central to redox reactions. In laboratory settings research examines its role as a substrate for sirtuins and PARP enzymes, and its influence on mitochondrial function and cellular energy metabolism in in vitro models.",
    badges: [],
    options: { Size: ["1000mg"] },
    variants: [
      { sku: "NAD-1000", options: { Size: "1000 mg" },  price: 89.99, stock: 100 },
    ],
  },
     {
     id: "WOLVERINE BLEND",
    name: "WOLVERINE BLEND",
    category: "Research Compound",
    form: "Vial",
    tint: "rgba(120,120,130,.35)",
    Short: "Molecular formula - Variable (BPC-157 / TB-500 Complex).",
    description: "The Wolverine Blend is a high-concentration research complex combining Pentadecapeptide BPC-157 and Thymosin Beta-4 (TB-500). This formulation is designed to study the synergistic interaction between angiogenic signaling and actin-sequestering pathways. Researchers utilize this blend to observe accelerated cellular migration and the structural repair of musculoskeletal tissue models in vitro.",
    badges: ["NEW"],
    options: { Size: ["10mg/10mg"] },
    variants: [
      { sku: "NAD-1000", options: { Size: "10mg/10mg" },  price: 49.99, stock: 50 },
    ],
];

/* Categories shown on the home page and in filters */
window.CATEGORIES = [
  { id: "GLP-3RT",     blurb: "GLP-3RT",      tint: "rgba(216,20,44,.6)" },
  { id: "BPC-157", blurb: "BPC-157",      tint: "rgba(240,56,78,.5)" },
  { id: "GHK-CU",   blurb: "CHK-CU", tint: "rgba(216,20,44,.4)" },
  { id: "BACTERIOSTATIC WATER",      blurb: "BACTERIOSTATIC WATER",       tint: "rgba(200,200,210,.35)" },
  { id: "MOTS-C",      blurb: "MOTS-C",            tint: "rgba(240,56,78,.4)" },
  { id: "MT-2", blurb: "MT-2",        tint: "rgba(150,150,160,.4)" }, 
  { id: "Tesamorelin",     blurb: "Tesamorelin",      tint: "rgba(216,20,44,.6)" },
  { id: "NAD+", blurb: "NAD+",      tint: "rgba(240,56,78,.5)" },
  { id: "WOLVERINE BLEND",   blurb: "WOLVERINE BLEND", tint: "rgba(216,20,44,.4)" },
];
