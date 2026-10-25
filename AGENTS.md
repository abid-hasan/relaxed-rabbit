# Working on Relaxed Rabbit

## Read first

1. `PRODUCT.md` — purpose, scope and content constraints.
2. `docs/PROJECT-CONTEXT.md` — owner's decisions and preferences.
3. `docs/BRAND.md` and `brand/README.md` — reusable identity and logo files.
4. `DESIGN.md` — actual UI, responsive and motion rules.
5. `docs/MAINTENANCE.md` and `docs/ASSETS.md` — source map, verification, publishing and provenance.

## Non-negotiables

- Reply to the owner in Bangla. Public website copy is English.
- Preserve the cute **A Rabbit’s Day Off** identity. Current meadow rabbit, warm colors and organic serif typography are approved. Do not turn this into a generic technology template.
- This is an independent website. Do not import My Arabic Vocab's Lulu theme or development-branch policy. This site's deployment branch is `main`.
- No fake projects, placeholder content, testimonials, client counts or public contact email. Do not add analytics, contact forms or external services without a request.
- Before UI changes, read DESIGN.md. Use `brand/palette.css` and existing reusable styles. Keep mobile a deliberate layout, not a miniature desktop.
- Keep OS reduced motion, semantic HTML, visible focus and readable no-animation states. Do not add the rejected manual pause-animations footer button.
- Breathing uses the flower-holding rabbit, visible local body motion, clear Start/Stop/replay and timed text. Never replace it with whole-image zoom or an unrelated animal.
- Do not write/modify automated test files. Build and manually inspect desktop, tablet and mobile viewports. Ask before using connected mobile devices.
- Never stage, unstage, commit or push unless explicitly authorized for the current task. A prior task's authorization does not persist into new tasks. Preserve unrelated local work.
- No tool/assistant attribution in branch names, commits, PR metadata or release notes.
- If a choice needs the owner, give options and a recommendation with a reason; wait for the answer rather than auto-selecting after a timeout.

## Finish

Run `npm run build`, `git diff --check` and bounded visual/interaction checks. Document changed patterns and any real verification limits. If commit/push is authorized, check the deployment result and report the SHA. Do not claim live deployment or Google indexing based only on a local build.
