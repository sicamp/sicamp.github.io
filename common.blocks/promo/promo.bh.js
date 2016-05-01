module.exports = (bh) => {
    bh.match('promo', (ctx) => {
        ctx.tag('section');
        ctx.content({
            block: 'wrapper',
            content: [
                {
                    block: 'promo',
                    elem: 'title',
                    content: 'Летний компьютерный&nbsp;лагерь'
                },
                {
                    block: 'promo',
                    elem: 'text',
                    content:
                        'Научим решать олимпиадные задачи по&nbsp;программированию. ' +
                        'Расскажем про&nbsp;алгоритмы, структуры данных, методы их&nbsp;построения и&nbsp;анализа. ' +
                        'Приглашаем ребят, закончивших 6—10 классы.'
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
                                    content: '<b>Пермский&nbsp;край</b>'
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
                                    content: '<b>8 — 28 августа 2016</b>'
                                }
                            ]
                        }
                    ]
                }
            ]
        });
    });
};
