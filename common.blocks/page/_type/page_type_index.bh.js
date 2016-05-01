module.exports = (bh) => {
    bh.match('page_type_index', (ctx) => {
        ctx.param('title', 'Летний компьютерный лагерь');

        ctx.content([
            {
                block: 'promo'
            },
            {
                block: 'features',
                content: [
                    {
                        block: 'features',
                        elem: 'title',
                        content: 'Как проходит лагерь'
                    },
                    {
                        block: 'feature',
                        icon: 'fa-cubes',
                        title: 'Начальный уровень: любой',
                        text:
                            'Мы учим как тех, кто уже хорошо программирует и выигрывал олимпиады, так и тех, ' +
                            'кто начал программировать совсем недавно и осваивает азы. Мы объединим учеников в группы' +
                            ' по уровню, чтобы всем было комфортно и интересно.'
                    },
                    {
                        block: 'feature',
                        icon: 'fa-graduation-cap',
                        title: 'Теория: 2 часа в день',
                        text:
                            'Лекции читают студенты ведущих российских университетов в области компьютерных наук ' +
                            '(СПбГУ, ИТМО, СПбАУ, УрФУ), призёры и победители всероссийских и международных ' +
                            'олимпиад. Поскольку группы небольшие, лектор взаимодействует с учениками: задаёт ' +
                            'вопросы, просит сделать что-нибудь у доски.'
                    },
                    {
                        block: 'feature',
                        icon: 'fa-desktop',
                        title: 'Практика: 2 часа в день',
                        text:
                            'После лекции ученики решают задачи, приближенные к олимпиадным. Задачи принимает ' +
                            'автоматическая тестирующая система. Это позволяет оценить корректность алгоритма ' +
                            'на разных наборах данных. После обеда открыто дорешивание: можно доделать задачи, ' +
                            'которые не успели решить утром.'
                    },
                    {
                        block: 'feature',
                        icon: 'fa-cogs',
                        title: 'Спецкурсы',
                        text:
                        'Кроме основных занятий мы проводим спецкурсы. Спецкурс — это одна или несколько лекций, ' +
                        'посвящённых интересной теме, выходящей за рамки учебной программы. В прошлом году мы ' +
                        'проводили курсы по C++, Python, Haskell, теории алгоритмов, регулярным ' +
                        'выражениям, работе в команде и Unity&nbsp;— платформе для создания игр.'
                    },
                    {
                        block: 'feature',
                        icon: 'fa-futbol-o',
                        title: 'Отдых и развлечения',
                        text:
                        'Смотрим кино, играем в футбол, волейбол, настольный теннис и фрисби. Проводим квесты, ' +
                        'фотокроссы и интеллектуальные игры. Ездим на унициклах и играем музыку. Спортинвентарь ' +
                        'и настолки доступны всегда, можете играть в любое время. У нас есть два выходных дня ' +
                        'для активного отдыха, когда даже дорешивание закрыто.'
                    },
                    {
                        block: 'feature',
                        icon: 'fa-users',
                        title: 'Командная олимпиада',
                        text:
                            'В один из дней мы проводим командную олимпиаду. Условия приближены к Всероссийской ' +
                            'командной олимпиаде школьников. Школьники делятся на команды по 3 человека. ' +
                            'За пять часов они должны решить как можно больше задач с минимальным штрафным временем.'
                    },
                    {
                        block: 'feature',
                        icon: 'fa-check-square-o',
                        title: 'Двухдневный зачёт',
                        text:
                            'В последние два дня мы проводим зачёт. Перед ним ещё два дня подготовки. ' +
                            'Он позволяет закрепить то, чему ребята научились за смену, и оценить, насколько успешно.'
                    }
                ]
            },
            {
                block: 'letsgo'
            }
        ]);
    });
};
