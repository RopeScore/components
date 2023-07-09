const path = require('path');
const WindiCSS = require('vite-plugin-windicss').default;
const Icons = require('unplugin-icons/vite');
module.exports = {
  stories: ['../lib/**/*.stories.mdx', '../lib/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  async viteFinal(config) {
    config.root = path.dirname(__dirname);
    config.plugins.push(WindiCSS({
      config: path.join(__dirname, '..', 'windi.config.ts')
    }));
    config.plugins.push(Icons({
      compiler: 'vue3'
    }));
    return config;
  },
  docs: {
    autodocs: true
  }
};