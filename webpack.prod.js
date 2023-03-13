const path = require('path');
const { merge } = require('webpack-merge');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
    plugins: [
      new WorkboxWebpackPlugin.InjectManifest({
        swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
        swDest: './swr.bundle.js',
      }),
      new WebpackPwaManifest({
        id: 'Restaurant-catalogue-v1',
        start_url: '.',
        name: 'EatExplore',
        short_name: 'EEx',
        description: 'Restaurant Catalogue for you',
        background_color: '#ffffff',
        theme_color: '#F9FCFB',
        icons: [
          {
            src: path.resolve('./src/public/icons/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            purpose: 'maskable',
          },
        ],
      }),
      new ImageminWebpackPlugin({
        plugins: [
          ImageminMozjpeg({
            quality: 50,
            progressive: true,
          }),
        ],
      }),
      new ImageminWebpWebpackPlugin({
        config: [
          {
            test: /\.(jpe?g|png)/,
            options: {
              quality: 50,
            },
          },
        ],
        overrideExtension: true,
      }),
    ],
  },
});
