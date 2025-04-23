import { expect, test } from './fixtures/test.fixture';
import { waitForPageLoad, takeScreenshot } from '../utils/helpers';

test.describe('Playwright Website Tests', () => {
  test('should have correct title', async ({ homePage, page }) => {
    await expect(page).toHaveTitle(/Playwright/);
    await takeScreenshot(page, 'homepage-title-check');
  });

  test('should navigate to get started page', async ({ homePage, docsPage }) => {
    await homePage.header.clickGetStarted();
    await docsPage.verifyPageTitle('Installation');
  });

  // test('should search in docs', async ({ homePage, docsPage, page }) => {
  //   await homePage.header.clickDocs();
  //   await docsPage.searchInput.fill('locator');
  //   await expect(page.locator('.search-result-item')).not.toHaveCount(0);
  // });
});