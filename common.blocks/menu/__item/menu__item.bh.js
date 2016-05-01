module.exports = (bh) => {
    bh.match('menu__item', (ctx, json) => {
        ctx.tag('a');
        ctx.attr('href', json.url);
        ctx.content({
            elem: 'text',
            content: json.content
        }, true);
    });
};
