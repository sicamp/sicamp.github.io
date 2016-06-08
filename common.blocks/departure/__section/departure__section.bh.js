module.exports = (bh) => {
    bh.match({
        'departure__section': function(ctx) {
            ctx.tag('section');
            ctx.mix({ block: 'yummy' });
        },

        'departure__section-title': function(ctx) {
            ctx.tag('h4');
            ctx.mix({ block: 'yummy', elem: 'title' });
        },

        'departure__section-text': function(ctx) {
            ctx.mix({ block: 'yummy', elem: 'text' });
        }
    });
};
