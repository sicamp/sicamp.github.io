module.exports = (bh) => {
    bh.match('menu', (ctx) => {
        ctx.tag('nav');
        ctx.content([
            {
                elem: 'toggle'
            },
            {
                elem: 'list',
                content: [
                    {
                        elem: 'item',
                        url: '#',
                        content: 'Как попасть в лагерь'
                    },
                    {
                        elem: 'item',
                        url: bh.lib.resolve('entrance'),
                        content: 'Вступительная работа'
                    }
                ]
            }
        ]);
    });
};
