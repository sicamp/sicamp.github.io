module.exports = (bh) => {
    bh.match('header', (ctx) => {
        const letsgo = bh.lib.resolve('letsgo');
        const things = bh.lib.resolve('things');
        const arrivalProfile = 'https://school9.perm.ru/sicamp-reg/forms/edit/lkl-2017-arrival';

        ctx.param(
            'notification',
            `Собирайте <a href="${things}">вещи</a> и <a href="${letsgo}">приезжайте в лагерь</a>!
            Если вы из другого города, не забудьте заполнить <a href="${arrivalProfile}">анкету о приезде</a>.`
        );
    });
};
