const CracoEsbuildPlugin = require('craco-esbuild');

module.exports = {
  plugins: [
    {
      plugin: CracoEsbuildPlugin,
      options: {
        skipEsbuildJest: true, // Optional. Set to true if you want to use babel for jest tests,
      },
    },
  ],
};
