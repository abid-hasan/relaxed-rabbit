# Asset provenance

The approved design is `.impeccable/mocks/meadow-original.png`, selected by the owner as composition A.

The meadow production illustration was generated using the built-in image-generation tool with the approved image as reference. The exact generation prompt is in `.impeccable/build/meadow-production.prompt.txt` and embedded in `assets/plates/meadow.png`. WebP delivery files retain adjacent provenance sidecars. They are derived from the generated production illustration, not cropped website screenshots.

The first attempted transparent rendition contained a painted checkerboard and was rejected. It is not included in the project. The shipped art is opaque and softly blended onto the approved cream ground. The scene moves as one illustration; type and other page elements move independently.

Rabbit logo: compact original SVG mark in index.html and public/favicon.svg.

Fonts: locally bundled Fraunces (SIL Open Font License) and Linden Hill (SIL Open Font License), installed through Fontsource; original licenses are in their installed packages and copied to public/licenses/.

## Current delivery and reusable identity

- Morning meadow: `assets/plates/meadow.webp` (2172px) and `meadow-small.webp` (1200px), with adjacent JSON provenance. Mobile uses a closer crop through CSS, not a distorted or newly generated image.
- Sunset: `assets/plates/sunset.webp` (1536px) and `sunset-small.webp` (900px), with adjacent provenance. It is a static plate with coordinated scroll motion; the sleeping rabbit is not independently animated.
- Breathing: `assets/plates/rabbit-breath-key.webp` (1000px square), with adjacent provenance. Opaque magenta source, keyed to transparency by the WebGL fragment shader. Local mesh deformation moves the torso and upper body. Do not call the source a transparent PNG/WebP.
- `breath.webp` and `breath-small.webp` remain reference-only; the build does not import them. Failed checkerboard cutout attempts are not shipped.
- Social image: `public/assets/relaxed-rabbit-preview.png`, the existing meadow PNG served at a stable URL for Open Graph/Twitter metadata.
- Reusable logos: `brand/` exports the same existing rabbit path in forest/cream/black, horizontal wordmarks with Linden Hill Regular lettering converted to outlines, and the favicon tile. SVG wordmarks have no external font dependency. See `brand/README.md` and `docs/BRAND.md`.
- The live site consumes `brand/palette.css`; palette JSON/GPL/SVG are equivalent sRGB exports.

Source and generated artwork do not imply exclusive trademark rights or a new license grant. Preserve font licenses when redistributing font files. Never publish source prompts, internal notes or user filesystem paths through `public/`.
