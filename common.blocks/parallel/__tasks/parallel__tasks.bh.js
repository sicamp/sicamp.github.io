module.exports = (bh) => {
    bh.match('parallel__tasks', (ctx, json) => {
        ctx.content([
            {
                elem: 'title',
                mix: { block: 'yummy', elem: 'title' },
                content: 'Задачи'
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
