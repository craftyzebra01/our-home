# Our Home — Overview

## What this is

A simple guest landing page for visitors staying in our home. Guests open the site, read a short welcome intro, and browse photo albums from trips.

## Who uses it

- **Hosts** edit YAML files and drop photos into folders to update content.
- **Guests** open the site in a browser (phone or desktop) and flip through albums.

## What v1 includes

- Home page with title, tagline, and intro text from `content/site.yaml`
- List of trip albums from `content/albums/*.yaml`
- Album viewer that shows one photo at a time with previous/next controls
- Keyboard arrow keys to flip photos
- Photos stored as local files under `public/albums/`

## What “done” means for v1

1. Editing `content/site.yaml` and refreshing the app updates the intro.
2. Adding an album YAML + photos shows a new album on the home page.
3. Opening an album lets you flip through photos in the order listed in YAML.
4. The site works on desktop and mobile browsers.

## Out of scope for v1

Upload UI, accounts, comments, maps, remote photo APIs, and lightbox zoom.
