const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
      manifest: 'manifest.a1a96ff21be7096db19cb44faf090647.json',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WebpackPwaManifest({
      name: 'EatExplore',
      short_name: 'EEx',
      description: 'Restaurant Catalogue for you',
      background_color: '#ffffff',
      theme_color: '#F9FCFB',
      icons: [
        {
          src: path.resolve('src/public/icons/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: 'maskable',
        },
      ],
    }),
  ],
};
