export default {
  roots: ['<rootDir>/tests'],
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  //collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
};
