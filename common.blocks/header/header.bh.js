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
                    'До 22-го мая решите вступительную и&nbsp;заполните анкеты. ' +
                    '<a href="' + notificationLink + '">Подробнее.</a>'
            }
        ]);
    });
};
