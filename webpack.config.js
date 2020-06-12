const path = require("path");
const webpack = require("webpack");

const javascript = {
	test: /\.(js)$/,
	use: [
		{
			loader: "babel-loader",
			options: { presets: ["env"] },
		},
	],
};

const config = {
	entry: {
		App: "./public/javascript/express-check.js",
	},
	devtool: "source-map",
	output: {
		path: path.resolve(__dirname, "public", "dist"),
		filename: "[name].bundle.js",
	},
	mode: "development",
};

module: {
	rules: [javascript];
}

// supress deprecation warning
process.noDeprecation = true;

module.exports = config;
