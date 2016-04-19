module.exports = (bh) => {
    bh.match('feature', (ctx, json) => {
        ctx.tag('article');
        ctx.mix({ block: 'yummy' });
        ctx.content([
            {
                elem: 'icon',
                mix: { block: 'yummy', elem: 'icon' },
                content: '<i class="fa ' + json.icon + '"></i>'
            },
            {
                elem: 'title',
                content: json.title
            },
            {
                elem: 'text',
                content: json.text
            }
        ]);
    });
};
