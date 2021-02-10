/* eslint-disable no-param-reassign */
const path = require('path');

module.exports = function override(config) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    '@components': path.resolve(`${__dirname}/src/components`),
    '@redux': path.resolve(`${__dirname}/src/redux`),
    '@pages': path.resolve(`${__dirname}/src/pages`),
    '@theme': path.resolve(`${__dirname}/src/theme`),
    '@shared': path.resolve(`${__dirname}/src/shared`),
    '@utils': path.resolve(`${__dirname}/src/utils`),
  });

  return config;
};
