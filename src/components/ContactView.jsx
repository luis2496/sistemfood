import { WHATSAPP_NUMBER } from '../models/orderModel';

const MAP_LAT = 10.18839;
const MAP_LON = -69.31111;

export default function ContactView({
  cartCount = 0,
  onBackHome,
  onExploreMenu,
  onOpenCart,
}) {
  return (
    <main className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <div>
            <span className="contact-eyebrow">Encuéntranos</span>
            <h1 className="contact-title">Ven a visitarnos</h1>
            <p className="contact-subtitle">
              Estamos listos para recibirte, preparar tu pedido o llevarlo hasta
              tu puerta.
            </p>
          </div>

          <div className="contact-header-actions">
            <button type="button" className="btn-pill-cream" onClick={onBackHome}>
              ← Inicio
            </button>
            <button
              type="button"
              className="btn-pill-cream"
              onClick={onExploreMenu}
            >
              Explorar menú
            </button>
            <button type="button" className="btn-pedido" onClick={onOpenCart}>
              Mi pedido
              {cartCount > 0 && (
                <span className="badge" aria-label={`${cartCount} productos`}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="contact-grid">
          <div className="map-card">
            <div className="map-frame-wrapper">
              <iframe
                title="Ubicación de The Flavor Engineer"
                className="map-iframe"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${MAP_LON - 0.006}%2C${MAP_LAT - 0.004}%2C${MAP_LON + 0.006}%2C${MAP_LAT + 0.004}&layer=mapnik&marker=${MAP_LAT}%2C${MAP_LON}`}
                loading="lazy"
              />
              <div className="map-pin-tooltip">The Flavor Engineer</div>
            </div>

            <div className="map-address-box">
              <span className="address-eyebrow">Dirección</span>
              <p className="address-text">
                5MQQ+9HV, Tamaca, Lara, Venezuela
              </p>
              <a
                href={`https://www.openstreetmap.org/?mlat=${MAP_LAT}&mlon=${MAP_LON}#map=17/${MAP_LAT}/${MAP_LON}`}
                target="_blank"
                rel="noopener noreferrer"
                className="directions-link"
              >
                Abrir indicaciones ↗
              </a>
            </div>
          </div>

          <div className="info-cards-stack">
            <article className="info-card card-cream">
              <h2 className="info-card-title">Cómo puedes disfrutarlo</h2>
              <div className="enjoy-options-grid">
                <div>
                  <h3 className="enjoy-option-heading">Domicilio</h3>
                  <p className="enjoy-option-desc">
                    Pide para llevarlo a tu zona y coordina los detalles por
                    WhatsApp.
                  </p>
                </div>
                <div>
                  <h3 className="enjoy-option-heading">Atención en el local</h3>
                  <p className="enjoy-option-desc">
                    Ven a disfrutar tu pedido recién preparado en un ambiente
                    casual.
                  </p>
                </div>
              </div>
            </article>

            <article className="info-card card-dark">
              <h2 className="info-card-title text-mustard">
                Horario de atención
              </h2>
              <p className="schedule-text">
                Sabados y Domingos · 6:30 p. m. – 11:30 p. m.
              </p>
            </article>

            <article className="info-card card-red">
              <h2 className="info-card-title text-white">Síguenos</h2>
              <div className="social-links-row">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <svg
                    className="social-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <svg
                    className="social-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M15 3h-2.5A4.5 4.5 0 0 0 8 7.5V10H5.5v4H8v7h4v-7h3l.5-4H12V7.5c0-.6.4-1 1-1h2z" />
                  </svg>
                  Facebook
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <svg
                    className="social-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12.04 2a9.9 9.9 0 0 0-8.4 15.1L2 22l5.05-1.6A9.9 9.9 0 1 0 12.04 2zm5.8 14.1c-.24.68-1.4 1.3-1.94 1.34-.53.05-1.03.24-3.47-.72-2.94-1.16-4.8-4.21-4.94-4.4-.14-.2-1.17-1.57-1.17-3 0-1.42.75-2.12 1.02-2.41.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.48.24.58.8 1.98.87 2.12.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.61 2.01 1.11.99 2.04 1.3 2.33 1.44.29.15.46.12.63-.07.17-.2.72-.84.92-1.13.19-.29.39-.24.65-.14.26.09 1.65.78 1.94.92.29.15.48.22.55.34.07.13.07.75-.17 1.43z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
