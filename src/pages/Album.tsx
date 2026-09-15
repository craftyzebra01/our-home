import { Link, useParams } from 'react-router-dom'
import { getAlbum } from '../content/loadContent'
import { AlbumViewer } from '../components/AlbumViewer'

export function Album() {
  const { slug } = useParams<{ slug: string }>()
  const album = slug ? getAlbum(slug) : undefined

  if (!album) {
    return (
      <main className="page album-page">
        <p className="not-found">Album not found.</p>
        <Link to="/" className="text-link">
          Back home
        </Link>
      </main>
    )
  }

  return (
    <main className="page album-page">
      <header className="album-header">
        <Link to="/" className="text-link">
          ← Home
        </Link>
        <h1 className="album-title">{album.title}</h1>
        {album.date ? <p className="album-date">{album.date}</p> : null}
        {album.description ? (
          <p className="album-description">{album.description}</p>
        ) : null}
      </header>
      <AlbumViewer album={album} />
    </main>
  )
}
