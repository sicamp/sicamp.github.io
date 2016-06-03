module.exports = (bh) => {
    bh.match('parallel__tasks', function(ctx, json) {
        ctx.content([
            {
                elem: 'title',
                mix: { block: 'yummy', elem: 'title' },
                content: ctx.param('title')
            },
            {
                elem: 'tasks-list',
                mix: { block: 'yummy', elem: 'text' },
                tag: 'ul',
                content: json.tasks
            }
        ]);
    });
};
