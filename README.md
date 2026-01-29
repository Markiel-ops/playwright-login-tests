# Playwright login Automation Tests

## Overview
End-to-end QA automation covering login validation, authentication state reuse, and post-login dashboard access using Playwright.

---

## Test Coverage

The following login-related scenarios are automated:

- Login page loads correctly
- Username & Password fields visibility
- Keep Me Logged In checkbox toggle
- Password visibility (eye icon) toggle
- Validation errors for empty credentials
- Forgot Password flow (open reset page)
- Return to Login from Forgot Password
- Successful login with valid credentials
- Logout and redirect back to login page

---

## Tech Stack

- Playwright
- Node.js
- dotenv

---

## Setup

- Clone repository
- Create '.env' from '.env.example'
- Install dependencies

---

## Run Tests
    npx playwright test

---

## Test Coverage
- Login page validations
- Authentication flow
- Dashboard access verification

---

## Project Structure

```text
playwright-login-tests/
├── tests/
│   └── example.spec.js
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
