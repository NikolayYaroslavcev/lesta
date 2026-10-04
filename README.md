# Lesta: витрина техники

**Русский** · [English](README.en.md)

Тестовое задание на фронтенд-разработчика (2025): витрина премиум- и коллекционной техники в стиле «Мира танков».

- два раздела, `premium` и `collectible`, на React Router 7 и страница 404
- фильтрация по типу техники (тяжёлые, средние, лёгкие танки, ПТ-САУ, САУ) и сортировка, состояние в Redux Toolkit, вычисления вынесены в хук `useFilteredAndSortedProducts`
- карточки с ценой и скидкой, анимации на Motion
- CSS Modules, SVG как компоненты через `vite-plugin-svgr`

`React 19` `TypeScript` `Redux Toolkit` `React Router 7` `Motion` `Vite`

## Запуск

```bash
npm install
npm run dev
```
