module.exports = (bh) => {
    bh.match('documents', (ctx) => {
        ctx.attr('id', 'documents');
        ctx.content({
            block: 'wrapper',
            content: [
                {
                    block: 'title',
                    content: ctx.param('title')
                },
                {
                    block: 'documents',
                    elem: 'list',
                    content: ctx.param('list').map((doc) => bh.utils.extend({ elem: 'doc' }, doc))
                }
            ]
        });
    });
};
