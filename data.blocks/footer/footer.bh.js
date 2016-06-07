module.exports = (bh) => {
    bh.match('footer', (ctx) => {
        const readyProfiles = 'https://docs.google.com/spreadsheets/d/1jYzVaJaEoXIhI3qzastp_6IBh47yXIn7ukIv2IROnE0/pubhtml';
        const admittedProfile = 'https://docs.google.com/forms/d/1rNxlVOLInHklrP6y5zapi6QZ6kjeNGeLYvuFlC2y8U0/viewform?usp=send_form';
        const arrivalProfile = 'https://docs.google.com/forms/d/1vtMyijx4SJn2Zt4f40FoHUT79yTdr2vSMrdONzKa5wY/viewform?usp=send_form';

        ctx.param('sections', [
            {
                title: 'Информация',
                items: [
                    {
                        url: bh.lib.resolve('letsgo'),
                        content: 'Как попасть в лагерь'
                    },
                    {
                        url: bh.lib.resolve('enlisted'),
                        content: 'Список зачисленных'
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
                        url: admittedProfile,
                        content: 'Заполнить анкету зачисленного'
                    },
                    {
                        url: arrivalProfile,
                        content: 'Заполнить анкету о&nbsp;приезде для&nbsp;иногородних'
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
