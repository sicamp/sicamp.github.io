module.exports = (bh) => {
    bh.match('promo', (ctx) => {
        const campLink = 'https://yandex.ru/maps/-/C6UwBBpb';

        ctx.param('title', 'Летний компьютерный&nbsp;лагерь');

        ctx.param(
            'description',
            'Научим решать олимпиадные задачи по&nbsp;программированию. ' +
            'Расскажем про&nbsp;алгоритмы, структуры данных, методы их&nbsp;построения и&nbsp;анализа. ' +
            'Приглашаем ребят, закончивших 6—10 классы.'
        );

        ctx.param(
            'location',
            '<b>Лагерь <a href="' + campLink + '">«Комета»</a></b> село&nbsp;Янычи, Пермский&nbsp;край'
        );

        ctx.param('dates', '<b>9 — 29 августа 2017</b>');
    });
};
