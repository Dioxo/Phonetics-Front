import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { options } from '../internal/options';

const swcConfig = {
    env: {
        targets: {
            ie: '11',
        },
        mode: 'entry',
        coreJs: '3',
    },
    minify: false,
    jsc: {
        target: 'es2015',
        parser: {
            syntax: 'typescript',
            jsx: true,
            tsx: true,
            decorators: true,
            exportDefaultFrom: true,
        },
    },
};

export const baseConfig: Configuration = {
    devtool: 'source-map',
    output: {
        path: options.folders.build,
        filename: '[name].bundle.js',
        environment: {
            arrowFunction: false,
            const: false,
        },
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader: 'swc-loader',
                    options: swcConfig,
                },
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'swc-loader',
                    options: swcConfig,
                },
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|jp2|webp|svg|pdf)$/,
                type: 'asset/inline',
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            // Speeds up TypeScript type checking and ESLint linting (by moving each to a separate process)
        }),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
        }),
        // new ESLintPlugin({
        //     context: path.join(getCallerFolder(), "src"),
        //
        //     extensions: ['ts', 'tsx'],
        //     exclude: ['node_modules', 'dist'],
        //     fix: true,
        //     failOnError: false,
        //     failOnWarning: false,
        // }),
    ],
    ignoreWarnings: [/Failed to parse source map/],
};
