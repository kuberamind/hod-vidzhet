# hod.js: карточка хода

Подключение: `<div id="h"></div><script>window.HOD={...}</script><script src="CDN_URL"></script>`

Схема `window.HOD`:
`{t:"задача", s:[[имя, способ, статус, мс], ...], q, v, e}`
- t: название задачи
- s: шаги; способ: pachka | skript | cikl | dlinnoe | gotovyy | cepochka | potok | obychnyy; статус: "ok" | "err" | "run"; мс: длительность
- q: запросов за ход (при q<=4 показывается "выше нормы")
- v: вызовов внутри кусков
- e: экв. токенов

Без зависимостей, цвета через CSS-переменные окна с запасными, тёмная тема по prefers-color-scheme.
