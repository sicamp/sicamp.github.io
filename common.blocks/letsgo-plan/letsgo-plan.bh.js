module.exports = (bh) => {
    bh.match('letsgo-plan', (ctx, json) => {
        var entranceLink = bh.lib.config.root + 'entrance/';
        var incomingProfile = 'https://docs.google.com/forms/d/1CU7eTP0Q8BFSDoD1Yk2u7rY2tjPz-fdREekAoreJzbg/viewform?usp=send_form';
        var thematicProfile = 'https://docs.google.com/forms/d/1J3fxAIrxYnno0AlYk8oQ1rvtFWN81hTFOdUKsOyqMmw/viewform?usp=send_form';
        var admittedProfile = 'https://docs.google.com/forms/d/1rNxlVOLInHklrP6y5zapi6QZ6kjeNGeLYvuFlC2y8U0/viewform?usp=send_form';

        ctx.tag('section');
        ctx.content({
            block: 'wrapper',
            content: [
                {
                    block: 'title',
                    mix: { block: json.block, elem: 'title' },
                    content: 'Как попасть в лагерь'
                },
                {
                    block: json.block,
                    elem: 'sections',
                    content: [
                        {
                            block: 'letsgo-plan',
                            elem: 'section',
                            date: 'До 22-го мая',
                            items: [
                                'Сделайте <a href="' + entranceLink + '">вступительную работу</a>',
                                'Заполните <a href="' + incomingProfile +'">анкету поступающего</a>',
                                'Заполните <a href="' + thematicProfile + '">тематическую анкету</a>'
                            ]
                        },
                        {
                            block: 'letsgo-plan',
                            elem: 'section',
                            date: 'До 11-го июня',
                            items: [
                                'Дождитесь списков зачисленных',
                                'Заполните <a href="' + admittedProfile + '">анкету зачисленного</a>'
                            ]
                        },
                        {
                            block: 'letsgo-plan',
                            elem: 'section',
                            date: '9-го августа',
                            items: [
                                'Возьмите вещи и&nbsp;документы и&nbsp;приезжайте в&nbsp;лагерь!',
                                'Если вы едете из&nbsp;другого города, мы встретим вас с&nbsp;самолёта или&nbsp;поезда'
                            ]
                        }
                    ]
                }
            ]
        });
    });
};
