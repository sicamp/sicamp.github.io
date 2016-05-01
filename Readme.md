# Сайт летнего компьютерного лагеря

[![Build status][travis-image]][travis-link]
[![Windows build status][appveyor-image]][appveyor-link]
[![devDependency status][devdeps-image]][devdeps-link]

Итак, чтобы собрать приложение, нужен [Node.js](https://nodejs.org/) не ниже 4.0 и unix-like операционная система. Может быть, на Windows тоже всё заработает, но я за неё не ручаюсь.

 * `npm install` — установить зависимости;
 * `npm start` — запустить приложение в девелопмент-режиме;
 * `npm run build` — собрать файлы для продакшна;
 * `npm test` — запустить тесты (сейчас это только линтеры).

## Как это работает

Сайт свёрстан по методологии [БЭМ](https://ru.bem.info/). Шаблонизатор — [BH](https://github.com/bem/bh), сборщик — [ENB](https://github.com/enb-make/enb). Для сборки CSS используется [PostCSS](https://github.com/postcss/postcss). Чтобы изучить сборку, читайте файл [.enb/make.js](.enb/make.js).

## Остались вопросы

Пишите на [isqua@isqua.ru](mailto:isqua@isqua.ru) (можно в джаббер с тем же адресом), отвечу.

[travis-image]: https://img.shields.io/travis/sicamp/sicamp.github.io.svg?style=flat-squared
[travis-link]: https://travis-ci.org/sicamp/sicamp.github.io
[appveyor-image]: https://ci.appveyor.com/api/projects/status/y4ox4dx6w7ukj281/branch/dev?svg=true
[appveyor-link]: https://ci.appveyor.com/project/isqua/sicamp-github-io
[devdeps-image]: https://img.shields.io/david/dev/sicamp/sicamp.github.io.svg?style=flat-squared
[devdeps-link]: https://david-dm.org/sicamp/sicamp.github.io#info=devDependencies
