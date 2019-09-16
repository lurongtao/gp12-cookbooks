const { override, fixBabelImports, addWebpackAlias, overrideDevServer } = require('customize-cra')
const path = require('path')

// module.exports = function override(config, env) {
//   // do stuff with the webpack config...
//   return config
// }

// const devServer = () => {
//   return (config) => {
//     config.output.publicPath = './',
//     config.devServer = {
//       proxy: {
//         "/api": {
//           target: "http://localhost:9000",
//           changeOrigin: true
//         }
//       }
//     }
//     return config
//   }
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
    ['components']: path.resolve(__dirname, 'src/components'),
    ['utils']: path.resolve(__dirname, 'src/utils'),
  })
)