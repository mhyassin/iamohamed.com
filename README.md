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

The included GitHub Actions workflow builds and uploads `dist/` over FTPS on every push to `main`. Configure these repository secrets:

- `CPANEL_FTP_SERVER`
- `CPANEL_FTP_USERNAME`
- `CPANEL_FTP_PASSWORD`
- `CPANEL_FTP_SERVER_DIR` — typically `/public_html/`

Use a dedicated FTP account scoped to the website directory. Never commit credentials to the repository.

## Content policy

Only public, portfolio-appropriate material belongs here. Do not add private employer code, internal URLs, customer or health data, unpublished product screenshots, home address, phone number, or deployment credentials.

## License

No license is granted for reuse or redistribution of the site’s source, design, or content.
