module.exports = (bh) => {
    bh.match('header', function(ctx) {
        ctx.tag('header');
        ctx.content([
            {
                elem: 'notification',
                text: ctx.param('notification')
            },
            {
                elem: 'main',
                content: {
                    block: 'wrapper',
                    content: [
                        {
                            block: 'logo'
                        },
                        {
                            block: 'menu'
                        }
                    ]
                }
            }
        ]);
    });
};
