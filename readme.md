# Nutren
Макет: https://www.figma.com/file/L1kQ76XQYlryeFCnIAA8QI/Nutren-Front?node-id=0%3A1
Копирайт: https://docs.google.com/document/d/105_H5KvyIGmpVDE_KZIUna6i_uG-dNfWxKF3I8mM6Rk/edit
Копирайт копия: https://docs.google.com/document/d/1NkUAtony4NwZKkYhjM1QwR8gTxi-NaMjGhqC5xhEOGY/edit
EN: https://docs.google.com/document/d/1rc6fm62ozBKHho3qOUHZXFgUXDlPP7f1Xxd9MvoUVPw/edit
FR: https://docs.google.com/document/d/1GxM9ukKxYZ2EFcKYN6KxWW2OUSk72rLJtIlbqYMyKHw/edit
TH: https://docs.google.com/document/d/16Gu0jPNMy9RNC5TNtD3oQyJKD06DLbmoR6n44Ncmyz0/edit
PT: https://docs.google.com/document/d/1r2VownwSng7mRcifxH1xKDAFT2vEvCpUparmRNw0nAo/edit
ES: https://docs.google.com/document/d/1DNOQNWz1Uui0rzRZ3fJ7Y0WGirkv-8zQ4hacV9mxwBc/edit

## Структура проекта

```
my-app/
  readme.md
  node_modules/
  package.json
  gulpfile.js
  src/
    index.html
    template/
    svgico/
    svg/
    style/
    spriteSVG/
    sprite/
    preview/
    libs/
    js/
    img/
    fonts/
  build/
  www/
```

### HTML

Главный `index.html` файл находится в папке `src/`. Он предназначен для включения html-темплейтов с папки `template/`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="css/main.css" />
    <title>Document title</title>
  </head>

  <body>
    <!-- =include template/header.html -->

    <!-- =include template/footer.html -->

    <!-- =require img/svg/symbols.svg -->
    <script src="js/main.js"></script>
  </body>
</html>
```

### SASS

Главный `main.sass` файл находится в папке `src/style/`. Он предназначен для включения sass/scss/css-модулей через `import`

Пример:

```sass
@import "libs/_media"
@import "../libs/bootstrap-grid.css"
@import "partials/custom"
```

### JavaScript

Главный `main.js` файл находится в папке `src/js/`. Он предназначен для включения js-модулей через `import ES6`

Пример:

```js
import objectFitImages from "object-fit-images";
import $ from "jquery";
import App from "./partials/app";
```

Модули хранятся в папке `src/js/partials`. Чтобы использовать функции модуля, их нужно экспортировать. Пример:

```js
export default function() {
  console.log("App module");
}
```

Тогда `import App from "./partials/app";` в `main.js` позволит вызывать модуль `App();`

### Спрайты

Для создания спрайта необходимо `.png` или `.jpg` картинки поместить в папку `sprite` после чего будет создан спрайт `sprite.png`

Пример использования в HTML:

```html
<i class="sprite sprite-new"></i>
```

Так же в sass нужно прописать:

```sass
  +sprite($new)
```

`new` - название картинки в папке `sprite`

Если нужно несколько спрайт-файлов, картинки необходимо помещать в подпапки. Например `sprite/icons`. После этого будет создан дополнительный спрайт `icons.png`. Также нужно будет подключить `icons.sass` в файле `main.sass`

```sass
  @import "libs/sprite"
  @import "libs/icons"
```

### Иконочные шрифты

Для создания иконочного шрифта SVG картинки нужно помещать в папку `svgico/` после чего будет создан шрифт `fico.*`.

Пример использования в HTML:

```html
<i class="fico fico-facebook"></i>
```

### SVG

SVG картинки нужно помещать в папку `svg/`, после чего они будут минифицированы и перемещены в build версию

### SVG спрайты

Для создания svg спрайта необходимо `.svg` поместить в папку `spriteSVG` после чего preview спрайта можно найти в папке `src/preview`

Пример использования в HTML:

```html
<svg class="icon store"><use xlink:href="#store"></use></svg>
```

## Build проекта

Development версия проекта создается в папке `build/` после запуска команды `gulp` в терминале

## Production проекта

Production версия проекта создается в папке `www/` после запуска команды `gulp deploy` и содержит в себе готовую до размещения на сервере версию проекта.
