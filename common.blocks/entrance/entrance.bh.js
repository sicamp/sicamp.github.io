module.exports = (bh) => {
    bh.match('entrance', function(ctx) {
        ctx.mix({ block: 'text' });
        ctx.tag('article');
        ctx.content({
            block: 'wrapper',
            content: [
                {
                    block: 'title',
                    content: ctx.param('title')
                },
                ctx.param('text')
            ]
        });
    });
};
