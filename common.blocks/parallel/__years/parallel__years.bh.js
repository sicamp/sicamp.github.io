module.exports = (bh) => {
    bh.match('parallel__years', function(ctx, json) {
        ctx.tag('p');
        ctx.content(`${json.years.from}...${json.years.to} классы`);
    });
};
