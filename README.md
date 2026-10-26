# Usurper theme

Shopify storefront for [usurperclothing.com](https://usurperclothing.com). Built on Dawn 16.0.0 with the Usurper brand layer added as separate files, so Dawn can be upgraded without merge pain.

## Store

- Store: `scxhw0-zk.myshopify.com`
- Working theme: **Usurper - Dawn build** (ID `171775066389`, unpublished)
- Live theme: **Usurper - Coming Soon** (do not push to this)

## Brand layer (everything that is not stock Dawn)

| Path | Purpose |
|---|---|
| `assets/usurper.css` | Brand stylesheet: tokens, type, header, buttons, cards, product, collection, cart, pages, footer |
| `assets/usurper.js` | Scroll-reveal for `.u-rev` |
| `assets/usurper-crown.webp` | Crown mark (header, wordmark fallback) |
| `assets/usurper-combo.webp` | Crown + wordmark (hero, footer) |
| `assets/usurper-favicon.png` | Favicon fallback |
| `sections/usurper-head.liquid` | Loads the CSS/JS + IBM Plex Mono. First section in the header group |
| `sections/usurper-hero.liquid` | Hero: logo, two-slab headline, fracture line, CTAs, 2 campaign shots |
| `sections/usurper-marquee.liquid` | Looping brand lines |
| `sections/usurper-fit.liquid` | Fit standard: size chips, copy, image |
| `sections/usurper-values.liquid` | Six numbered values |
| `sections/usurper-footer.liquid` | Footer: brand, menus, policies, payment icons |
| `config/settings_data.json` | Colour schemes, fonts, zero radius, cart drawer |
| `sections/header-group.json`, `sections/footer-group.json` | Group wiring |
| `templates/index.json`, `product.json`, `collection.json` | Page compositions |

Brand tokens live at the top of `usurper.css`: abyss `#050505`, charcoal `#151515`, steel `#2A2A2A`, gold `#F2B100`, gilt `#C7952E`, bone `#F2EFE7`.

## Local workflow

Requires Node 18+ and [Shopify CLI](https://shopify.dev/docs/themes/tools/cli) (`npm i -g @shopify/cli`).

```bash
# first time: authenticate against the store
shopify theme list --store scxhw0-zk

# live local preview with hot reload
shopify theme dev --store scxhw0-zk --theme 171775066389

# push changes to the unpublished theme
shopify theme push --store scxhw0-zk --theme 171775066389

# pull editor changes (image uploads, copy tweaks made in Shopify admin) back into git
shopify theme pull --store scxhw0-zk --theme 171775066389
```

Rules:

1. Never `theme push` to the live theme. Publish from the Shopify admin once reviewed.
2. Run `theme pull` before editing if anything was changed in the theme editor, then commit.
3. Keep brand work in `usurper*` files and the JSON templates. Avoid editing stock Dawn files so `git diff v16.0.0` stays readable and Dawn upgrades stay cheap.

## Content that lives in Shopify, not here

Menus (`main-menu`, `house-rules`), pages (`fit-size-guides`, `shipping-returns`, `made-to-order-faq`, `contact`), products and collections. These are store data, not theme files.

## Still to do

- Upload photography into the hero (shots 01, 02) and fit section (shot 03) via the theme editor
- Set the combo logo on the hero + footer sections, the crown as the theme logo
- Fill the size-guide measurements once samples are measured (currently TBC)
- Mobile pass, checkout test, then publish
