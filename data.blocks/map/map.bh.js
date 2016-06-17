module.exports = (bh) => {
    bh.match('map', (ctx) => {
        ctx.param('title', 'Где находится лагерь');

        ctx.param('camp', {
            title: 'Лагерь Нечайка',
            button: 'Лагерь',
            selected: true,
            coords: [ 58.07653, 55.968042 ],
            zoom: 11
        });

        ctx.param('school', {
            title: 'Школа 9',
            button: 'Школа 9',
            coords: [ 58.00335, 56.24537 ],
            zoom: 15
        });
    });
};
