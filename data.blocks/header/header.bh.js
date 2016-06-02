module.exports = (bh) => {
    bh.match('header', (ctx) => {
        const solutionsLink = 'https://github.com/sicamp/tutorial/tree/master/2016';

        ctx.param(
            'notification',
            'Мы опубликовали <a href="' + solutionsLink + '">разбор вступительной</a>. ' +
            'Дождитесь списков зачисленных.'
        );
    });
};
