import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "packages/ui-e2e/src/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "packages/ui-e2e/src/support/e2e.{js,jsx,ts,tsx}",
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
