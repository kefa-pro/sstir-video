const { override, addWebpackAlias, addLessLoader, fixBabelImports } = require('customize-cra');

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

const config = override(
  addWebpackAlias({
    '@': resolve('src')
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addLessLoader({
    lessOptions: { javascriptEnabled: true },
    strictMath: true,
    noIeCompat: true,
    modules: true
  })
);

module.exports = config;
