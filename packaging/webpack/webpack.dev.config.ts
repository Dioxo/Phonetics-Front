import path from "path";
import { merge } from "webpack-merge";
import fs from "fs";

import { baseConfig } from "./webpack.base.config";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";
import { options } from "../internal/options";
import { getCallerFolder } from "../internal/utils";

export const webpackDevConfig = merge(baseConfig, {
	mode: "development",
	entry: {
		react: options.dev.src,
	},
	devServer: {
		open: true,
		port: options.dev.port,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(getCallerFolder(), options.dev.index),
			filename: "index.html",
			inject: "body",
		}),
	],
});
