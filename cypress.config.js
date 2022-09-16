const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ebxr9t',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  retries: {
    openMode: 2,
  },
  
});
