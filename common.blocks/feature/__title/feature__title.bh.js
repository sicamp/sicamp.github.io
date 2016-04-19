module.exports = (bh) => {
    bh.match('feature__title', (ctx) => {
        ctx.tag('h4');
        ctx.mix({ block: 'yummy', elem: 'title' });
    });
};
