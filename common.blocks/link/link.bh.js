module.exports = (bh) => {
    bh.match('link', (ctx) => {
        ctx.tag('a');
        ctx.attr('href', ctx.param('url'));
    });
};
