import { useEffect, useState } from 'react'
import type { AlbumContent } from '../content/types'
import { photoUrl } from '../content/types'

type AlbumViewerProps = {
  album: AlbumContent
}

export function AlbumViewer({ album }: AlbumViewerProps) {
  const [index, setIndex] = useState(0)
  const total = album.photos.length
  const photo = album.photos[index]
  const atStart = index <= 0
  const atEnd = index >= total - 1

  useEffect(() => {
    setIndex(0)
  }, [album.slug])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowLeft') {
        setIndex((current) => Math.max(0, current - 1))
      }
      if (event.key === 'ArrowRight') {
        setIndex((current) => Math.min(total - 1, current + 1))
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [total])

  return (
    <div className="album-viewer">
      <figure className="album-viewer-figure">
        <img
          key={photo.file}
          src={photoUrl(album.slug, photo.file)}
          alt={photo.caption ?? album.title}
          className="album-viewer-image"
        />
        {photo.caption ? (
          <figcaption className="album-viewer-caption">{photo.caption}</figcaption>
        ) : null}
      </figure>

      <div className="album-viewer-controls">
        <button
          type="button"
          className="album-nav-button"
          onClick={() => setIndex((current) => Math.max(0, current - 1))}
          disabled={atStart}
          aria-label="Previous photo"
        >
          Previous
        </button>
        <p className="album-viewer-counter" aria-live="polite">
          {index + 1} / {total}
        </p>
        <button
          type="button"
          className="album-nav-button"
          onClick={() => setIndex((current) => Math.min(total - 1, current + 1))}
          disabled={atEnd}
          aria-label="Next photo"
        >
          Next
        </button>
      </div>
    </div>
  )
}
