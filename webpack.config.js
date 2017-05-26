const path = require('path');

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV || 'development';
const PROD = ENV === 'production';

exports = module.exports = {
	entry: {
		index: path.join(__dirname, 'src/main/js/index.js')
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].[chunkhash].js',
		publicPath: '/'
	},

	devServer: {
		host: '0.0.0.0', // allow access from other devices via ip
		disableHostCheck: true
	},

	resolve: {
		modules: [
			path.resolve(__dirname, 'src/main/js'),
			path.resolve(__dirname, 'node_modules')
		],
		extensions: ['.jsx', '.js']
	},

	devtool: 'cheap-module-source-map',

	externals: [
		{
			'react': 'React',
			'react-dom': 'ReactDOM'
		}
	],

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				enforce: 'pre',
				loader: 'baggage-loader',
				options: {
					'[file].scss': {}
				}
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.(ico|gif|png|jpg|svg)(\?.*)?$/,
				loader: 'url-loader', // consider using file loader here. (do we really want data uris?)
				options: {
					limit: 50,
					name: 'resources/images/[hash].[ext]',
					mimeType: 'image/[ext]'
				}
			},
			{
				test: /\.(s?)css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								plugins: () => [
									autoprefixer({ browsers: ['> 1% in US', 'last 2 versions', 'iOS > 8'] })
								]
							}
						},
						{
							loader: 'resolve-url-loader'
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				})
			}
		]
	},

	plugins: [
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
		}),
		new ExtractTextPlugin({
			filename: 'resources/styles-[hash].css',
			allChunks: true,
			disable: false
		}),
		PROD && new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false },
			sourceMap: true,
			test: /\.js(x?)($|\?)/i
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/main/index.html')
		})
	].filter(x => x)
};
