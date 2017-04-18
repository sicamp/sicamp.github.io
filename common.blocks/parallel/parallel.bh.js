module.exports = (bh) => {
    bh.match('parallel', (ctx, json) => {
        var description = [];

        if (json.description) {
            description.push({
                elem: 'section',
                mods: { type: 'description' },
                content: json.description
            });
        }

        if (json.curriculum) {
            description.push({
                elem: 'section',
                mods: { type: 'curriculum' },
                title: 'Вы изучите',
                items: json.curriculum
            });
        }

        if (json.requirements) {
            description.push({
                elem: 'section',
                mods: { type: 'requirements' },
                title: 'Мы ожидаем, что вы',
                items: json.requirements
            });
        }

        if (Array.isArray(json.tasks)) {
            if (json.tasks.length) {
                description.push({
                    elem: 'section',
                    mods: { type: 'tasks' },
                    title: 'Вступительные задачи',
                    items: json.tasks.map((task) => bh.utils.extend({ elem: 'task' }, task))
                });
            }
        } else {
            description.push(json.tasks);
        }

        ctx.tag('section');
        ctx.content([
            {
                elem: 'header',
                content: [
                    {
                        elem: 'letter',
                        content: json.letter
                    },
                    json.years && {
                        elem: 'years',
                        years: json.years
                    },
                ]
            },
            {
                elem: 'content',
                content: [
                    {
                        elem: 'title',
                        content: json.title
                    },
                    {
                        elem: 'description',
                        content: description
                    },
                    json.details && {
                        block: 'details',
                        mods: { theme: 'strip' },
                        summary: 'Что изучали в прошлом году',
                        details: json.details.join(' ')
                    }
                ]
            }
        ]);
    });
};
