# North Shore — Performance Nutrition (static storefront)

A premium, mobile-first supplement store built as plain HTML/CSS/JS for GitHub Pages, with a working basket, discount codes, an 18+ age gate, a batch-certificate library and a one-page checkout that hands off to Shopify (or Stripe) for payment.

```
/
├── index.html            Home: hero, trust bar, categories, best sellers, quality, reviews, FAQ, newsletter
├── shop.html             All products: search, category/price/stock/tag filters, sort, filter chips
├── product.html          Product template (reads ?id= from js/products.js): variants, qty, add/buy now, tabs, related
├── cart.html             Basket: free-delivery bar, pill quantity steppers, "goes well with", discount code
├── checkout.html         One page: Contact → Delivery method → Address → Payment (payment handled off-site)
├── quality.html          Quality & testing standards
├── coa.html              Batch certificate library: search → product → batch → certificate viewer
├── disclaimer.html       Supplement, product-information and regulatory disclaimer
├── confirmation.html     Order confirmation (also the Stripe success_url)
├── about / faq / contact / shipping / returns / terms / privacy / cookies / account / 404
├── css/style.css         Design system + all page styles
├── js/config.js          ← brand, shipping rules, payment mode. Edit this first.
├── js/products.js        ← product catalogue. Edit this second.
├── js/discounts.js       ← discount codes.
├── js/cart.js            Basket (localStorage), totals, rendering
├── js/checkout.js        Checkout steps, validation, payment handoff
├── js/cookies.js         UK GDPR/PECR consent banner + preferences
├── js/age-gate.js        18+ entry gate (on/off in config.js)
├── js/offer.js           First-order code pop-up + floating WhatsApp button
├── js/coa.js             ← batch certificates. Replace the samples with real ones.
├── js/main.js            Header/footer, drawers, toasts, product cards
├── assets/favicon.png    favicon + apple-touch-icon · robots.txt · sitemap.xml · .nojekyll
├── images/               logo-mark.png, logo-wordmark.png (cut from your logo), hero and social images
```

## 1. Run it locally

Any static server works. From the folder:

```
python3 -m http.server 8080
```

then open http://localhost:8080. Payment is in **demo mode** by default, so you can test the whole flow — basket, codes, checkout, confirmation — without any accounts.

## 2. Make it yours

| What | Where |
|---|---|
| Brand name, tagline, company details, announcement bar | `js/config.js` → `SITE` |
| Delivery options, prices, free-delivery threshold | `js/config.js` → `SITE.shipping` |
| Products, variants, prices, stock, nutrition | `js/products.js` |
| Discount codes | `js/discounts.js` |
| Colours, fonts, spacing | `css/style.css` → `:root` (brand red `--blue-500`, black `--navy-900`) and the "NORTH SHORE BRAND" block at the end |
| Logo | `images/logo-mark.png`, `images/logo-wordmark.png`, `assets/favicon.png` (swap for vector/transparent files from your designer when you have them) |
| Domain in canonical/OG tags, sitemap, robots | search-and-replace `YOUR-DOMAIN.co.uk` |
| Legal placeholders | anything in `[SQUARE BRACKETS]` on terms/privacy/returns/contact/about |

Product images: the design ships with generated "tile" artwork so it looks finished with no photos. To use real photos, add them to `/images/` and replace `Cart.tile(p)` calls with `<img src="images/${p.id}.jpg" alt="${p.name}">` in `js/main.js` (`productCard`), `js/cart.js` (`lineHTML`) and `product.html`.

## 2a. What's modelled on the reference sites

