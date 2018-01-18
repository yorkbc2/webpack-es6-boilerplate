var path = require('path')

var APP_DIR = path.resolve(__dirname, "src"),
	BUNDLE_DIR = path.resolve(__dirname, "dist");

module.exports = {
	entry: APP_DIR+"/app.es6",
	output: {
		filename: "bundle.js",
		path: BUNDLE_DIR
	},
	module: {
		loaders: [
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ["es2015"]
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.es6']
	},
	watch: true
}