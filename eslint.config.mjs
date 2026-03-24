// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.node, // since you're working in backend practice
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
