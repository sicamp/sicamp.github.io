module.exports = (bh) => {
    bh.match('promo__text', (ctx) => {
        ctx.tag('p');
    });
};
