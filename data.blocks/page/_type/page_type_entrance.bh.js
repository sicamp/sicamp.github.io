module.exports = (bh) => {
    bh.match('page_type_entrance', function(ctx) {
        ctx.param('title', 'Вступительная работа. Летний компьютерный лагерь');
    });
};

