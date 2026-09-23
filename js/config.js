/* =========================================================
   SITE CONFIG — the only file you should need to edit to
   rebrand, change shipping rules or wire up payments.
   Anything in [SQUARE BRACKETS] is a placeholder.
   ========================================================= */
window.SITE = {
  name: "North Shore",                             // check Companies House, trade marks and domain before launch
  tagline: "Research",
  legalName: "[COMPANY LEGAL NAME LTD]",
  companyNumber: "[COMPANY NUMBER]",
  vatNumber: "[VAT NUMBER]",
  address: "[REGISTERED ADDRESS]",
  email: "[hello@yourdomain.co.uk]",
  phone: "[+44 (0)000 000 0000]",
  gymName: "[PARTNER GYM NAME]",                   // shown on the "collect in gym" section and delivery option
  currency: "GBP",
  locale: "en-GB",
  announce: "Free UK delivery on orders over £50",

  /* Service promises shown on the site. Only state what is true for
     your business — these appear as facts to customers. */
  promises: {
    dispatch: "Orders before 2pm dispatched same working day",
    returns: "30-day returns on unopened items",
    returnsDays: 30,
    testing: "Batch certificates published for tested products"
  },

  // Shipping — edit freely. Prices in GBP.
  shipping: {
    freeThreshold: 50,
    options: [
      { id: "standard", label: "Standard tracked", eta: "2–3 working days", price: 3.95 },
      { id: "express",  label: "Express tracked",  eta: "Next working day",  price: 6.95 },
      { id: "collect",  label: "Collect in gym",   eta: "Ready next working day", price: 0, note: "Collect from the front desk", collect: true }
    ]
  },

  /* Age verification (see js/age-gate.js). Not a legal requirement for
     ordinary food supplements; useful if you stock high-caffeine
     products that are labelled as not recommended for under-18s. */
  ageGate: {
    enabled: true,
    minAge: 18,
    rememberDays: 30,
    exitUrl: "https://www.google.co.uk/"
  },

  /* First-order offer pop-up (like the reference site's "15% off your
     first order"). endpoint: where sign-ups are POSTed as JSON — e.g. a
     Klaviyo/Mailchimp/Formspree form endpoint. Leave "" to test locally:
     the code is revealed but the email isn't sent anywhere. */
  welcomeOffer: {
    enabled: true,
    code: "WELCOME10",
    headline: "10% off your first order",
    delaySeconds: 8,
    endpoint: ""
  },

  // Floating WhatsApp button (both reference sites have one). International format, digits only. "" hides it.
  whatsapp: "447000000000",

  // Payment handoff. The static site never handles card details.
  // mode: "demo"    → shows the confirmation page locally (for testing the design)
  //       "shopify" → sends the basket, code and address to Shopify's hosted checkout (recommended)
  //       "stripe"  → POSTs the order to `endpoint` (a serverless function you host)
  //                    which creates a Stripe Checkout Session and returns { url }
  payment: {
    mode: "demo",
    shopifyDomain: "your-store.myshopify.com",
    endpoint: "https://YOUR-FUNCTION-URL/create-checkout-session"
  },

  // Analytics IDs are only loaded after cookie consent (see cookies.js)
  analytics: { ga4: "" }
};
