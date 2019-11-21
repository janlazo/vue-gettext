var webpackTestConfig = require('./webpack-test.config')
process.env.CHROME_BIN = process.env.CHROME_BIN || require('puppeteer').executablePath()

module.exports = function (config) {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha', 'sinon-chai'],
    files: ['../test/index.js'],
    preprocessors: {
      '../test/index.js': ['webpack'],
    },
    webpack: webpackTestConfig,
    webpackMiddleware: {
      noInfo: true,
    },
  })
}
