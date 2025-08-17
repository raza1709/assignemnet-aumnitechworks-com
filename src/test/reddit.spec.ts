import { test, expect } from '@playwright/test';
import { RedditPage } from '../page/RedditPage';

const SUBREDDIT = process.env.SUBREDDIT || 'learnprogramming';
const START_INDEX = 39; // 40th
const END_INDEX = 44;   // 45th

test('Reddit - Fetch titles and comments (40th to 45th)', async ({ page }) => {
  const reddit = new RedditPage(page);
  await reddit.gotoSubreddit(SUBREDDIT);
  await reddit.loadPosts(END_INDEX + 1);

  const results: { index: number; title: string; comment: string }[] = [];

  for (let i = START_INDEX; i <= END_INDEX; i++) {
    const title = await reddit.getPostTitle(i);
    await reddit.openPost(i);
    const comment = await reddit.getFirstComment();
    results.push({ index: i + 1, title, comment });
    await reddit.goBack();
  await reddit.loadPosts(END_INDEX + 1);

  }

  expect(results).toHaveLength(6);
  console.table(results);
});
