const karmaJasmine = require("karma-jasmine");
const karmaChromeLauncher = require("karma-chrome-launcher");
const karmaJasmineHtmlReporter = require("karma-jasmine-html-reporter");
const karmaCoverageIstanbulReporter = require("karma-coverage-istanbul-reporter");
const generated = require("@angular/cli/plugins/karma");

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      karmaJasmine,
      karmaChromeLauncher,
      karmaJasmineHtmlReporter,
      karmaCoverageIstanbulReporter,
      generated
    ],
    client: {
      clearContext: false
    },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
