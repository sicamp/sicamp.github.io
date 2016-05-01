module.exports = (bh) => {
    bh.match('header__notification', (ctx, json) => {
        ctx.tag('section');
        ctx.content({
            block: 'wrapper',
            content: json.text
        });
    });
};
