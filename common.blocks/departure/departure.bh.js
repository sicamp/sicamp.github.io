module.exports = (bh) => {
    bh.match('departure', function(ctx, json) {
        const sections = ctx.param('sections');

        ctx.attr('id', 'departure');
        ctx.content({
            block: 'wrapper',
            content: [
                {
                    block: 'title',
                    content: ctx.param('title')
                },
                sections.map((section) => {
                    return {
                        block: json.block,
                        elem: 'section',
                        mods: section.mods,
                        content: [
                            {
                                elem: 'section-title',
                                content: section.title
                            },
                            {
                                elem: 'section-text',
                                content: section.text
                            }
                        ]
                    };
                })
            ]
        });
    });
};
