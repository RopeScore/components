const path = require('path');
const { default: Icons } = require('unplugin-icons/vite');
const { default: Unocss } = require('unocss/vite')
module.exports = {
  stories: ['../lib/**/*.stories.mdx', '../lib/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  async viteFinal(config) {
    config.root = path.dirname(__dirname);
    config.plugins.push(Unocss({
      config: path.join(__dirname, '..', 'uno.config.ts')
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
