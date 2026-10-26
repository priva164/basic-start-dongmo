import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="accueil" className="hero" aria-label="Section d'accueil">
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
              className="btn btn-outline hero__btn"
              onClick={() => scrollTo('#galerie')}
            >
              Voir nos réalisations
            </button>
            <button
              className="btn btn-primary hero__btn"
              onClick={() => scrollTo('#contact')}
            >
              Nous contacter
            </button>
          </div>
        </div>

        {/* Visuel logo */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__logo-wrap">
            <div className="hero__logo-ring hero__logo-ring--outer" />
            <div className="hero__logo-ring hero__logo-ring--mid" />
            <div className="hero__logo-ring hero__logo-ring--inner" />
            <img
              src="/logo.png"
              alt="Logo AFMARKET"
              className="hero__logo-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
