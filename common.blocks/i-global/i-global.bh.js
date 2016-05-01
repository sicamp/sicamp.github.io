const path = require('path');
const config = require('../../config')();

module.exports = (bh) => {
    bh.lib.config = config;

    bh.lib.resolve = (name) => path.join(
        bh.lib.config.root,
        config.pages[name].path,
        bh.lib.config.postfix
    );

    bh.lib.static = (filename) => path.join(bh.lib.config.static, filename);
};
