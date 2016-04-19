module.exports = (bh) => {
    bh.match('features__title', (ctx) => {
        ctx.tag('h2');
    });
};
