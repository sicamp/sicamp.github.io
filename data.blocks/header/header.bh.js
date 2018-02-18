module.exports = (bh) => {
    bh.match('header', (ctx) => {
        ctx.param(
            'notification',
            'Вся информация на сайте про 2017-й год. Мы скоро всё обновим, ждите!'
        );
    });
};
