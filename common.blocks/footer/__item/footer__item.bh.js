module.exports = (bh) => {
    bh.match('footer__item', (ctx) => {
        ctx.tag('p');
    });
};
