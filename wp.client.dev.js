const path = require("path");

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

	// dev server setup
	devServer: {
		contentBase: path.resolve(__dirname, "./dist/public"),
		host: '0.0.0.0',
		port: 9090,
		proxy: {
			'/api': {
				target: 'http://localhost:8080',
				secure: false
			}
		}
	},

	//enable sourcemaps for debugging webpack's output
	//through source-map-loader
    devtool: "source-map",

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
