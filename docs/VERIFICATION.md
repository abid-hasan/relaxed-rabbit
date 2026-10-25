# Latest verification

## 2026-10-26 — mobile layout and brand handoff

- `npm run build`: passed (TypeScript and Vite production output).
- `git diff --check`: passed.
- Chrome emulated widths 320, 390, 768, 844 (landscape), 1024 and 1440: document scroll width matched viewport width.
- Visually inspected the 390px composition and 1440px desktop hero. The phone uses a closer rabbit crop and content-driven hero rows; desktop identity is preserved.
- Breathing observed through inhale, exhale and completion; replay, Stop and reduced-motion text guidance worked. Reduced-motion pose remained zero.
- Keyboard opening/closing of the second native disclosure worked and revealed real content.
- Meadow and lazy sunset images loaded. No app console errors were captured.
- Outlined SVG wordmark rendered with its rabbit and lettering.
- Manual design detector ran once. Its bare-HTML hierarchy warning reported all text as 16px because it did not resolve the Vite-imported stylesheet; actual browser inspection showed the intended hierarchy. Remaining advisory sizes/colors include deliberate scene styling and legacy sidecar differences. No style was changed merely to satisfy that stale generated scale.

Limits: these were browser emulation checks, not physical iPhone/Android or Safari runs. No automated test files were added. Generated `.impeccable/design.json` remains legacy tooling metadata; current DESIGN.md, brand primitives and implementation are authoritative.
