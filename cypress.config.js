/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const { defineConfig } = require("cypress");
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const pathToEnv = 'cypress.env.json';

      if (fs.existsSync(pathToEnv)) {
        const fileEnv = JSON.parse(fs.readFileSync(pathToEnv));
        console.log('Conteúdo do cypress.env.json:', fileEnv);
        config.env = {
          ...config.env,
          ...fileEnv,
        };
      }

      return config; // Retornando a configuração modificada
    },
    baseUrl: 'http://127.0.0.1:4000/',
    
  },
});
