module.exports = (bh) => {
    bh.match('header', (ctx) => {
        ctx.tag('header');
        ctx.content([
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
            },
            {
                elem: 'notification',
                text: 'Дождитесь списков зачисленных.'
            }
        ]);
    });
};
