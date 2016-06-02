module.exports = (bh) => {
    bh.match('entrance-bonus', function(ctx) {
        const sections = ctx.param('sections');

        ctx.tag('section');
        ctx.attr('id', 'bonus');
        ctx.content({
            block: 'wrapper',
            content: [
                {
                    block: 'title',
                    mix: {
                        block: 'entrance-bonus',
                        elem: 'title'
                    },
                    content: ctx.param('title')
                },
                sections.map((section) => {
                    var text;

                    if (bh.utils.isSimple(section.text)) {
                        text = {
                            elem: 'section-text',
                            content: section.text
                        };
                    } else {
                        text = bh.utils.extend({ elem: 'section-text' }, section.text);
                    }

                    return {
                        block: 'entrance-bonus',
                        elem: 'section',
                        mods: section.mods,
                        content: [
                            {
                                elem: 'section-title',
                                content: section.title
                            },
                            text
                        ]
                    }
                })
            ]
        });
    });
};
