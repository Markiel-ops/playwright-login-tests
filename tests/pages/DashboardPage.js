class DashboardPage {
  constructor(page) {
    this.page = page;
    this.header = 'h1';
  }

  async isLoaded() {
    return this.page.locator(this.header).isVisible();
  }
}

module.exports = { DashboardPage };
