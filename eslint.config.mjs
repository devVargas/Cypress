import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module", // ou "script", dependendo do seu código
      },
      globals: {
        Cypress: "readonly",
        cy: "readonly",
        describe: "readonly",
        it: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        context: "readonly",
        expect: "readonly",
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },
  pluginJs.configs.recommended,
];
