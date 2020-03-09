const path = require('path');
const Merge = require('webpack-merge');
const {
    override,
    addLessLoader
} = require('customize-cra');

/* config-overrides.js */
module.exports = override(
    // 添加 less-loader
    addLessLoader({
        strictMath: true,
        noIeCompat: true,
        // css Modules
        localIdentName: "[local]--[hash:base64:5]",
    }),
    // 自定义配置
    config => {
        // 路径别名
        config = Merge(config, { resolve: { alias: { '@': path.join(__dirname, '.', 'src') } } });
        return config;
    }
);