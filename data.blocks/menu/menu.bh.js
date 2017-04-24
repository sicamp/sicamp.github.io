module.exports = (bh) => {
    bh.match('menu', (ctx) => {
        ctx.param('items', [
            {
                url: bh.lib.resolve('letsgo'),
                content: 'Как попасть в лагерь'
            },
            {
                url: bh.lib.resolve('entrance'),
                content: 'Вступительная работа'
            }
        ]);
    });
};
