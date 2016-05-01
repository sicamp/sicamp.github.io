module.exports = (bh) => {
    bh.match('letsgo', (ctx) => {
        ctx.tag('section');
        ctx.content({
            block: 'wrapper',
            content: [
                {
                    block: 'letsgo',
                    elem: 'button',
                    tag: 'a',
                    attrs: {
                        href: bh.lib.config.root + 'letsgo/'
                    },
                    content: 'Как попасть в лагерь'
                }
            ]
        });
    });
};
