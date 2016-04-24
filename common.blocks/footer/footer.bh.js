module.exports = (bh) => {
    bh.match('footer', (ctx) => {
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
