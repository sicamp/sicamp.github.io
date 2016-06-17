module.exports = (bh) => {
    bh.match('map', (ctx) => {
        ctx.attr('data-camp', JSON.stringify(ctx.param('camp')));
        ctx.attr('data-school', JSON.stringify(ctx.param('school')));

        ctx.content([
            {
                block: 'wrapper',
                content: {
                    block: 'title',
                    content: ctx.param('title')
                }
            },
            {
                elem: 'container',
                attrs: { id: 'map' }
            }
        ]);
    });
};
