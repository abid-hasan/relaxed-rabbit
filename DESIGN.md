---
name: Relaxed Rabbit
description: A sunlit meadow and organic serif identity for an independent software studio.
colors:
  cream: "#f4eedc"
  ink: "#1c3825"
  moss: "#526645"
  sage: "#c2d09c"
  sun: "#edd47c"
  line: "#879478"
typography:
  display:
    fontFamily: '"Fraunces Variable", Georgia, serif'
    fontSize: "10.4vw"
    fontWeight: 900
    lineHeight: 0.96
    letterSpacing: "-0.035em"
    fontVariation: '"opsz" 144, "SOFT" 100, "WONK" 1'
  statement:
    fontFamily: '"Fraunces Variable", Georgia, serif'
    fontSize: "clamp(72px, 9.3vw, 150px)"
    fontWeight: 750
    lineHeight: 1.04
    letterSpacing: "-0.035em"
    fontVariation: '"opsz" 144, "SOFT" 100, "WONK" 1'
  headline:
    fontFamily: '"Fraunces Variable", Georgia, serif'
    fontSize: "clamp(50px, 5.2vw, 88px)"
    fontWeight: 750
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  body:
    fontFamily: '"Linden Hill", Georgia, serif'
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.45
  principle:
    fontFamily: '"Fraunces Variable", Georgia, serif'
    fontSize: "clamp(25px, 3vw, 48px)"
    lineHeight: 1.3
    letterSpacing: "-0.025em"
rounded:
  pill: "999px"
  circle: "50%"
spacing:
  page: "clamp(24px, 4vw, 72px)"
  column-gap: "60px"
components:
  button-outline:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "9px 27px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
  button-breath:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  circle-arrow:
    rounded: "{rounded.circle}"
    width: "3.3vw"
    height: "3.3vw"
---

# Design System: Relaxed Rabbit

## Overview

**Creative North Star: "The sunlit meadow"**

A cream sculptural rabbit, mossy miniature landscape and generous organic serif lettering make the studio feel caring, unhurried and quietly playful. Large uninterrupted color fields carry the editorial passages; fine rules and round controls keep the interface light.

This is the independent Relaxed Rabbit website identity. It does not inherit the Lulu theme of My Arabic Vocab. The approved first-surface composition is recorded in `.impeccable/surfaces/index-html.md` and `.impeccable/mocks/meadow-original.png`; the implemented source is `index.html`, `src/style.css` and `src/main.ts`. Later CSS declarations win. Desktop and mobile review captures are `.impeccable/review/desktop.png` and `.impeccable/review/mobile.png`; the additional in-app capture is `.impeccable/review/user-675.png`.

**Key Characteristics:**

- Sunlit oat ground, forest ink and restrained sage and yellow accents.
- Soft, weighty display serif paired with human, readable serif copy.
- Panoramic illustration, broad editorial sections and native disclosures.
- Scroll-linked movement with a fully readable still state.

## Colors

The palette connects warm paper, meadow foliage and sunshine. Frontmatter records the actual final CSS tokens; the earlier cream declaration is superseded.

### Primary

Forest ink (`ink`) is the default text, button fill and dark editorial field. Cream text reverses against it.

### Secondary

Sage (`sage`) supplies the breathing section, the struck-through word and rabbit accent. Sunshine (`sun`) highlights the ease statement, strike, breathing disc and button dot.

### Neutral

Oat cream (`cream`) is the page ground. Moss (`moss`) supplies focus outlines and secondary interaction feedback; line (`line`) supplies quiet section and disclosure borders. Existing one-off supporting greens remain local CSS details, not a new palette scale. Sidecar tonal ramps are synthesized same-hue OKLCH previews for the design panel; they are not additional production tokens.

**The Field Rule.** Carry section identity through uninterrupted color fields and typography, as in the cream, forest and sage passages.

## Typography

Fonts are locally bundled through Fontsource: Fraunces Variable for display and Linden Hill 400 for body, with Georgia and serif fallbacks. Fraunces headings use optical size 144, softness 100 and wonk 1. The header wordmark uses the body family; the large footer wordmark uses Fraunces at weight 800.

The hero's first line uses the display token; the second uses 9.1vw and line-height 1.02. Desktop subtitle uses 1.55vw. The editorial statement uses the statement token; the approach title uses headline. The pause title uses `clamp(52px, 5.5vw, 88px)`. Supporting paragraphs range from 22px to 24px, with line-height 1.5–1.6 and bounded measures (360px, 470px or 620px according to context). Body reduces to 18px at 800px and below. Responsive display values are specified below.

Small uppercase ornamental captions currently appear in the build. They are not a reusable label or eyebrow system and should not be propagated to future surfaces.

## Layout

Full-width stacked scenes use the page spacing token, with no enclosing card grid. The desktop hero is 66.6667vw tall; the header sits 2.4% from the top and 4% from each side. The centered heading starts at 9.3%; its subtitle starts at 40.1%. The meadow starts at 32%, fills 59% of hero height and spans its width. The scroll control sits at the lower left. At 1800px and above, hero height caps at 1200px, and headline lines cap at 187px and 164px.

