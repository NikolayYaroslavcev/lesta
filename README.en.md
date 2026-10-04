# Lesta: vehicle showcase

[Русский](README.md) · **English**

Frontend developer test assignment (2025): a showcase of premium and collectible vehicles in the style of "World of Tanks".

- two sections, `premium` and `collectible`, built with React Router 7, plus a 404 page
- filtering by vehicle type (heavy, medium and light tanks, tank destroyers, SPGs) and sorting, state in Redux Toolkit, the calculations are moved into the `useFilteredAndSortedProducts` hook
- cards with price and discount, animations with Motion
- CSS Modules, SVGs as components via `vite-plugin-svgr`

`React 19` `TypeScript` `Redux Toolkit` `React Router 7` `Motion` `Vite`

## Running

```bash
npm install
npm run dev
```
