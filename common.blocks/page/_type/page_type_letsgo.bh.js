module.exports = (bh) => {
    bh.match('page_type_letsgo', function(ctx) {
        ctx.content([
            {
                block: 'letsgo-plan'
            },
            {
                block: 'price'
            },
            {
                block: 'departure'
            }
        ]);
    });
};
