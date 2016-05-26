module.exports = (bh) => {
    bh.match('header', (ctx) => {
        const solutionsLink = 'https://github.com/sicamp/tutorial/tree/master/2016';

        ctx.tag('header');
        ctx.content([
            {
                elem: 'main',
                content: {
                    block: 'wrapper',
                    content: [
                        {
                            block: 'logo'
                        },
                        {
                            block: 'menu'
                        }
                    ]
                }
            },
            {
                elem: 'notification',
                text:
                    'Мы опубликовали <a href="' + solutionsLink + '">разбор вступительной</a>. ' +
                    'Дождитесь списков зачисленных.'
            }
        ]);
    });
};
