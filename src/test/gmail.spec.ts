import { test, chromium, expect } from '@playwright/test';
import { GmailPage } from '../page/GmailPage';

const GMAIL_URL = process.env.GMAIL_URL || '';
const GMAIL_USER = process.env.GMAIL_USER || '';
const GMAIL_PASS = process.env.GMAIL_PASS || '';
const GMAIL_QUERY = process.env.GMAIL_QUERY || 'from:"aumni techworks"';
const GMAIL_REPLY = process.env.GMAIL_REPLY || 'I accept the invitation to proceed to the next round';

test('Gmail - Search invite and reply', async () => {
  if (!GMAIL_USER || !GMAIL_PASS) {
    throw new Error('Missing Gmail credentials in env variables');
  }

  const context = await chromium.launchPersistentContext('', { headless: false });
  const page = await context.newPage();

  const gmail = new GmailPage(page);

  await page.goto(GMAIL_URL);
  await gmail.login(GMAIL_USER, GMAIL_PASS);
  await gmail.search(GMAIL_QUERY);
  await gmail.openFirstEmail();
  await gmail.reply(GMAIL_REPLY);
  console.log('Reply sent successfully.');
  await context.close();
});