Below the hero, the forest section uses 90px/100px vertical padding, the approach 130px/120px, and the sage pause 120px. Split heading/copy arrangements use a 60px gap. The pause is a two-column grid. These are observed scene spacings, not a universal spacing scale.

At **800px and below**, the header uses 24px insets, hides the text-only navigation link and retains Explore. Hero height is 112svh, bounded by 800px/1250px (970px is the earlier fallback). Headline starts at 17%, with 13.2vw/12vw lines; subtitle is 21px at 40%. The meadow is 150% wide, offset -25%, at 43% top and 46% height, using cover and `45% 50%` positioning. The care caption is hidden. The lower sections stack their copy, the pause becomes one column, and section padding settles around 65–75px. The breathing illustration caps at 460px. Footer content wraps and its decorative rabbit and middle note disappear.

At **480px and below**, hero height is 850px (760px/960px bounds). Headline lines use 15vw/14vw, with the second limited to 350px; subtitle is 20px at 41%, limited to 330px. Final meadow rules are **160% width, -30% left, 48% top, 38% height, object-fit: fill**. These supersede the earlier 190% rule. Statement uses 14vw; approach and pause titles use 46px and 50px. Keep the rabbit visible and headings readable when editing these relationships.

## Elevation & Depth

Depth comes primarily from the illustrated landscape and overlapping circular outlines. Sections and controls are flat, with thin borders. The breathing sun alone has an ambient shadow (`0 25px 55px #4656301a`). The meadow has a vertical alpha mask that fades its top and bottom edges into the page.

## Shapes

Controls use pill ends or circles; broad content fields remain square and edge-to-edge. Disclosure dividers are one pixel. Two oversized outlined circles sit behind the forest statement. The breathing composition uses concentric 90% and 74% rings around a 56% sun disc. The forest section temporarily animates from an inset rounded clip to a rectangular full-width field; this is a transition, not a permanent card radius.

## Components

### Navigation and controls

The rabbit silhouette and lowercase studio name form the home link. Explore and the lower scroll link navigate to the studio section. Outline pills invert to forest ink and cream on hover over 0.25s. Circular arrow controls use the same inversion; on mobile they are 44px square, while the footer uses 48px. Anchors and buttons have a three-pixel moss focus outline offset by six pixels. The skip link becomes visible on focus and targets the studio section.

The forest text link has a fine underline and an arrow that moves down 5px on hover. The footer motion control is an underlined button, with a moss hover state. Preserve native links and buttons rather than decorative click targets.

### Principles

Three native `details` disclosures use thin rules, Fraunces summaries and CSS plus/minus marks. The first is initially open; disclosures are independent. Summary focus uses a three-pixel moss outline offset by eight pixels. Toggling refreshes ScrollTrigger measurements. There are no forms, input fields, chips or product cards in this build.

### Meadow and assets

`assets/plates/meadow.webp` is the 2172×724 shipping image, with `meadow-small.webp` as the 1200w responsive source. It is **one opaque generated plate with independent text motion, not a split animated rabbit body**. GSAP translates and scales the entire landscape. Do not describe ear, body or flower animation as implemented. HTML supplies descriptive image alt text, intrinsic dimensions and high fetch priority. The responsive `sizes` hint matches the final CSS: 160vw on small phones, 150vw on tablet layouts, and 100vw on desktop.

The rabbit mark and arrow icons are inline SVG symbols; the favicon is `public/favicon.svg`. Preserve their silhouette and stroke vocabulary. Artwork provenance belongs with the asset records; this document does not imply an external logo or photography source.

### Motion and breathing

GSAP ScrollTrigger links the hero plate to scroll (11% vertical translation, scale 1.13), while the two headline spans drift separately (-90px/-7% and -45px/+7%). Subtitle and scroll cue recede. Subsequent scenes expand the forest clip, draw the rush strike, settle the ease line, move the circles, settle the approach heading, rotate the breathing world and bring footer words together. These use linear scroll easing, generally scrub 1; the clip uses direct scrub.

Take a breath starts one 10-second cycle: four seconds in and six out. Sun and rings expand to 1.16 and 1.07 with `sine.inOut`, then return. A polite live region reports progress; the button can stop the cycle. Leaving the section or hiding the page stops it. This is a small interaction, with no health or outcome claim.

System reduced motion or the saved manual pause disables the GSAP scene, reverts transforms and disables smooth scrolling and CSS transitions. Reduced motion keeps the breathing text sequence through timers without scaling. The preference key is `relaxed-rabbit-motion`; storage is optional. The operating-system setting takes priority over the button. Keep all content available in the still state.

## Do's and Don'ts

### Do:

- **Do** preserve the warm meadow, organic serif and broad color-field identity.
- **Do** follow the final CSS cascade and review both 800px and 480px responsive transitions.
- **Do** preserve semantic navigation, disclosures, visible focus and the reduced-motion still state.
- **Do** use truthful English studio copy and retain artwork provenance when replacing assets.

### Don't:

- **Don't** import the Lulu app theme into this independent website.
- **Don't** imply the generated meadow has independently animated rabbit body parts.
- **Don't** invent projects, clients, metrics, testimonials or a public contact email.
- **Don't** turn existing ornamental captions into a reusable eyebrow system.
