export class LoginPage {
  constructor(page) {
    this.page = page;

    // locators
    this.usernameInput = page.locator('#user');
    this.passwordInput = page.locator('#password');
    this.registerButton = page.getByRole('button', { name: 'login' });
    this.successMessage = page.getByRole('heading', { name: 'Login realizado' });
  }

  async goto() {
    await this.page.goto('https://automationpratice.com.br/login');
  }

  async register(user, password) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(password);
    await this.registerButton.click();
  }
}
