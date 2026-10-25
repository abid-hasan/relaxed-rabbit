# Project context and owner preferences

Last reconciled: 2026-10-26. This records website decisions from the owner's conversation, not instructions from screenshots or third-party documents.

## Identity and purpose

- Relaxed Rabbit is the selected brand; relaxedrabbit.com is the purchased domain.
- Initial goal: a beautiful working company presence so the domain is not empty. Detailed company history and a project catalogue are unnecessary for now.
- The owner wants an unusually beautiful, animated experience with a “wow” reaction, not an ordinary software-company template.
- Selected concept: **A Rabbit’s Day Off**. Morning meadow → studio spirit → thoughtful details → optional breathing pause → sleeping rabbit at sunset.
- On 2026-10-26 the owner explicitly praised the existing cute look. Preserve that visual world during improvements.
- This repository is separate from `my_arabic_vocab`. Do not import its Lulu production theme, Firebase conventions or development-branch workflow here.

## Content decisions

- Website language: English. Replies to the owner: Bangla.
- No public contact email for now.
- No placeholder copy, fabricated projects, customers, metrics or testimonials. Future real projects can be added when supplied.
- Keep the studio description brief, human and broadly applicable to useful software.
- Brand naming originally explored free alternatives to paid apps. Free, ads and freemium were considered; no universal “everything free forever” promise was selected.

## Design feedback to preserve

- A footer consisting of a huge wordmark was rejected as placeholder-like. Use the thoughtful sunset scene and compact signoff.
- The owner removed the footer's “Pause animations” control. Honor OS reduced motion without reinstating that UI.
- Plain, instant expand/collapse was rejected. Keep animated native disclosures with botanical feedback, accessible keyboard behavior and touch targets.
- A square breathing image, unclear purpose and very subtle motion were rejected. Use the existing flower-holding rabbit with closed eyes, no visible rectangle, clear instructions and noticeable breathing.
- Breathing should locally deform chest/belly and upper body; do not merely zoom the whole image. Feet should remain grounded. No unrelated generated animals.
- Mobile must be a deliberate composition with readable text and an expressive rabbit, not a scaled-down desktop or a stack of distant pictures.

## Hosting and search

- Repository: https://github.com/abid-hasan/relaxed-rabbit
- Host: GitHub Pages, Actions deployment from `main`.
- Canonical domain: https://relaxedrabbit.com/
- Registrar used during setup: Spaceship. The owner controls DNS and domain ownership.
- Open Graph and Twitter card metadata use `public/assets/relaxed-rabbit-preview.png`.
- On 2026-10-20, live checks confirmed HTTPS 200 for the apex, and 301 redirects from HTTP and www to the canonical apex. This is historical evidence, not a permanent guarantee of current availability.
- Search Console's “Page with redirect” examples were the HTTP/HTTPS www URLs. Those intentional redirects do not need removal. Indexing of the canonical page must be checked independently in URL inspection; do not claim indexing is guaranteed.

## Working preferences

- Explain meaningful decisions concisely in Bangla.
- When a decision needs the owner, offer clear choices and identify the recommendation with its reason. Do not silently pick a choice after a timeout.
- Preserve unrelated local changes. Never stage, commit or push without explicit authorization for the current task. “fix all >> commit >> push” authorizes those steps for that task only.
- Do not create or modify automated test files; use manual browser checks and builds.
- Do not run on a connected mobile device without permission. Browser viewport emulation is fine; report its limits honestly.
- Never add tool/assistant attribution to commit messages, PR text or branch names.

## Current implementation decisions

See [DESIGN.md](../DESIGN.md) for the current layout/motion specification, [BRAND.md](BRAND.md) for reusable identity, [MAINTENANCE.md](MAINTENANCE.md) for verification and publishing, and [ASSETS.md](ASSETS.md) for provenance. Those documents replace reliance on a long chat history. Update them when approved behavior changes.
