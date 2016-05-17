module.exports = (bh) => {
    bh.match('footer', (ctx) => {
        var readyProfiles = 'https://docs.google.com/spreadsheets/d/1jYzVaJaEoXIhI3qzastp_6IBh47yXIn7ukIv2IROnE0/pubhtml';
        var incomingProfile = 'https://docs.google.com/forms/d/1CU7eTP0Q8BFSDoD1Yk2u7rY2tjPz-fdREekAoreJzbg/viewform?usp=send_form';
        var thematicProfile = 'https://docs.google.com/forms/d/1J3fxAIrxYnno0AlYk8oQ1rvtFWN81hTFOdUKsOyqMmw/viewform?usp=send_form';

        ctx.tag('footer');
        ctx.content({
            block: 'wrapper',
            content: [
                {
                    block: 'footer',
                    elem: 'section',
                    content: [
                        {
                            block: 'footer',
                            elem: 'title',
                            content: 'Информация'
                        },
                        {
                            block: 'footer',
                            elem: 'item',
                            content: {
                                block: 'link',
                                url: bh.lib.resolve('letsgo'),
                                content: 'Как попасть в лагерь'
                            }
                        },
                        {
                            block: 'footer',
                            elem: 'item',
                            content: {
                                block: 'link',
                                url: bh.lib.resolve('entrance'),
                                content: 'Вступительная работа'
                            }
                        },
                        {
                            block: 'footer',
                            elem: 'item',
                            content: {
                                block: 'link',
                                url: 'http://school9.perm.ru/camp/',
                                content: 'Сайт ЛКЛ-2015'
                            }
                        }
                    ]
                },
                {
                    block: 'footer',
                    elem: 'section',
                    content: [
                        {
                            block: 'footer',
                            elem: 'title',
                            content: 'Анкеты'
                        },
                        {
                            block: 'footer',
                            elem: 'item',
                            content: {
                                block: 'link',
                                url: readyProfiles,
                                content: 'Кто заполнил анкеты'
                            }
                        },
                        {
                            block: 'footer',
                            elem: 'item',
                            content: {
                                block: 'link',
                                url: incomingProfile,
                                content: 'Заполнить анкету поступающего'
                            }
                        },
                        {
                            block: 'footer',
                            elem: 'item',
                            content: {
                                block: 'link',
                                url: thematicProfile,
                                content: 'Заполнить тематическую анкету'
                            }
                        }
                    ]
                },
                {
                    block: 'footer',
                    elem: 'section',
                    content: [
                        {
                            block: 'footer',
                            elem: 'title',
                            content: 'Есть вопросы?'
                        },
                        {
                            block: 'footer',
                            elem: 'item',
                            content: [
                                'Пишите на почту ',
                                {
                                    block: 'link',
                                    url: 'mailto:permolymp@yandex.ru',
                                    content: 'permolymp@yandex.ru'
                                }
                            ]
                        },
                        {
                            block: 'footer',
                            elem: 'item',
                            content: [
                                'или ',
                                {
                                    block: 'link',
                                    url: 'https://vk.com/id18102838',
                                    content: 'Кириллу Симонову в ВК'
                                }
                            ]
                        },
                        {
                            block: 'footer',
                            elem: 'item',
                            content: [
                                'Вступайте в нашу ',
                                {
                                    block: 'link',
                                    url: 'https://vk.com/sicamp',
                                    content: 'группу ВКонтакте'
                                }
                            ]
                        }
                    ]
                }
            ]
        });
    });
};
