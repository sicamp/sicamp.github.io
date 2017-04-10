module.exports = (bh) => {
    bh.match('header', (ctx) => {
        ctx.param(
            'notification',
            ''
        );
    });
};
