module.exports = (bh) => {
    bh.match('page', (ctx, json) => {
        bh.apply({ block: 'i-global' });

        ctx
            .tag('body')
            .content([
                ctx.content(),
                json.scripts
            ], true);

        return [
            '<!DOCTYPE html>',
            {
                tag: 'html',
                content: [
                    {
                        elem: 'head',
                        content: [
                            { tag: 'meta', attrs: { charset: 'utf-8' } },
                            {
                                tag: 'meta',
                                attrs: {
                                    'http-equiv': 'X-UA-Compatible',
                                    content: 'IE=edge'
                                }
                            },
                            {
                                tag: 'meta',
                                attrs: {
                                    name: 'viewport',
                                    content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1'
                                }
                            },
                            { tag: 'title', content: json.title },
                            json.head,
                            json.styles,
                            { elem: 'favicon', url: json.favicon }
                        ]
                    },
                    json
                ]
            }
        ];
    });

    bh.match('page', (ctx) => {
        ctx.param('styles', { elem: 'css', url: bh.lib.static('style.css') });
        ctx.param('scripts', { elem: 'js', url: bh.lib.static('script.js') });

        ctx.content([
            { block: 'header' },
            { block: 'content', content: ctx.content() },
            { block: 'footer' },
            { elem: 'metrika' }
        ], true);
    });

    bh.match([ 'page__head', 'page__meta', 'page__link' ], (ctx) => {
        ctx.bem(false).tag(ctx.json().elem);
    });

    bh.match('page__favicon', (ctx, json) => {
        ctx
            .bem(false)
            .tag('link')
            .attr('rel', 'shortcut icon')
            .attr('href', json.url);
    });

};
