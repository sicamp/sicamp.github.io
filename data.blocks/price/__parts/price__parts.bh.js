module.exports = (bh) => {
    bh.match('price__parts', (ctx) => {
        ctx.param('parts', []);
    });
};
