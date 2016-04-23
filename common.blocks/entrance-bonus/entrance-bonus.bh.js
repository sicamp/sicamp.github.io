module.exports = (bh) => {
    bh.match('entrance-bonus', (ctx) => {
        ctx.tag('section');
        ctx.attr('id', 'bonus');
        ctx.content({
            block: 'wrapper',
            content: [
                {
                    block: 'title',
                    mix: {
                        block: 'entrance-bonus',
                        elem: 'title'
                    },
                    content: 'Бонусы'
                },
                {
                    block: 'entrance-bonus',
                    elem: 'section',
                    content: [
                        {
                            elem: 'section-title',
                            content: 'Участникам VI краевой олимпиады по&nbsp;программированию'
                        },
                        {
                            elem: 'section-text',
                            content:
                                'Если вы прошли на очный этап олимпиады, вам засчитываются две «простые» задачи ' +
                                'из&nbsp;параллели, куда вы&nbsp;поступаете. Простые&nbsp;— это задачи ' +
                                'с&nbsp;наименьшими номерами. Например, для&nbsp;параллели C это задачи «Разность сумм» ' +
                                'и&nbsp;«Дни рождения».'
                        }
                    ]
                },
                {
                    block: 'entrance-bonus',
                    elem: 'section',
                    content: [
                        {
                            elem: 'section-title',
                            content: 'Можете не решать вступительную,<br>если&nbsp;вы:'
                        },
                        {
                            elem: 'section-text',
                            tag: 'ul',
                            content: [
                                {
                                    tag: 'li',
                                    content: 'участник Всероссийской олимпиады школьников по&nbsp;информатике 2015-16 года;'
                                },
                                {
                                    tag: 'li',
                                    content: 'победитель или призер очного тура VI&nbsp;краевой олимпиады по&nbsp;программированию.'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'entrance-bonus',
                    elem: 'section',
                    mods: {
                        type: 'students'
                    },
                    content: [
                        {
                            elem: 'section-title',
                            content: 'Освобождённые от&nbsp;вступительной по&nbsp;результатам зачёта ЛКЛ в&nbsp;прошлом году:'
                        },
                        {
                            elem: 'section-text',
                            tag: 'ul',
                            content: [
                                'Алибек Альгожин',
                                'Юлия Андросова',
                                'Антон Буков',
                                'Надежда Грачева',
                                'Олег Григорян',
                                'Алексей Гусев',
                                'Михаил Ершов',
                                'Дмитрий Клемешов',
                                'Ярослав Кубанцев',
                                'Леонид Лыгин',
                                'Максим Макашов',
                                'Альфия Мусабекова',
                                'Илья Нечесанов',
                                'Максим Няшин',
                                'Сергей Окладников',
                                'Марина Перескокова',
                                'Максим Петухов',
                                'Алексей Плешаков',
                                'Сергей Поспелов',
                                'Елизавета Рыбина',
                                'Андрей Скалкин',
                                'Арсений Служаев',
                                'Артем Тарасенко',
                                'Дарья Фролова',
                                'Всеволод Шалдин',
                                'Семён Шарцев',
                                'Кира Шмакова',
                                'Сергей Яковлев'
                            ].map((name) => {
                                return {
                                    tag: 'li',
                                    content: name
                                };
                            })
                        }
                    ]
                }
            ]
        });
    });
};
