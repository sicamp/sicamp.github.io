module.exports = (bh) => {
    bh.match('footer__title', (ctx) => {
        ctx.tag('h4');
    });
};
