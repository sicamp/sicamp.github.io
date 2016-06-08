module.exports = (bh) => {
    bh.match('enlisted__list', (ctx) => {
        ctx.tag('ul');
    });
};
