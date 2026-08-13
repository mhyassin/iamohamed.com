# iamohamed.com

Personal website and engineering portfolio of Mohamed Yassin.

Built with Astro, TypeScript, and Tailwind CSS. The site is statically generated and designed to run on ordinary cPanel hosting without a Node.js server.

→ [iamohamed.com](https://iamohamed.com)

## Structure

- `/` — homepage with selected work, about, experience, and contact
- `/work/onvy` — high-level mobile health platform case study
- `/work/frontend-products` — frontend career chapter across product companies
- `/work/web-commerce` — frontend and commerce foundations

Employer-related writing is deliberately high-level. This repository contains no private source code, customer information, internal architecture, proprietary screenshots, credentials, or non-public performance data.

## Local development

Requires Node.js 22 or later.

```sh
npm install
npm run dev
```

Create a production build with:

```sh
npm run build
```

The static output is written to `dist/`.

## cPanel deployment

The included GitHub Actions workflow builds and uploads `dist/` over SSH on every push to `main`.

Configure these repository variables:

- `CPANEL_HOST`
- `CPANEL_PORT`
- `CPANEL_USER`
- `CPANEL_DEPLOY_PATH` — the absolute document-root path for `iamohamed.com`

Configure these repository secrets:

- `CPANEL_SSH_KEY` — a private key restricted to the deployment account
- `CPANEL_KNOWN_HOSTS` — the pinned SSH host-key entry for the cPanel server

The workflow rejects relative paths and the server root. It uploads the generated files without deleting unrelated server content. Never commit credentials or host secrets to the repository.

## Content policy

Only public, portfolio-appropriate material belongs here. Do not add private employer code, internal URLs, customer or health data, unpublished product screenshots, home address, phone number, or deployment credentials.

## License

No license is granted for reuse or redistribution of the site’s source, design, or content.
