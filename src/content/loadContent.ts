import { load } from 'js-yaml'
import type { AlbumContent, AlbumPhoto, SiteContent } from './types'

const siteModules = import.meta.glob('../../content/site.yaml', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

const albumModules = import.meta.glob('../../content/albums/*.yaml', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

function parseSite(raw: string): SiteContent {
  const data = load(raw) as Partial<SiteContent>
  if (!data?.title || !data?.tagline || !data?.intro) {
    throw new Error('content/site.yaml must include title, tagline, and intro')
  }
  return {
    title: String(data.title),
    tagline: String(data.tagline),
    intro: String(data.intro).trim(),
  }
}

function slugFromPath(path: string): string {
  const match = path.match(/\/([^/]+)\.yaml$/)
  if (!match) {
    throw new Error(`Could not derive album slug from path: ${path}`)
  }
  return match[1]
}

function parseAlbum(path: string, raw: string): AlbumContent {
  const data = load(raw) as {
    title?: string
    date?: string
    description?: string
    photos?: AlbumPhoto[]
  }

  if (!data?.title || !Array.isArray(data.photos) || data.photos.length === 0) {
    throw new Error(
      `${path} must include title and a non-empty photos array`,
    )
  }

  return {
    slug: slugFromPath(path),
    title: String(data.title),
    date: data.date ? String(data.date) : undefined,
    description: data.description ? String(data.description).trim() : undefined,
    photos: data.photos.map((photo) => {
      if (!photo?.file) {
        throw new Error(`${path} has a photo missing file`)
      }
      return {
        file: String(photo.file),
        caption: photo.caption ? String(photo.caption) : undefined,
      }
    }),
  }
}

const siteRaw = Object.values(siteModules)[0]
if (!siteRaw) {
  throw new Error('Missing content/site.yaml')
}

export const site: SiteContent = parseSite(siteRaw)

export const albums: AlbumContent[] = Object.entries(albumModules)
  .map(([path, raw]) => parseAlbum(path, raw))
  .sort((a, b) => {
    const dateA = a.date ?? ''
    const dateB = b.date ?? ''
    if (dateA !== dateB) {
      return dateB.localeCompare(dateA)
    }
    return a.title.localeCompare(b.title)
  })

export function getAlbum(slug: string): AlbumContent | undefined {
  return albums.find((album) => album.slug === slug)
}
