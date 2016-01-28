var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: PATHS.build,
    filename: '[name].[hash].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
        include: PATHS.src
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        include: PATHS.src
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new ManifestPlugin()
  ]
};
