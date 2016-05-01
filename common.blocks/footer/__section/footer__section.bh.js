module.exports = (bh) => {
    bh.match('footer__section', (ctx) => {
        ctx.tag('section');
    });
};
