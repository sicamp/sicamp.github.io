module.exports = (bh) => {
    bh.match('page_type_letsgo', (ctx) => {
        ctx.content([
            {
                block: 'letsgo-plan'
            },
            {
                block: 'price'
            },
            {
                block: 'departure'
            },
            {
                block: 'map'
            }
        ]);
    });

    bh.match('page_type_letsgo__scripts', () => {
        return [
            { block: 'map', elem: 'script' },
            { elem: 'js', url: bh.lib.static('script.js') }
        ];
    });
};
