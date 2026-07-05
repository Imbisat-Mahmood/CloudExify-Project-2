# Kadet — Premium Streetwear (E-Commerce Product Page)

**Name:** Imbisaat Mahmood
**Registration Number:** FA23-BCS-017
**CloudExify Intern ID:** CX-INT-2026-GEN-0453
**Drop Concept:** Streetwear Capsule — "Kadet," an original boys' streetwear brand built for this project

## Mandatory Drop Mechanics Implemented
- ✅ Countdown timer — live countdown to drop date (`2026-07-15T18:00:00`), updates every second, handles reaching zero (`🔥 DROP LIVE NOW!`), interval cleared cleanly
- ✅ Live stock indicator — per-product stock shown, decreases on add-to-cart
- ✅ Persistent cart — survives page refresh via `localStorage` (`kadet_cart`)
- ✅ Search + filter — search bar, category filter, and price range filter all work together on the same product set, plus sort (bonus)

## Bonus Challenges Completed
- ✅ Sort dropdown (price low-high, high-low, rating high-low)
- ✅ Toast notification on "Added to cart" (and wishlist actions)
- ✅ Wishlist (heart icon), separate from cart, with its own modal
- ✅ Discount code input — try `KADET10`, `KADET20`, `STREET15`, `DROP25`, or `WELCOME10`
- ✅ Dark/light mode toggle, persisted via `localStorage` and synced across tabs
- ✅ Cross-tab sync for cart, wishlist, and theme via the `storage` event

## Extra Features Beyond the Brief
- Auto-sliding hero banner carousel (4 slides, pause-on-hover, manual controls + dot indicators)
- Dynamic size chart modal, tailored per category (Tops / Sets / Bottoms each have their own size guide with age, chest, waist, height, inseam data)
- Quantity stepper inside the product modal with live stock availability feedback

## Products
30 products across 3 categories:
- **Signature Tops** — 10 products (graphic tees, casual shirts, polos)
- **Matching Sets** — 9 products (co-ord sets)
- **Essential Bottoms** — 11 products (cargos, jeans, chinos, joggers, shorts)

## Tech Stack
HTML5, CSS3, Vanilla JavaScript, Bootstrap 5 (via CDN), Font Awesome 6, Google Fonts (Inter, Poppins) — no build step.

## Structure
```
CloudExify-Project-2/
├── index.html
├── css/style.css
├── js/data.js
├── js/script.js
├── assets/
└── README.md
```

**Live Vercel Link:** https://cloud-exify-project-2.vercel.app/

## Status
- [x] Deploy to Vercel
- [x] Take 2 screenshots (desktop + mobile)
- [x] Double-check stock values persist correctly across a page refresh