const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

// webpack-dev-middleware と webpack.config.js を使うようにexpressに伝える
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath // ここでさきほどの publicPathを使用
}));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!\n');
});