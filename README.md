

---

### ✅ `README.md`

````md
# assignemnet-aumnitechworks-com

## SDET Take-Home Assignment – Playwright

Automated test suite for Reddit and Gmail workflows using [Playwright](https://playwright.dev/).

---

## 📦 Setup

Install dependencies:

```bash
npm install
npx playwright install
````

---

## 🌐 Environment Variables

Create a `.env` file or pass these variables when running tests.

### For Reddit:

```env
SUBREDDIT=learnprogramming
```

### For Gmail:

```env
GMAIL_USER=yourtest@gmail.com
GMAIL_PASS=yourpassword
```

---

## 🧪 Running Tests

### Run Reddit Test

```bash
# Option 1: Using npm script
npm run reddit

# Option 2: Directly via Playwright
npx playwright test src/test/reddit.spec.ts
```

### Run Gmail Test

```bash
# Option 1: With env vars inline
GMAIL_USER=xxx GMAIL_PASS=xxx npx playwright test src/test/gmail.spec.ts

# Option 2: Using npm script (requires .env or pre-set env vars)
npm run gmail
```

---

## 🧾 Notes

* Make sure 2FA is disabled for the Gmail test account or use an **App Password** if using Gmail with 2FA.
* You can use the `.env` file or pass environment variables inline when running tests.

---

## 📁 Project Structure

```
assignemnet-aumnitechworks-com/
│── env/
│ └── .env # Environment variables (subreddit, Gmail creds, etc.)
│
│── src/
│ ├── locator/ # Centralized locators
│ │ ├── redditLocators.ts
│ │ └── gmailLocators.ts
│ │
│ ├── page/ # Page Object Models
│ │ ├── RedditPage.ts
│ │ └── GmailPage.ts
│ │
│ └── test/ # Test specs
│ ├── reddit.spec.ts
│ └── gmail.spec.ts
│
│── playwright.config.ts
│── package.json

```

---

## ✅ Scripts (from package.json)

```json
"scripts": {
  "postinstall": "npx playwright install --with-deps",
  "test": "playwright test",
  "reddit": "playwright test src/test/reddit.spec.ts",
  "gmail": "playwright test src/test/gmail.spec.ts",
  "allure:generate": "allure generate ./allure-results --clean",
  "allure:open": "allure open ./allure-report"
}
```

---

## 🧑‍💻 Author

**Raza Shah**
GitHub: [@raza1709](https://github.com/raza1709)

---

## 🐛 Issues

Report issues [here](https://github.com/raza1709/assignemnet-aumnitechworks-com/issues).

```

---

Let me know if you'd like it exported as a file or enhanced with screenshots, CI setup, or GIFs!
```
