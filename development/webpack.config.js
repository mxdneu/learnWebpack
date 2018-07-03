const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry:{
		app:'./src/index.js',
		print:'./src/print.js'
	},
	devtool:'inline-source-map',
	devServer: {
    	contentBase: './dist'
   	},
	plugins:[
		new CleanWebpackPlugin(['dist']),//清除dist文件的插件
		new HtmlWebpackPlugin({
			title:'Output Management'
		})//自动生成html以及里面的配置
	],
	output:{
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,'dist'),
		publicPath:'/'
	}
};