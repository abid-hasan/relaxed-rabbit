# Relaxed Rabbit

An illustrated, scroll-driven studio website for **relaxedrabbit.com**. Built with Vite, TypeScript and GSAP; fully static and ready for GitHub Pages.

## Local development

Requires Node.js 22.12+ (or a newer supported version).

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

`dist/` is the only deployment directory. Product/design documents, prompts, reference comps and unoptimized source artwork do not belong in the public deployment.

## GitHub Pages

1. Create a GitHub repository and push the project after reviewing and committing it yourself.
2. In repository **Settings → Pages**, choose **GitHub Actions** as the source.
3. The supplied workflow builds and deploys pushes to `main`, or can run manually. If you use another deployment branch, update its branch filter.
4. Set the Pages custom domain to `relaxedrabbit.com`, then follow the DNS records shown by GitHub for your account. Verify domain ownership with GitHub's TXT record before connecting it. Configure the apex and `www` consistently, wait for DNS verification, and enable HTTPS.
5. Confirm the public HTTPS site, favicon, images, anchors and mobile layout after deployment.

The custom-domain file is already in `public/CNAME` for branch-based hosting compatibility; the supplied Actions deployment uses the domain configured in repository Settings → Pages. Vite uses a relative base (`./`), so the same build loads its assets under both `username.github.io/repository/` and the custom domain without configuration changes.

Official setup references: [custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) and [custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

No remote repository or DNS records have been created by this project setup. Nothing has been committed or pushed automatically.

## Content and accessibility

- English copy; no public email, placeholder projects, client claims, analytics or contact form.
- Native anchor navigation, animated native details panels with botanical motifs, keyboard-visible focus and a skip link.
- System reduced-motion support applies to scroll scenes, disclosures and the breathing illustration. No stored motion preference or manual motion toggle.
- The afternoon rabbit offers one optional 10-second round: Start, four seconds in, six out, Stop and replay. A polite text status explains each phase. Native WebGL locally deforms the rabbit mesh while keeping its feet grounded; the whole image is not zoomed. It resets offscreen, when the tab becomes hidden or when the motion preference changes.
- The rabbit texture has a magenta background, removed by the fragment shader to render transparently on the section. It is not a true-alpha WebP. Reduced motion keeps the rabbit still with timed text guidance; unavailable WebGL uses the rabbit silhouette and the text guide. No new dependency is required.
- The day closes with a sleeping rabbit at sunset, a return-to-top link and a compact studio signoff.
- Fonts and artwork are bundled locally. The website does not load runtime analytics or external font scripts.

## Editing

Read `PRODUCT.md` and `DESIGN.md` before changing the website. Content lives in `index.html`, styling in `src/style.css`, and scroll motion in `src/main.ts`. The breathing sequence lives in `src/breathing.ts` and its renderer in `src/rabbit-renderer.ts`.

The afternoon scene ships only `assets/plates/rabbit-breath-key.webp`; its neighboring provenance JSON records generation and conversion. Older `breath.webp` variants remain as source references and are not included in the build. Failed true-alpha generation attempts are not shipped.
