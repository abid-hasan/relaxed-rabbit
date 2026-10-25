# Relaxed Rabbit brand guidelines

## The idea

Thoughtfully made software for a little more ease. Relaxed Rabbit is an independent software studio, expressed through a warm, cute rabbit enjoying an unhurried day. The owner explicitly likes the current site's cuteness and beauty. Refine that identity; do not replace it with a generic technology-company aesthetic.

The name is **Relaxed Rabbit**, the domain is **relaxedrabbit.com**, and the visual wordmark is lowercase **relaxed rabbit**. Do not append “Apps” or “Soft”, revive discarded naming ideas, or call the company Lulu. Lulu belongs to a separate app design project.

## Visual character

- A soft cream rabbit with closed, happy eyes, rounded proportions and tactile plush/clay-like detail.
- Daisies, mossy miniature hills, warm sunshine and a peaceful evening meadow.
- Forest-green organic serif typography, cream paper and pale sage fields.
- Cute, caring, playful and polished. Avoid aggressive speed effects, corporate blue dashboards, generic cards, neon/glass decoration, emoji logos and childish baby-app styling.
- Keep the rabbit recognizably consistent across illustrations. Artwork should have a role in the story, never become an unrelated decorative animal.

## Logos

Reusable files are in [`../brand/`](../brand/README.md). These extract the existing silhouette; they are not a new identity.

| File | Use |
| --- | --- |
| `rabbit-mark-forest.svg` | Default standalone mark on light backgrounds |
| `rabbit-mark-cream.svg` | Reversed mark on forest backgrounds |
| `rabbit-mark-black.svg` | Single-color printing or tooling |
| `wordmark-forest.svg` | Rabbit + lowercase name, light background |
| `wordmark-cream.svg` | Rabbit + lowercase name, dark background |
| `app-icon.svg` | Cream rounded-square icon using the existing favicon |

SVG backgrounds are transparent except the intentionally cream app icon. Wordmark lettering is outlined, so a recipient does not need the font installed. The lettering uses Linden Hill Regular, the website's body/brand family; the browser's header uses a heavier font treatment. SVGs scale for print or web without quality loss.

Leave clear space of at least half a rabbit-head width. Use the mark at 24px or larger; use the full wordmark at approximately 160px or larger. Preserve aspect ratio. Do not stretch, rotate, outline, add shadows, change the ear shapes or place low-contrast cream marks on pale imagery. For tiny favicons use the supplied icon, not the full wordmark.

## Color palette

The live site imports [`../brand/palette.css`](../brand/palette.css). JSON, GPL and a visual SVG swatch sheet are provided alongside it. HEX values are sRGB; printer CMYK conversion depends on the output profile.

| Color | HEX | Role |
| --- | --- | --- |
| Oat cream | `#f4eedc` | Main page ground, reversed text |
| Forest ink | `#1c3825` | Primary text, buttons, forest section and signoff |
| Moss | `#526645` | Focus outlines and secondary accents |
| Sage | `#c2d09c` | Botanical shapes and quiet highlights |
| Sunshine | `#edd47c` | Warm emphasis against forest |
| Meadow line | `#879478` | Dividers; not small body text |
| Afternoon | `#dce3c5` | Breathing section ground |

Prefer forest text on cream, afternoon or sage; cream text on forest. Use sunshine as an accent, not body text on cream. Never assume every palette pairing passes contrast. Supporting image-blend colors are implementation details, not new brand colors.

## Typography

- **Fraunces Variable**: generous, soft display headings. Typical weights 750–900, italic accents around 550; optical size 144, softness 100 and wonk 1.
- **Linden Hill Regular**: human, readable body text and wordmarks.
- **Georgia, serif**: fallbacks only. Fonts are self-hosted through Fontsource, with SIL Open Font License files in `public/licenses/`.
- Keep headings bold and organic. Mobile body copy is approximately 18–21px. Avoid shrinking desktop text to make it fit; reflow it.

## Voice

English, warm, simple and truthful. Short sentences with a little personality. Approved lines include “Good things. At a gentler pace.”, “Thoughtfully made software for a little more ease.” and “Good things take care.”

No invented projects, customers, testimonials, awards, team sizes or performance claims. No public contact email until the owner changes that preference. Do not promise that every product will always be free: the owner has considered free, ad-supported and freemium products, but no universal commercial promise is approved.

## Motion

Motion should express the rabbit's personality and connect the day’s scenes. It must remain calm, visibly intentional and responsive to touch. Preserve operating-system reduced motion. No manual “Pause animations” footer control. The optional breathing interaction is a playful pause, not a health product: no therapeutic or outcome claims.

## Reusing the brand elsewhere

Start with the silhouette, palette and font pair. A website, social banner or app-store developer profile can share the identity without copying the entire illustrated page. Keep brand facts consistent. Any future developer-account rebrand or policy change needs its own task; this website work does not change those accounts.
