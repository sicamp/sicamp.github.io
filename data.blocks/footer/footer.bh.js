module.exports = (bh) => {
    bh.match('footer', (ctx) => {
        ctx.param('sections', [
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

                        'или ',
                        {
                            block: 'link',
                            url: 'https://vk.com/id18102838',
                            content: 'Кириллу Симонову в ВК'
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
