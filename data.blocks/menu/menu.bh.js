module.exports = (bh) => {
    bh.match('menu', (ctx) => {
        ctx.param('items', [
            {
                url: bh.lib.resolve('letsgo'),
                content: 'Как попасть в лагерь'
            },
            {
                url: bh.lib.resolve('things'),
                content: 'Что взять с собой'
            },
            {
                url: bh.lib.resolve('enlisted'),
                content: 'Список зачисленных'
            }
        ]);
    });
};
