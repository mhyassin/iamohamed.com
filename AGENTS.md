# Repository guidance

## Project

Personal website and engineering portfolio for Mohamed Yassin at iamohamed.com.
Built with Astro, TypeScript, and Tailwind CSS. Keep the output static and
compatible with ordinary cPanel hosting; no Node.js server is available in production.
See README.md for development and deployment details.

## Source map

- `src/pages/index.astro`: homepage, current employer, about, and experience timeline.
- `src/data/cases.ts`: case-study content, rendered by `src/pages/work/[slug].astro`.
- `src/layouts/Layout.astro`: shared metadata, structured data, and document layout.
- `src/components/`: shared navigation, footer, and project cards.
- `src/styles/global.css`: design tokens and shared styles.
- `public/`: static assets and cPanel `.htaccess` configuration.
- `.github/workflows/deploy.yml`: production build and SSH upload.

## Content

- Use facts supplied by Mohamed or verified public sources. Do not invent job
  titles, employment dates, technologies, achievements, or metrics.
- When employment changes, keep the homepage's current employer, timeline,
  biography, case-study tense, and metadata consistent.
- This repository is public. Keep employer writing suitable for a public portfolio.
  Do not commit private employer code, internal URLs or architecture, customer or
  health data, unpublished screenshots, home addresses, phone numbers, or credentials.
- A supplied CV is reference material. Do not add the CV itself or copy its private
  contact details into the repository unless explicitly requested.
- Preserve the README's restriction on reuse; do not add an open-source license
  without a request from Mohamed.

## Implementation

- Match the existing typography, paper/ink/copper palette, spacing, and components.
- Preserve responsive layouts, semantic HTML, keyboard focus styles, and
  reduced-motion support. Check mobile and desktop layouts for visual changes.
- Prefer Astro components and existing Tailwind utilities. Add client-side
  JavaScript or dependencies only when the requested functionality needs them.
- Edit source files, not generated `dist/` or `.astro/` output. Keep dependency
  changes reflected in `package-lock.json`.

## Validation

- Use Node.js 22 or later and `npm ci` when dependencies are missing.
- Run `npm run build` after application changes; it includes `astro check` and
  generates all static pages. In restricted environments, use
  `ASTRO_TELEMETRY_DISABLED=1 npm run build` to avoid telemetry config writes.
- Verify affected routes and generated content. For layout or interaction changes,
  preview with `npm run dev` or `npm run preview` and inspect in a browser when available.
- Run `git diff --check` before handoff. Documentation-only changes do not need a build.
- Report validation results and distinguish local edits from pushed or deployed changes.

## Commits and pull requests

- Always use Conventional Commits for commit messages and PR titles:
  `<type>[optional scope][!]: <description>`.
- Use a lowercase type such as `feat`, `fix`, `docs`, `refactor`, `perf`, `test`,
  `build`, `ci`, `chore`, or `revert`, with a concise, imperative description.
  Examples: `feat: update current role to Tess` and
  `docs: require conventional commits and PR titles`.
- Check the PR title before creating or merging it. Prefer squash merging with
  the conventional PR title as the resulting commit subject; if using a merge
  commit, set its title explicitly to follow the same convention.
- Do not rewrite published Git history just to rename past commits.

## Deployment

- A push to `main` automatically deploys to production through GitHub Actions.
  Treat it as a deployment, not merely a remote backup.
- Keep SSH credentials in GitHub Actions secrets and server settings in repository
  variables as documented in README.md. Never print or commit secret values.
- Preserve pinned SSH host verification, deployment-path validation, and the
  upload behavior that retains unrelated server content.
