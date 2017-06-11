module.exports = (bh) => {
    bh.match('header', (ctx) => {
        const enlisted = bh.lib.resolve('enlisted');
        const enlistedProfile = 'https://school9.perm.ru/sicamp-reg/forms/edit/lkl-2017-enlisted';

        ctx.param(
            'notification',
            `Ура! Мы опубликовали <a href="${enlisted}">список зачисленных</a>!
            Если вы зачислены, заполните <a href="${enlistedProfile}">анкету зачисленного</a>.`
        );
    });
};
