import path from 'path';
import {InitialOptions} from "@jest/types/build/Config";

const config: InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // FIXME how to make 'flatSnapshotResolver.js' to .ts
  snapshotResolver: path.resolve(__dirname, './flatSnapshotResolver.js'),
}

module.exports = config;
