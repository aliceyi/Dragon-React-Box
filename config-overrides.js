const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require("path");

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addWebpackAlias({
    // add your alias
    '@': path.resolve(__dirname, '')
  })
)