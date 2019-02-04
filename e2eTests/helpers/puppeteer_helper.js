/* global Helper */

const pageLoaded = page =>
  new Promise(resolve => {
    page.once('load', () => resolve());
  });

class MyPuppeteer extends Helper {
  async amOnPage(url) {
    const { page } = this.helpers.Puppeteer;
    await page.goto(url, {
      timeout: 170000,
    });
  }

  async waitForPageLoad() {
    const { page } = this.helpers.Puppeteer;
    await pageLoaded(page);
  }
}
module.exports = MyPuppeteer;
