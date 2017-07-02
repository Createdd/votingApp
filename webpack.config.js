// const nodeExternals = require('webpack-node-externals');
// const path = require('path');

module.exports = {
	// target: 'node',
	// externals: [nodeExternals()],
  entry: {
    app: './src/app.js',
  },
  output: {
		// path: __dirname,
    filename: 'public/dist/bundle.js',
		// libraryTarget: 'commonjs2',
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 8100,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\js$/,
        exclude: /node_modules/,
        loader: ['react-hot-loader', 'babel-loader'],
      },
    ],
  },
};
