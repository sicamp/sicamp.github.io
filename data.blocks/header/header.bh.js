module.exports = (bh) => {
    bh.match('header', (ctx) => {
        const letsgo = bh.lib.resolve('letsgo');
        const things = bh.lib.resolve('things');

        ctx.param(
            'notification',
            `Подготовьте <a href="${letsgo}#documents">документы</a>, соберите <a href="${things}">вещи</a>,
            и <a href="${letsgo}#departure">приезжайте в лагерь</a> 9-го августа!`
        );
    });
};
