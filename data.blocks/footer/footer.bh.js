module.exports = (bh) => {
    bh.match('footer', (ctx) => {
        const readyProfiles = 'https://docs.google.com/spreadsheets/d/1jYzVaJaEoXIhI3qzastp_6IBh47yXIn7ukIv2IROnE0/pubhtml';
        const incomingProfile = 'https://docs.google.com/forms/d/1CU7eTP0Q8BFSDoD1Yk2u7rY2tjPz-fdREekAoreJzbg/viewform?usp=send_form';
        const thematicProfile = 'https://docs.google.com/forms/d/1J3fxAIrxYnno0AlYk8oQ1rvtFWN81hTFOdUKsOyqMmw/viewform?usp=send_form';

        ctx.param('sections', [
            {
                title: 'Информация',
                items: [
                    {
                        url: bh.lib.resolve('letsgo'),
                        content: 'Как попасть в лагерь'
                    },
                    {
                        url: bh.lib.resolve('entrance'),
                        content: 'Вступительная работа'
                    },
                    {
                        url: 'http://school9.perm.ru/camp/',
                        content: 'Сайт ЛКЛ-2015'
                    }
                ]
            },
            {
                title: 'Анкеты',
                items: [
                    {
                        url: readyProfiles,
                        content: 'Кто заполнил анкеты'
                    },
                    {
                        url: incomingProfile,
                        content: 'Заполнить анкету поступающего'
                    },
                    {
                        url: thematicProfile,
                        content: 'Заполнить тематическую анкету'
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
                            url: 'mailto:permolymp@yandex.ru',
                            content: 'permolymp@yandex.ru'
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
