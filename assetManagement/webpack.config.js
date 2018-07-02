const path = require('path');

module.exports = {
	entry:'./src/index.js',
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},//这样可以直接import './style.css'文件了，本来只可以js使用
			{
				test:/\.(png|svg|jpg|gif)$/,
				use:[
					'file-loader'
				]
			},//为了加载图片
			{
				test:/\.(woff|woff2|eot|ttf|otf)$/,
				use:[
					'file-loader'
				]
			},//加载字体文件
			{
				test:/\.xml$/,
				use:[
					'xml-loader'
				]
			},//加载xml文件
			{
				test:/\.(csv|tsv)$/,
				use:[
					'csv-loader'
				]
			}
		]
	}
};