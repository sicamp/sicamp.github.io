module.exports = (bh) => {
    bh.match('promo__title', (ctx) => {
        ctx.tag('h1');
    });
};
