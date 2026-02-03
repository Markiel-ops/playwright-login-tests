import { Page } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(): Promise<void> {
    // Relies on Playwright baseURL (clean + standard)
    await this.page.goto('/');
  }

  async isSSOTriggered(): Promise<boolean> {
    const url = this.page.url();
    return /sso|login|auth/i.test(url);
  }
}
