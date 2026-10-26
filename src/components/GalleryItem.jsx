import './GalleryItem.css'

export default function GalleryItem({ item, onClick }) {
  const isVideo = item.type === 'video'

  return (
    <div
      className={`gallery-item${isVideo ? ' gallery-item--video' : ''}`}
      role="listitem"
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      tabIndex={0}
      aria-label={`${isVideo ? 'Vidéo' : 'Photo'} : ${item.alt || item.title}`}
    >
      <div className="gallery-item__media">
        {isVideo ? (
          <img
            src={item.poster}
            alt={item.title}
            className="gallery-item__img"
            loading="lazy"
          />
        ) : (
          <img
            src={item.src}
            alt={item.alt}
            className="gallery-item__img"
            loading="lazy"
          />
        )}
      </div>

      {/* Overlay hover */}
      <div className="gallery-item__overlay" aria-hidden="true">
        <div className="gallery-item__overlay-icon">
          {isVideo ? (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          )}
        </div>
      </div>

      {/* Badge vidéo */}
      {isVideo && (
        <div className="gallery-item__badge" aria-hidden="true">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          Vidéo
        </div>
      )}
    </div>
  )
}
