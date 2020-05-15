const { override, addWebpackAlias, addLessLoader } = require("customize-cra");

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

const config = override(
  addWebpackAlias({
    "@": resolve("src"),
  }),
  addLessLoader({
    strictMath: true,
    noIeCompat: true,
    modules: true,
  })
);

module.exports = config;
