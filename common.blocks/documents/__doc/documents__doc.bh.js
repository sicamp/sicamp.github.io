module.exports = (bh) => {
    bh.match('documents__doc', (ctx, json) => {
        ctx.tag('article');
        ctx.mix({ block: 'yummy' });
        ctx.content([
            {
                elem: 'doc-icon',
                mix: { block: 'yummy', elem: 'icon' },
                content: '<i class="fa ' + json.icon + '"></i>'
            },
            {
                elem: 'doc-title',
                tag: 'h4',
                mix: { block: 'yummy', elem: 'title' },
                content: json.title
            },
            {
                elem: 'doc-text',
                mix: { block: 'yummy', elem: 'text' },
                content: json.text
            }
        ]);
    });
};
