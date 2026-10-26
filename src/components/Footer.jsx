import './Footer.css'

const footerLinks = [
  { href: '#accueil',  label: 'Accueil' },
  { href: '#apropos',  label: 'À propos' },
  { href: '#services', label: 'Nos services' },
  { href: '#galerie',  label: 'Galerie' },
  { href: '#contact',  label: 'Contact' },
]

const poles = [
  "Bureau d'études & Expertises des Lots Technologiques",
  'Domotique & Technologies Innovantes',
  'Vente de matériel technologique',
  'Solutions Fintechs',
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand-col">
              <div className="footer__brand">
                <img src="/logo.png" alt="Logo AFMARKET" className="footer__logo" />
                <div className="footer__brand-text">
                  <span className="footer__brand-name">AFMARKET</span>
                  <span className="footer__brand-sub">Technovation Partners</span>
                </div>
              </div>
              <p className="footer__tagline">
                Africa Financial Market<br />
                L'ingénierie connectée au service de votre performance.
              </p>
            </div>

            {/* Navigation */}
            <div className="footer__col">
              <h3 className="footer__col-title">Navigation</h3>
              <ul className="footer__list">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="footer__link"
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pôles */}
            <div className="footer__col">
              <h3 className="footer__col-title">Nos pôles</h3>
              <ul className="footer__list">
                {poles.map((pole, i) => (
                  <li key={i}>
                    <a
                      href="#services"
                      className="footer__link"
                      onClick={(e) => { e.preventDefault(); scrollTo('#services') }}
                    >
                      {pole}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h3 className="footer__col-title">Contact</h3>
              <ul className="footer__list footer__list--contact">
                <li>
                  <a href="tel:+237699666112" className="footer__link">
                    +237 699-666-112
                  </a>
                </li>
                <li>
                  <a href="mailto:dongmoserge@afmarketsuarl.com" className="footer__link">
                    dongmoserge@afmarketsuarl.com
                  </a>
                </li>
                <li>
                  <span className="footer__link">Nyalla Pariso, Douala Cameroun</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Barre du bas */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copy">
              © {new Date().getFullYear()} AFMARKET – Technovation Partners. Tous droits réservés.
            </p>
            <p className="footer__made">
              Bureau d'études · Domotique · Vente de matériel · Fintech
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
