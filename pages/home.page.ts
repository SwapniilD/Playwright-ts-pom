import { expect, Page } from '@playwright/test';
import { BasePage } from './base.page';
import { HeaderComponent } from './header.component';

export class HomePage extends BasePage {
  readonly header: HeaderComponent;

  constructor(page: Page) {
    super(page);
    this.header = new HeaderComponent(page);
  }

  async verifyTitle(): Promise<void> {
    await expect(this.page).toHaveTitle(/Playwright/);
  }
}