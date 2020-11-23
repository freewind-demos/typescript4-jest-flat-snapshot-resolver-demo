const path = require('path');

/**
 * @type {import('@jest/types/build/Config').InitialOptions}
 */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  snapshotResolver: path.resolve(__dirname, './flatSnapshotResolver.js'),
};
