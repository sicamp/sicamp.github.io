module.exports = (bh) => {
    bh.match('logo', (ctx, json) => {
        ctx.tag('a');
        ctx.attr('href', json.url || bh.lib.resolve('index'));
        ctx.content('ЛКЛ');
    });
};
