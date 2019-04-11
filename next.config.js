// @ts-ignore

require('dotenv').config();

const path = require('path');
const sass = require('@zeit/next-sass');
const typescript = require('@zeit/next-typescript');
const plugins = require('next-compose-plugins');
const images = require('next-images');
const fonts = require('next-fonts');
const reactSvg = require('next-react-svg');

const nextConfig = {
  serverRuntimeConfig: {
    /*
     * Will only be available on the server side
     * Use `import { config } from 'utils/config';`
     */
  },

  publicRuntimeConfig: {
    /*
     * Will be available on both server and client
     * Use `import { config } from 'utils/config';`
     */
  },

  webpack(config) {
    config.resolve = config.resolve || {};

    config.resolve.modules = [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules'),
    ];

    return config;
  },
};

module.exports = plugins([
  [sass, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
    webpack: (config) => {
      config.module.rules.unshift({
        test: /\.scss$/,
        use: 'next-classnames-loader',
      });

      return config;
    },
  }],

  [images, { exclude: path.resolve(__dirname, 'src/assets/svg') }],
  [reactSvg, { include: path.resolve(__dirname, 'src/assets/svg') }],

  fonts,
  typescript,
], nextConfig);
