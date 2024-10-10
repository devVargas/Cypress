import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        Cypress: "readonly", 
        cy: "readonly",       
        describe: "readonly", 
        it: "readonly",       
        beforeEach: "readonly",
        afterEach: "readonly", 
        context: "readonly",  
        expect: "readonly"    
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