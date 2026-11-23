# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary:** owners and managers of restaurants, maquis, fast-foods and lounges in Ouagadougou (Burkina Faso). They browse on mid-range Android phones (Tecno, Samsung, iPhone for the upper end), often on 3G, mostly through links shared on WhatsApp, TikTok and Facebook. Busy, wary of agencies, used to Facebook pages; they decide by trust in one person and by seeing something that already works.
- **Secondary (confirmed 23/11/2026):** higher-ticket prospects for whom the site is the proof that Nour Digital builds premium websites (the 1 000 to 2 000 € tier), in any sector, locally or abroad.

## Product Purpose

Nour Digital is a one-person web studio run by Nour-Al-Dine (Aldine) OUEDRAOGO in Ouagadougou. It builds websites and digital menus that make restaurant customers order directly on WhatsApp. nour-digital.com is both the sales page (get the owner to write "DÉMO" on WhatsApp) and the showcase of what the studio can build. Success: a restaurant owner writes on WhatsApp; a premium prospect leaves convinced the studio can build an exceptional site.

## Positioning

- Orders arrive already written on the owner's WhatsApp: menu with photos and prices, order in one tap, no app, no commission.
- A local, single point of contact ("pas une agence, quelqu'un de Ouaga"), who answers on WhatsApp within 2 hours.
- Try before paying: a free test where the QR menu with WhatsApp ordering goes on the tables; the first 10 orders (or 3 weeks) are free, then a figures report; the menu stays with the restaurant whatever happens.

## Operating Context

- Everything happens on WhatsApp (+226 44 60 87 89). The primary action everywhere is a wa.me link with a pre-filled "DÉMO" message.
- Payment by Orange Money, Moov Money or cash.
- Restaurant owners edit their own menu prices and sold-out dishes in a Google Sheet; photos are sent on WhatsApp.
- Live demo sites hosted on pages.dev; restaurant menus served under nour-digital.com/<resto>.

## Capabilities and Constraints

- Offers (facts, keep exactly):
  - Free test « 10 commandes ou 3 semaines ».
  - **Pack Restaurant Partenaire: 90 000 F, 0 F up front, paid once the site is live and validated, 5 places** (5 remaining). Afterwards 125 000 F with 50 % up front. Contents: WhatsApp ordering site (valued 75 000 F) + 5 bonuses (Google Maps listing 25 000 F, 24/7 pre-orders 20 000 F, Google reviews kit 20 000 F, loyalty card 15 000 F, restaurant dashboard 15 000 F) + 3 months of follow-up (monthly report, up to 10 change requests). Total value 170 000 F.
  - Classic formulas: Page Express 75 000 F, Site Starter 150 000 F, Site Complet Pro 280 000 F (see Pricing component for details and delays).
- Delivery: 4 to 20 days depending on formula; process = WhatsApp discussion → agreement & content (50 % advance on classic formulas) → mockup validated (J+2 to J+4, redone free) → delivery and transfer of all access, the site belongs to the client.
- Must load fast on 3G and render perfectly on small Android screens.
- Stack: Astro 5 + Tailwind 4, deployed as a static site.

## Brand Commitments

- Keep the name "Nour Digital" and the logo (`public/img/logo-nour-digital.png`: brick speech-bubble mark + wordmark). Everything else in the visual world (colors, fonts, layout) is open for a new direction (decided 23/11/2026).
- Address the reader with "vous" on the site. French, plain words, no jargon.
- No AI-generated images anywhere: real photos (founder, restaurant dishes, screenshots of real demo sites) or hand-built design in code.
- Do not justify prices on the site (no "why this price" block).

## Evidence on Hand

- Founder photo: `public/img/founder.webp`.
- Three working demo sites (fictional restaurants, labeled as such): Sous les Palmiers (maquis, Page Express), Allô Miam (fast-food, Site Starter), Néré (lounge, Site Complet Pro). Screenshots in `public/img/site-*.webp`; live at *.pages.dev.
- Four real restaurant QR menus built in November 2026 under `public/<resto>/` (Faso Grillade, La Vieille Marmite, Nova Lounge, Café Village) and the demo menu Sous les Palmiers.
- **Absent, must not be fabricated:** client testimonials, Google reviews, client logos, order counts, revenue figures, awards. Example calculations must be labeled as examples.

## Product Principles

1. Show it working instead of claiming it: real demos, real menus, the WhatsApp order as it actually arrives.
2. One action: write on WhatsApp. Every section leads there.
3. Trust in one person: the founder's face and voice, local, reachable.
4. Fast and readable on a cheap phone on 3G before anything else.
5. The site itself is the portfolio: its craft is the proof for premium clients.

## Accessibility & Inclusion

Large readable text on small screens, strong contrast in bright outdoor light, touch targets ≥ 44 px, works with reduced motion.
