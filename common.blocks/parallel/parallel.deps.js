({
    mustDeps: [
        {
            block: 'yummy'
        },
        {
            block: 'details',
            mods: {
                theme: 'strip'
            }
        }
    ],
    shouldDeps: [
        {
            mods: {
                layout: 'max'
            },
            elems: [
                'header',
                'letter',
                'years',

                'description',
                'section',
                'title',
                'tasks',
                'task'
            ]
        }
    ]
});
