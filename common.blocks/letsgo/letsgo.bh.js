module.exports = (bh) => {
    bh.match('letsgo', (ctx) => {
        ctx.tag('section');
        ctx.content({
            block: 'wrapper',
            content: [
                {
                    block: 'letsgo',
                    elem: 'text',
                    content: 'Стоимость путёвки'
                },
                {
                    block: 'letsgo',
                    elem: 'price',
                    content: '32&thinsp;500 руб.'
                },
                {
                    block: 'letsgo',
                    elem: 'text',
                    content: 'Часть путёвки можно оплатить сертификатом.'
                },
                {
                    block: 'letsgo',
                    elem: 'button',
                    tag: 'a',
                    attrs: {
                        href: bh.lib.resolve('letsgo')
                    },
                    content: 'Как попасть в лагерь'
                }
            ]
        });
    });
};
