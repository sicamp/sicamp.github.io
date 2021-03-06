module.exports = (bh) => {
    bh.match('letsgo-plan', (ctx) => {
        const entranceLink = bh.lib.resolve('entrance');
        const thingsLink = bh.lib.resolve('things');
        const formsLink = 'https://school9.perm.ru/sicamp-reg/forms/';

        const incomingProfile = 'https://school9.perm.ru/sicamp-reg/forms/edit/lkl-2017-incoming';
        const thematicProfile = 'https://school9.perm.ru/sicamp-reg/forms/edit/lkl-2017-thematic';
        const enlistedProfile = 'https://school9.perm.ru/sicamp-reg/forms/edit/lkl-2017-enlisted';
        const arrivalProfile = 'https://school9.perm.ru/sicamp-reg/forms/edit/lkl-2017-arrival';

        ctx.param('title', 'Как попасть в лагерь');

        ctx.param('sections', [
            {
                date: 'До 28-го мая',
                outdated: true,
                items: [
                    `Зарегистрируйтесь <a href="${formsLink}">в ЛКЛ</a>`,
                    `Заполните <a href="${incomingProfile}">анкету поступающего</a>`,
                    `Заполните <a href="${thematicProfile}">тематическую анкету</a>`,
                    `Сделайте <a href="${entranceLink}">вступительную работу</a>`
                ]
            },
            {
                date: 'До 18-го июня',
                outdated: true,
                items: [
                    'Дождитесь списков зачисленных',
                    `Заполните <a href="${enlistedProfile}">анкету зачисленного</a>`
                ]
            },
            {
                date: '9-го августа',
                items: [
                    `Если едете из другого города, заполните <a href="${arrivalProfile}">анкету о приезде</a>`,
                    `Возьмите <a href="${thingsLink}">вещи и документы</a>
                    и приезжайте в лагерь!
                    Если вы едете из другого города, мы встретим вас с самолёта или поезда`
                ]
            }
        ]);
    });
};
