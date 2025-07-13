/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    browser: true, // For browser-specific globals like `window`, `document`
    es2021: true, // For ES2021 globals and syntax support
    node: true, // For Node.js globals (important for vite.config.js, .eslintrc.js)
    "vue/setup-compiler-macros": true, // Crucial for Vue 3's <script setup> macros
  },
  extends: [
    "eslint:recommended", // Basic ESLint recommended rules
    "plugin:vue/vue3-recommended", // Vue 3 specific recommended rules
    "@vue/eslint-config-prettier", // Handles Prettier conflicts (disables conflicting rules)
    // Add this for TypeScript linting with Vue:
    "plugin:vitest/recommended", // Recommended rules for Vitest tests
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    // Essential for parsing script blocks inside .vue files
    extraFileExtensions: [".vue"],
  },
  plugins: [
    "vue", // Required to process Vue SFCs
    "vitest", // Required for Vitest rules
    "vitest-globals",
  ],
  overrides: [
    {
      // This block applies to your test files
      files: [
        "tests/**",
        "tests/unit/**/*.js", // If tests are specifically in tests/unit
        "src/**/__tests__/**/*.{js,ts}",
        "src/**/*.spec.{js,ts}",
        // If you have specific test setup files outside __tests__ or .spec
        "tests/setup.js", // Include your setup file if it contains lintable code/globals
      ],
      env: {
        // Enable Vitest globals ONLY in test files
        "vitest-globals/env": true,
      },
      rules: {
        // You might want to relax some rules in test files, e.g.,
        // 'no-console': 'off', // Allow console.log in tests
      },
    },
    // If you have Cypress E2E tests:
    // {
    //   files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
    //   extends: ['plugin:cypress/recommended'],
    //   env: {
    //     'cypress/globals': true // For Cypress globals like 'cy'
    //   }
    // }
  ],
};
