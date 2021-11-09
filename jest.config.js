module.exports = {
  preset: "react-native",
  verbose: true,
  testPathIgnorePatterns: [
    '/node_modules',
    '/android',
    '/assets',
    '/ios'
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  setupFiles: [
    "./test-env.ts"
  ],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "jest-styled-components"
  ]
}