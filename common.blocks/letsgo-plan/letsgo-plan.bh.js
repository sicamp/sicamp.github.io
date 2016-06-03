module.exports = (bh) => {
    bh.match('letsgo-plan', function(ctx, json) {
        const sections = ctx.param('sections');

        ctx.tag('section');
        ctx.content({
            block: 'wrapper',
            content: [
                {
                    block: 'title',
                    mix: { block: json.block, elem: 'title' },
                    content: ctx.param('title')
                },
                {
                    block: json.block,
                    elem: 'sections',
                    content: sections.map((section) => {
                        return bh.utils.extend({
                            block: 'letsgo-plan',
                            elem: 'section',
                            mods: {
                                outdated: section.outdated ? 'yes' : null
                            }
                        }, section);
                    })
                }
            ]
        });
    });
};
