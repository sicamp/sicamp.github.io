var util = require('util');

module.exports = require('enb/lib/build-flow').create()
    .name('create-page-bemjson')
    .target('target', '?.bemjson.js')
    .defineOption('pageType')
    .builder(function () {
        var json = { block: 'page' };

        if (this._pageType && this._pageType !== 'common') {
            json.mods = { type: this._pageType };
        }

        return util.format('(%s)', JSON.stringify(json));
    })
    .createTech();
