import { Locator, Page } from '@playwright/test';

export class HeaderComponent {
  readonly page: Page;
  readonly logo: Locator;
  readonly getStartedLink: Locator;
  readonly docsLink: Locator;
  readonly apiLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('.navbar__brand');
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    this.docsLink = page.getByRole('link', { name: 'Docs' });
    this.apiLink = page.getByRole('link', { name: 'API' });
  }

  async clickGetStarted(): Promise<void> {
    await this.getStartedLink.click();
  }

  async clickDocs(): Promise<void> {
    await this.docsLink.click();
  }
}