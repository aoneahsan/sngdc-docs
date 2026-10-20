# SNGDC docs guide

**Last Updated:** 2026-10-20

**Context verified:** 2026-10-14. **Next routine review:** 2026-11-13.

This public Docusaurus 3 repository is `aoneahsan/sngdc-docs` on `main` inside `../sngdc-root/`. Its private app source is `../sngdc/`. Use Yarn for local packages. Derive documented product behavior from app source, keep unsupported claims out, and commit no real environment values or keys.

The canonical site is `https://sngdc-docs.aoneahsan.com/`. `.github/workflows/deploy-pages.yml` builds and publishes GitHub Pages on each `main` push. `static/CNAME` pins the custom domain. No Firebase docs hosting configuration is present. Build, typecheck and inspect the built site in a controlled browser before pushing.

On 2026-10-14, `yarn install --immutable`, `yarn typecheck` and `yarn build` passed; the local built site rendered in Chrome. The live homepage, sitemap, robots and llms files returned HTTPS 200, and the GitHub Pages API showed HTTPS enforcement enabled. [DEPLOY.md](DEPLOY.md) records the workflow. Fleet progress and 30-day context eligibility live in `/home/ahsan/Documents/01-code/docs/tracking/`.

## Stop-work Git gate

<!-- RULE:stop-work-git-gate v2026-10-20 -->

Before stopping, commit every legitimate change and work-progress checkpoint in this repository and each independent nested repository, fetch and merge the designated upstream, push the documented working branch, then verify an empty worktree and `0 0` ahead/behind. Never stash, discard, reset, rebase, or force-push. If synchronization is blocked, report the exact repository, branch, blocker, and next action instead of calling the work complete. The full workflow remains authoritative in `~/.claude/rules/git-workflow.md`.
