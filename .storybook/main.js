module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    //https://github.com/storybookjs/presets/tree/master/packages/preset-scss
    '@storybook/preset-scss',
    // "@storybook/preset-create-react-app",
  ]
}