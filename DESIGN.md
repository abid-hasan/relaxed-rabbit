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
    fontSize: "clamp(25px, 2.65vw, 42px)"
    lineHeight: 1.18
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

# Relaxed Rabbit design system

Updated 2026-10-26. Read [brand guidelines](docs/BRAND.md) for identity and reusable files, and [project context](docs/PROJECT-CONTEXT.md) for approved preferences. This is the website’s own theme, not the Lulu app theme.

## Direction

**A Rabbit’s Day Off.** Warm cream, forest-green organic serif, a soft sculptural rabbit and miniature meadow. The owner likes the existing cuteness. Preserve that world and its narrative: morning → studio spirit → botanical principles → afternoon breathing → sunset farewell. Avoid generic grids of cards and corporate software templates.

## Tokens and type

`brand/palette.css` owns the `--rr-*` brand primitives. `src/style.css` aliases the primary colors for site components. Palette JSON/GPL/SVG exports live in `brand/`. Keep exports aligned when changing tokens.

Fraunces Variable supplies soft, heavy headings with optical size 144, softness 100 and wonk 1. Linden Hill supplies body and wordmark text. Fonts are self-hosted through Fontsource. Georgia/serif is the fallback. Desktop display type remains intentionally oversized to preserve the approved composition; do not apply that scale to mobile through whole-page scaling.

Use forest ink on cream or afternoon sage; cream and sunshine on forest. Focus outlines use moss on light fields and sunshine in the footer. Quiet line color is for dividers, not small text. Round buttons and circular arrow controls remain flat and simple.

## Responsive composition

### Desktop (above 800px)

Retain the wide cinematic hero (66.6667vw, capped at 1200px on wide screens): slim header, centered display heading, panorama and bottom scroll cue. The meadow begins at 32% and occupies 59% of the hero. The original desktop art treatment is intentionally preserved.

Forest statement uses broad color fields, oversized text and outlined orbital decoration. Approach uses a sticky botanical visual alongside disclosures. Breathing uses two columns: introduction left, rabbit/status/control group right. The sunset image carries farewell text and returns to a compact forest signoff.

Between 801 and 1100px, brand text and controls have explicit readable sizes rather than tiny viewport units; the botanical columns tighten and long links may wrap.

### Phone and portrait tablet (800px and below)

The hero is a real CSS grid in document flow: header → heading and subtitle → meadow → scroll cue → seam. Its total height is content-driven. Never bring back the fixed 780/850/970px hero or absolute text percentages: these caused awkward gaps and collisions when text wrapped.

- Side gutters: `clamp(20px, 5.5vw, 40px)`.
- Hero display: approximately 48–88px; second phrase wraps at 10ch. Subtitle: 21px with a bounded measure.
- Meadow row: `clamp(280px, 42svh, 400px)`, natural proportions with `object-fit: cover` and 32% horizontal focus. The rabbit is close and expressive; cropping the wider meadow is intentional.
- Header retains the wordmark and Explore. The secondary Our spirit link is omitted here; the scroll link still reaches that section. Buttons/links have at least 44px targets.
- Mobile hero motion is only a restrained meadow drift (3% translation, 1.035 scale). No sideways heading motion or subtitle fade on phones.
- Forest and approach sections use around 64px vertical padding, 20–21px body copy and fluid headings. Text should feel readable, not like a screenshot scaled down.
- Botanical art becomes an 80px symbol with caption above the native disclosure list. Summaries have circular state controls and large touch areas.
- Breathing stacks its introduction, rabbit, status, meter and controls. Center the introduction and keep instructions within 32ch. Rabbit stage caps at 340px; the section has 56px vertical padding. Do not separate the Start/Stop button from the character by a large text block.
- Sunset remains a real visual ending, at least 660px tall with right-biased artwork and content that can grow. Return link is in flow, and the signoff wraps.
- Below 360px, compact the header and omit only the decorative Explore arrow. In phone landscape, hero text is 58px and the meadow row is 330px.

Do not disable zoom, hide overflow to conceal broken content or set a desktop minimum body width. Check 320px through desktop, portrait and landscape. A phone rendering is not a miniature desktop.

## Motion and interaction

GSAP owns scroll scenes and disclosure transitions. Mobile/desktop motion is rebuilt when the 800px media query changes. Font readiness triggers the initial setup. OS reduced motion reverts scroll animation and suppresses CSS transitions/smooth scrolling.

Native details panels retain semantic summaries. Opening takes 0.42 seconds; closing 0.3 seconds, with coordinated content opacity/translation and a rotating plus/minus circle. Rapid reversals kill the previous tween. Resize and motion-preference changes settle the panels to their requested state. Botanical selection changes with the opened panel. No hover is required to operate anything.

### Breathing

One optional round: **Start breathing → Breathe in (4 seconds) → Breathe out (6 seconds) → All done / Breathe again**. Stop remains available throughout; keyboard focus follows the active button. A polite atomic live region reports phase and timing. This is an optional playful pause, without medical claims.

`src/rabbit-renderer.ts` renders the same flower-holding rabbit onto transparent canvas through chroma-keying an opaque magenta-backed texture. A 36×42 mesh expands the torso and raises hands/head/ears while anchoring the feet. On 2026-10-26, local deformation was amplified roughly threefold to make breathing visible at phone size: torso horizontal coefficient .48, vertical .060, hands .032, head .025, ears .008. Keep the face and flower coherent; never substitute whole-image zoom. A soft ground shadow subtly narrows with the breath, and the 180×5px meter fills/empties in sync.

`src/breathing.ts` drives the pose and meter with sine easing. The renderer redraws while active or resizing, not an idle endless animation loop. Hiding the tab, leaving the section or changing motion preference cancels the round. Reduced motion holds rabbit, shadow and meter still while timed text continues. WebGL/texture failure or context loss switches to the silhouette and text guide. The control is disabled only while loading.

## Accessibility and resilience

Semantic landmarks, one h1, native links/details/buttons, skip link, visible focus, locally bundled fonts and real alt text. Controls must work with keyboard and touch. Content must remain understandable without animation. Never reinstate the rejected footer “Pause animations” control; use the OS preference.

## Artwork and exports

Production meadow and sunset use WebP variants with provenance sidecars. The breathing texture is not a true-alpha image; transparency is created in the shader. Old square breathing plates remain reference-only and must not be reintroduced. The standalone logo is the existing SVG silhouette, not a generated rabbit illustration. See [ASSETS.md](docs/ASSETS.md).

## Sources of truth

- Product truth: `PRODUCT.md` and approved decisions in `docs/PROJECT-CONTEXT.md`.
- Brand: `docs/BRAND.md`, `brand/palette.css`, reusable SVGs.
- Implementation: `index.html`, `src/style.css`, `src/main.ts`, breathing modules.
- This document describes current behavior. `.impeccable/design.json` is a legacy generated sidecar and may be stale; it is not a competing design authority.
