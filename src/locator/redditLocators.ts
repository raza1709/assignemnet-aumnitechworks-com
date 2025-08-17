// src/locator/redditLocators.ts

export const redditLocators = {

 postContainer: "//a[contains(concat(' ', normalize-space(@class), ' '), ' absolute ') and contains(concat(' ', normalize-space(@class), ' '), ' inset-0 ')]",  // XPath exact class match (fragile)
  postTitle: 'faceplate-screen-reader-content',
  postLink: 'a[id^="post-title-"]',
  firstComment: '[id$="-comment-rtjson-content"]',
};
