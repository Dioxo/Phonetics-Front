import { getCallerFolder, getPackageJson, getPackageJsonOptions, makeAbsolute } from './utils';
import merge from 'webpack-merge';
import path from 'path';
import { existsSync } from 'fs';

export const defaultOptions = {
    folders: {
        build: path.resolve(__dirname, '..', '..', 'app', 'build'),
        publish: path.resolve(__dirname, '..', '..', 'app', 'publish'),
        src: path.resolve(getCallerFolder(), 'src'),
        public: path.resolve(getCallerFolder(), 'public'),
    },
    publish: {
        entries: {},
    },
    dev: {
        src: path.resolve(getCallerFolder(), 'src/index.dev.tsx'),
        port: 3000,
        index: path.resolve(getCallerFolder(), 'public/index.html'),
    },
    standalone: {
        src: path.resolve(getCallerFolder(), 'src/index.tsx'),
        index: path.resolve(getCallerFolder(), 'public/index.html'),
    },
};

export const options = merge(defaultOptions, getPackageJsonOptions()) as typeof defaultOptions;

export const packageJson = getPackageJson();

options.dev.src = makeAbsolute(options.dev.src);
options.dev.index = makeAbsolute(options.dev.index);

Object.keys(options.folders).forEach((key) => {
    options.folders[key] = makeAbsolute(options.folders[key]);
});

Object.keys(options.publish.entries).forEach((key) => {
    options.publish.entries[key] = makeAbsolute(options.publish.entries[key]);
    if (!existsSync(options.publish.entries[key])) {
        throw new Error(`Entry file not found: ${options.publish.entries[key]}`);
    }
});
