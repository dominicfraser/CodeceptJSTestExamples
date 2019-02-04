exports.config = {
  tests: '../tests/ch_test.js',
  output: '../output',
  helpers: {
    CustomWebDriverHelperOne: {
      require: '../helpers/webdriver_helper.js',
    },
    WebDriver: {
      url: 'https://www.bbc.co.uk/',
      host: 'localhost', // container maps 4444:4444
      browser: 'chrome',
      coloredLogs: true,
      desiredCapabilities: {
        chromeOptions: {
          // https://peter.sh/experiments/chromium-command-line-switches/
          args: [
            '--headless',
            '--disable-gpu', // Temporarily needed if running headless on Windows
          ],
        },
      },
    },
  },
};
