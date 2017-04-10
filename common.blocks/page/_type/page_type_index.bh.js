module.exports = (bh) => {
    bh.match('page_type_index', function(ctx) {
        const features = ctx.param('features');

        ctx.content([
            {
                block: 'promo'
            },
            {
                block: 'features',
                content: [
                    {
                        block: 'features',
                        elem: 'title',
                        content: features.title
                    },
                    features.features.map((feature) => {
                        return bh.utils.extend({
                            block: 'feature'
                        }, feature);
                    })
                ]
            }
        ]);
    });
};
