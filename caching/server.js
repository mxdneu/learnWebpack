const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const complier = webpack(config);

// tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base
app.use(webpackDevMiddleware(complier,{
	publicPath:config.output.publicPath
}));

// server the file on port 3000
app.listen(3000,function(){
	console.log('run on port 3000!\n');
})