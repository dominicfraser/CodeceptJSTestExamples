exports.config = {
  tests: '../tests/include_i_test.js',
  output: '../output',
  include: {
    I: '../helpers/include_i_steps.js',
  },
  helpers: {
    Puppeteer: {
      url: '/',
      chrome: {
        // https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions
        // https://peter.sh/experiments/chromium-command-line-switches/
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
      show: false,
    },
  },
};
