module.exports = (bh) => {
    bh.match('enlisted', (ctx) => {
        ctx.tag('section');
        ctx.content({
            block: 'wrapper',
            content: [
                {
                    block: 'title',
                    content: ctx.param('title')
                },
                {
                    block: 'enlisted',
                    elem: 'search'
                },
                {
                    block: 'enlisted',
                    elem: 'list',
                    content: ctx.param('list')
                        .map((student) => ({ elem: 'student', student: student }))
                },
                {
                    block: 'enlisted',
                    elem: 'disclaimer',
                    mix: { block: 'text' },
                    content: ctx.param('disclaimer')
                }
            ]
        });
    });
};
