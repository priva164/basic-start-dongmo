import { services } from '../data/services'
import ServiceCard from '../components/ServiceCard'
import './Services.css'

export default function Services() {
  return (
    <section id="services" className="services section" aria-label="Nos services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Ce que nous faisons</span>
          <h2 className="section-title">
            Nos <span>4 pôles</span> d'expertise
          </h2>
          <p className="section-subtitle">
            De l'ingénierie à la finance, AFMARKET couvre l'ensemble du spectre technologique
            pour répondre à vos besoins les plus exigeants.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
