import { options } from '../internal/options';

import { baseConfig } from './webpack.base.config';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { getCallerFolder } from '../internal/utils';

export const webpackStandaloneConfig = merge(baseConfig, {
    entry: options.standalone.src,
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(getCallerFolder(), options.standalone.index),
            inject: 'head',
            minify: true,
        }),
    ],
    output: {
        clean: true,
    },
});
