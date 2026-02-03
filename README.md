![Playwright Tests](https://github.com/Markiel-ops/sentinel-e2e/actions/workflows/playwright.yml/badge.svg)

# Sentinel E2E Automation (Playwright)

## Overview

This project demonstrates end-to-end (E2E) automation for a login flow using Playwright.

It was intentionally designed and implemented to showcase clean automation structure,
Page Object Model usage, stable validations, and secure environment-based configuration
for authentication workflows.

---

## Tech Stack

- Playwright (TypeScript)
- Node.js
- Page Object Model (POM)
- Environment-based configuration (`.env`)

---

## Test Coverage

The automation suite covers the core login flow of the application, including:

- User authentication
- Page navigation and URL validation during login
- Post-login state verification

Additional authentication and post-login scenarios are intentionally archived
to maintain a focused and stable active scope.

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
