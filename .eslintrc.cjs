/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-recommended", "eslint:recommended", "@vue/eslint-config-prettier"],
  env: {
    "vue/setup-compiler-macros": true,
  },
  ignorePatterns: ["*dist/*"],
  rules: {
    "max-len": ["error", 120],
    semi: "off",
    "vue/max-len": [
      "error",
      {
        code: 120,
        template: 120,
        tabWidth: 2,
        comments: 120,
        ignorePattern: "",
        ignoreComments: true,
        ignoreTrailingComments: false,
        ignoreUrls: false,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
        ignoreRegExpLiterals: false,
        ignoreHTMLAttributeValues: false,
        ignoreHTMLTextContents: false,
      },
    ],
    "prettier/prettier": ["error", { printWidth: 120, semi: false }],
  },
}
