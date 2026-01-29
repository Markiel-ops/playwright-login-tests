[![Playwright Tests](https://github.com/Markiel-ops/playwright-login-tests/actions/workflows/playwright.yml/badge.svg)](
https://github.com/Markiel-ops/playwright-login-tests/actions/workflows/playwright.yml
)

# Playwright Authentication and Navigation Automation Framework

## Overview

This repository contains a Playwright-based automation framework designed to validate
authentication behavior, access control, and authenticated navigation flows for a web application.

The framework is built with stability and maintainability in mind and is intended for
continuous integration environments rather than single-page or demo-style testing.

---

## Scope and Coverage

The framework validates the following scenarios:

- Login flow behavior and credential handling
- Authentication state reuse using Playwright `storageState`
- Access to protected routes for authenticated users
- Redirect behavior for unauthenticated access attempts
- Authenticated navigation between application pages
- Session access revocation through session invalidation
- Automated execution via GitHub Actions with CI reporting

---

## Architecture and Design Decisions

The framework follows a Page Object Model (POM) approach to separate test logic from UI interactions
and improve long-term maintainability.

Authentication is handled through a dedicated setup step that performs a UI login once and stores
the authenticated session state. This state is reused across tests to reduce execution time and
minimize flakiness caused by repeated logins.

Logout behavior is validated through session invalidation and access control checks instead of
direct UI-based logout actions. This approach avoids brittle selectors and ensures deterministic
results in CI environments where logout UI elements may not always be reliably available.

---

## Project Structure

```text
tests/
├── auth.setup.ts
├── login.spec.ts
├── protected-routes.spec.ts
├── navigation-flow.spec.ts
├── logout.spec.ts
└── pages/
    └── login.page.js

---

## Notes for Reviewers

This repository represents a finalized and stable automation baseline.

All scenarios included are actively passing in CI and are designed to demonstrate practical,
real-world Playwright usage, including authentication lifecycle handling, access control
validation, and CI-backed execution.

The structure and design choices prioritize reliability, clarity, and reusability over
UI-dependent or brittle test implementations.

---

## Setup and Usage

```

## Install Dependencies

Install all required project dependencies using npm:

```bash
npm install
```

## Environment configuration

Create a .env file at the project root with the following values:

```env
BASE_URL=https://your-app-url
VOYA_EMAIL=your-email
VOYA_PASSWORD=your-password
```

## Run tests locally

Execute the Playwright test suite locally:

```bash
npx playwright test
```

## View test report

Open the HTML report generated after test execution:

```bash
npx playwright show-report
```






