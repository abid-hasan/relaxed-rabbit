# Relaxed Rabbit

**Good things. At a gentler pace.** A cute, illustrated software-studio website: a rabbit's day from a sunny meadow to a quiet sunset.

Live: [relaxedrabbit.com](https://relaxedrabbit.com/) · Repository: [abid-hasan/relaxed-rabbit](https://github.com/abid-hasan/relaxed-rabbit)

## Start here

| Need | Read |
| --- | --- |
| Work on the project in a new session | [AGENTS.md](AGENTS.md), then [project context](docs/PROJECT-CONTEXT.md) |
| Understand scope and owner preferences | [PRODUCT.md](PRODUCT.md) and [project context](docs/PROJECT-CONTEXT.md) |
| Reuse logos, colors or typography | [Brand guidelines](docs/BRAND.md) and [brand kit](brand/README.md) |
| Change layout or motion | [DESIGN.md](DESIGN.md) |
| Build, verify or publish | [Maintenance guide](docs/MAINTENANCE.md) |
| Understand imagery and licenses | [Asset provenance](docs/ASSETS.md) |
| Start through Claude | [CLAUDE.md](CLAUDE.md), which links to the same working rules |

## Run locally

Node.js 22.12+ (or a compatible newer release).

```sh
npm ci
npm run dev
```

Use the localhost URL printed by Vite. Production check:

```sh
npm run build
npm run preview
```

No backend, environment secrets or paid service is needed. Stack: Vite, TypeScript, GSAP and a small native WebGL rabbit renderer. Fonts and images are bundled locally.

## Experience

- Content-led mobile layout with close-up meadow art, readable type and touch-friendly controls; desktop retains its wide cinematic composition.
- Studio values use animated native disclosures with botanical feedback.
- An optional breathing pause runs one 10-second round: four seconds in, six out, with Start, Stop and replay. Chest/belly and upper-body motion are deliberately visible while feet remain grounded. Controls sit below the rabbit.
- Reduced motion keeps the rabbit and meter still, retaining text guidance. WebGL/texture failure uses the silhouette and text. Leaving the section or hiding the page cancels the round.
- Sunset scene and compact brand signoff; no manual animation toggle, public email, analytics or fabricated project listings.

## Brand files

The [`brand/`](brand/README.md) folder includes transparent SVG rabbit marks, outlined horizontal wordmarks, an icon and CSS/JSON/GPL/SVG palette exports. See [BRAND.md](docs/BRAND.md) for typography, contrast, usage and voice. `src/style.css` imports the shared palette CSS so the kit and site use the same colors.

## Deployment

GitHub Actions builds and deploys `main` to GitHub Pages. Only `dist/` is deployed. The custom domain is configured in repository Settings → Pages; `public/CNAME` also records it. Relative Vite base `./` supports the repository URL and custom domain. DNS/HTTPS settings are managed separately; routine source changes need no DNS edits.

`public/` files are copied as-is. Do not put internal notes, source prompts or credentials there. The social preview is at `public/assets/relaxed-rabbit-preview.png`; canonical URL, robots and sitemap use the HTTPS apex. See the [maintenance guide](docs/MAINTENANCE.md) before publishing.

Build and manually verify changes; do not create automated test files. Commit/push only with the owner's explicit instruction for the current task.
