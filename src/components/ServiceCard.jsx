import './ServiceCard.css'

export default function ServiceCard({ service, index }) {
  const isGreen = service.color === 'secondary'

  return (
    <article
      className={`service-card${isGreen ? ' service-card--green' : ''}`}
      style={{ '--card-accent': service.accent, animationDelay: `${index * 0.1}s` }}
      aria-label={service.title}
    >
      {/* En-tête */}
      <div className="service-card__header">
        <span className="service-card__tag">{service.tag}</span>
      </div>

      {/* Titre */}
      <h3 className="service-card__title">{service.title}</h3>

      {/* Description */}
      <p className="service-card__desc">{service.description}</p>

      {/* Points clés */}
      <ul className="service-card__points" aria-label="Points clés">
        {service.points.map((point, i) => (
          <li key={i} className="service-card__point">
            <span className="service-card__point-dot" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>

      {/* Ligne décorative bas */}
      <div className="service-card__bar" aria-hidden="true" />
    </article>
  )
}
