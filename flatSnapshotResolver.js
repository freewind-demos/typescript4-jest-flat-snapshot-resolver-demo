const path = require('path');

module.exports = {
  // redefine snapshot dir to just beside the files
  resolveSnapshotPath: (testPath, snapshotExtension) => testPath + snapshotExtension,
  resolveTestPath: (snapshotFilePath, snapshotExtension) => snapshotFilePath.slice(0, -snapshotExtension.length),
  testPathForConsistencyCheck: path.resolve(__dirname, './add.test.ts'),
};
