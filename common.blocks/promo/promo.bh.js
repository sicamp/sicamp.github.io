module.exports = (bh) => {
    bh.match('promo', (ctx) => {
        ctx.tag('section');
        ctx.content({
            block: 'wrapper',
            content: [
                {
                    block: 'promo',
                    elem: 'title',
                    content: ctx.param('title')
                },
                {
                    block: 'promo',
                    elem: 'text',
                    content: ctx.param('description')
                },
                {
                    block: 'promo',
                    elem: 'yummies',
                    tag: 'section',
                    content: [
                        {
                            block: 'promo',
                            elem: 'yummy',
                            content: [
                                {
                                    block: 'promo',
                                    elem: 'icon',
                                    content: '<i class="fa fa-map-marker"></i>'
                                },
                                {
                                    block: 'promo',
                                    elem: 'yummy-text',
                                    content: ctx.param('location')
                                }
                            ]
                        },
                        {
                            block: 'promo',
                            elem: 'yummy',
                            content: [
                                {
                                    block: 'promo',
                                    elem: 'icon',
                                    content: '<i class="fa fa-calendar"></i>'
                                },
                                {
                                    block: 'promo',
                                    elem: 'yummy-text',
                                    content: ctx.param('dates')
                                }
                            ]
                        }
                    ]
                }
            ]
        });
    });
};
