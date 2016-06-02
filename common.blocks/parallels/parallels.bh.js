module.exports = function (bh) {

    bh.match('parallels', (ctx) => {
        const parallels = ctx.param('parallels');
        const tasks = ctx.param('tasks');

        ctx.tag('article');
        ctx.mix({
            block: 'bevel'
        });

        ctx.content({
            block: 'wrapper',
            content: [
                {
                    block: 'title',
                    mix: {
                        block: 'parallels',
                        elem: 'title'
                    },
                    content: ctx.param('title')
                },
                {
                    block: 'parallels',
                    elem: 'list',
                    content: parallels.map((parallel) => {
                        var block = bh.utils.extend({
                            block: 'parallel'
                        }, parallel);

                        if (Array.isArray(block.tasks)) {
                            block.tasks = block.tasks.map((t) => {
                                return {
                                    code: t,
                                    title: tasks[t]
                                };
                            });
                        }

                        return block;
                    })
                }
            ]
        });
    });

};
