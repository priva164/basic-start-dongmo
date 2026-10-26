import './About.css'

const values = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    title: 'Excellence technique',
    desc: "Nous appliquons des standards rigoureux à chaque projet, de la conception à la livraison.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
    title: 'Ancrage africain',
    desc: "Nos solutions sont pensées pour les réalités et les ambitions du marché africain.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Innovation connectée',
    desc: "Nous intégrons les dernières technologies pour des bâtiments et des systèmes intelligents.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Partenariat durable',
    desc: "Nous construisons des relations de confiance sur le long terme avec nos clients.",
  },
]

const highlights = [
  { value: '4', label: "Pôles d'expertise" },
  { value: '100+', label: 'Projets réalisés' },
  { value: '50+', label: 'Clients satisfaits' },
]

export default function About() {
  return (
    <section id="apropos" className="about section section-alt" aria-label="À propos de AFMARKET">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Qui sommes-nous</span>
          <h2 className="section-title">
            AFMARKET –{' '}
            <span>Technovation Partners</span>
          </h2>
          <p className="section-subtitle">
            Bureau d'études et ingénierie multi-secteurs basé à Douala, Cameroun.
          </p>
        </div>

        {/* Corps */}
        <div className="about__body">
          {/* Texte + chiffres */}
          <div className="about__text">
            <p className="about__paragraph">
              <strong>AFMARKET – Technovation Partners</strong> est une entreprise spécialisée dans
              l'ingénierie technologique, la domotique, la vente de matériel et les solutions fintech.
              Basée à <strong>Nyalla Pariso, Douala Cameroun</strong>, nous accompagnons nos clients
              depuis l'étude jusqu'à la mise en service de leurs projets.
            </p>
            <p className="about__paragraph">
              Notre approche intégrée réunit sous une même bannière les compétences d'un bureau
              d'études, d'un intégrateur technologique et d'un développeur de plateformes financières,
              pour offrir des solutions complètes et cohérentes.
            </p>
            <p className="about__paragraph">
              Animés par l'ambition de contribuer au développement technologique de l'Afrique, nos
              experts s'engagent à livrer des résultats mesurables, durables et adaptés aux enjeux
              locaux.
            </p>

            {/* Chiffres clés */}
            <div className="about__highlights">
              {highlights.map((h, i) => (
                <div key={i} className="about__highlight">
                  <span className="about__highlight-value">{h.value}</span>
                  <span className="about__highlight-label">{h.label}</span>
                </div>
              ))}
            </div>

            <div className="about__slogan">
              <blockquote>
                "L'ingénierie connectée au service de votre performance."
              </blockquote>
            </div>
          </div>

          {/* Valeurs */}
          <div className="about__values">
            {values.map((v, i) => (
              <div key={i} className="about__value-card">
                <div className="about__value-icon" aria-hidden="true">
                  {v.icon}
                </div>
                <div>
                  <h3 className="about__value-title">{v.title}</h3>
                  <p className="about__value-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
