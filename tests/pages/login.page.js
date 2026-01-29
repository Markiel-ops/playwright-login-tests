class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Locators
    this.loginEntryButton = page.getByRole('button', {
      name: /log in|login|sign in/i,
    });

    this.usernameInput = page.getByRole('textbox', {
      name: /username/i,
    });

    this.passwordInput = page.locator('input[type="password"]');

    this.submitButton = page.getByRole('button', {
      name: /log in/i,
    });
  }

  async goTo() {
    await this.page.goto('/login');
  }

  async openLogin() {
    await this.loginEntryButton.click();
  }

  async fillCredentials(email, password) {
    await this.usernameInput.fill(email);
    await this.passwordInput.fill(password);
  }

  async submit() {
    await this.submitButton.click();
  }

  async logout() {
  // Open user menu / avatar
  await this.page.getByRole('button', {
    name: /profile|account|user|avatar/i,
  }).click();

  // Click logout inside the menu
  await this.page.getByRole('menuitem', {
    name: /logout|sign out/i,
  }).click();
}


}

module.exports = { LoginPage };
