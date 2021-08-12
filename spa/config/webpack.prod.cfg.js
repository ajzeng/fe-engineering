const { merge } = require('webpack-merge');
const baseCfg = require('./webpack.base.cfg');

module.exports = merge(baseCfg, {
    mode: 'production'
});