import { albums, site } from '../content/loadContent'
import { AlbumList } from '../components/AlbumList'

export function Home() {
  return (
    <main className="page home-page">
      <section className="home-hero">
        <p className="home-eyebrow">For our guests</p>
        <h1 className="home-brand">{site.title}</h1>
        <p className="home-tagline">{site.tagline}</p>
        <p className="home-intro">{site.intro}</p>
      </section>

      <section className="home-albums" aria-labelledby="albums-heading">
        <h2 id="albums-heading" className="section-heading">
          Trip albums
        </h2>
        <p className="section-lede">A few favorites, in order — flip through at your own pace.</p>
        <AlbumList albums={albums} />
      </section>
    </main>
  )
}
