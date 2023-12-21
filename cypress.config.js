const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.trymima.com/',
    defaultCommandTimeout: 20000,
    viewportHeight: 900,
    viewportWidth: 1400,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
