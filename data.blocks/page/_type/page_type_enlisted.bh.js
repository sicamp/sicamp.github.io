module.exports = (bh) => {
    bh.match('page_type_enlisted', function(ctx) {
        ctx.param('title', 'Список зачисленных в Летний компьютерный лагерь');
    });
};

