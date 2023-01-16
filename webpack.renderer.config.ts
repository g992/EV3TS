import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';

import {VueLoaderPlugin} from "vue-loader";

export const rendererConfig: Configuration = {
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      ...rules
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    alias: {
      vue: "vue/dist/vue.esm-bundler.js"
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
