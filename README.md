# Playwright login Automation Tests

## Overview
This repository contains Playwright-based automated tests for a sample DEV login page.
It validates critical authentication flows and UI behaviors using Chromium (Chrome).


---

## Test Coverage

The following login-related scenarios are automated:

- ✅ Login page loads correctly
- ✅ Username & Password fields visibility
- ✅ Keep Me Logged In checkbox toggle
- ✅ Password visibility (eye icon) toggle
- ✅ Validation errors for empty credentials
- ✅ Forgot Password flow (open reset page)
- ✅ Return to Login from Forgot Password
- ✅ Successful login with valid credentials
- ✅ Logout and redirect back to login page

---

## Tech Stack

- **Playwright**
- **Node.js**
- **JavaScript**
- **Chromium (Chrome only)**

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
