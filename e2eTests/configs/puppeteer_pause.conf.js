exports.config = {
  tests: '../tests/pause_test.js',
  output: '../output',
  timeout: 10000,
  helpers: {
    Puppeteer: {
      url: '/',
      chrome: {
        // https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions
        // https://peter.sh/experiments/chromium-command-line-switches/
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
      show: true, // launches a local Chrome browser and executes tests within it
    },
  },
};
