const merge = require('webpack-merge');
const commonConfig = require('./config/webpack.config.base')
const developmentConfig = require('./config/webpack.config.dev');
const productionConfig = require('./config/webpack.config.prod');
const devEnv = process.env.NODE_ENV !== 'production'

module.exports = () => {
  if(devEnv) {
    return merge(commonConfig, developmentConfig);
  }
  if(!devEnv) {
    return merge(commonConfig, productionConfig);
  }
  throw new Error('No matching configuration was found!');
}