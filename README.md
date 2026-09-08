# VaxLedger

A simple ledger of recorded immunizations.

Immunization history connected by FinchNode. [Explore FinchNode](https://finchnode.com).

## What this app does

A standalone, responsive application for exploring a fixed **fictional** patient record. It calls FinchNode's live public synthetic API directly from your browser. Every clinical value comes from the API; there is no invented patient history, treatment advice, or real patient connection.

## Run locally

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

Build with `npm run build`; preview with `npm start`. The deployable folder is `dist/`.

## Deploy free on Render

Create a **Static Site**, select this public repository and branch `main`, set build command to `npm ci && npm run build`, and publish directory to `dist`. A `render.yaml` Blueprint is included with security headers. No environment variables or API keys are needed. Render provides the HTTPS onrender.com address. Static sites share workspace bandwidth and build-minute limits; see [Render's free hosting documentation](https://render.com/docs/free).

## Data and security

Base URL: `https://api.finchnode.com/demo/v1`. Patient: `patient-demo-001`. [API contract](https://finchnode.com/demo-openapi.json).

The application accepts only responses explicitly marked synthetic. It sends no credentials, collects no real medical information, and has no analytics or backend. Session selections remain in memory and reset on refresh. Downloads contain synthetic data only. API failures show an error and an explicit retry; no fallback silently replaces live data. The public API is rate limited, so avoid polling.

**Never add production API keys to browser code, build variables, URLs, or commits.** A production integration requires a separately secured backend, patient authorization, application consent, and an appropriate privacy/security review. This demo is not a medical device or clinical tool.

## Project structure

- `app/main.tsx`: application shell and API loading
- `app/view.tsx`: this application's interaction and layout
- `app/data.mjs`: response validation and FHIR display helpers
- `app/styles.css`: responsive theme and print styles
- `app/config.json`: name and FinchNode attribution
- `tests/`: data contract and error-path checks
- `render.yaml`: static hosting configuration

## Accessibility

Semantic headings, labeled controls, keyboard focus, visible loading/error feedback, responsive layouts, and reduced-motion support. Charts preserve the underlying values as text. Local session state is intentionally ephemeral.

## License

MIT. FinchNode and source-system names belong to their respective owners. This is an independent demonstration, not a claim of endorsement.
