const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  assetPrefix: process.env.BASE_PATH || undefined,
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH || undefined,
  },
  trailingSlash: true,
};