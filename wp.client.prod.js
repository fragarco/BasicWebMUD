const path = require("path");
const uglyfy = require("uglifyjs-webpack-plugin");

module.exports = {
	target: "web",
	context: path.resolve(__dirname, "./src/client"),
	entry: {
		app: "./app.tsx",
	},
	output: {
		path: path.resolve(__dirname, "./dist/public"),
		filename: "js/client_app.js",
	},

	// Uglify to minimize the code
	optimization: {
		minimizer: [
			new uglyfy({
				cache: true,
				parallel: true,
				uglifyOptions: {
					compress: true,
					ecma: 6,
					mangle: true,
				},
				sourceMap: false,
			})
		]
	},

	// add '.ts' and '.tsx' as resolvable extensions
	resolve: {
		extensions: [ '.tsx', '.ts', '.js', '.css', '.sass', '.scss' ]
	},

	// setup loaders
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.tsx?$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
                            configFile: "tsconfig.json",
						}
					}
				],
				exclude: [/node_modules/, /\.test.tsx?$/],
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.s[a|c]ss$/,
				use: [
					'sass-loader',
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=100000&name=./assets/[hash].[ext]'
			}
		]
	},
}
