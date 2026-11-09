import { business } from '@/data/site';
import { ArrowUpRight, MapPin } from './icons';

const mapQuery = encodeURIComponent('Supercars, Alba Calderón, Cumbayá, Quito, Ecuador');

export function ContactMap() {
  return (
    <section className="contact-map-section" aria-labelledby="contact-map-title">
      <div className="container">
        <div className="contact-map-heading">
          <div>
            <span className="eyebrow">EN CUMBAYÁ</span>
            <h2 id="contact-map-title">Ven a vernos.</h2>
            <p><MapPin size={18} aria-hidden="true" /> {business.address}</p>
          </div>
          <a className="text-link" href={business.maps} target="_blank" rel="noopener noreferrer">
            Abrir en Google Maps <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="contact-map-frame">
          <iframe
            title="Mapa de Google Maps de Supercars en Cumbayá"
            src={`https://www.google.com/maps?q=${mapQuery}&z=16&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
