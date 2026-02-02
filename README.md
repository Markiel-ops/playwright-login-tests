![Playwright Tests](https://github.com/Markiel-ops/sentinel-e2e/actions/workflows/playwright.yml/badge.svg)

# Sentinel E2E Automation (Playwright)

Production-grade end-to-end test automation framework for an SSO-based web application, built with **Playwright** and **GitHub Actions CI**.

This project focuses on **stability, speed, and real-world auth handling**, not brittle UI scripting.

---

##   Tech Stack
- **Playwright** (JavaScript)
- **Node.js**
- **GitHub Actions** (CI)
- **SSO-safe authentication** using `storageState`

---

##   Key Design Decisions

### SSO Authentication Strategy

This application uses **Single Sign-On (SSO)**.  
Because credential entry is handled by an external Identity Provider:

- I do **NOT** test username/password form validation
- I do **NOT** depend on unstable login UI selectors
- I validate **routing, access control, and session state**
- Authentication is handled once via `globalSetup`
- Tests reuse a stored authenticated session (`storageState`)

This approach aligns with common enterprise QA practices for testing SSO-based applications.

---

##  Test Types

### Smoke Tests
- Fast, minimal checks
- Validate the app loads correctly for authenticated users
- Run on **every PR and push**

## Run Tests Locally

```bash
npm install
npx playwright install
npx playwright test
```

## Final Action

```bash
git add README.md
git commit -m "docs: update README"
git push
```