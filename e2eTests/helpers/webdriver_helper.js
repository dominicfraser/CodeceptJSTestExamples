/* global Helper */

const pageLoaded = browser =>
  browser.waitUntil(
    async () => {
      const state = await browser.execute('return document.readyState');
      return state === 'complete';
    },
    100000, // timeout
    'timeout', // timeoutMsg
    500, // interval
  );

class MyWebDriver extends Helper {
  async waitForPageLoad() {
    const { browser } = this.helpers.WebDriver;
    await pageLoaded(browser);
  }
}
module.exports = MyWebDriver;
