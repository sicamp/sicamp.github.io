module.exports = (bh) => {
    bh.match('map__container', (ctx) => {
        ctx.attr('id', 'map');
    });
};
