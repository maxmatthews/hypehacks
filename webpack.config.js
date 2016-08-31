module.exports = {
	entry: "./js/index",
	output: {
		path: "build/",
		filename: "bundle.js",
		publicPath: "/build/"
	},
	module: {
		loaders: [
			{test: /\.(svg|mp3|ogg|png|jpg)/, loaders: ["url", "file"]},
			{test: /\.css/, loaders: ["style", "css"]}
		]
	},
	resolve: {
		extensions: [".js", ".css"]
	},
	devServer: {
		hot: true
	}
}