module.exports = (bh) => {
    bh.match('parallel__letter', (ctx) => {
        ctx.tag('h3');
    });
};
