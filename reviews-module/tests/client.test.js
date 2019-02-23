const puppeteer = require("puppeteer");

const timeout = 3000;

describe(
  "client side test",
  () => {
    let page;
    beforeAll(async () => {
      var browser = await puppeteer.launch();
      page = await browser.newPage();
      var id = 1;
      await page.goto(`http://localhost:3005/${id}`);
    }, timeout);

    it("should load without error", async () => {
      var text = await page.evaluate(() => document.body.textContent);
      await expect(text).toContain("Reviews");
    });
  },
  timeout
);