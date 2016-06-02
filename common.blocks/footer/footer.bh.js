module.exports = (bh) => {
    bh.match('footer', function(ctx) {
        const sections = ctx.param('sections');

        ctx.tag('footer');
        ctx.content({
            block: 'wrapper',
            content: sections.map((section) => {
                return {
                    block: 'footer',
                    elem: 'section',
                    content: [
                        {
                            elem: 'title',
                            content: section.title
                        },
                        section.items.map((item) => {
                            if (item.url) {
                                return {
                                    block: 'footer',
                                    elem: 'item',
                                    content: bh.utils.extend({
                                        block: 'link'
                                    }, item)
                                };
                            } else {
                                return {
                                    block: 'footer',
                                    elem: 'item',
                                    content: item
                                };
                            }
                        })
                    ]
                };
            })
        });
    });
};
