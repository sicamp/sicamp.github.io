const yenv = process.env.YENV || 'development';
const path = require('path');
const config = require(path.resolve(__dirname, yenv, 'config'));
const pages = require('./pages');

module.exports = function() {
    config.pages = pages.getPages();

    return config;
};
