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

The custom-domain file is already in `public/CNAME` for branch-based hosting compatibility; the supplied Actions deployment uses the domain configured in repository Settings → Pages. The default asset paths target the domain root. If publishing temporarily under `username.github.io/repository/`, configure Vite's `base` for that repository path first.

Official setup references: [custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) and [custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

No remote repository or DNS records have been created by this project setup. Nothing has been committed or pushed automatically.

## Content and accessibility

- English copy; no public email, placeholder projects, client claims, analytics or contact form.
- Native anchor navigation, native details panels, keyboard-visible focus and a skip link.
- System reduced-motion support plus a local pause-animation preference. A blocked storage API does not prevent use.
- The breathing moment is optional and stoppable. It resets offscreen or when the tab becomes hidden.
- Fonts and artwork are bundled locally. The website does not load runtime analytics or external font scripts.

## Editing

Read `PRODUCT.md` and `DESIGN.md` before changing the website. Content lives in `index.html`, styling in `src/style.css`, and motion in `src/main.ts`.
