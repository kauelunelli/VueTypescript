module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  testMatch: ['**/src/**/*.test.ts'],
};
