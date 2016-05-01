module.exports = (bh) => {
    bh.match('parallel__task', (ctx, json) => {
        ctx.tag('li');
        ctx.content(json.title);
        ctx.attr('data-code', json.code);
    });
};
