module.exports = {
  "collectCoverage": true,
  "collectCoverageFrom": ["src/**/*.{js,jsx}"],
  // "coverageReporters": ["text-summary", "html"],
  // "globals": {
  //   __base: __dirname
  // },
  // "globalSetup": "./tests/helpers/matchers",
  // "setupFiles": ["./tests/helpers/matchers"],
  "setupTestFrameworkScriptFile": "./tests/helpers/setup",
  "testEnvironment": "jsdom",
  "testEnvironmentOptions": {},
  "testMatch":["**/tests/**/*.js?(x)"],
  // "testRegex": "",
  "testPathIgnorePatterns": ["/helpers/"]
};