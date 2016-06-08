const path = require('path');
const mkdirp = require('mkdirp');

const pages = require('../config/pages');
const pageBemjson = require('./techs/create-page-bemjson');
const techs = require('enb-bem-techs');

const bhCommonJs = require('enb-bh/techs/bh-commonjs');
const bemjsonToHtml = require('enb-bh/techs/bemjson-to-html');

const browserjsTech = require('enb-js/techs/browser-js');
const postcssTech = require('enb-postcss/techs/enb-postcss');

const borschikTech = require('enb-borschik/techs/borschik');

/**
 * Здесь описаны правила сборки итоговых HTML-страниц из блоков.
 * Все страницы имеют общий CSS-файл (т.н. common-bundle).
 * @see https://github.com/enb-make/enb
 */
module.exports = function (config) {
    const BUILD = 'build';
    const DIST = 'dist';
    const ASSETS = 'assets';
    const CSS_TARGET = getDistFile(ASSETS, 'style.css');
    const JS_TARGET = getDistFile(ASSETS, 'script.js');

    const PAGES = pages.getPagesList();

    mkdirp.sync(path.join(BUILD, DIST, ASSETS));

    PAGES.forEach(page => {
        mkdirp.sync(path.join(BUILD, DIST, page.path));

        page.BEMJSON_TARGET = page.type + '.bemjson.js';
        page.HTML_TARGET = getDistFile(page.path, 'index.html');
    });

    config.node(BUILD, nodeConfig => {
        nodeConfig.addTechs([
            [ techs.levels, getLevels() ],
            techs.files,
            techs.deps,
            techs.bemjsonToBemdecl,
            pageBemjson,
            bhCommonJs
        ]);

        PAGES.forEach(page => {
            nodeConfig.addTech([
                pageBemjson,
                {
                    pageType: page.type,
                    target: page.BEMJSON_TARGET
                }
            ]);

            nodeConfig.addTech([
                bemjsonToHtml,
                {
                    bhFile: '?.bh.js',
                    bemjsonFile: page.BEMJSON_TARGET,
                    target: page.HTML_TARGET
                }
            ]);

            nodeConfig.addTarget(page.HTML_TARGET);
        });
    });

    /**
     * Сборка статики
     */
    config.mode('development', () => {
        config.node(BUILD, nodeConfig => {
            nodeConfig.addTech([
                postcssTech,
                {
                    target: CSS_TARGET,
                    sourcemap: true,
                    plugins: getPostcssPlugins()
                }
            ]);

            nodeConfig.addTech([
                browserjsTech,
                {
                    target: JS_TARGET,
                    iife: true,
                    sourcemap: true
                }
            ]);

            nodeConfig.addTargets([ CSS_TARGET, JS_TARGET ]);
        });
    });

    /**
     * В продакшне минифицируем CSS и JS
     */
    config.mode('production', () => {
        config.node(BUILD, nodeConfig  => {
            nodeConfig.addTech([
                postcssTech,
                {
                    target: '?.pre.css',
                    sourcemap: false,
                    plugins: getPostcssPlugins()
                }
            ]);

            // Фризинг статики из CSS (картинок и шрифтов). См .borschik
            nodeConfig.addTech([
                borschikTech,
                {
                    source: '?.pre.css',
                    target: CSS_TARGET,
                    minify: true,
                    freeze: true
                }
            ]);

            nodeConfig.addTech([
                browserjsTech,
                {
                    target: JS_TARGET,
                    iife: true,
                    compress: true,
                    sourcemap: false
                }
            ]);

            nodeConfig.addTargets([ CSS_TARGET, JS_TARGET ]);
        });
    });

    // Уровни переопределения
    function getLevels() {
        return {
            levels: [ 'vendor.blocks', 'common.blocks', 'data.blocks' ].map(level => config.resolvePath(level))
        };
    }

    function getDistFile() {
        return path.join.apply(path, [ DIST ].concat(Array.prototype.slice.call(arguments, 0)));
    }

    function getPostcssPlugins() {
        return [
            require('postcss-simple-vars'),
            require('postcss-nested'),
            require('postcss-cssnext')({ browsers: [ 'last 2 versions', 'Chrome >= 34', 'iOS >= 7' ] }),
            require('postcss-url')({
                url: 'rebase'
            })
        ];
    }
};
