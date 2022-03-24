/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  modulePathIgnorePatterns: ['dist/'],
  verbose: true,
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};


