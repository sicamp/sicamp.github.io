module.exports = (bh) => {
    bh.match('header__notification', (ctx, json) => {
        if (! json.text) {
            return null;
        }

        ctx.tag('section');
        ctx.content({
            block: 'wrapper',
            content: json.text
        });
    });
};
