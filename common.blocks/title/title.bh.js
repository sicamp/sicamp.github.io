module.exports = (bh) => {
    bh.match('title', (ctx) => {
        ctx.tag('h1');
    });
};
