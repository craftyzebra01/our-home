export type SiteContent = {
  title: string
  tagline: string
  intro: string
}

export type AlbumPhoto = {
  file: string
  caption?: string
}

export type AlbumContent = {
  slug: string
  title: string
  date?: string
  description?: string
  photos: AlbumPhoto[]
}

export function photoUrl(slug: string, file: string): string {
  return `/albums/${slug}/${file}`
}
