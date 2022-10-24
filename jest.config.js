/** @type {import('jest').Config} */
const config = {
  verbose: true,
  collectCoverage: true,
  roots: ["<rootDir>/tests"],
  testEnvironment: "jsdom",
};

export default config;
