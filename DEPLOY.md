# Deploying SNGDC docs

The public `aoneahsan/sngdc-docs` repository deploys to GitHub Pages on every `main` push through `.github/workflows/deploy-pages.yml`. `static/CNAME` pins `sngdc-docs.aoneahsan.com`. There is no Firebase docs hosting configuration.

Before pushing, run `yarn install --immutable`, `yarn typecheck` and `yarn build`; serve `build/` locally and inspect desktop and mobile layouts in a controlled browser. Fetch and integrate remote changes immediately before committing and pushing. Then inspect the GitHub Actions Pages run and confirm the live homepage, `/sitemap.xml`, `/robots.txt` and `/llms.txt` return HTTPS 200.

On 2026-10-14 the live site returned HTTPS 200 for all four paths, and the GitHub Pages API reported HTTPS enforcement enabled. A future change to the custom domain requires coordinating `static/CNAME`, Docusaurus `url`/`baseUrl`, DNS and repository Pages settings.
