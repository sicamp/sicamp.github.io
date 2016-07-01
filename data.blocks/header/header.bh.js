module.exports = (bh) => {
    bh.match('header', (ctx) => {
        const letsgo = bh.lib.resolve('letsgo');

        ctx.param(
            'notification',
            `Подготовьте <a href="${letsgo}#documents">документы</a>, купите билеты до Перми,
            и <a href="${letsgo}#departure">приезжайте в лагерь</a> 9-го августа!`
        );
    });
};
