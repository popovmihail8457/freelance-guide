---
title: "requests и BeautifulSoup"
description: "requests и BeautifulSoup - Парсеры и скрипты."
sidebar:
  order: 1
---

Парсер собирает данные со страниц сайта. Для статических страниц достаточно **requests** (загрузка) и **BeautifulSoup** (разбор HTML).

## Порядок работы

1. Откройте страницу в браузере, посмотрите HTML (F12) и найдите нужные элементы.
2. Проверьте `robots.txt` и условия сайта.
3. Загрузите страницу: `requests.get(url, headers=..., timeout=15)`.
4. Разберите: `BeautifulSoup(html, "html.parser")` и `select("css-селектор")`.
5. Соберите результат в список словарей, сохраните в CSV или Excel.

```python
import requests
from bs4 import BeautifulSoup

r = requests.get(url, timeout=15)
r.raise_for_status()
soup = BeautifulSoup(r.text, "html.parser")
items = [a.text.strip() for a in soup.select(".item a")]
```

## Типичные ошибки

- Нет `timeout` - скрипт зависает.
- Селекторы завязаны на случайные классы, которые меняются.
- Нет обработки пустых значений.

## Чек-лист

- [ ] Таймауты и обработка ошибок
- [ ] Паузы между запросами
- [ ] Результат проверен на 20 случайных строках
