module.exports = (bh) => {
    bh.match('feature__text', (ctx) => {
        ctx.tag('p');
        ctx.mix({ block: 'yummy', elem: 'text' });
    });
};
