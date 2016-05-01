module.exports = (bh) => {
    bh.match({
        'entrance-bonus__section': (ctx) => {
            ctx.tag('section');
            ctx.mix({ block: 'yummy' });
        },

        'entrance-bonus__section-title': (ctx) => {
            ctx.tag('h4');
            ctx.mix({ block: 'yummy', elem: 'title' });
        },

        'entrance-bonus__section-text': (ctx) => {
            ctx.mix({ block: 'yummy', elem: 'text' });
        }
    });
};
