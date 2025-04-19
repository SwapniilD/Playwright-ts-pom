import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class DocsPage extends BasePage {
  readonly pageTitle: Locator;
  readonly searchInput: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.locator('h1');
    this.searchInput = page.getByPlaceholder('Search docs');
  }

  async verifyPageTitle(expectedTitle: string): Promise<void> {
    await expect(this.pageTitle).toHaveText(expectedTitle);
  }
}