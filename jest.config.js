module.exports = {
    rootDir: "./",
    roots: [
        "<rootDir>/src"
    ],
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleNameMapper: {
        "\\.(css|scss)$": "<rootDir>/jest/myidentity-obj-proxy.js",
    },
    setupFilesAfterEnv: ["<rootDir>/jest/setupTests.ts"],
    globals: {
        "ts-jest": {
            tsConfig: "<rootDir>/tsconfig.json",
        },
    },
    moduleFileExtensions: [
        "js",
        "ts",
        "tsx",
        "json",
        "css",
        "scss"
      ],
  }