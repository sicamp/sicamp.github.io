module.exports = (bh) => {
    bh.match('parallel', (ctx, json) => {
        var content = [
            {
                elem: 'letter',
                mix: { block: 'yummy', elem: 'icon' },
                tag: 'p',
                content: json.letter
            },
            {
                elem: 'content',
                content: [
                    {
                        elem: 'title',
                        mix: { block: 'yummy', elem: 'title' },
                        content: json.title
                    },
                    {
                        elem: 'description',
                        mix: { block: 'yummy', elem: 'text' },
                        content: json.description
                    }
                ]
            }
        ];

        if (Array.isArray(json.tasks)) {
            content.push({
                elem: 'tasks',
                tasks: json.tasks.map((task) => bh.utils.extend({ elem: 'task' }, task))
            });
        } else {
            content[1].content.push(json.tasks);
        }

        ctx.mix({ block: 'yummy' });
        ctx.tag('section');
        ctx.content(content);
    });
};
