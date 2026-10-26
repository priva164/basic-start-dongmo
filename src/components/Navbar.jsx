import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { href: '#accueil',  label: 'Accueil' },
  { href: '#apropos',  label: 'À propos' },
  { href: '#services', label: 'Nos services' },
  { href: '#galerie',  label: 'Galerie' },
  { href: '#contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [activeLink,   setActiveLink]   = useState('#accueil')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Ferme le menu mobile au redimensionnement
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (href) => {
    setActiveLink(href)
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__container">
        {/* Logo */}
        <a
          className="navbar__brand"
          href="#accueil"
          onClick={(e) => { e.preventDefault(); handleNavClick('#accueil') }}
          aria-label="AFMARKET – retour à l'accueil"
        >
          <img src="/logo.png" alt="Logo AFMARKET" className="navbar__logo" />
        </a>

        {/* Navigation desktop */}
        <nav className="navbar__nav" aria-label="Navigation principale">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar__link${activeLink === link.href ? ' navbar__link--active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA desktop */}
        <a
          href="#contact"
          className="btn btn-primary navbar__cta"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
        >
          Nous contacter
        </a>

        {/* Burger mobile */}
        <button
          className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Menu mobile */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="navbar__mobile-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__mobile-link${activeLink === link.href ? ' navbar__mobile-link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="btn btn-primary navbar__mobile-cta"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            >
              Nous contacter
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
