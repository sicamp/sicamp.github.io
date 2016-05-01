module.exports = (bh) => {
    bh.match('page_type_letsgo', (ctx) => {
        ctx.param('title', 'Как попасть в Летний компьютерный лагерь');

        ctx.content([
            {
                block: 'letsgo-plan'
            },
            {
                block: 'price'
            }
        ]);
    });
};
