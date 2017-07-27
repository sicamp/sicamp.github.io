module.exports = (bh) => {
    bh.match('footer', (ctx) => {
        const gateUrl = 'http://school9.perm.ru/gate/login/';
        const formsUrl = 'https://school9.perm.ru/sicamp-reg/forms/';

        ctx.param('sections', [
            {
                title: 'Информация',
                items: [
                    {
                        url: bh.lib.resolve('enlisted'),
                        content: 'Список зачисленных'
                    },
                    {
                        url: bh.lib.resolve('letsgo'),
                        content: 'Как попасть в лагерь'
                    },
                    {
                        url: bh.lib.resolve('entrance'),
                        content: 'Что взять с собой'
                    }
                ]
            },
            {
                title: 'Поступление',
                items: [
                    {
                        url: gateUrl,
                        content: 'Тестирующая система'
                    },
                    {
                        url: formsUrl,
                        content: 'Вступительные анкеты'
                    },
                    {
                        url: bh.lib.resolve('entrance'),
                        content: 'Вступительная работа'
                    }
                ]
            },
            {
                title: 'Есть вопросы?',
                items: [
                    [
                        'Пишите на почту ',
                        {
                            block: 'link',
                            url: 'mailto:mail@sicamp.ru',
                            content: 'mail@sicamp.ru'
                        }
                    ],
                    [
                        'Вступайте в нашу ',
                        {
                            block: 'link',
                            url: 'https://vk.com/sicamp',
                            content: 'группу ВКонтакте'
                        }
                    ]
                ]
            }
        ]);
    });
};
