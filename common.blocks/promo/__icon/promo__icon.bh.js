module.exports = (bh) => {
    bh.match('promo__icon', (ctx) => {
        ctx.tag('span');
    });
};
