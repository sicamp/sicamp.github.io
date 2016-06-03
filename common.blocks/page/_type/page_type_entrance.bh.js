module.exports = (bh) => {
    bh.match('page_type_entrance', function(ctx) {
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

