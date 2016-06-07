module.exports = (bh) => {
    bh.match('enlisted__search', (ctx) => {
        ctx.tag('input');
        ctx.attr('type', 'search');
        ctx.attr('placeholder', ctx.param('hint'));
    });
};
