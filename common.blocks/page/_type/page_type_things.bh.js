module.exports = (bh) => {
    bh.match('page_type_things', (ctx) => {
        ctx.content([
            {
                block: 'things',
                title: ctx.param('things-title'),
                things: ctx.param('things')
            },
            {
                block: 'documents',
                mods: {
                    bottom: 'yes'
                }
            }
        ]);
    });
};
