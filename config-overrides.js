const path = require('path');

/* config-overrides.js */
module.exports = function override(config, env) {
  // 路径别名
  config.resolve.alias = {
    '@': path.join(__dirname, '.', 'src')
  };
  return config;
}