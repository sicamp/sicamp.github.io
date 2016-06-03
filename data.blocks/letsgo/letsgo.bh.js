module.exports = (bh) => {
    bh.match('letsgo', (ctx) => {
        ctx.param('title', 'Стоимость путёвки');
        ctx.param('price', '32&thinsp;500 руб.');
        ctx.param('hint', 'Часть путёвки можно оплатить сертификатом.');
        ctx.param('button', 'Как попасть в лагерь');
        ctx.param('url', bh.lib.resolve('letsgo'));
    });
};
