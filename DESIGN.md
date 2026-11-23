---
name: Nour Digital
description: A maquis service seen from above. Full-width colour bands, a real wooden lazy susan of real plates, and every road ends on WhatsApp.
colors:
  red-stage: "#C81E26"
  red-bright: "#D3212A"
  red-deep: "#B0171F"
  cobalt: "#1E3FAE"
  cobalt-ink: "#DCE4FF"
  marigold: "#F4B400"
  yolk: "#FFD23F"
  wa-green: "#0F7A42"
  wa-green-deep: "#0C6837"
  bubble: "#DCF8C6"
  ink: "#141414"
  steel: "#2B2E2D"
  muted: "#4A4F4C"
  ink-panel-text: "#C9CCC9"
  zinc-table: "#D9DEDA"
  enamel: "#F2F4F1"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Cabinet Grotesk, General Sans, system-ui, sans-serif"
    fontSize: "clamp(52px, 7.2vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Cabinet Grotesk, General Sans, system-ui, sans-serif"
    fontSize: "clamp(38px, 5.4vw, 72px)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  figure:
    fontFamily: "Cabinet Grotesk, General Sans, system-ui, sans-serif"
    fontSize: "clamp(56px, 7vw, 6rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.04em"
  amount:
    fontFamily: "Cabinet Grotesk, General Sans, system-ui, sans-serif"
    fontSize: "clamp(40px, 4vw, 56px)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Cabinet Grotesk, General Sans, system-ui, sans-serif"
    fontSize: "clamp(26px, 2.4vw, 34px)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.03em"
  dish-name:
    fontFamily: "Cabinet Grotesk, General Sans, system-ui, sans-serif"
    fontSize: "clamp(20px, 2vw, 26px)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  question:
    fontFamily: "Cabinet Grotesk, General Sans, system-ui, sans-serif"
    fontSize: "clamp(20px, 2vw, 24px)"
    fontWeight: 800
    lineHeight: 1.2
  price-tag:
    fontFamily: "Cabinet Grotesk, General Sans, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 800
    lineHeight: 1.1
  lede:
    fontFamily: "General Sans, system-ui, sans-serif"
    fontSize: "clamp(18px, 1.6vw, 21px)"
    fontWeight: 500
    lineHeight: 1.5
  body:
    fontFamily: "General Sans, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.55
    fontFeature: "\"tnum\" 1"
  label:
    fontFamily: "General Sans, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.2
  caption:
    fontFamily: "General Sans, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.45
rounded:
  badge: "6px"
  tile: "12px"
  bubble: "22px 22px 22px 6px"
  frame: "28px"
  pill: "999px"
  circle: "50%"
spacing:
  module: "10px"
  gap: "20px"
  gutter-phone: "16px"
  band-pad: "clamp(28px, 5vw, 72px)"
  band-pad-phone: "26px 20px"
  band-tall: "clamp(56px, 7vw, 110px)"
  stack-lg: "clamp(36px, 4vw, 56px)"
components:
  button-whatsapp:
    backgroundColor: "{colors.wa-green}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
    height: "56px"
  button-whatsapp-hover:
    backgroundColor: "{colors.wa-green-deep}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "10px 22px"
    height: "48px"
  button-white:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "8px 20px"
    height: "48px"
  button-add:
    backgroundColor: "{colors.wa-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "8px 20px"
    height: "48px"
  pick-arrow:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "48px"
  whatsapp-bubble:
    backgroundColor: "{colors.bubble}"
    textColor: "#111B21"
    rounded: "{rounded.bubble}"
    padding: "16px 18px 12px"
  station-tag:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  plan-flag:
    backgroundColor: "{colors.red-bright}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 10px"
    height: "26px"
  price-panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    padding: "clamp(28px, 4vw, 56px)"
  seat:
    backgroundColor: "{colors.marigold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    height: "46px"
  wa-float:
    backgroundColor: "{colors.wa-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.circle}"
    size: "64px"
---

# Design System: Nour Digital

## Overview

**Creative North Star: "The Maquis From Above"**

