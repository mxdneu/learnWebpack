const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./src/webpack.common.js');

module.exports = merge(common, {
	plugins:[
		new UglifyJSPlugin()
	]
});