module.exports = (bh) => {
    bh.match('letsgo-plan__section', (ctx, json) => {
        ctx.tag('section');
        ctx.content([
            {
                elem: 'date',
                content: json.date
            },
            {
                elem: 'text',
                tag: 'ul',
                content: json.items.map((item) => {
                    return {
                        tag: 'li',
                        content: item
                    };
                })
            }
        ]);
    });
};
