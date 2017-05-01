module.exports = (bh) => {
    bh.match('parallel__section', (ctx, json) => {
        ctx.content([
            {
                tag: 'h4',
                elem: 'section-title',
                content: json.title
            },
            {
                elem: 'list',
                items: json.items
            }
        ]);
    });
};
