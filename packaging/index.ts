#!/usr/bin/env node

import { getCallerFolder, removeFolder } from "./internal/utils";
import webpack from "webpack";
import yargs from "yargs";
import { options, packageJson } from "./internal/options";
import { webpackDevConfig } from "./webpack/webpack.dev.config";
import { webpackPublishConfig } from "./webpack/webpack.publish.config";
import WebpackServer from "webpack-dev-server";
import { copy, ensureDir } from "fs-extra";
import path from "path";
import { execSync } from "child_process";
import { webpackStandaloneConfig } from "./webpack/webpack.standalone.config";

let build = async () => {
	console.log("Bundling the application with the following options:", options);
	await ensureDir(options.folders.build);
	return new Promise<void>((resolve, reject) => {
		const compiler = webpack(webpackPublishConfig);
		compiler.run((e, stats) => {
			if (e) reject(e);
			console.log(
				"Bundle complete",
				stats?.toString({
					colors: true,
				})
			);
			compiler.close(() => resolve());
		});
	});
};

let standalone = async () => {
	console.log(
		"Bundling the application as a standalone app with the following options:",
		options
	);
	await ensureDir(options.folders.build);
	await new Promise<void>((resolve, reject) => {
		const compiler = webpack(webpackStandaloneConfig);
		compiler.run((e, stats) => {
			if (e) reject(e);
			console.log(
				"Bundle complete",
				stats?.toString({
					colors: true,
				})
			);
			compiler.close(() => resolve());
		});
	});

	await copy(options.folders.public, options.folders.build, {
		overwrite: false,
		recursive: true,
	});
};

const startDev = () => {
	console.log("start", options);

	const server = new WebpackServer(
		{ ...webpackDevConfig.devServer },
		webpack(webpackDevConfig)
	);
	server.watchFiles(getCallerFolder());
	server.startCallback((e) => {
		if (e) console.error(e);
		console.log(`Starting server on http://localhost:${options.dev.port}`);
	});
};

const publish = async () => {
	console.log(
		`Publishing the application as ${packageJson.name}:${packageJson.version}`
	);

	console.log(
		`Removing ${options.folders.build} and ${options.folders.publish} folders`
	);
	await Promise.all([
		removeFolder(options.folders.build),
		removeFolder(options.folders.publish),
	]);

	await build();

	await Promise.all([
		copy(options.folders.build, path.resolve(options.folders.publish, "build")),
		copy(options.folders.src, path.resolve(options.folders.publish, "src")),
		copy(
			path.resolve(getCallerFolder(), "package.json"),
			path.resolve(options.folders.publish, "package.json")
		),
		copy(
			path.resolve(getCallerFolder(), ".npmrc"),
			path.resolve(options.folders.publish, ".npmrc")
		),
	]);

	execSync(`npm publish`, { cwd: options.folders.publish, stdio: "inherit" });
};

yargs
	.command("start", `Start the application on port ${options.dev.port}`, startDev)
	.command("build", `Build the application to ${options.folders.build}`, build)
	.command(
		"publish",
		`Publish the application ${packageJson.name}:${packageJson.version}`,
		publish
	)
	.command("standalone", "Build the application as a standalone", standalone)
	.parse();
