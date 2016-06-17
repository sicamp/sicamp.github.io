module.exports = (bh) => {
    bh.match('promo', (ctx) => {
        const campLink = 'http://nechayka.ru/about';

        ctx.param('title', 'Летний компьютерный&nbsp;лагерь');

        ctx.param(
            'description',
            'Научим решать олимпиадные задачи по&nbsp;программированию. ' +
            'Расскажем про&nbsp;алгоритмы, структуры данных, методы их&nbsp;построения и&nbsp;анализа. ' +
            'Приглашаем ребят, закончивших 6—10 классы.'
        );

        ctx.param(
            'location',
            '<b>Лагерь <a href="' + campLink + '">«Нечайка»</a></b> посёлок&nbsp;Ласьва, Пермский&nbsp;край'
        );

        ctx.param('dates', '<b>9 — 29 августа 2016</b>');
    });
};