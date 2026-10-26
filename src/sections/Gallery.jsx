import { useState } from 'react'
import { photos, videos } from '../data/media'
import GalleryItem from '../components/GalleryItem'
import Lightbox from '../components/Lightbox'
import './Gallery.css'

const TABS = [
  { id: 'all',    label: 'Tout voir' },
  { id: 'photos', label: 'Photos' },
  { id: 'videos', label: 'Vidéos' },
]

const PAGE_SIZE = 12

export default function Gallery() {
  const [activeTab,   setActiveTab]   = useState('all')
  const [lightbox,    setLightbox]    = useState(null) // { type, index }
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const allItems = [
    ...photos.map((p) => ({ ...p, type: 'photo' })),
    ...videos.map((v) => ({ ...v, type: 'video' })),
  ]

  const filtered =
    activeTab === 'all'
      ? allItems
      : activeTab === 'photos'
      ? allItems.filter((i) => i.type === 'photo')
      : allItems.filter((i) => i.type === 'video')

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const openLightbox = (index) => setLightbox({ index })
  const closeLightbox = () => setLightbox(null)

  const navigate = (dir) => {
    setLightbox((prev) => {
      const next = prev.index + dir
      if (next < 0 || next >= filtered.length) return prev
      return { index: next }
    })
  }

  return (
    <section id="galerie" className="gallery section section-alt" aria-label="Galerie de réalisations">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Nos réalisations</span>
          <h2 className="section-title">
            La <span>galerie</span> AFMARKET
          </h2>
          <p className="section-subtitle">
            Découvrez nos chantiers, équipements et installations à travers cette sélection de photos et vidéos.
          </p>
        </div>

        {/* Tabs filtre */}
        <div className="gallery__tabs" role="tablist" aria-label="Filtrer la galerie">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`gallery__tab${activeTab === tab.id ? ' gallery__tab--active' : ''}`}
              onClick={() => { setActiveTab(tab.id); setVisibleCount(PAGE_SIZE) }}
            >
              {tab.label}
              <span className="gallery__tab-count">
                {tab.id === 'all'    ? allItems.length
                : tab.id === 'photos' ? photos.length
                : videos.length}
              </span>
            </button>
          ))}
        </div>

        {/* Grille */}
        <div className="gallery__grid" role="list">
          {visible.map((item, idx) => (
            <GalleryItem
              key={`${item.type}-${item.id}`}
              item={item}
              onClick={() => openLightbox(idx)}
            />
          ))}
        </div>

        {/* Voir plus */}
        {hasMore && (
          <div className="gallery__more">
            <button
              className="btn btn-outline"
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            >
              Voir plus
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          item={filtered[lightbox.index]}
          onClose={closeLightbox}
          onPrev={() => navigate(-1)}
          onNext={() => navigate(1)}
          hasPrev={lightbox.index > 0}
          hasNext={lightbox.index < filtered.length - 1}
          current={lightbox.index + 1}
          total={filtered.length}
        />
      )}
    </section>
  )
}
