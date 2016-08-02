([
    {
        mustDeps: [
            { block: 'i-global' },
            { block: 'font-awesome' }
        ]
    },
    {
        shouldDeps: [
            {
                block: 'page',
                mods: {
                    type: [
                        'index',
                        'enlisted',
                        'entrance',
                        'letsgo',
                        'things'
                    ]
                },
                elems: [ 'css', 'js', 'metrika' ]
            },
            {
                block: 'content'
            },
            {
                block: 'header'
            },
            {
                block: 'footer'
            }
        ]
    }
]);
