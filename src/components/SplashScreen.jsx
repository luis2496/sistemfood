import logo from '../assets/logo-sistemfood.png';

export default function SplashScreen({ onEnter }) {
  return (
    <div
      className="splash-screen"
      role="dialog"
      aria-modal="true"
      aria-label="Bienvenida a the flavor engineer"
    >
      <div className="splash-card">
        <img
          src={logo}
          alt="Logotipo de the flavor engineer"
          className="splash-logo"
        />
        <h1 className="splash-brand">the flavor engineer</h1>
        <p className="splash-tagline">Sabor hecho a tu medida.</p>

        <button type="button" className="btn-cta splash-btn" onClick={onEnter}>
          Un rincón de placer sin culpa
        </button>
      </div>
    </div>
  );
}
