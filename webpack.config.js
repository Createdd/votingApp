const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './public/src/components/index.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'cssloader!sass-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./public/styles/main.css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.json']
  }
};
