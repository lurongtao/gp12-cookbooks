const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')

// module.exports = function override(config, env) {
//   // do stuff with the webpack config...
//   return config
// }

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),

  addWebpackAlias({
    ['assets']: path.resolve(__dirname, 'src/assets'),
    ['styles']: path.resolve(__dirname, 'src/assets/styles'),
    ['images']: path.resolve(__dirname, 'src/assets/images'),
  }),
)