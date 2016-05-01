module.exports = (bh) => {
    bh.match('menu__toggle', (ctx) => {
        ctx.tag('button');
        ctx.attr('type', 'button');
    });
};
