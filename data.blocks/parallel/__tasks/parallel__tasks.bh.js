module.exports = (bh) => {
    bh.match('parallel__tasks', (ctx) => {
        ctx.param('title', 'Задачи');
    });
};
