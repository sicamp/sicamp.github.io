module.exports = (bh) => {
    bh.match('parallel__requirements', (ctx, json) => {
        ctx.content([
            {
                tag: 'h4',
                content: 'Вам сюда, если вы:'
            },
            {
                elem: 'list',
                items: json.requirements
            }
        ]);
    });
};
