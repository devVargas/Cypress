const { defineConfig } = require("cypress");
const fs = require("fs");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const pathToEnv = "cypress.env.json";

      if (fs.existsSync(pathToEnv)) {
        const fileEnv = JSON.parse(fs.readFileSync(pathToEnv));
        console.log("Conteúdo do cypress.env.json:", fileEnv);
        config.env = {
          ...config.env,
          ...fileEnv,
        };
      }

      return config;
    },
    baseUrl: "http://127.0.0.1:4000/",
    video: true,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports", 
      overwrite: false,
      html: true,
      json: false,
      timeStamp: "mmddyyyy_HHMMss"
    },
  },
});
