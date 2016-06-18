# Сайт летнего компьютерного лагеря

[![Build status][travis-image]][travis-link]
[![Windows build status][appveyor-image]][appveyor-link]
[![devDependency status][devdeps-image]][devdeps-link]

Итак, чтобы собрать приложение, нужен [Node.js](https://nodejs.org/) не ниже 4.0 и unix-like операционная система. Может быть, на Windows тоже всё заработает, но я за неё не ручаюсь.

 * `npm install` — установить зависимости;
 * `npm start` — запустить приложение в девелопмент-режиме;
 * `npm run build` — собрать файлы для продакшна;
 * `npm test` — запустить тесты (сейчас это только линтеры).

## Как предложить изменения

1. Если вы не состоите в организации sicamp на Гитхабе, форкните репозиторий.
2. Склонируйте свой форк (или этот репозиторий, если вы член организации).
3. Создайте ветку, в которой будете вносить изменения. Например:
  ```
  git checkout -b update-enlisted
  ```
4. Поправьте, что нужно.
5. Закоммитьте изменения: `git commit -m 'Сообщение коммита'`
6. Запуште их: `git push`
7. Откройте пулл-реквест из вашей ветки в ветку `dev` этого репозитория.
8. Дождитесь, когда ваш пулл-реквест кто-нибудь вольёт.

## Как поправить тексты

Список зачисленных лежит в файле `data.blocks/enlisted/enlisted.csv`. Можно залить новый файл в том же формате.

Все тексты находятся в папке `data.blocks`. Поищите текст, который хотите поправить, в ней:

```
grep 'текст' -r data.blocks
```

Запустите `npm start` и проверьте, что информация обновилась.

Если всё в порядке — можно коммитить и открывать пулл-реквест.

## Как доставить изменения на сайт

На сайт попадёт всё, что есть в ветке `dev`. Поэтому переключитесь в ветку:
```
git checkout dev
```

Обновите её:
```
git pull origin dev
```

Убедитесь, что всё в порядке. Запустите сайт локально и пройдитесь по страницам:
```
npm start
```

Если всё хорошо, запустите деплой:
```
./deploy.sh
```

Этот скрипт запустит сборку, переключится в ветку `master`, разложит файлы по местам, закоммитит и запушит их. Так они попадут на сайт.

## Как это работает

Сайт свёрстан по методологии [БЭМ](https://ru.bem.info/). Шаблонизатор — [BH](https://github.com/bem/bh), сборщик — [ENB](https://github.com/enb-make/enb). Для сборки CSS используется [PostCSS](https://github.com/postcss/postcss). Чтобы изучить сборку, читайте файл [.enb/make.js](.enb/make.js).

## Остались вопросы

Пишите на [isqua@isqua.ru](mailto:isqua@isqua.ru) (можно в джаббер с тем же адресом), отвечу.

[travis-image]: https://img.shields.io/travis/sicamp/sicamp.github.io.svg?style=flat-squared
[travis-link]: https://travis-ci.org/sicamp/sicamp.github.io
[appveyor-image]: https://ci.appveyor.com/api/projects/status/bf3adp62c6vagy3x/branch/dev?svg=true
[appveyor-link]: https://ci.appveyor.com/project/isqua/sicamp-github-io
[devdeps-image]: https://img.shields.io/david/dev/sicamp/sicamp.github.io.svg?style=flat-squared
[devdeps-link]: https://david-dm.org/sicamp/sicamp.github.io#info=devDependencies