| Reference | Feature | Where |
|---|---|---|
| BioLab basket | Blue free-delivery banner with progress pill and "Continue shopping" | `Cart.progressHTML` in `js/cart.js` |
| BioLab basket | Pill quantity stepper, bin icon, promo-code pill with attached button | `js/cart.js`, `css/style.css` |
| BioLab basket | "Goes well with" add-ons, spend-more nudge | `Cart.upsellHTML`, `Cart.nudgeHTML`; set `nudge: true` on a code |
| Rebirth | "Get X% off your first order" pop-up | `js/offer.js`, `SITE.welcomeOffer` |
| Rebirth checkout | Single page, "Show order summary" bar on mobile, "+ Add address line 2", secure-payment note, T&Cs tick box | `js/checkout.js` |
| Both | Floating chat button | `SITE.whatsapp` |

Deliberate differences: marketing opt-ins are **unticked** by default (Rebirth pre-ticks theirs, which isn't valid consent under UK GDPR/PECR); there's no "shipping protection" add-on; there are no star ratings or reviews until you have genuine ones.

## 2b. Age gate, offer pop-up, WhatsApp

All in `js/config.js`:

- `ageGate.enabled` — shows an 18+ self-declaration on first visit, remembered for `rememberDays`. It isn't identity verification. Ordinary food supplements don't legally need one; it's there because some products (high-caffeine pre-workouts) are labelled not for under-18s.
- `welcomeOffer` — the first-order code pop-up. Set `endpoint` to your email platform's form endpoint (Klaviyo, Mailchimp, Formspree…) so sign-ups are saved. Until then the code is shown but the email goes nowhere.
- `whatsapp` — your WhatsApp Business number in international format (`447…`). Set to `""` to hide the button.

## 2c. Batch certificates

`js/coa.js` holds one entry per tested batch; the certificates page and each product's "Batch certificates" tab read from it. Put the PDFs in `/coa/` and set `pdf: "coa/FILE.pdf"`. The shipped entries are labelled **Sample** on the site — delete them. Only publish certificates the laboratory actually issued, and only give a product the "Batch tested" badge when it has one.

## 3. Discount codes

Defined in `js/discounts.js`. Types:

- `percent` — e.g. `WELCOME10` = 10% off eligible items
- `fixed` — e.g. `PROTEIN5` = £5 off, optionally restricted to `categories` or `products` and a `minSpend`
- `shipping` — free standard delivery

Ships with: `WELCOME10`, `GYM15`, `PROTEIN5`, `FREESHIP`, `BUNDLE20`.

The site validates codes client-side so the customer sees the right total. **Your payment backend must validate them again** before charging — the Stripe function below does this by looking up the same code as a Stripe Coupon/Promotion Code, and Shopify applies its own discount rules.

On pricing: a `wasPrice` on a variant shows a struck-through price. Under the Digital Markets, Competition and Consumers Act 2024 a "was" price must be a price the product was genuinely sold at for a reasonable period beforehand — the CMA can fine for misleading reference prices without going to court. Use it for real reductions; use discount codes for intro offers and member pricing off an honest list price.

## 4. Payments

The static site never touches card numbers. `js/config.js` → `SITE.payment.mode`:

### `"shopify"` (recommended)

Create the products in Shopify with the same variants, copy each variant's numeric ID into `shopifyVariantId` on the matching variant in `products.js`, create the same discount codes under **Discounts**, and set `shopifyDomain` and `mode: "shopify"`. "Complete order" builds a cart permalink (`/cart/VARIANT:QTY,…?discount=CODE`) that opens Shopify's hosted checkout with the basket, code, email and address filled in. Shopify then handles payment, billing address, confirmation emails, orders, refunds, stock and customer accounts. If a product is missing its variant ID the button shows an error rather than sending a broken basket.

You need a Shopify plan that allows checkout (Basic or above; check whether Starter is enough when you sign up). Cart permalinks and their pre-fill parameters — REQUIRES CURRENT SHOPIFY CONFIRMATION: place a real test order before launch.

### `"stripe"` (alternative)

You need one tiny serverless function (Cloudflare Workers, Vercel, Netlify Functions — all have free tiers). The site POSTs the order to it; it creates a Stripe Checkout Session and returns the URL.

`api/create-checkout-session.js` (Vercel/Netlify style, Node):

```js
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // secret lives here, never in the repo
const PRICES = { "WPI-1-VAN": 2999, "WPI-1-CHO": 2999, /* …sku: pence… */ };
const SHIPPING = { standard: 395, express: 695, collect: 0 };

export default async function handler(req, res) {
  const { items, coupon, shipping, customer } = req.body;
  const line_items = items.map(i => ({
    price_data: { currency: "gbp", unit_amount: PRICES[i.sku], product_data: { name: `${i.name} — ${Object.values(i.options).join(" / ")}` } },
    quantity: i.qty
  }));
  const subtotal = items.reduce((s, i) => s + PRICES[i.sku] * i.qty, 0);
  const shipCost = shipping === "standard" && subtotal >= 5000 ? 0 : SHIPPING[shipping];
  const promo = coupon ? await stripe.promotionCodes.list({ code: coupon, active: true, limit: 1 }) : null;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items,
    customer_email: customer.email,
    shipping_options: [{ shipping_rate_data: { type: "fixed_amount", display_name: shipping, fixed_amount: { amount: shipCost, currency: "gbp" } } }],
    discounts: promo && promo.data[0] ? [{ promotion_code: promo.data[0].id }] : [],
    success_url: "https://YOUR-DOMAIN.co.uk/confirmation.html?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "https://YOUR-DOMAIN.co.uk/checkout.html"
  });
  res.setHeader("Access-Control-Allow-Origin", "https://YOUR-DOMAIN.co.uk");
  res.json({ url: session.url });
}
```

Then: create matching Coupons + Promotion Codes in the Stripe dashboard (same codes as `discounts.js`), add a webhook for `checkout.session.completed` to send the confirmation email and record the order, and set `SITE.payment.endpoint` to the function URL.

**Never** put `STRIPE_SECRET_KEY` or webhook secrets in this repo. Only the publishable key (`pk_…`) is safe in front-end code, and this design doesn't even need that.

### `"demo"`

No backend. The Pay button writes the order to the browser and shows the confirmation page. For design review only.

## 5. Deploy to GitHub Pages

1. Create a repo (e.g. `northshore-site`), upload all files (keep `.nojekyll`).
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)` → Save.
3. Site is live at `https://USERNAME.github.io/northshore-site/` in a minute or two.
4. Custom domain: add a `CNAME` file containing `www.yourdomain.co.uk`, set a CNAME record at your registrar pointing `www` to `USERNAME.github.io`, then tick *Enforce HTTPS* in Pages settings once the certificate issues.
5. Updates: edit files → commit → push. Rollback: `git revert` the commit, or pick an earlier commit in the GitHub UI and restore.

## 6. Before launch

- Replace every `[PLACEHOLDER]` and `YOUR-DOMAIN.co.uk`
- Company registered, business bank account, product liability insurance
- Products: labels compliant with UK food supplement rules (Food Supplements Regulations 2003, allergen and NRV labelling); any health claims limited to authorised claims on the GB nutrition and health claims register; food business registration with your local authority
- Replace the sample products, nutrition, ingredients and allergens with the real label information
- Delete the sample certificates in `js/coa.js`; publish only real ones
- Check every promise in `SITE.promises` (dispatch time, returns) is true, and that the gym has agreed to front-desk collection
- Only add reviews once they're genuine and verified (the DMCC Act 2024 bans fake reviews)
- Wire the first-order pop-up to your email platform (`welcomeOffer.endpoint`) and set your WhatsApp number
- Payment provider approved and a real test order placed and refunded
- Confirmation email tested; contact form wired to a form service
- Terms, privacy, returns reviewed by a solicitor; ICO registration
- Analytics ID added to `config.js` only if you want analytics (loads only after consent)
- Lighthouse pass: this build scores well out of the box (no external images, one font request, ~50 KB CSS+JS)
