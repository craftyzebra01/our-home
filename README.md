# Our Home

A simple React guest landing page: a short welcome intro and trip photo albums you can flip through.

## Quick start

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Edit the welcome text

Open [`content/site.yaml`](content/site.yaml):

```yaml
title: Our Home
tagline: Welcome — make yourselves comfortable.
intro: |
  Your welcome paragraph goes here.
```

Save and refresh the browser.

## Add a photo album

1. Create `content/albums/<slug>.yaml` (the filename becomes the URL slug).
2. Put images in `public/albums/<slug>/`.
3. List photos in order:

```yaml
title: Coastal Weekend
date: 2025-08
description: A quiet stretch of shore.
photos:
  - file: 01-sunrise.jpg
    caption: First light over the water
  - file: 02-path.jpg
```

The first photo is the cover on the home page. Open `/albums/<slug>` or use the home page list.

## Docs

- [`docs/overview.md`](docs/overview.md) — what this site is for
- [`docs/content-model.md`](docs/content-model.md) — YAML fields and photo layout
- [`docs/architecture.md`](docs/architecture.md) — React + Vite structure
