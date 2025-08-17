import { Page } from '@playwright/test';
import { gmailLocators } from '../locator/gmailLocators';

export class GmailPage {
  constructor(private page: Page) {}

  async login(user: string, pass: string) {
    if (await this.page.locator(gmailLocators.emailInput).isVisible().catch(() => false)) {
      await this.page.fill(gmailLocators.emailInput, user);
      await this.page.click(gmailLocators.identifierNext);
      await this.page.waitForTimeout(1500);
      await this.page.fill(gmailLocators.passwordInput, pass);
      await this.page.click(gmailLocators.passwordNext);
      await this.page.waitForLoadState('networkidle');
    }
  }

  async search(query: string) {
    await this.page.fill(gmailLocators.searchBox, query);
    await this.page.keyboard.press('Enter');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async openFirstEmail() {
    await this.page.getByRole('textbox', { name: 'Search mail' }).click();
  await this.page.locator('#gs_sbt50 td').filter({ hasText: 'Interview Invite Aumni Techworks' }).first().click();
  }

  async reply(message: string) {
    const replyBtn = this.page.locator(gmailLocators.replyBtn);
    if (await replyBtn.isVisible().catch(() => false)) {
      await replyBtn.click();
    } else {
      await this.page.keyboard.press('r');
    }
    await this.page.locator(gmailLocators.bodyArea).fill(message);
    await this.page.locator(gmailLocators.sendBtn).click();
  }
}
