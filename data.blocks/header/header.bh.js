module.exports = (bh) => {
    bh.match('header', (ctx) => {
        const enlisted = bh.lib.resolve('enlisted');
        const admittedProfile = 'https://docs.google.com/forms/d/1rNxlVOLInHklrP6y5zapi6QZ6kjeNGeLYvuFlC2y8U0/viewform?usp=send_form';

        ctx.param(
            'notification',
            `Ура! Мы опубликовали <a href="${enlisted}">список зачисленных</a>!
            Если вы зачислены, заполните <a href="${admittedProfile}">анкету зачисленного</a>.`
        );
    });
};
