# Maintenance and release guide

## Before editing

1. Read `AGENTS.md`, `PRODUCT.md`, `DESIGN.md` and `docs/PROJECT-CONTEXT.md`.
2. Inspect `git status` and preserve unrelated work. This is the Relaxed Rabbit repository, not the Flutter project.
3. Run `npm ci` if dependencies are missing. Node 22.12+ is required by the Vite toolchain. Run `npm run dev` and use its printed URL.
4. Use existing artwork and brand primitives. New factual claims or a fundamental brand change require the owner's decision.

## Source map

| File | Responsibility |
| --- | --- |
| `index.html` | English content, semantic sections, SVG symbols, SEO/social metadata |
| `src/style.css` | Layout, components, responsive rules, focus/reduced-motion styling |
| `brand/palette.css` | Shared brand color primitives |
| `src/main.ts` | GSAP scroll scenes, responsive motion and native disclosure animation |
| `src/breathing.ts` | 4-second inhale + 6-second exhale, controls, focus, cancellation and fallback |
| `src/rabbit-renderer.ts` | WebGL texture, local mesh deformation and resize rendering |
| `assets/plates/` | Artwork and adjacent provenance JSON |
| `public/` | Files copied as-is to the deployed site |
| `.github/workflows/pages.yml` | Build and Pages deployment on main |

## Manual verification

No automated test files are required or authorized. Run `npm run build` (TypeScript + Vite) and `git diff --check`. Inspect the actual production preview with `npm run preview` where possible.

Batch browser checks at 320, 390, 768, 1024 and 1440 CSS pixels; include a phone landscape size. Wait for reflow/fonts before taking screenshots. Browser viewport emulation is not a claim of physical-device or Safari testing.

- No horizontal page overflow or clipped text. Zoomed text can reflow; do not disable pinch zoom.
- Hero rabbit stays recognizable; type and artwork do not collide. Image proportions stay intact.
- Links, summaries and buttons have usable touch targets; mouse, Enter/Space and focus remain functional.
- Open and close disclosures, including quick reversals and resizing while open.
- Breathing: Start → inhale → exhale → completion → replay; Stop mid-cycle. Phase, rabbit motion and meter agree. Controls remain close to the rabbit on a phone.
- Breathing cancels when the section leaves the viewport or the tab is hidden. Reduced motion keeps visual motion still and uses timed text; WebGL failure keeps a silhouette and text guide.
- Scroll through the footer so lazy imagery actually loads before a full-page capture.
- Inspect browser console for app errors, not unrelated extension errors.
- Confirm social metadata survives the build and its image exists under `dist/assets/`.

## Publishing

Only commit/push when the owner explicitly asks. Review the full diff and stage task files specifically. Use a concise outcome-based message without assistant attribution. `main` pushes trigger `.github/workflows/pages.yml`; do not edit DNS or unrelated account settings as part of routine deployment.

Check the Actions run for the pushed SHA. A successful push is not proof that deployment succeeded. After deployment, verify https://relaxedrabbit.com/ and important assets. Do not force-push to work around a remote update; inspect and preserve both histories.

## SEO and social previews

Canonical and sitemap URL: `https://relaxedrabbit.com/`. Keep Open Graph/Twitter image URLs absolute and HTTPS. `public/robots.txt` allows crawling and points to the sitemap. Intentional HTTP/www redirects should remain. Preview providers cache cards; metadata updates are not guaranteed to appear instantly. No code can guarantee Google indexing.

## Updating the handoff

Keep brand colors in `brand/palette.css` and synchronize JSON/GPL/SVG exports if colors change. Update `DESIGN.md` for UI behavior, `PRODUCT.md` for scope, and `docs/PROJECT-CONTEXT.md` for approved preferences. Keep `CLAUDE.md` pointing to `AGENTS.md` so instructions do not diverge. Legacy `.impeccable/design.json` is generated tooling metadata; code, brand primitives and DESIGN.md are authoritative if it is stale.
