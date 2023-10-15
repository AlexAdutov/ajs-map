# Домашнее задание к лекции «Контейнеры»


[![Build status](https://ci.appveyor.com/api/projects/status/lp21h7dpwdpim4sr?svg=true)](https://ci.appveyor.com/project/AlexAdutov/ajs-map)


**Важно**: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

**Важно**: код должен проходить ESLint без ошибок.

**Важно**: тесты должны обеспечивать 100% покрытие тестируемых функций по строкам.

**Важно**: решения должны быть построены на базе [шаблона Webpack](/ci-template).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе вставьте ссылки на ваш GitHub-проекты.

---
## Map

### Легенда

Вы решили упорядочить работу с ошибками в своём приложении, а именно ввести цетрализованно числовой код ошибки и её описание. И при генерации любых ошибок в коде приложения брать их из централизованного хранилища.

### Описание

Создайте свой класс `ErrorRepository` внутри которого храните `Map`, в котором ключ - это код ошибки (число), а значение - текстовое описание (человекочитаемое).

Реализуйте метод `translate(code)`, позволяющий по коду получить текст ошибки, а в случае отсутствия подобного кода возвращать строку `'Unknown error'`.

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете.

----

## Map (задача со звёздочкой)

**Важно**: данная задача не является обязательной 

### Легенда

Давать возможность пользователю кастомизировать внешний вид приложения - достаточно хорошая идея. Поэтому вы решили также реализовать поддержку этой функциональности в своей игре.

### Описание

У вас есть default'ные настройки, хранящиеся в `Map`'е:
1. `'theme': 'dark'` (другие возможные значения - `'light'`, `'gray'`);
1. `'music': 'trance'` (другие возможные значения - `'pop'`, `'rock'`, `'chillout'`, `'off'`);
1. `'difficulty': 'easy'` (другие возможные значения - `'normal'`, `'hard'`, `'nightmare'`).

Напишите класс `Settings`, который содержит:
1. Набор настроек по умолчанию - хранить в `Map`'е;
1. Набор пользовательских настроек (пользователь может установить конкретную настройку по имени и значению) - хранить в `Map`'е нужно только те настройки, которые пользователь установил;
1. Get'тер `settings`, который возвращает `Map`, полученный путём наложения пользовательских настроек, на default'ные.

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете.
