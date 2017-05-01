module.exports = (bh) => {
    bh.match('parallel__list', (ctx, json) => {
        ctx.tag('ul');
        ctx.content(json.items.map(item => ({
            elem: 'list-item',
            tag: 'li',
            content: item
        })));
    });
};
