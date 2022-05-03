import { options } from '../internal/options';

import { baseConfig } from './webpack.base.config';
import { merge } from 'webpack-merge';

export const webpackPublishConfig = merge(baseConfig, {
    entry: options.publish.entries,
    mode: 'production',
});
