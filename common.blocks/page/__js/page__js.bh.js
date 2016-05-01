module.exports = (bh) => {

    bh.match('page__js', (ctx, json) => {
        ctx
            .bem(false)
            .tag('script');

        if (json.url) {
            ctx.attr('src', json.url);
        }
    });

};
