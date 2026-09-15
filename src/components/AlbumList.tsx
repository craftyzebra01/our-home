import { Link } from 'react-router-dom'
import type { AlbumContent } from '../content/types'
import { photoUrl } from '../content/types'

type AlbumListProps = {
  albums: AlbumContent[]
}

export function AlbumList({ albums }: AlbumListProps) {
  if (albums.length === 0) {
    return <p className="album-list-empty">No albums yet.</p>
  }

  return (
    <ul className="album-list">
      {albums.map((album) => {
        const cover = album.photos[0]
        return (
          <li key={album.slug}>
            <Link to={`/albums/${album.slug}`} className="album-link">
              <span className="album-link-media">
                <img
                  src={photoUrl(album.slug, cover.file)}
                  alt=""
                  width={480}
                  height={320}
                />
              </span>
              <span className="album-link-text">
                <span className="album-link-title">{album.title}</span>
                {album.date ? (
                  <span className="album-link-date">{album.date}</span>
                ) : null}
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
