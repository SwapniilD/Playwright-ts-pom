# Playwright TypeScript Automation Framework

![Playwright Logo](https://playwright.dev/img/playwright-logo.svg)

A scalable test automation framework built with Playwright and TypeScript, implementing the Page Object Model pattern for maintainable UI testing. Features cross-browser support, CI/CD integration, and comprehensive reporting.

## Features

- Cross-browser testing (Chromium, Firefox, WebKit)
- Page Object Model implementation
- TypeScript support with strict typing
- Comprehensive test fixtures
- HTML and trace reports
- CI/CD ready configuration

## Prerequisites

- Node.js v16+
- npm v8+
- Git

## Setup

```bash
# Clone the repository
git clone https://github.com/SwapniilD/Playwright-ts-pom.git
cd playwright-ts-pom

# Install dependencies
npm install

# Install browsers
npx playwright install

## Running Tests
npm test	Run all tests
npx playwright test --project=chromium	Run tests in specific browser
npx playwright test tests/example.spec.ts	Run specific test file
npx playwright test --headed	Run in headed mode
npx playwright test --trace on	Run with trace (for debugging)

## Report Generation
# View HTML report
npx playwright show-report

# Generate CI-friendly report
npx playwright test --reporter=html
