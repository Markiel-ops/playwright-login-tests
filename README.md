![Playwright Tests](https://github.com/Markiel-ops/sentinel-e2e/actions/workflows/playwright.yml/badge.svg)

# Sentinel E2E Automation (Playwright)

This project demonstrates end-to-end (E2E) test automation for a login flow using Playwright.

It is intentionally scoped as a portfolio-ready example that showcases clean test structure,
Page Object Model usage, stable assertions, and secure environment-based configuration
for authentication testing.


---

## Tech Stack
- Playwright (TypeScript)
- Node.js
- Page Object Model (POM)
- Environment-based configuration (`.env`)


---

## Key Design Decisions

## Test Coverage

The test suite currently covers the core login flow of the application, including:

- Valid user authentication
- Page navigation and URL validation during login
- Post-login state verification

Additional authentication and post-login scenarios are intentionally archived
to keep the active scope focused and stable.


---

## Project Structure

```text
sentinel-e2e/
├─ tests/
│  ├─ login.spec.ts
│  └─ _archive/
│     └─ auth/
├─ pages/
│  └─ LoginPage.ts
├─ .env.example
├─ playwright.config.ts
└─ README.md

```

---

## How to Run

```bash
npm install
npx playwright install
npx playwright test
```
