export default {
  coverageDirectory: "coverage",
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./src/jest.setup.ts"],
  collectCoverageFrom: [
    "./src/**/*.tsx",
    "./src/**/*.ts",
    "!src/main.tsx",
    "!src/**/vite-env.d.ts",
    "!src/utils/i18n.ts",
    "!src/utils/i18Testing.ts",
    "!src/jest.setup.ts",
  ],
};
