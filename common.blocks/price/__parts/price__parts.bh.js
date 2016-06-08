module.exports = (bh) => {
    bh.match('price__parts', (ctx) => {
        ctx.content(
            ctx.param('parts').map(part => {
                return bh.utils.extend({
                    elem: 'part',
                    mods: { type: part.name }
                }, part);
            })
        );
    });

    bh.match('price__part', (ctx, json) => {
        ctx.tag('section');
        ctx.content([
            {
                elem: 'part-title',
                content: json.title
            },
            {
                elem: 'part-price',
                content: json.price
            },
            {
                elem: 'part-text',
                content: json.text
            }
        ]);
    });
};
