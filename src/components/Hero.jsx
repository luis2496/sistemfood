import heroImage from '../assets/hero-burger.jpg';

export default function Hero({ onExploreMenu }) {
  return (
    <main id="inicio" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="pill-badge">Sabor hecho a tu medida</div>

          <h1 className="hero-title">La fórmula para comer increíble.</h1>

          <p className="hero-subtitle">
            Elige tus favoritos, programa cuándo los quieres y deja tu pedido
            listo para WhatsApp. Así de fácil.
          </p>

          <button type="button" className="btn-cta" onClick={onExploreMenu}>
            <span>Explorar el menú</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </button>
        </div>

        <div className="hero-media">
          <div className="image-card-wrapper">
            <img
              src={heroImage}
              alt="Hamburguesa artesanal con queso derretido, tocino y vegetales frescos"
              className="hero-image"
            />
            <div className="floating-tag">Hecho para antojarte</div>
          </div>
        </div>
      </div>
    </main>
  );
}
