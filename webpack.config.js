const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack入門 vol.3',
      filename: 'webpack.html',
      template: './src/index.html',
      description: 'Webpack入門 vol.3 についてのページです'
    }),
    new CleanWebpackPlugin(['dist']),
  ],
};