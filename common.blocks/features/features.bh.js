module.exports = (bh) => {
    bh.match('features', (ctx) => {
        ctx.tag('section');
        ctx.mix({ block: 'bevel' });
        ctx.content({
            block: 'wrapper',
            content: ctx.content()
        }, true);
    });
};
