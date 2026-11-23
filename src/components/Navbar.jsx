import logo from '../assets/logo-sistemfood.png';

export default function Navbar({
  cartCount = 0,
  onNavigateHome,
  onNavigateMenu,
  onNavigateContact,
  onOpenCart,
}) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <button type="button" className="brand" onClick={onNavigateHome}>
          <img
            src={logo}
            alt="Logotipo de the flavor engineer"
            className="brand-logo"
          />
          <span className="brand-name">the flavor engineer</span>
        </button>

        <nav className="nav-actions" aria-label="Navegación principal">
          <button type="button" className="nav-link" onClick={onNavigateMenu}>
            Menú
          </button>
          <button type="button" className="nav-link" onClick={onNavigateContact}>
            Contacto
          </button>
          <button type="button" className="btn-pedido" onClick={onOpenCart}>
            Mi pedido
            {cartCount > 0 && (
              <span className="badge" aria-label={`${cartCount} productos`}>
                {cartCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
