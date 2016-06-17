module.exports = (bh) => {
    bh.match('entrance-bonus', (ctx) => {
        ctx.param('title', 'Бонусы');
        ctx.param('sections', [
            {
                title: 'Участникам VI краевой олимпиады по&nbsp;программированию',
                text:
                    'Если вы участвуете в&nbsp;очном этапе олимпиады, вам засчитываются две «простые» задачи ' +
                    'из&nbsp;параллели, куда вы&nbsp;поступаете. Простые&nbsp;— это задачи ' +
                    'с&nbsp;наименьшими номерами. Например, для&nbsp;параллели C это задачи «Разность сумм» ' +
                    'и&nbsp;«Дни рождения».'
            },
            {
                title: 'Можете не решать вступительную,<br>если&nbsp;вы:',
                text: {
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
            },
            {
                title: 'Освобождённые от&nbsp;вступительной по&nbsp;результатам зачёта ЛКЛ в&nbsp;прошлом году:',
                mods: {
                    type: 'students'
                },
                text: {
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
            }
        ]);
    });
};