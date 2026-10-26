import { useEffect, useRef } from 'react'
import './Lightbox.css'

export default function Lightbox({ item, onClose, onPrev, onNext, hasPrev, hasNext, current, total }) {
  const isVideo = item.type === 'video'
  const videoRef = useRef(null)

  // Fermeture au clavier
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasPrev)  onPrev()
      if (e.key === 'ArrowRight' && hasNext) onNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  // Pause vidéo lors de la navigation
  useEffect(() => {
    if (videoRef.current) videoRef.current.load()
  }, [item])

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Visionneuse de médias"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Fond */}
      <div className="lightbox__backdrop" onClick={onClose} aria-hidden="true" />

      {/* Contenu */}
      <div className="lightbox__content">
        {/* Header */}
        <div className="lightbox__header">
          <span className="lightbox__counter">{current} / {total}</span>
          <button className="lightbox__close" onClick={onClose} aria-label="Fermer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Média */}
        <div className="lightbox__media">
          {isVideo ? (
            <video
              ref={videoRef}
              controls
              autoPlay
              className="lightbox__video"
              poster={item.poster}
            >
              <source src={item.src} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          ) : (
            <img
              src={item.src}
              alt={item.alt}
              className="lightbox__img"
            />
          )}
        </div>

        {/* Navigation */}
        <div className="lightbox__nav">
          <button
            className="lightbox__arrow lightbox__arrow--prev"
            onClick={onPrev}
            disabled={!hasPrev}
            aria-label="Précédent"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <span className="lightbox__caption">
            {item.alt || item.title}
          </span>

          <button
            className="lightbox__arrow lightbox__arrow--next"
            onClick={onNext}
            disabled={!hasNext}
            aria-label="Suivant"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
