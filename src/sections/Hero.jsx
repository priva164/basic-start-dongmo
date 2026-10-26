import { useEffect, useState } from 'react'
import './Hero.css'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="accueil" className={`hero${visible ? ' hero--visible' : ''}`} aria-label="Section d'accueil">
      {/* Décoration de fond */}
      <div className="hero__bg-decoration" aria-hidden="true">
        <div className="hero__circle hero__circle--1" />
        <div className="hero__circle hero__circle--2" />
        <div className="hero__circle hero__circle--3" />
      </div>

      <div className="container hero__container">
        {/* Contenu principal */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            Technovation Partners
          </div>

          <h1 className="hero__title">
            Bureau d'études et ingénierie
            <span className="hero__title-highlight"> multi-secteurs</span>
          </h1>

          <p className="hero__subtitle">
            L'ingénierie connectée au service de votre performance
          </p>

          <p className="hero__poles">
            Bureau d'études · Domotique · Vente de matériel · Solutions Fintechs
          </p>

          <div className="hero__actions">
            <button
              className="btn btn-primary hero__btn"
              onClick={() => scrollTo('#services')}
            >
              Découvrir nos services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <button
              className="btn btn-outline hero__btn"
              onClick={() => scrollTo('#galerie')}
            >
              Voir nos réalisations
            </button>
          </div>
        </div>

        {/* Visuel tech animé */}
        <div className="hero__visual">
          <div className="hero__tech-grid">

            {/* Icône centrale */}
            <div className="hero__tech-center">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="32" cy="32" r="28" stroke="#2E86C1" strokeWidth="2" strokeDasharray="6 4"/>
                <circle cx="32" cy="32" r="18" fill="#EBF4FD"/>
                <path d="M32 20v8l6 4" stroke="#2E86C1" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="32" cy="32" r="3" fill="#7DC243"/>
              </svg>
              <span>Réseau connecté</span>
            </div>

            {/* Domotique */}
            <div className="hero__tech-item hero__tech-item--1">
              <div className="hero__tech-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="6" y="20" width="36" height="24" rx="3" fill="#EBF4FD" stroke="#2E86C1" strokeWidth="2"/>
                  <path d="M2 22L24 6l22 16" stroke="#2E86C1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="18" y="30" width="12" height="14" rx="2" fill="#7DC243"/>
                  <circle cx="36" cy="30" r="3" fill="#2E86C1"/>
                  <circle cx="36" cy="30" r="1.5" fill="#fff"/>
                </svg>
              </div>
              <span>Domotique</span>
            </div>

            {/* Électricité */}
            <div className="hero__tech-item hero__tech-item--2">
              <div className="hero__tech-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="24" cy="24" r="20" fill="#EBF4FD" stroke="#2E86C1" strokeWidth="2"/>
                  <path d="M28 10l-8 16h8l-8 12" stroke="#7DC243" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Électricité</span>
            </div>

            {/* GTB / Bâtiment intelligent */}
            <div className="hero__tech-item hero__tech-item--3">
              <div className="hero__tech-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="8" y="16" width="32" height="28" rx="2" fill="#EBF4FD" stroke="#2E86C1" strokeWidth="2"/>
                  <rect x="14" y="22" width="6" height="6" rx="1" fill="#7DC243"/>
                  <rect x="28" y="22" width="6" height="6" rx="1" fill="#7DC243"/>
                  <rect x="14" y="32" width="6" height="6" rx="1" fill="#2E86C1"/>
                  <rect x="28" y="32" width="6" height="6" rx="1" fill="#2E86C1"/>
                  <path d="M24 4l16 12H8L24 4z" fill="#2E86C1"/>
                </svg>
              </div>
              <span>Bâtiment intelligent</span>
            </div>

            {/* FinTech */}
            <div className="hero__tech-item hero__tech-item--4">
              <div className="hero__tech-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="4" y="12" width="40" height="26" rx="4" fill="#EBF4FD" stroke="#2E86C1" strokeWidth="2"/>
                  <rect x="4" y="18" width="40" height="6" fill="#2E86C1" opacity="0.15"/>
                  <rect x="10" y="28" width="10" height="4" rx="2" fill="#7DC243"/>
                  <circle cx="36" cy="30" r="5" fill="#2E86C1"/>
                  <path d="M36 27v6M33 30h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span>Fintech</span>
            </div>

            {/* Réseau / Infrastructure */}
            <div className="hero__tech-item hero__tech-item--5">
              <div className="hero__tech-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="24" cy="10" r="6" fill="#2E86C1"/>
                  <circle cx="10" cy="36" r="5" fill="#7DC243"/>
                  <circle cx="38" cy="36" r="5" fill="#7DC243"/>
                  <line x1="24" y1="16" x2="10" y2="31" stroke="#2E86C1" strokeWidth="2" strokeDasharray="3 2"/>
                  <line x1="24" y1="16" x2="38" y2="31" stroke="#2E86C1" strokeWidth="2" strokeDasharray="3 2"/>
                  <line x1="10" y1="36" x2="38" y2="36" stroke="#7DC243" strokeWidth="2" strokeDasharray="3 2"/>
                </svg>
              </div>
              <span>Infrastructure réseau</span>
            </div>

            {/* Sécurité */}
            <div className="hero__tech-item hero__tech-item--6">
              <div className="hero__tech-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M24 4l16 6v12c0 10-7 18-16 22C8 40 8 34 8 22V10L24 4z" fill="#EBF4FD" stroke="#2E86C1" strokeWidth="2"/>
                  <path d="M16 24l6 6 10-10" stroke="#7DC243" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Sécurité</span>
            </div>

          </div>
        </div>
      </div>

      {/* Flèche scroll */}
      <button
        className="hero__scroll-hint"
        onClick={() => scrollTo('#apropos')}
        aria-label="Défiler vers la section suivante"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </section>
  )
}
