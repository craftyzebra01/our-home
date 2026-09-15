# Architecture

## Stack

- **Vite** — dev server and static build
- **React + TypeScript** — UI
- **React Router** — `/` (home) and `/albums/:slug` (album viewer)
- **YAML** (`js-yaml`) — site and album content, loaded at build/dev time via Vite’s `import.meta.glob`

No backend. The production build is static files in `dist/`.

## Page flow

```
Home (/)  →  intro from site.yaml + album list
                ↓
Album (/albums/:slug)  →  one photo at a time, prev/next
```

## Folder layout

```
docs/                 this documentation
content/
  site.yaml           home intro
  albums/*.yaml       one file per album
public/albums/        image files per album slug
src/
  main.tsx            React entry
  App.tsx             router
  pages/              Home, Album
  components/         AlbumList, AlbumViewer
  content/            typed YAML loaders
  styles/             global CSS + variables
```

## Content loading

`src/content/loadContent.ts` uses `import.meta.glob` on `../../content/**/*.yaml` with `?raw`, parses each file with `js-yaml`, and exports:

- `site` — parsed `site.yaml`
- `albums` — array of albums with `slug` derived from the filename

Photo URLs are `/albums/<slug>/<file>` (served from `public/`).

## Album viewer

`AlbumViewer` keeps a current index in React state. Previous/next buttons and Left/Right arrow keys move the index. Controls disable at the ends of the list. A counter shows `n / total`.

## Styling

Global CSS with CSS variables for color and type. One composition on the home first viewport (brand, tagline/intro, path into albums). Album view is interaction-first: large photo, caption, and flip controls.
