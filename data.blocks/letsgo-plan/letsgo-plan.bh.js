module.exports = (bh) => {
    bh.match('letsgo-plan', (ctx) => {
        const entranceLink = bh.lib.resolve('entrance');
        const formsLink = 'https://school9.perm.ru/sicamp-reg/forms/';
        const incomingProfile = 'https://school9.perm.ru/sicamp-reg/forms/edit/lkl-2017-incoming';
        const thematicProfile = 'https://school9.perm.ru/sicamp-reg/forms/edit/lkl-2017-thematic';

        ctx.param('title', 'Как попасть в лагерь');

        ctx.param('sections', [
            {
                date: 'До 28-го мая',
                items: [
                    `Зарегистрируйтесь <a href="${formsLink}">в ЛКЛ</a>`,
                    `Заполните <a href="${incomingProfile}">анкету поступающего</a>`,
                    `Заполните <a href="${thematicProfile}">тематическую анкету</a>`,
                    `Сделайте <a href="${entranceLink}">вступительную работу</a>`
                ]
            },
            {
                date: 'До 11-го июня',
                items: [
                    'Дождитесь списков зачисленных',
                    'Заполните анкету зачисленного'
                ]
            },
            {
                date: '9-го августа',
                items: [
                    `Возьмите вещи и документы
                    и приезжайте в лагерь!
                    Если вы едете из другого города, мы встретим вас с самолёта или поезда`
                ]
            }
        ]);
    });
};
