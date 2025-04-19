import { test as base, expect } from '@playwright/test';
// In test.fixture.ts
import { HomePage } from '@pages/home.page';
import { DocsPage } from '@pages/docs.page';

interface MyFixtures {
  homePage: HomePage;
  docsPage: DocsPage;
}

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await use(homePage);
  },
  docsPage: async ({ page }, use) => {
    await use(new DocsPage(page));
  },
});

// Only export the extended test fixture
export { expect };