module.exports = (bh) => {
    bh.match('page__css', (ctx, json) => {
        ctx.bem(false);

        if (json.url) {
            ctx
                .tag('link')
                .attr('rel', 'stylesheet')
                .attr('href', json.url);
        } else {
            ctx.tag('style');
        }

    });
};
