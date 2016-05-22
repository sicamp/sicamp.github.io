module.exports = (bh) => {
    bh.match('header', (ctx) => {
        const notificationLink = bh.lib.config.root + 'letsgo/';

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
                text:
                    'До 24-го мая решите вступительную и отправьте анкету. ' +
                    '<a href="' + notificationLink + '">Подробнее.</a>'
            }
        ]);
    });
};
