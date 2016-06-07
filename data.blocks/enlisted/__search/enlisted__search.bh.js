module.exports = (bh) => {
    bh.match('enlisted__search', (ctx) => {
        ctx.param('hint', 'Найдите себя в списке по имени или городу');
    });
};
