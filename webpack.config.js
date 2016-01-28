var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: './src/index.js',
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
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
    new ExtractTextPlugin('styles.css')
  ],
  devtool: 'source-map'
};
