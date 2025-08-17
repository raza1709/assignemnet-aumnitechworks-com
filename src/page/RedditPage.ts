import { Page } from '@playwright/test';
import { redditLocators } from '../locator/redditLocators';

export class RedditPage {
  constructor(private page: Page) {}

  async gotoSubreddit(subreddit: string) {
    await this.page.goto(`https://www.reddit.com/r/${subreddit}/`);
  }

  async loadPosts(minCount: number) {
    let count = await this.page.locator(redditLocators.postContainer).count();
    console.log("count: ",count)
    while (count < minCount) {
      await this.page.mouse.wheel(0, 2000);
      count = await this.page.locator(redditLocators.postContainer).count();
    console.log("count: ",count)

    }
  }

  async getPostTitle(index: number): Promise<string> {

  const post = this.page.locator(redditLocators.postContainer).nth(index);
const title = await post.locator(redditLocators.postTitle).innerText();

console.log(title.trim());

return title.trim();

}

  async openPost(index: number) {
    await this.page
      .locator(redditLocators.postContainer)
      .nth(index)      
      .click();
    await this.page.waitForLoadState('domcontentloaded');
     await this.page.waitForTimeout(2000);
  }

  async getFirstComment(): Promise<string> {
    const comment = this.page.locator(redditLocators.firstComment).first();
     if (await comment.isVisible()) {
    const paragraphs = await comment.locator('p').allInnerTexts();
    console.log("comment",paragraphs)
    return paragraphs.join('\n').trim();
  }

  return '(No comment found)';
  }

  async goBack() {
    await this.page.goBack({ waitUntil: 'domcontentloaded' });
  }
}
