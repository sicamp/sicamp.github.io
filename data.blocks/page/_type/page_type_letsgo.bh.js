module.exports = (bh) => {
    bh.match('page_type_letsgo', function(ctx) {
        ctx.param('title', 'Как попасть в Летний компьютерный лагерь');
    });
};
