# Usurper theme: working notes for Claude

Shopify theme for usurperclothing.com, Dawn 16.0.0 plus a brand layer. Read README.md for the file map and CLI commands.

## Hard rules
- Push only to the unpublished theme `171775066389` (env `dev` in shopify.theme.toml). Never push to or publish the live theme from here. Publishing happens in Shopify admin after review.
- Keep brand work in `usurper*` files, `config/settings_data.json` and the JSON templates. Do not edit stock Dawn liquid/css unless there is no other way, and say so in the commit message if you do.
- `shopify theme pull -e dev` before editing when anything may have changed in the theme editor (image uploads, copy tweaks). Commit the pull on its own first.
- Commit small, descriptive, one concern per commit.

## Brand
Tokens at the top of `assets/usurper.css`. Anton for display (uppercase, line-height .95), Montserrat body, IBM Plex Mono for eyebrows/labels/buttons. Zero border radius everywhere. Gold is an accent, not a fill: use it for one word in a heading, prices, hover states, the primary button.

Voice: short, declarative, no hype. "Buy less. Buy better." Never greenwash claims. Never use AI concept imagery as product photography.

## Checks before pushing
- `shopify theme check` passes (or only pre-existing Dawn warnings)
- JSON templates parse; settings respect schema limits (logo_width min 50, richtext fields must be wrapped in `<p>`, newsletter allows one `paragraph` block)
- Homepage renders at 375px and 1280px without horizontal scroll
