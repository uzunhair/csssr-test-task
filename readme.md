## Установка

`npm i`
## Стили
- В `dev` режиме собриются 2 разных файла `theme.css` и `system.css`, это сделано чтобы не тратить 
лвиную долю времени на компиляцию редко изменяемых библиотек.
- В `production` режиме все стили объединяются в один файл `app.css`

### Работа с dev и prodaction
- Пока что делаем два рзных таска
- Добавлена ​​встроенная поддержка исходных карт - плагин gulp-sourcemaps больше не нужен!