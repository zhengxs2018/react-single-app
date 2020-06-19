const { resolve } = require('path')

const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

const defaults = require('lodash/defaults')
const omit = require('lodash/omit')

const vendors = [
  //  Library
  { module: 'axios', entry: 'dist/axios.min.js', exports: 'axios' },
  { module: 'redux', entry: 'dist/redux.min.js', exports: 'Redux' },
  { module: 'tslib', entry: 'tslib.js', exports: 'window' },
  { module: 'papaparse', entry: 'papaparse.min.js', exports: 'Papa' },
  { module: 'better-mock', entry: 'dist/mock.browser.min.js', exports: 'Mock' },
  // React
  { module: 'react', entry: 'umd/react.production.min.js', exports: 'React' },
  { module: 'react-dom', entry: 'umd/react-dom.production.min.js', exports: 'ReactDOM' },
  { module: 'react-router-dom', entry: 'umd/react-router-dom.min.js', exports: 'ReactRouterDOM' },
  { module: 'react-router-config', entry: 'umd/react-router-config.min.js', exports: 'ReactRouterConfig' },
  { module: 'react-redux', entry: 'dist/react-redux.min.js', exports: 'ReactRedux' },
  { module: 'prop-types', entry: 'prop-types.min.js', exports: 'PropTypes' },
]

module.exports = {
  webpack(config, env) {
    if (env === 'production') {
      config.plugins.push(
        new HtmlWebpackExternalsPlugin({
          hash: true,
          files: ['index.html'],
          outputPath: 'static/vendors',
          externals: vendors.map((opts) => omit(opts, ['exports'])),
        }),
      )
    }

    config.externals = [
      config.externals || [],
      vendors.reduce((externals, opts) => {
        externals[opts.module] = opts.exports
        return externals
      }, {}),
    ].flat()

    defaults(config.resolve.alias, {
      '@': resolve(__dirname, './src'),
    })

    return config
  },
  paths(paths) {
    return Object.assign(paths, {
      // 修改构建输出目录
      appBuild: resolve(__dirname, 'dist'),
    })
  },
}
