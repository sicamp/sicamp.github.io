module.exports = (bh) => {
    bh.match('page_type_enlisted', function(ctx) {
        ctx.content([
            {
                block: 'enrollment'
            },
            {
                block: 'enlisted'
            }
        ]);
    });
};

