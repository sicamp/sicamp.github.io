module.exports = (bh) => {
    bh.match('letsgo', (ctx) => {
        ctx.tag('section');
        ctx.content({
            block: 'wrapper',
            content: [
                {
                    block: 'letsgo',
                    elem: 'text',
                    content: ctx.param('title')
                },
                {
                    block: 'letsgo',
                    elem: 'price',
                    content: ctx.param('price')
                },
                {
                    block: 'letsgo',
                    elem: 'text',
                    content: ctx.param('hint')
                },
                {
                    block: 'letsgo',
                    elem: 'button',
                    tag: 'a',
                    attrs: {
                        href: ctx.param('url')
                    },
                    content: ctx.param('button')
                }
            ]
        });
    });
};
