const path = require('path');

const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
		new ExtractTextPlugin({
			filename: 'resources/styles-[hash].css',
			allChunks: true,
			disable: false
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/main/index.html')
		})
	].filter(x => x)
};
