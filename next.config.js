// @ts-ignore
require('dotenv').config();

const path = require('path');
const plugins = require('next-compose-plugins');
const images = require('next-images');
const videos = require('next-videos');
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

  // Use for dynamic path generation:
  // async exportPathMap() {
  //   return {
  //     '/': { page: '/' },
  //   };
  // },

  distDir: '../.next',
  exportTrailingSlash: true,

  webpack(config) {
    return config;
  },
};

console.log('Next Config!');

module.exports = plugins(
  [
    [images, { exclude: path.resolve(__dirname, 'src/assets/svg') }],
    [reactSvg, { include: path.resolve(__dirname, 'src/assets/svg') }],
    fonts,
    videos,
  ],
  nextConfig
);
