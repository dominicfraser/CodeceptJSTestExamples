exports.config = {
  tests: '../tests/ch_test.js',
  output: '../output',
  timeout: 10000,
  helpers: {
    CustomPuppeteerHelperOne: {
      require: '../helpers/puppeteer_helper.js',
    },
    Puppeteer: {
      url: '/',
      chrome: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
      waitForAction: 500,
      waitForTimeout: 60000,
      show: true,
    },
  },
};
