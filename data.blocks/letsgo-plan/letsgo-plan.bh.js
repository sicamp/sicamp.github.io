module.exports = (bh) => {
    bh.match('letsgo-plan', (ctx) => {
        const entranceLink = bh.lib.resolve('entrance');
        const thingsLink = bh.lib.resolve('things');
        const incomingProfile = 'https://docs.google.com/forms/d/1CU7eTP0Q8BFSDoD1Yk2u7rY2tjPz-fdREekAoreJzbg/viewform?usp=send_form';
        const thematicProfile = 'https://docs.google.com/forms/d/1J3fxAIrxYnno0AlYk8oQ1rvtFWN81hTFOdUKsOyqMmw/viewform?usp=send_form';
        const admittedProfile = 'https://docs.google.com/forms/d/1rNxlVOLInHklrP6y5zapi6QZ6kjeNGeLYvuFlC2y8U0/viewform?usp=send_form';
        const readyProfiles = 'https://docs.google.com/spreadsheets/d/1jYzVaJaEoXIhI3qzastp_6IBh47yXIn7ukIv2IROnE0/pubhtml';

        ctx.param('title', 'Как попасть в лагерь');

        ctx.param('sections', [
            {
                date: 'До 24-го мая',
                outdated: true,
                items: [
                    `Сделайте <a href="${entranceLink}">вступительную работу</a>`,
                    `Заполните <a href="${incomingProfile}">анкету поступающего</a>`,
                    `Заполните <a href="${thematicProfile}">тематическую анкету</a>`,
                    `<a href="${readyProfiles}">Проверьте</a>, что вы заполнили анкеты`
                ]
            },
            {
                date: 'До 15-го июня',
                outdated: true,
                items: [
                    'Дождитесь списков зачисленных',
                    `Заполните <a href="${admittedProfile}">анкету зачисленного</a>`
                ]
            },
            {
                date: '9-го августа',
                items: [
                    `Возьмите <a href="${thingsLink}">вещи и&nbsp;документы</a>
                    и&nbsp;<a href="#departure">приезжайте в&nbsp;лагерь</a>!
                    Если вы едете из&nbsp;другого города, мы встретим вас с&nbsp;самолёта или&nbsp;поезда`
                ]
            }
        ]);
    });
};
