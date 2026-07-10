# AGENTS.md — sngdc-docs

Public Docusaurus documentation site for the **SNGDC** app (private repo `aoneahsan/sngdc`).

**Last Updated:** 2026-06-24

## Identity

| Key | Value |
|---|---|
| Repo | `aoneahsan/sngdc-docs` (PUBLIC) |
| Type | Docusaurus 3 documentation site (classic preset + Mermaid) |
| Package manager | yarn only (NEVER npm/pnpm) |
| Node | >=18 |
| Author | Ahsan Mahmood (aoneahsan@gmail.com) |
| Docs URL (planned) | https://docs.sndgc.aoneahsan.com (Firebase Hosting site `sngdc-docs` + GitHub Pages) |
| App (live) | https://sndgc.aoneahsan.com |
| App source | https://github.com/aoneahsan/sngdc (PRIVATE) |
| Dev port | 5972 (start) / 5973 (serve) |
| Content tracker | `sngdc/docs/tracking/sngdc-docs-content-tracker.json` (in the app repo) |

## Critical rules

- **Public repo — NO secrets.** Never commit `.env`, keys, or tokens. `.env` is git-ignored.
- **Yarn only.** Never `npm install` / `pnpm add`.
- **No dev server in agent runs.** The agent verifies with `yarn build` + `yarn typecheck`; the owner runs `yarn start` and previews. Deploys are owner-only (see `DEPLOY.md`).
- **Single source of truth.** Every documented feature MUST come from the SNGDC app source (`sngdc/src/`). No invented features, no hallucinated routes. Read the code before documenting it.
- **Honest framing.** Say what the app does NOT do as plainly as what it does (no in-app payments, gas-meter integration out of scope, etc.). No fabricated stats.
- **Author credit.** Long pages surface the `<AuthorCard />` component.
- **One commit per task.** Don't make per-file commits.

## Verification

```bash
yarn install
yarn typecheck   # tsc --noEmit (must exit 0)
yarn build       # docusaurus build (must exit 0, must produce ./build)
```

## SEO floor (keep intact)

- `static/robots.txt` — AI-bot allowlist (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot, CCBot, Applebot…) + `Sitemap:` directive.
- `sitemap.xml` — emitted by the docs preset on every build.
- `static/llms.txt` — machine-readable overview + key URLs.
- JSON-LD in `docusaurus.config.ts` headTags — WebSite + Organization + SoftwareApplication.
- Per-page `title` + `description` + `keywords` frontmatter; OG/Twitter via themeConfig metadata.

## Package Manager Hierarchy: nvm → npm (global) → yarn (local)

`nvm` installs/updates Node+npm; `npm` for global CLIs (incl. yarn itself); `yarn` for all local work. Never pnpm. Only `yarn.lock` in the repo. Full rule: `~/.claude/CLAUDE.md`.

## CLAUDE.md + AGENTS.md sync

Every rule lives in BOTH this file and `AGENTS.md`. Update one → update the other.


## Sub-agents & Skills — Main-Context-First (IRON-SOLID)
Default/built-in sub-agents (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) do NOT have
access to `/skills`, so delegating to them silently SKIPS the skills RULE #0 requires. Do all
skill-relevant work in the **MAIN context**; use a sub-agent ONLY when a **custom** agent exists in
`.claude/agents/` for that job; a default `Explore`/`Plan` agent is allowed ONLY for read-only,
no-skill search/exploration. When a relevant skill is missing, **install/enable it** rather than
proceeding skill-less. (Owner directive 2026-07-11; full text in `~/.claude/CLAUDE.md`.)
