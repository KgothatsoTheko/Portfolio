# Kgothatso Theko | Engineer & Builder

Angular portfolio for KG's work across software engineering, GTM systems, Salesforce, and automation.

The September 2026 refresh uses a warm paper-and-green visual direction, original portrait and project assets, current experience, and the philosophy of Kaizen expressed through working habits.

## Run locally

```bash
npm ci
npm start
```

Open the local address printed by Angular CLI (normally http://localhost:4200).

## Production build

```bash
npm run build
```

Build output: `dist/portfolio`. Existing Firebase configuration is retained. No deployment is performed by the build.

## Where to edit

- `src/app/components/homepage`: introduction, portrait, CV link, and current work.
- `src/app/components/projects/projects.component.ts`: selected projects, filters, archive, and project URLs.
- `src/app/components/about`: biography, principles, experience, education, and credentials.
- `src/app/components/services`: engineering, integration, GTM, and Salesforce capabilities.
- `src/app/components/contact`: contact details and reactive contact form.
- `src/app/components/toolbar`: responsive navigation and saved light/dark preference.
- `src/styles.scss`: shared typography, spacing, colors, and reduced-motion behavior.
- `src/index.html`: page title, description, social metadata, and canonical URL.
- `src/assets/KgothatsoTheko-Resume.pdf`: supplied latest engineering CV.

## Behavior

- Projects filter by Software, GTM & automation, Salesforce, and Security.
- The earlier project collection remains available in an expandable archive.
- The theme preference is stored locally when browser storage is available.
- Navigation uses Angular fragments. Previous `/landing/projects`-style URLs redirect to the matching section.
- The contact form uses the existing `ApiService` and `send-message` backend endpoint. It validates required fields, prevents duplicate submissions, keeps entered text on errors, and resets only after success.
- The page makes no external font or icon-font requests.

## Verification

Production compilation passed. Browser checks covered:

- Desktop, tablet, and mobile widths: 1440, 768, 390, and 320 pixels, with no horizontal overflow.
- Project filtering, theme persistence, menu navigation, legacy URLs, and sticky-header scroll offsets.
- Image loading and the engineering PDF download.
- Invalid form submission, failure recovery, and successful reset using mocked HTTP responses; no real message was sent.
- No uncaught browser runtime errors in those checks.

Two non-blocking component-style budget warnings remain: homepage and projects are about 2.4 kB each against a 2 kB warning threshold; both remain below the 4 kB error threshold. The initial application bundle is about 386 kB, below the existing 500 kB warning threshold.

Live email delivery and third-party project availability were not independently verified. Google Play links are labeled as testing pages. Content follows the supplied CVs and profile brief; no new impact percentages or government-adoption claims were added.

No live deployment or remote Git push was performed.
