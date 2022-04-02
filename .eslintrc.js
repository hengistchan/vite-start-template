// ts-check
const { defineConfig } = require("eslint-define-config");
module.exports = defineConfig({
  root: true,

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  parser: "vue-eslint-parser",

  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],

  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "vue/multi-word-component-names": "off",
  },

  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],

  ignorePatterns: ["auto-imports.d.ts", "components.d.ts"],
});
