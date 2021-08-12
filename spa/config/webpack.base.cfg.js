const path = require('path');
const util = require('../helper/webpack');

const entries = util.getEntries();

function getConfig() {
    const config = {
        entry: entries,
        output: {
            path: path.resolve(util.rootPath, 'outputs'),
            filename: '[name].js',
            publicPath: "https://cdn.xx.com/fe/novel/"
        }
    };
    return config;
}

module.exports = getConfig();