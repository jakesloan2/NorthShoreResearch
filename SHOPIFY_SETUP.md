# Keep GitHub Pages, use Shopify for commerce

You can keep this site on GitHub Pages as the public catalogue and use Shopify as the order, payment, customer-email and fulfilment system. Customers browse North Shore Research on the static site, then move to Shopify's hosted checkout. Do not collect card data or attempt to confirm orders solely in browser storage.

## Recommended first implementation: Shopify cart permalinks

1. Create the products and every size as a variant in Shopify. Enter verified product data and configure taxes, delivery, customer emails, returns and compliance controls there.
2. Add the Buy Button sales channel in Shopify and obtain each Shopify variant ID.
3. In `js/products.js`, add `shopifyVariantId` to each matching variant. The existing checkout code already reads this field.
4. In `js/config.js`, set `SITE.payment.mode` to `"shopify"` and replace `your-store.myshopify.com` with the real Shopify domain.
5. Keep the custom basket if desired. On “Complete order”, the site will build a Shopify cart URL containing the selected variant IDs and quantities; Shopify then handles checkout.
6. Test in Shopify's test mode before publishing. Verify price, stock, taxes, delivery, order confirmation, refund flow and every restriction imposed by Shopify and your payment provider.

## Important limitation

Cart permalinks work only after Shopify product/variant IDs are inserted. Until then, leave `payment.mode` as `"demo"`; the current code cannot take a real payment.

## Quantity-bundle discount

The static site displays a same-variant quantity offer: 3–9 units receive 30% off and 10 or more receive 40% off. Configure the same rule natively in Shopify before activating checkout (for example, through a Shopify-compatible quantity-breaks/automatic-discount solution that your payment setup permits). Front-end calculations are for display only and must never be relied on as the source of a real checkout discount.

## Bundle builder

`bundle.html` lets visitors select up to four catalogue items and add them to the static basket. It does not create a mixed-product discount, subscription, free product, recommendation or protocol. Any same-variant saving must be recreated and checked in Shopify before payment is enabled.

## When to move the whole site to Shopify

Move the front end to Shopify if you want its theme editor, native customer accounts, apps, inventory and content editing to manage the full site. Keep GitHub Pages if preserving this bespoke design and publishing workflow matters more: Shopify can still remain the commerce source of truth.
