module.exports = (bh) => {
    bh.match('enrollment', (ctx) => {
        ctx.tag('section');
        ctx.mix({ block: 'text' });
        ctx.content({
            block: 'wrapper',
            content: [
                {
                    block: 'title',
                    content: ctx.param('title')
                },
                {
                    block: 'entrollment',
                    elem: 'text',
                    content: ctx.param('text')
                }
            ]
        });
    });
};
