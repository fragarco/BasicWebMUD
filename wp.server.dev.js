const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
	target: "node",
	context: path.resolve(__dirname, "./src/server"),
	entry: {
		app: "./main.ts",
	},
	output: {
		path: path.resolve(__dirname, "./dist/server"),
		filename: "server.js",
	},
	node: {
		__dirname: false,
	},

	externals: [nodeExternals()],

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
						loader: 'tslint-loader',
						options: {
                            configFile: "tslint.json",
						}
					}
				],
				exclude: /node_modules/,
			},
			{
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
