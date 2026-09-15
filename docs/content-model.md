# Content model

All guest-facing copy and album metadata live in YAML under `content/`. Photos are plain image files under `public/albums/`.

## Site intro — `content/site.yaml`

```yaml
title: Our Home
tagline: Welcome — make yourselves comfortable.
intro: |
  Short paragraph you can edit anytime.
```

| Field | Required | Description |
|-------|----------|-------------|
| `title` | yes | Brand / home name shown prominently on the home page |
| `tagline` | yes | One short supporting line under the title |
| `intro` | yes | Longer welcome text (multi-line OK) |

## Albums — `content/albums/<slug>.yaml`

One file per trip. The filename (without `.yaml`) is the album **slug** used in the URL (`/albums/<slug>`).

```yaml
title: Summer in Portugal
date: 2025-07
description: A few favorites from the trip.
photos:
  - file: 01-lisbon.jpg
    caption: First morning in Lisbon
  - file: 02-coast.jpg
    caption: Optional caption
```

| Field | Required | Description |
|-------|----------|-------------|
| `title` | yes | Album display name |
| `date` | no | Display date (any string, e.g. `2025-07` or `July 2025`) |
| `description` | no | Short blurb on the album page |
| `photos` | yes | Ordered list of photos (display order) |
| `photos[].file` | yes | Filename relative to `public/albums/<slug>/` |
| `photos[].caption` | no | Caption under the photo |

## Photo files

For an album with slug `coastal-weekend`:

```
public/albums/coastal-weekend/01-sunrise.jpg
public/albums/coastal-weekend/02-dock.jpg
```

The first photo in the YAML list is used as the album cover on the home page.

## How to add a trip

1. Create `content/albums/my-trip.yaml` with title, optional date/description, and ordered `photos`.
2. Put the image files in `public/albums/my-trip/` using the same filenames as in YAML.
3. Restart or refresh the dev server (or rebuild) so the new YAML is picked up.
4. Open `/albums/my-trip` or find the album on the home page.
