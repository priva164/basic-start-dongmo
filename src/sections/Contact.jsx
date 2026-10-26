import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact section" aria-label="Contactez-nous">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Nous contacter</span>
          <h2 className="section-title">
            <span>Contactez</span> notre équipe
          </h2>
        </div>

        <div className="contact__info">
          <p>
            <strong>Téléphone :</strong>{' '}
            <a href="tel:+237699666112">+237 699-666-112</a>
          </p>
          <p>
            <strong>E-mail :</strong>{' '}
            <a href="mailto:dongmoserge@afmarketsuarl.com">dongmoserge@afmarketsuarl.com</a>
          </p>
          <p>
            <strong>Adresse :</strong> Nyalla Pariso, Douala Cameroun
          </p>
        </div>
      </div>
    </section>
  )
}
