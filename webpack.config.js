const path = require('path');

exports = module.exports = {
	entry: {
		index: path.join(__dirname, 'src/main/js/index.js')
	},

	output: {
		path: path.resolve(__dirname, 'dist/client'),
		filename: 'js/[name].js',
		publicPath: '/'
	},

	devServer: {
		contentBase: path.resolve(__dirname, 'src/main/')
	},

	resolve: {
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
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	}
};
