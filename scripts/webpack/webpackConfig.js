require('dotenv').config()

const path = require('path')
const webpack = require('webpack')
const serveStatic = require('serve-static')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const LodashPlugin = require('lodash-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const SpritePlugin = require('svg-sprite-loader/plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const paths = require('../utils/paths')
const env = require('../utils/env')

const rules = []

const getStyleLoaders = loaders => [
  env.isDev ? 'style-loader' : MiniCssExtractPlugin.loader
].concat(loaders)

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: env.isDev,
    config: {
      path: './scripts/webpack/postcss.config.js'
    }
  }
}

// babel
rules.push({
  test: /\.js$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  query: {
    cacheDirectory: env.isDev
  }
})

// scss files (only in src)
rules.push({
  test: /\.scss/,
  include: paths.srcPath,
  use: getStyleLoaders([
    {
      loader: 'css-loader',
      options: {
        importLoaders: 2,
        sourceMap: env.isDev,
        modules: true,
        localIdentName: env.isDev
          ? '[name]-[local]-[hash:base64:5]'
          : '[hash:base64:5]'
      }
    },
    postcssLoader,
    {
      loader: 'sass-loader',
      options: {
        sourceMap: env.isDev,
        includePaths: [
          path.resolve(paths.srcPath, 'styles')
        ]
      }
    }
  ])
})

// css files
rules.push({
  test: /\.css/,
  use: getStyleLoaders([
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        sourceMap: env.isDev
      }
    },
    postcssLoader
  ])
})

// images
rules.push({
  test: /\.(ico|jpg|jpeg|png|gif)(\?.*)?$/,
  use: [
    {
      loader: 'file-loader',
      query: {
        name: env.isDev ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]'
      }
    }
  ]
})

// svgs
rules.push({
  test: /\.(svg)(\?.*)?$/,
  exclude: paths.iconsPath,
  use: [
    {
      loader: 'file-loader',
      query: {
        name: env.isDev ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]'
      }
    },
    {
      loader: 'svgo-loader',
      options: {
        plugins: [
          { removeTitle: true },
          { convertPathData: false },
          { removeUselessStrokeAndFill: true }
        ]
      }
    }
  ]
})

// svg icons
rules.push({
  test: /\.svg$/,
  include: paths.iconsPath,
  use: [
    {
      loader: 'svg-sprite-loader',
      options: {
        extract: true,
        spriteFilename: 'sprite-[hash:6].svg'
      }
    }
  ]
})

let plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(paths.srcPath, 'index.html'),
    inject: true,
    minify: env.isProd
  }),
  new LodashPlugin(),
  new Dotenv({
    safe: true,
    systemvars: true
  }),
  new SpritePlugin()
]

if (env.isDev) {
  plugins.push(
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require(path.resolve(paths.dllOutputPath, 'deps.json'))
    }),
    new AddAssetHtmlPlugin({
      filepath: require.resolve(`${paths.dllOutputPath}/deps.dll.js`),
      includeSourcemap: true
    }),
    new webpack.HotModuleReplacementPlugin()
  )
}

if (env.isProd) {
  plugins.push(
    new webpack.HashedModuleIdsPlugin(),
    new OptimizeCSSAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  )
}

if (process.env.ANALZYER === 'true') {
  plugins.push(
    new BundleAnalyzerPlugin()
  )
}

const webpackConfig = {
  mode: env.isDev ? 'development' : 'production',
  context: paths.rootPath,
  target: 'web',
  devtool: env.isDev ? 'eval' : 'hidden-source-map',
  output: {
    path: paths.distPath,
    publicPath: '/',
    filename: env.isDev ? '[name].js' : '[name].[chunkhash:8].js',
    chunkFilename: env.isDev ? '[id].chunk.js' : '[id].[chunkhash:8].chunk.js',
    pathinfo: env.isDev
  },
  optimization: {
    splitChunks: {
      chunks: env.isDev ? 'async' : 'all'
    }
  },
  plugins,
  resolve: {
    modules: [
      'node_modules',
      paths.srcPath
    ],
    descriptionFiles: ['package.json'],
    extensions: [
      '.mjs',
      '.js',
      '.json'
    ]
  },
  entry: './src/index.js',
  module: {
    rules
  },
  cache: env.isDev,
  stats: 'minimal',
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  // https://webpack.github.io/docs/configuration.html#node
  // https://github.com/webpack/node-libs-browser/tree/master/mock
  node: {
    fs: 'empty',
    vm: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}

if (env.isDev) {
  webpackConfig.devServer = {
    historyApiFallback: true,
    compress: true,
    hot: true,
    open: true,
    inline: true,
    noInfo: true,
    quiet: true,
    stats: 'minimal',
    after: app => {
      app.use('/public', serveStatic(paths.publicPath))
    }
  }
}

module.exports = webpackConfig
