module.exports = function (bh) {

    bh.match('parallels', function (ctx) {
        const parallelDlink = 'http://school9.perm.ru/camp/D.pdf';

        ctx.param('title', 'Учебные параллели');

        ctx.param('tasks', {
            A: 'Сумма максимума и&nbsp;минимума',
            B: 'Разность сумм',
            C: 'Дни рождения',
            D: 'Круглое упорядочивание',
            E: 'Химия',
            F: 'Разложение в&nbsp;сумму',
            G: 'Приключения Спайка',
            H: 'Кроты',
            I: 'Метро',
            J: 'Роборука',
            K: 'Прохладительные напитки'
        });

        ctx.param('parallels', [
            {
                letter: 'D',
                years: {
                    from: 6,
                    to: 7
                },
                mods: { layout: 'max' },
                attrs: { id: 'paralleld' },
                title: 'Основы программирования',
                requirements: [
                    'Умеете проводить простейшие математические рассуждения.',
                    'Знакомы с понятием алгоритма.',
                    'Не обязательно умеете программировать.'
                ],
                curriculum: [
                    'Основные принципы написания программ и работы в среде разработки.',
                    'Базовые типы данных и выражения языка программирования.',
                    'Базовые алгоритмы теории чисел, комбинаторики, теории графов.'
                ],
                details: [
                    'Работа со средой программирования.',
                    'Ввод-вывод, работа с файлами.',
                    'Целые типы данных, арифметические операции.',
                    'Логический тип данных, логические операции.',
                    'Стиль оформления программ.',
                    'Циклы.',
                    'Одномерные, многомерные массивы.',
                    'Символы, строки.',
                    'Написание функций, рекурсия.',
                    'Признаки делимости.',
                    'Остатки по модулю.',
                    'Алгоритм Евклида.',
                    'Квадратичные сортировки.',
                    'Простые числа, делимость, факторизация числа за корень.',
                    'Решето Эратосфена.',
                    'Системы счисления.',
                    'Понятие графа, его представление в программе.'
                ],
                tasks: {
                    elem: 'section',
                    content: {
                        block: 'details',
                        mods: { theme: 'strip' },
                        summary: 'Вступительная для параллели D',
                        details:
                            '<p>Вступительная работа для&nbsp;параллели D состоит из&nbsp;семи теоретических задач ' +
                            'и&nbsp;не&nbsp;требует умения программировать. Скачайте ' +
                            '<a href="' + parallelDlink +'">задачи вступительной</a>. Нужно не&nbsp;только ' +
                            'найти ответ к&nbsp;задаче, но&nbsp;и&nbsp;объяснить, почему он&nbsp;получается таким. ' +
                            'Не&nbsp;страшно, если у&nbsp;вас получаются не&nbsp;все задачи. Оформите&nbsp;то, ' +
                            'что&nbsp;получилось: возможно, этого хватит. Если какую-то задачу вы&nbsp;решили ' +
                            'не&nbsp;до&nbsp;конца, всё&nbsp;равно оформите&nbsp;её. Это&nbsp;принесёт дополнительные очки.</p>' +
                            '<p>Оформите работу в Microsoft Word, Open Office или просто текстовым файлом. ' +
                            'Можете оформить решение на бумаге, тогда отсканируйте или сфотографируйте его. ' +
                            'Оформленную работу присылайте на&nbsp;почту ' +
                            '<a href="mailto:mail@sicamp.ru?subject=Вступительная в ЛКЛ, параллель D">mail@sicamp.ru</a>. ' +
                            'В&nbsp;теме письма обязательно напишите «Вступительная в&nbsp;ЛКЛ, параллель D» ' +
                            'и&nbsp;ваши имя и&nbsp;фамилию. Вы&nbsp;можете отправить работу несколько раз, ' +
                            'мы&nbsp;рассмотрим только последнюю версию.</p>'
                    }
                }
            },
            {
                letter: 'C′',
                years: {
                    from: 6,
                    to: 8
                },
                title: 'Алгоритмы для&nbsp;начинающих',
                tasks: [ 'A', 'B', 'C' ],
                requirements: [
                    'Владеете основами языка программирования: вводом-выводом, базовыми операторами и типами данных.',
                    'Имеете небольшой опыт решения задач, можете самостоятельно довести простейшие программы '+
                        'до рабочего состояния.'
                ],
                curriculum: [
                    'Базовые алгоритмы теории чисел, комбинаторики, теории графов.',
                    'Базовые структуры данных.',
                    'Алгоритмы сортировки, в том числе быстрой.'
                ],
                details: [
                    'Простые числа, делимость, факторизация числа за корень.',
                    'Решето Эратосфена.',
                    'Стек.',
                    'Очередь.',
                    'Строки.',
                    'Квадратичные сортировки.',
                    'Бинарный поиск.',
                    'Введение в динамическое программирование.',
                    'Рекурсия.',
                    'Комбинаторика: формулы для количества, перечисление всех элементов.',
                    'Понятие графа, его представление в программе.',
                    'Обход графа в глубину, в ширину.',
                    'Сортировка слияниями.'
                ]
            },
            {
                letter: 'C',
                years: {
                    from: 7,
                    to: 9
                },
                title: 'Базовые алгоритмы',
                tasks: [ 'B', 'C', 'D', 'E' ],
                requirements: [
                    'Уверенно владеете основами языка программирования.',
                    'Имеете опыт решения задач.',
                    'Знаете базовые алгоритмы комбинаторики и теории чисел.'
                ],
                curriculum: [
                    'Базовые структуры данных.',
                    'Техники бинарного поиска, динамического программирования, хеширования.',
                    'Классические алгоритмы теории графов.'
                ],
                details: [
                    'Стек.',
                    'Очередь.',
                    'Бинарный поиск.',
                    'Введение в динамическое программирование.',
                    'Наибольшая возрастающая подпоследовательность, наибольшая общая подпоследовательность.',
                    'Куча, быстрая сортировка.',
                    'Хеширование.',
                    'Хеш-таблица.',
                    'Понятие графа, его представление в программе.',
                    'Обход графа в глубину, в ширину.',
                    'Топологическая сортировка графа.',
                    'Алгоритм Дейкстры.',
                    'Алгоритм Флойда.',
                    'Рекурсия, перечисление комбинаторных объектов.',
                    'Определение комбинаторного объекта по номеру, и номера по объекту.'
                ]
            },
            {
                letter: 'B′',
                years: {
                    from: 7,
                    to: 10
                },
                title: 'Практическое применение алгоритмов в&nbsp;олимпиадных задачах',
                tasks: [ 'D', 'E', 'F', 'G' ],
                requirements: [
                    'Уверенно владеете основами языка программирования.',
                    'Знаете алгоритмы параллелей C′ и C.',
                    'Имеете опыт решения задач.'
                ],
                curriculum: [
                    'Применение и более глубокое изучение уже известных алгоритмов.',
                    'Практика решения задач с использованием нетривиальных приёмов и алгоритмов.'
                ],
                details: [
                    'Сортировки.',
                    'Жадные алгоритмы.',
                    'Бинарный поиск.',
                    'Тернарный поиск.',
                    'События на прямой.',
                    'Сканирующая прямая.',
                    'Комбинаторика правильных скобочных последовательностей.',
                    'Хеширование.',
                    'Хеш-таблица.',
                    'Обходы в глубину/в ширину на неявных графах.',
                    'Алгоритм Дейкстры.',
                    'Алгоритм Флойда.',
                    'Алгоритм Форда-Беллмана.',
                    'Техника двух указателей.',
                    'Элементарная вычислительная геометрия: вектора, операции с ними, задание простейших геометрических объектов.',
                    'Геометрия многоугольников, построение выпуклой оболочки множества точек.'
                ]
            },
            {
                letter: 'B',
                years: {
                    from: 8,
                    to: 10
                },
                title: 'Алгоритмы и&nbsp;структуры данных',
                tasks: [ 'F', 'G', 'H', 'I' ],
                requirements: [
                    'Уверенно владеете языком программирования.',
                    'Имеете опыт решения задач с применением алгоритмов.',
                    'Знаете основные алгоритмы на графах, алгоритм быстрой сортировки, основные структуры данных (стек, очередь, список, куча).',
                    'Уверенно владеете техниками перебора, динамического программирования.'
                ],
                curriculum: [
                    'Cтруктуры данных на основе деревьев.',
                    'Алгоритмы на строках и графах.',
                    'Продвинутые методы динамического программирования.',
                    'Задачи вычислительной геометрии.'
                ],
                details: [
                    'Дерево отрезков.',
                    'Разреженные таблицы.',
                    'Декартово дерево по явному и неявному ключу.',
                    'Наибольшая возрастающая подпоследовательность, наибольшая общая подпоследовательность.',
                    'Динамическое программирование по подотрезкам.',
                    'Динамическое программирование по подмножествам.',
                    'Динамическое программирование по поддеревьям.',
                    'Продвинутые применения обхода в глубину: топологическая сортировка, поиск мостов и точек сочленения.',
                    'Алгоритм Дейкстры.',
                    'Алгоритм Флойда.',
                    'Алгоритм Форда-Беллмана.',
                    'Алгоритм Прима.',
                    'Алгоритм Краскала.',
                    'Система непересекающихся множеств.',
                    'Элементарная вычислительная геометрия: вектора, операции с ними, задание простейших геометрических объектов.',
                    'Геометрия окружностей.',
                    'Геометрия многоугольников, построение выпуклой оболочки множества точек.',
                    'Эффективный поиск пары ближайших точек.',
                    'Хеширование.',
                    'Хеш-таблица.',
                    'Алгоритм Кнута-Морриса-Пратта, Z-функция.',
                    'Бор.',
                    'Расширенный алгоритм Евклида.',
                    'Обращение элемента по простому модулю.',
                    'Понятие первообразного корня по простому модулю.'
                ]
            },
            {
                letter: 'A',
                years: {
                    from: 9,
                    to: 10
                },
                title: 'Продвинутые алгоритмы и&nbsp;решение олимпиадных задач высокого уровня',
                tasks: [ 'H', 'I', 'J', 'K' ],
                requirements: [
                    'Имеете значительный опыт решения задач и участия в олимпиадах.',
                    'Уверенно владеете алгоритмами параллели B, в том числе структурами данных.'
                ],
                curriculum: [
                    'Решение многоходовых задач с использованием сложных алгоритмов и структур данных.',
                    'Продвинутые алгоритмы: потоки, игры на графах, LCA и центроидная декомпозиция дерева.',
                    'Практика написания контестов на время.'
                ],
                details: [
                    'Дерево отрезков.',
                    'Персистентные структуры данных.',
                    'Корневая оптимизация.',
                    'Максимальный поток в графе.',
                    'Алгоритм Диница поиска максимального потока.',
                    'Поиск максимального потока минимальной стоимости.',
                    'Игры на ациклических графах.',
                    'Ретроанализ.',
                    'Игра в ним и функция Гранди.',
                    'Бор.',
                    'Алгоритм Ахо-Корасик.',
                    'Эффективный поиск наименьшего общего предка двух вершин в корневом дереве.',
                    'Центроидная декомпозиция дерева.',
                    'Динамическое программирование по подмножествам.',
                    'Динамическое программирование по поддеревьям.',
                    'Практика решения сложных задач динамического программирования.',
                    'Применение структур данных в задачах динамического программирования.',
                    'Практика решения сложных задач вычислительной геометрии.',
                    'Практика написания индивидуальных контестов с ограниченным временем.'
                ]
            }
        ]);
    });

};
