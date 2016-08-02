module.exports = (bh) => {
    bh.match('things', (ctx, json) => {
        ctx.tag('section');
        ctx.mix({
            block: 'wrapper'
        });
        ctx.content([
            {
                block: 'title',
                content: json.title
            },
            (json.things || []).map(thing => ({
                block: 'yummy',
                mix: {
                    block: 'things',
                    elem: 'item'
                },
                content: [
                    {
                        elem: 'title',
                        content: thing.title
                    },
                    {
                        elem: 'text',
                        content: thing.text
                    }
                ]
            }))
        ]);
    });
};
