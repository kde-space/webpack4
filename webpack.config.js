const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    usedExports: true,
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: 
        { 
          compress: {
            pure_funcs: ['Math.random', 'Promise.resolve']
           } 
        } 
      })]
  },
};
