module.exports = (bh) => {
    bh.match('menu', (ctx) => {
        const items = ctx.param('items');

        ctx.tag('nav');
        ctx.content([
            {
                elem: 'toggle'
            },
            {
                elem: 'list',
                content: items.map((item) => {
                    return bh.utils.extend({
                        elem: 'item'
                    }, item);
                })
            }
        ]);
    });
};
