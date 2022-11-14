const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');


module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
      new WebpackPwaManifest({
        name: 'JATE',
        short_name: 'JATE',
        description: 'A Bomb Text Editor!',
        display: 'standalone',
        background_color: '#160d34',
        theme_color: '#160d34',
        start_url: '/',
        
      })
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
