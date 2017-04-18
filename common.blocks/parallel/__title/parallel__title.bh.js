module.exports = (bh) => {
    bh.match('parallel__title', (ctx) => {
        ctx.tag('h3');
        ctx.mix({ block: 'yummy', elem: 'title' });
    });
};
