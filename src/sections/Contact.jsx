import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const EMAILJS_SERVICE_ID  = 'service_i96758i'
const EMAILJS_TEMPLATE_ID = 'template_1ymnphk'
const EMAILJS_PUBLIC_KEY  = 'HSfxWDEEyJ9iQVekG'

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.17a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: 'Téléphone',
    value: '+237 699-666-112',
    href: 'tel:+237699666112',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'E-mail',
    value: 'dongmoserge@afmarketsuarl.com',
    href: 'mailto:dongmoserge@afmarketsuarl.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.121 1.528 5.855L.057 23.8a.5.5 0 00.609.61l6.083-1.595A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.523-5.183-1.432l-.36-.215-3.862 1.013 1.029-3.76-.232-.374A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: '+237 699-666-112',
    href: 'https://wa.me/237699666112',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="10" r="3" />
        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 10-16 0c0 3 2.7 6.9 8 11.7z" />
      </svg>
    ),
    label: 'Adresse',
    value: 'Nyalla Pariso, Douala Cameroun',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const subjectLabels = {
      ingenierie: "Bureau d'études & Lots Technologiques",
      domotique:  'Domotique & Technologies Innovantes',
      vente:      'Vente de matériel technologique',
      fintech:    'Solutions Fintechs',
      autre:      'Autre demande',
    }

    const templateParams = {
      name:    form.name,
      email:   form.email,
      title:   subjectLabels[form.subject] || form.subject,
      message: form.message,
    }

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setLoading(false)
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus(null), 6000)
      })
      .catch((err) => {
        console.error('EmailJS error status:', err?.status)
        console.error('EmailJS error text:', err?.text)
        console.error('EmailJS full error:', JSON.stringify(err))
        setLoading(false)
        setStatus('error')
        setTimeout(() => setStatus(null), 6000)
      })
  }

  return (
    <section id="contact" className="contact section" aria-label="Contactez-nous">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Parlons de votre projet</span>
          <h2 className="section-title">
            <span>Contactez</span> notre équipe
          </h2>
          <p className="section-subtitle">
            Confiez vos défis technologiques à nos experts. Nous vous répondons dans les plus brefs délais.
          </p>
        </div>

        <div className="contact__body">
          {/* Informations de contact */}
          <div className="contact__info">
            <h3 className="contact__info-title">Nos coordonnées</h3>
            <ul className="contact__info-list">
              {contactInfo.map((item, i) => (
                <li key={i} className="contact__info-item">
                  <div className={`contact__info-icon${item.label === 'WhatsApp' ? ' contact__info-icon--whatsapp' : ''}`}>
                    {item.icon}
                  </div>
                  <div>
                    <span className="contact__info-label">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="contact__info-value contact__info-link"
                        target={item.label === 'WhatsApp' ? '_blank' : undefined}
                        rel={item.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact__info-value">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="contact__cta-block">
              <p className="contact__cta-text">
                Prêt à transformer votre infrastructure technologique ?
              </p>
              <div className="contact__pole-badges">
                <span className="contact__badge">Bureau d'études</span>
                <span className="contact__badge">Domotique</span>
                <span className="contact__badge">Vente de matériel</span>
                <span className="contact__badge">Fintech</span>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="contact__form-wrap">
            <form
              className="contact__form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Formulaire de contact"
            >
              <div className="contact__form-row">
                <div className="contact__field">
                  <label className="contact__label" htmlFor="contact-name">Nom complet</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="contact__input"
                    placeholder="Votre nom"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label" htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="contact__input"
                    placeholder="votre@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-subject">Sujet</label>
                <select
                  id="contact-subject"
                  name="subject"
                  className="contact__input contact__select"
                  value={form.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Sélectionnez un pôle</option>
                  <option value="ingenierie">Bureau d'études &amp; Lots Technologiques</option>
                  <option value="domotique">Domotique &amp; Technologies Innovantes</option>
                  <option value="vente">Vente de matériel technologique</option>
                  <option value="fintech">Solutions Fintechs</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="contact__input contact__textarea"
                  placeholder="Décrivez votre projet ou votre besoin..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {status === 'success' && (
                <div className="contact__feedback contact__feedback--success" role="alert">
                  ✓ Votre message a été envoyé avec succès. Nous vous répondrons très vite.
                </div>
              )}

              {status === 'error' && (
                <div className="contact__feedback contact__feedback--error" role="alert">
                  ✕ Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary contact__submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="contact__spinner" aria-hidden="true" />
                    Envoi en cours…
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
