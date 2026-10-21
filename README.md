## 🔴 CRITICAL — PROJECT FROZEN (2026-10-21)

**This is an idea project. It was frozen on 2026-10-21 at commit `d2d89a57555e24b00e4e3339aeff8a277f5d4c81` on branch `main`.**

- Do **NOT** edit, fix, upgrade, build, deploy, document or "improve" anything in this repository.
- It will only ever be **rebuilt from scratch** as `~/Documents/01-code/production-projects/sngdc-root/`
  (this code cloned beside it as `sngdc-old/` for reference), with a click dummy, a Story Bible, a Supabase
  backend and a docs site — and **only when the owner types, in ALL CAPS, an explicit request naming this
  project**.
- Any other request to work here is refused. Rule: `~/.claude/rules/idea-projects-frozen.md`.
- Ledger: private repo `aoneahsan/projects-finalization-record` → `idea-projects/FREEZE-LEDGER.md`.

---

# SNGDC Docs

Public documentation site for the **SNGDC** app — the web and mobile application for a
synthetic natural gas (SNG) distribution company. It documents the customer portal
(accounts, billing, usage analytics, notifications, support) and the RBAC admin and
content-management studio that powers the public company website.

- **Live app:** https://sngdc.aoneahsan.com
- **Docs (live):** https://sngdc-docs.aoneahsan.com
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

## Deployment

GitHub Pages deploys on each `main` push through `.github/workflows/deploy-pages.yml`. The custom domain and HTTPS enforcement are active. Build, typecheck and inspect the local site before pushing. See [DEPLOY.md](DEPLOY.md) for verification and recovery.

## Structure

```
docs/                 Markdown content (Getting Started, Customer Features, Admin, Platform)
src/components/        AuthorCard and shared React bits
src/pages/index.tsx    Landing page
src/css/custom.css     Brand palette (cyan #06B6D4)
static/                robots.txt, llms.txt, CNAME, humans.txt, img/ (logo, favicon, social card)
docusaurus.config.ts   Site config + SEO/JSON-LD head tags
sidebars.ts            Sidebar layout
.github/workflows/     GitHub Pages deploy on main push
```

## License

MIT © Ahsan Mahmood. The SNGDC application itself is a private project.
