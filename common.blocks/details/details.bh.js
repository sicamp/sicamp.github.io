module.exports = (bh) => {
    bh.match('details', (ctx, json) => {
        ctx.tag('details');
        ctx.content([
            {
                elem: 'summary',
                content: {
                    elem: 'summary-wrapper',
                    content: json.summary
                }
            },
            {
                elem: 'section',
                content: json.details
            }
        ]);
    });

    bh.match('details__summary', (ctx) => {
        ctx.tag('summary');
    });

    bh.match('details__summary-wrapper', (ctx) => {
        ctx.tag('span');
    });

    bh.match('details__section', (ctx) => {
        ctx.tag('section');
    });
};
