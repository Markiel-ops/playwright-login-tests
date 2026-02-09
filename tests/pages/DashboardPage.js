class DashboardPage {
  constructor(page) {
    this.page = page;
    this.header = page.locator('h1'); // 👈 THIS is the problem
  }

  async goto() {
    await this.page.goto('/');
  }

  async isLoaded() {
  await this.page.waitForURL(/dashboard|voyadores/i);
}

}

module.exports = DashboardPage;
