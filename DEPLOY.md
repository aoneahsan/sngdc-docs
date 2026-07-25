# Deploying SNGDC Docs

This site is configured for **dual hosting**: Firebase Hosting and GitHub Pages. Both are
set up; pick ONE to serve the custom domain `sngdc-docs.aoneahsan.com` (they are alternatives
for the same domain, not simultaneous). Every step below is **owner-only** — the agent writes
config but never deploys.

## Option A — Firebase Hosting (primary)

Prerequisites: a Firebase project named `sngdc-docs` (or edit `.firebaserc` to your project id),
and the Firebase CLI authenticated (`npx -y firebase-tools@latest login`).

```bash
yarn install
yarn build
npx -y firebase-tools@latest deploy --only hosting --project sngdc-docs
# or the script:
yarn firebase:deploy
```

Then, in the Firebase console, add the custom domain `sngdc-docs.aoneahsan.com` to the
`sngdc-docs` Hosting site and follow the DNS verification steps.

## Option B — GitHub Pages

1. Repo **Settings → Pages → Build and deployment → Source = "GitHub Actions"**.
2. Keep `static/CNAME` = `sngdc-docs.aoneahsan.com` (already present), OR delete it to serve at
   `https://aoneahsan.github.io/sngdc-docs` — in that case set `baseUrl: '/sngdc-docs/'` in
   `docusaurus.config.ts`.
3. Go to the **Actions** tab → **Deploy docs to GitHub Pages** → **Run workflow**. The workflow
   is manual-trigger only (`workflow_dispatch`); nothing deploys automatically on push.
4. Point the `sngdc-docs.aoneahsan.com` DNS CNAME at GitHub Pages.

## After the first deploy

- Submit `https://sngdc-docs.aoneahsan.com/sitemap.xml` to Google Search Console and Bing
  Webmaster Tools.
- Confirm `robots.txt`, `llms.txt`, and `sitemap.xml` resolve at the site root.
- Verify the social card and JSON-LD with the Google Rich Results Test.

## Verify before deploying

```bash
yarn build       # must exit 0 and emit ./build
yarn typecheck   # tsc --noEmit, must exit 0
```
