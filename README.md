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

## Clone the repository
`git clone https://github.com/SwapniilD/Playwright-ts-pom.git`
`cd playwright-ts-pom`

## Install dependencies
`npm install`

## Install browsers
`npx playwright install`

## Running Tests
1.`npm test`	Run all tests

2.`npx playwright test --project=chromium`	Run tests in specific browser

3.`npx playwright test tests/example.spec.ts`	Run specific test file

4.`npx playwright test --headed`	Run in headed mode

5.`npx playwright test --trace` on	Run with trace (for debugging)

## Report Generation
## View HTML report
`npx playwright show-report`

## Generate CI-friendly report
`npx playwright test --reporter=html`

## CI/CD Integration (GitHub Actions)

Add this workflow to `.github/workflows/playwright.yml` for running tests on every push/PR with built-in reporting:

```yaml
name: Playwright Tests
on: [push, pull_request]  # Triggers on push/PR events

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          
      - name: Install dependencies
        run: npm install
        
      - name: Install browsers
        run: npx playwright install
        
      - name: Run tests
        run: npx playwright test
        
      - name: Upload report
        if: always()  # Upload even if tests fail
        uses: actions/upload-artifact@v3
        with:
          name: playwright-report
          path: playwright-report/
```

## Share & Support

**Spread the word!** If this helped you, consider:  
🔗 Sharing on [LinkedIn](your-post-link)  
⭐ Starring the repo  
🐛 Reporting issues  

*"A solid Playwright TS starter saves hundreds of hours for dev teams."*  
