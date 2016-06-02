module.exports = (bh) => {
    bh.match('price', (ctx) => {
        ctx.tag('section');
        ctx.content({
            block: 'wrapper',
            content: [
                {
                    block: 'title',
                    content: ctx.param('title')
                },
                {
                    block: 'text',
                    content: ctx.param('text')
                }
            ]
        });
    });
};
