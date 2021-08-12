const fs = require('fs');
const path = require('path');
const ROOT_PATH = process.cwd();
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const PAGE_PATH = path.resolve(SRC_PATH, 'page');

function getEntries(baseDir, fileExt = '.js') {
    baseDir = baseDir || PAGE_PATH;
    const entryMap = {};
    const dirs = fs.readdirSync(baseDir);
    dirs.forEach((pageName) => {
        const entryAbsoluteFilePath = path.resolve(baseDir, `${pageName}/index${fileExt}`);
        if (fs.existsSync(entryAbsoluteFilePath)) {
            const entryRelativePath = `./${path.relative(ROOT_PATH, entryAbsoluteFilePath)}`;
            entryMap[pageName] = entryRelativePath;
        }
    });
    return entryMap;
}

module.exports = {
    rootPath: ROOT_PATH,
    srcPath: SRC_PATH,
    pagePath: PAGE_PATH,
    getEntries,
};