The page is a maquis service seen from overhead. The story is carried by edge-to-edge colour bands laid one after another like tablecloths down a long table: a red stage opens and closes the page, enamel white and zinc bands carry the reading, a cobalt band holds the working demos, a marigold band holds the offer. Nothing sits in a box. Structure comes from thick black ink lines drawn across the full measure, the way a painted rim edges enamel crockery.

Real material is the second voice. The hero is a real walnut-dark wooden lazy susan in 3D perspective carrying real photographed plates; turning it brings a plate to the front, and adding it composes the WhatsApp order in front of the visitor. Photographs stay photographs: soft natural shadows, no outlines, no flat cartoon fills. Everything drawn in code (buttons, markers, frames, dividers) speaks in the ink-and-enamel language; everything photographed speaks in its own light.

The page is dense in conviction, not in ornament: large heavy display type, short French sentences, one action everywhere (write "DÉMO" on WhatsApp). It is built for a mid-range Android phone in bright outdoor light on 3G first, and the craft itself is the portfolio for premium prospects. It rejects the cream-plus-serif restaurant landing, the card-grid SaaS page and flat cartoon illustration.

**Key Characteristics:**
- Full-width colour bands; no boxed sections, no cards with shadows.
- Thick ink lines (3 px rows, 4 to 5 px controls, 10 px section rules) as the only dividers.
- Cabinet Grotesk 900 display at very tight leading against General Sans 500 text.
- Real photographs only, cut on their own rim, lit with soft shadows.
- Green appears only where a tap leads to, or builds, a WhatsApp message.
- One easing curve for everything; motion stops the moment the visitor touches, and disappears under reduced motion.

## Colors

A saturated maquis palette (tomato red, cobalt, marigold) set on enamel and zinc neutrals, drawn with near-black ink, with one functional WhatsApp green held in reserve.

### Primary
- **Maquis Tomato Red** (red-stage): the stage. Hero and final bands, as a soft radial glaze from top-left running from red-bright through red-stage into red-deep. White text on it; yolk for the emphasised line.
- **Bright Tomato** (red-bright): the lit corner of the red glaze, the browser theme colour, the "Recommandée" plan flag, the loss figures and the red half of headlines on white bands, the cross marks in the versus table, the delay line under plan prices, and the rail fill.
- **Deep Tomato** (red-deep): the shadowed end of the red glaze and the small "demo menu" footer strip under the WhatsApp bubble.

### Secondary
- **Enamel Cobalt** (cobalt): the demos band, glazed from #2B4FC4 at top-left to #17318A. Text on it is white; supporting copy uses **Cobalt Mist** (cobalt-ink) so paragraphs sit one step back from headings.

