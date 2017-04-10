module.exports = (bh) => {
    bh.match('menu', (ctx) => {
        ctx.param('items', []);
    });
};
