const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "fg",
    projectName: "sample-mfe",
    webpackConfigEnv,
    argv,
    outputSystemJS: true,
  });

  const config = merge(defaultConfig, {});

  // Remove react and react-dom from externals to bundle them
  config.externals = config.externals.filter(
    ext => !['react', 'react-dom', 'react-dom/client'].includes(ext)
  );

  return config;
};
