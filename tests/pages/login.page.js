class LoginPage {
  constructor(page) {
    this.page = page;

    // SSO indicators (NOT input fields)
    this.ssoButton = page.locator(
      'button:has-text("SSO"), button:has-text("Login"), button:has-text("Sign in")'
    );

    this.ssoIframe = page.frameLocator('iframe');
  }

  async goto() {
    await this.page.goto(process.env.VOYA_LOGIN_URL, {
      waitUntil: 'domcontentloaded',
    });
  }

  async isSSOTriggered() {
    // Either redirected OR iframe/button exists
    return (
      this.page.url().includes('login') ||
      (await this.ssoButton.first().isVisible().catch(() => false))
    );
  }
}

module.exports = { LoginPage };
