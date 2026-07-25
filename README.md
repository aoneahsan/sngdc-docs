# SNGDC Docs

Public documentation site for the **SNGDC** app — the web and mobile application for a
synthetic natural gas (SNG) distribution company. It documents the customer portal
(accounts, billing, usage analytics, notifications, support) and the RBAC admin and
content-management studio that powers the public company website.

- **Live app:** https://sngdc.aoneahsan.com
- **Docs (planned):** https://sngdc-docs.aoneahsan.com
- **App source (private):** https://github.com/aoneahsan/sngdc
- **Built by:** [Ahsan Mahmood](https://aoneahsan.com)

Built with [Docusaurus 3](https://docusaurus.io/). Content is written from the application's
own source — features are documented as the code implements them, and scope notes state what
the app does not do as plainly as what it does.

## Local development

```bash
yarn install
yarn start        # dev server on http://localhost:5972
yarn build        # static build → ./build
yarn serve        # preview the built site on :5973
yarn typecheck    # tsc --noEmit
```

> Per the project conventions, an agent never runs the dev server — it verifies with
> `yarn build` and `yarn typecheck`. The owner runs and previews.

## Deployment

This site is configured for **dual hosting** — Firebase Hosting and GitHub Pages. Both are
ready; the owner points DNS at whichever host they prefer for `sngdc-docs.aoneahsan.com`.
See [`DEPLOY.md`](./DEPLOY.md) for the exact steps. Deployment is a manual, owner-only action.

## Structure

```
docs/                 Markdown content (Getting Started, Customer Features, Admin, Platform)
src/components/        AuthorCard and shared React bits
src/pages/index.tsx    Landing page
src/css/custom.css     Brand palette (cyan #06B6D4)
static/                robots.txt, llms.txt, CNAME, humans.txt, img/ (logo, favicon, social card)
docusaurus.config.ts   Site config + SEO/JSON-LD head tags
sidebars.ts            Sidebar layout
firebase.json          Firebase Hosting config
.github/workflows/     GitHub Pages deploy (manual trigger)
```

## License

MIT © Ahsan Mahmood. The SNGDC application itself is a private project.