### Tertiary
- **Marigold** (marigold): the offer band (Pack Partenaire, glazed #FFC72C to #E0A400), the price figure on the black panel, the seat tiles, the "on" state of rail stations, the open FAQ plus, the focus ring, text selection, and the bonus badge text on ink.
- **Yolk** (yolk): emphasis on dark and red grounds only: the second line of the hero headline, dish prices in the pick row, demo kind lines on cobalt, the front-plate halo, pay line on the price panel. Never used on white or zinc.

### Functional
- **WhatsApp Action Green** (wa-green): the WhatsApp/DÉMO buttons, the lazy susan "Ajouter" button that builds the WhatsApp order, and the floating WhatsApp button. Hover deepens to wa-green-deep.
- **WhatsApp Bubble** (bubble): the received-message bubble, with WhatsApp's own text (#111B21), sender name (#075E54) and meta (#4F6B5E) colours, so the order reads as the real thing.

### Neutral
- **Ink** (ink): all lines, button borders, the price panel, the promo strip, the footer, the nav DÉMO button, body text on light bands.
- **Steel** (steel): secondary paragraph text on zinc (rail station copy).
- **Muted Slate** (muted): the "bad" column of the versus table and footnotes on white.
- **Panel Grey** (ink-panel-text): quiet text on ink (struck-through values, ROI example, footer).
- **Zinc Table** (zinc-table): page background, nav, the path band and the founder band.
- **Enamel White** (enamel): the reading bands (problem, formulas, FAQ), glazed from #FFFFFF to #E6E9E5.

### Named Rules
**The WhatsApp Green Rule.** wa-green appears only on controls that open WhatsApp or build the WhatsApp order (DÉMO buttons, Ajouter, the floating button). Secondary WhatsApp links may be ink buttons or plain links, but no other control, badge, tick or highlight is ever green.

**The Yolk On Dark Rule.** Yolk is emphasis for red, cobalt and ink grounds. On enamel or zinc, emphasis is red-bright or weight, never yolk.

**The Band Order Rule.** Red opens and closes the page. Two neighbouring bands never share a colour, and every reading-heavy section sits on a light band (enamel or zinc); cobalt and marigold are kept for proof and offer.

## Typography

**Display Font:** Cabinet Grotesk 800/900 (self-hosted, with General Sans, system-ui fallback)
**Body Font:** General Sans 400/500/600 (self-hosted, with system-ui fallback)

**Character:** A heavy, slightly condensed grotesk shouting like a painted maquis sign, over a calm geometric sans that reads cleanly on a cheap screen in sunlight. Numbers are tabular everywhere so prices line up.

### Hierarchy
- **Display** (900, clamp(52px, 7.2vw, 6rem), 0.9): the hero headline only, three short lines on phone (clamp(40px, 11.5vw, 56px)), second line in yolk. Drops word by word once on load.
- **Headline** (900, clamp(38px, 5.4vw, 72px), 0.95): one per band, balanced wrap, often a full sentence with a full stop.
- **Figure** (900, clamp(56px, 7vw, 6rem), 1, -0.04em): the loss total and the Pack price; the number is the hero of its band. Units drop to 0.4em.
- **Amount** (900, clamp(40px, 4vw, 56px)): plan prices, with "FCFA" at 0.38em.
- **Title** (900, clamp(26px, 2.4vw, 34px), 1): demo names, plan names; rail stations run slightly smaller (clamp(24px, 2.3vw, 32px)).
- **Dish name** (900, clamp(20px, 2vw, 26px), 1.1): the front plate's name in the pick row, always one line (19px on phone).
- **Question / price tag** (800, 20 to 24px / 18px): FAQ summaries, promise titles, prices in yolk.
- **Lede** (500, clamp(18px, 1.6vw, 21px), 1.5, max 60ch): the paragraph under each headline.
- **Body** (500, 17px, 1.55; 16px on phone): running text, max about 68ch in the FAQ.
- **Label** (600, 18px, 1.2; 16px on compact buttons): buttons and inline links. Sentence case, no tracking, no uppercase.
- **Caption** (500 or 600, 13 to 15px): notes, terms, bubble meta, the toast.

### Named Rules
**The Heavy Sign Rule.** Headings are always Cabinet Grotesk 900 at line-height 0.9 to 1 with -0.03em tracking; never lighter, never looser. Weight 800 is reserved for prices, questions and badges.

**The No Eyebrow Rule.** A band opens on its headline. No small label, kicker or category line sits above a heading.

## Layout

Edge-to-edge bands stacked vertically, each with its own colour and generous vertical padding (band-pad, or band-tall for the path and FAQ bands). Content sits in a centred measure of 1320px (1400px for the hero grid). The spacing module is the 10px rim: section rules, rail thickness, station dot borders and the demo screenshot frame are all one module; the base gap is two modules (20px, one module on phone).

**Desktop hero:** copy left (headline, lede, DÉMO button, free-test line), the lazy susan right and bleeding off the right edge, the WhatsApp bubble overlapping its top-left, the pick row under the plate.

**Phone hero (inside 844px):** headline, hint, the lazy susan (wider than the viewport, cropped by the band), the fixed-height pick row, then the full-width green DÉMO button; the lede and the order bubble follow below. Phone gutter is 16px in the hero, 20px elsewhere.

Breakpoints: 1080px (grids collapse to one column, nav links hide), 760px (phone composition, rail turns vertical, plan columns stack), 380px (nav button compacts). Grids are always `minmax(0, 1fr)` columns: two columns for problem and founder, three for demos and plans, four for the rail and terms.

### Named Rules
**The Full Band Rule.** A section is a colour band from edge to edge. It never gets margins, a border, a radius or a drop shadow to become a card.

**The No Shift Rule.** Anything that changes while the visitor watches (the dish name, price, bubble lines) lives in a box of fixed height, so rotation and ordering never move the layout.

## Elevation & Depth

Flat bands, real depth only on objects. Bands carry a faint radial glaze from top-left (a lighter corner of the same hue) but no shadow. Depth belongs to things that would cast it on a real table: the lazy susan (3 plates, 3D perspective at rotateX 46deg, a dark wooden edge 22px below its top, a soft dark red shadow ellipse on the band), the plates (soft brown shadow, lifted further when in front), the WhatsApp bubble, and buttons (a short soft drop shadow).

### Shadow Vocabulary
- **Button rest** (`box-shadow: 0 8px 16px -10px rgba(20,20,20,.6)`): every pill button.
- **Floating button** (`box-shadow: 0 12px 20px -10px rgba(0,0,0,.6)`): the fixed WhatsApp button.
- **Message lift** (`box-shadow: 0 24px 40px -18px rgba(0,0,0,.55)`): the WhatsApp bubble over the hero.
- **Plate on wood** (`box-shadow: 0 16px 16px -6px rgba(10,3,0,.55)`): plates at rest on the lazy susan.
- **Plate served** (`box-shadow: 0 34px 26px -10px rgba(10,3,0,.6)`): the front plate, raised 30px.
- **Founder plate** (`box-shadow: inset 0 0 0 6px #fff, 0 26px 30px -20px rgba(0,0,0,.5)`): the drawn enamel plate holding the founder photo.

### Named Rules
**The Real Shadow Rule.** Shadows are soft, warm-dark and offset downward only, as cast by a midday sun. No hard offset shadows, no coloured glows.

## Shapes

Two families. Drawn controls are pills and circles with thick ink borders (pill buttons with 4 to 5px ink, circular arrows with 4px ink, the FAQ plus in a 40px circle with 4px ink, rail stations as 48px enamel discs with a 10px ink rim, the floating button with 5px ink). Framed content uses a soft rectangle (the demo screenshots in a 28px-radius frame with a 10px ink rim). Small tags are pills with 3px ink; seat tiles are 46px-high rectangles with 12px corners; the bonus badge has 6px corners.

Photographed objects keep their own silhouette: each plate is cut on its real rim with transparent corners, the lazy susan is a disc of wood with no outline. Lines between rows are straight 3px ink; section rules are 10px ink across the full measure.

## Components

### Buttons
Tactile, loud and round: a pill you could press with a thumb in the sun.
- **Shape:** full pill (999px) with a 5px ink border (4px on compact nav, demo and plan buttons); min height 56px (48 to 50px compact, 44px nav on phone).
- **WhatsApp:** wa-green, white label, WhatsApp glyph drawn as inline SVG at 24px, label "Écrire « DÉMO » sur WhatsApp". Full width on phone.
- **Ink:** ink fill, white label: the nav DÉMO button and the plan buttons.
- **White:** white fill, ink label: "Voir le site" on cobalt.
- **Hover / Focus / Active:** lift by 2px (WhatsApp also deepens to wa-green-deep), .18s on the house ease; press scales to .97. Focus is a 4px marigold outline at 3px offset wrapped in a 7px ink halo.

### Lazy Susan (signature)
A real walnut-darkened wooden turntable seen at a steep angle, carrying five real plates spaced evenly around it.
- **Wood:** the photographed grain under a 42% dark brown wash, a warm highlight at top-left and a darker vignette at the rim; the edge uses the same grain at 72% dark.
- **Plates:** photographs cut on their own rim, no border, no fill; resting plates sit 10px above the wood, the front plate rises to 30px with a deeper shadow; adding a plate pops it to 60px for .55s.
- **Behaviour:** drag, arrows or tapping a plate rotate it; it glides to the nearest plate in .9s on the house ease. Untouched and in view, it advances one plate every 3.2s; the first touch stops this for good and fades the hint.
- **Ajouter:** the plate image flies to the bubble (650ms arc), typing dots show for 500ms, the line appears highlighted, a black "Nouvelle commande reçue" toast rises and the bubble buzzes.

### Pick Row
Arrows, label and Ajouter on one line under the turntable.
- **Arrows:** 48px white circles (44px on phone), 4px ink border, drawn chevrons at 3px stroke.
- **Label:** fixed height (52px, 48px on phone), dish name on one line with ellipsis, price in yolk below.
- **Ajouter:** green pill, 48px high, 4px ink border.

### WhatsApp Bubble
The order as the owner receives it: WhatsApp's bubble green, asymmetric corners (22px with a 6px bottom-left) and a drawn tail, a sender line, item lines with tabular prices, a dashed total rule, "12:30 · lu" meta. A deep-red strip beneath labels it as a demo menu, with a "Vider" link.

### Versus Table
Two columns under a 10px ink rule, rows split by 3px ink, a 3px ink line between columns. Left cells in muted slate with a drawn red cross; right cells in 600 weight with a drawn ink tick. On phone the columns stack and the header row hides.

### Rail
The four-step path as one 10px ink line; stations are 48px enamel discs with a 10px ink rim that turn marigold as the visitor scrolls past, a red fill grows along the line and a red marker disc with a 6px ink rim travels on it (desktop). On phone the rail is vertical on the left and the marker hides. Each station ends on a white pill tag with a 3px ink border.

### Plan Columns
Three columns under a 10px ink rule, divided by 3px ink lines, no boxes: name (title), amount, delay in red, ticked feature list on 1px faint rules, a "Tout ce qui est inclus" disclosure, and an ink button pinned to the bottom. The recommended plan carries a red pill flag.

### Price Panel
The black side of the Pack band: struck-through values in panel grey, the price as a marigold figure, five marigold seat tiles, the pay line in yolk, a full-width WhatsApp button. Sticky on desktop.

### FAQ Accordion
Rows split by 3px ink under a 10px rule; questions in Cabinet Grotesk 800; the marker is a 40px ink-ringed circle with a plus drawn from two 3px bars, which rotates 45deg into a cross and fills marigold when open.

### Floating WhatsApp Button
A 64px green circle (58px on phone) with a 5px ink rim and the WhatsApp glyph, fixed 18px from the bottom-right corner; lifts 3px on hover.

### Navigation
A black promo strip on top (marigold "Pack Partenaire", short version on phone), then the zinc nav: logo, five plain links in 600 weight (hidden under 1080px), and the ink DÉMO pill.

## Do's and Don'ts

### Do:
- **Do** build every section as a full-width colour band, and separate content inside it with ink lines: 10px under a section's first rule, 3px between rows.
- **Do** use real photographs only, each with its source and licence recorded in ASSETS-SOURCES.md; cut plates on their own rim with transparent corners and darken wood toward walnut.
- **Do** give photographed objects soft downward shadows (see Elevation) and leave their edges alone.
- **Do** keep every changing label on one line in a fixed-height box so nothing moves when the lazy susan turns.
- **Do** use the single ease cubic-bezier(.16, 1, .3, 1) for transitions, .9s for the turntable glide, and stop idle motion on first touch, off screen and in hidden tabs.
- **Do** turn everything off under prefers-reduced-motion: no transitions, no animations, no idle rotation, no flying plate, no typing dots, no toast, no title drop, no smooth scroll.
- **Do** draw icons as inline SVG (chevrons, ticks, crosses, bell, WhatsApp mark) and markers in CSS (the FAQ plus, rail discs).
- **Do** keep touch targets at 44px or more and text at 16px or more on phone.

### Don't:
- **Don't** box sections: no margins, borders, radii or drop shadows that turn a band into a card.
- **Don't** put thick outlines or flat cartoon fills on photographic objects (plates, wood); ink rims belong to drawn things only.
- **Don't** use green for anything that is not a WhatsApp action or the Ajouter button.
- **Don't** put a kicker, eyebrow or small category label above a headline.
- **Don't** use emoji, Unicode symbols or icon fonts as icons.
- **Don't** let a dish name wrap to two lines or change the height of the pick row.
- **Don't** use AI-generated images anywhere, or illustrations standing in for food, wood or people.
- **Don't** use hard offset shadows, coloured glows or glassmorphism.
- **Don't** use yolk on enamel or zinc.
