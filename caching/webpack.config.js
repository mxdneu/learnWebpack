const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry:{
		main:'./src/index.js',
		vendor:[
			'lodash'
		]
	},
	devtool:'inline-source-map',
	devServer: {
    	contentBase: './dist',
    	//hot:true
   	},
   	module:{
   		rules:[
   			{
   				test:/\.css$/,
   				use:['style-loader','css-loader']
   			}
   		]
   	},
	plugins:[
		new CleanWebpackPlugin(['dist']),//清除dist文件的插件
		new HtmlWebpackPlugin({
			title:'caching'
		}),//自动生成html以及里面的配置
		new webpack.NamedModulesPlugin(),
		//new webpack.HotModuleReplacementPlugin()
		new webpack.optimize.RuntimeChunkPlugin({
			name:'maniest'
		}),
		new webpack.optimize.RuntimeChunkPlugin({
			name:'vendor'
		}),
		new webpack.HashedModuleIdsPlugin(),//正常文件改变导致库的hash值也会变
	],
	output:{
		filename:'[name].[chunkhash].js',
		path:path.resolve(__dirname,'dist'),
		publicPath:'/'
	}
};