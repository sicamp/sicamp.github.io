module.exports = (bh) => {
    bh.match('page_type_entrance', (ctx) => {
        ctx.param('title', 'Вступительная работа. Летний компьютерный лагерь');

        ctx.content([
            {
                block: 'entrance'
            },
            {
                block: 'parallels'
            },
            {
                block: 'entrance-bonus'
            }
        ]);
    });
};

