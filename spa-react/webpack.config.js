const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "spa-react",
    projectName: "spa-react",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {});
};
