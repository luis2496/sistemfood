import { useEffect, useMemo, useState } from 'react';
import { MENU_CATEGORIES } from '../data/menuData';
import { formatPrice } from '../models/orderModel';

const SECTION_KEYWORDS = ['hamburguesa', 'perro', 'pepito', 'adicional'];

const SECTION_PRODUCT_IDS = new Set([
  'burg-1', 'burg-2', 'burg-3', 'burg-4', 'burg-5', 'burg-6', 'burg-7', 'burg-8',
  'perro-1', 'perro-2', 'perro-3', 'perro-4', 'perro-5', 'perro-6', 'perro-7',
  'pepi-1', 'pepi-2', 'pepi-3', 'pepi-4',
  'drink-4',
]);

const hasSectionProduct = (cart = []) =>
  cart.some((item) => {
    if (SECTION_PRODUCT_IDS.has(item.id)) {
      return true;
    }
    const name = (item.name || '').toLowerCase();
    const desc = (item.description || '').toLowerCase();
    return SECTION_KEYWORDS.some(
      (keyword) => name.includes(keyword) || desc.includes(keyword)
    );
  });

export default function MenuView({
  cart,
  orderDate,
  orderTime,
  orderNote,
  onOrderDateChange,
  onOrderTimeChange,
  onAddItem,
  onUpdateQty,
  onUpdateItemNote,
  onBackHome,
  onPrepareOrder,
  onCancelOrder,
}) {
  const [activeProduct, setActiveProduct] = useState(null);
  const [editingItemId, setEditingItemId] = useState(null);

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const showWhatsAppSection = useMemo(
    () => hasSectionProduct(cart),
    [cart]
  );

  useEffect(() => {
    if (!activeProduct) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProduct(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProduct]);

  useEffect(() => {
    const now = new Date();
    const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    onOrderDateChange(date);
    onOrderTimeChange(time);
  }, [onOrderDateChange, onOrderTimeChange]);

  return (
    <main className="menu-page">
      <div className="menu-container">
        <div className="menu-header">
          <div>
            <span className="menu-eyebrow">El laboratorio del sabor</span>
            <h1 className="menu-main-title">Nuestro menú</h1>
            <p className="menu-subtitle">
              Buenas decisiones, grandes antojos. Añade lo que te guste y revisa
              tu pedido al lado.
            </p>
          </div>

          <button type="button" className="btn-back" onClick={onBackHome}>
            ← Volver al inicio
          </button>
        </div>

        <div className="menu-layout">
          <div className="menu-catalog">
            {MENU_CATEGORIES.map((category) => (
              <div key={category.id} className="category-block">
                <h2 className="category-title">
                  {category.id} / {category.title}
                </h2>
                <div className="category-divider" />

                <div className="products-grid">
                  {category.items.map((product) => {
                    const inCart = cart.find((item) => item.id === product.id);

                    return (
                      <article key={product.id} className="product-card">
                        <div className="product-card-top">
                          {product.tag && (
                            <span className="product-tag">{product.tag}</span>
                          )}
                          <h3 className="product-name">{product.name}</h3>
                          <p className="product-desc">{product.description}</p>
                        </div>

                        <div className="product-card-bottom">
                          <span className="product-price">
                            {formatPrice(product.price)}
                          </span>

                          <div className="product-card-actions">
                            <button
                              type="button"
                              className="btn-view-item"
                              onClick={() => setActiveProduct(product)}
                              aria-label={`Ver foto de ${product.name}`}
                              title="Ver foto"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                              >
                                <path d="M1.5 12S5 5.5 12 5.5 22.5 12 22.5 12 19 18.5 12 18.5 1.5 12 1.5 12Z" />
                                <circle cx="12" cy="12" r="3.2" />
                              </svg>
                            </button>

                            {inCart ? (
                              <div className="qty-controls">
                                <button
                                  type="button"
                                  className="qty-btn"
                                  onClick={() =>
                                    onUpdateQty(product.id, inCart.quantity - 1)
                                  }
                                  aria-label={`Restar unidad de ${product.name}`}
                                >
                                  −
                                </button>
                                <span className="qty-value">
                                  {inCart.quantity}
                                </span>
                                <button
                                  type="button"
                                  className="qty-btn"
                                  onClick={() =>
                                    onUpdateQty(product.id, inCart.quantity + 1)
                                  }
                                  aria-label={`Sumar unidad de ${product.name}`}
                                >
                                  +
                                </button>
                              </div>
                            ) : (
                              <button
                                type="button"
                                className="btn-add-item"
                                onClick={() =>
                                  onAddItem({
                                    ...product,
                                    category: `${category.id} / ${category.title}`,
                                  })
                                }
                              >
                                + Añadir
                              </button>
                            )}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <aside className="order-sidebar" id="panel-pedido">
            <div className="order-card">
              <span className="order-eyebrow">Tu selección</span>
              <h2 className="order-title">Mi pedido</h2>

              {cart.length === 0 ? (
                <div className="order-empty-box">
                  <strong>Todavía no hay productos</strong>
                  <span>Añade algo rico del menú para empezar.</span>
                </div>
              ) : (
                <ul className="order-items-list">
                  {cart.map((item) => {
                    const isEditing = editingItemId === item.id;

                    return (
                      <li key={item.id} className="order-item-row">
                        <div className="order-item-header">
                          <div className="order-item-info">
                            <span className="order-item-name">{item.name}</span>
                            <span className="order-item-unit">
                              {item.quantity} × {formatPrice(item.price)}
                            </span>
                          </div>
                          <div className="order-item-actions">
                            <span className="order-item-subtotal">
                              {formatPrice(item.price * item.quantity)}
                            </span>
                            <button
                              type="button"
                              className="btn-comment-item"
                              onClick={() => setEditingItemId(item.id)}
                              title="Agregar comentario"
                              aria-label={`Agregar comentario a ${item.name}`}
                            >
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                              >
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              className="btn-remove-mini"
                              onClick={() => onUpdateQty(item.id, 0)}
                              title="Quitar producto"
                              aria-label={`Quitar ${item.name} del pedido`}
                            >
                              ✕
                            </button>
                          </div>
                        </div>

                        {isEditing && (
                          <div className="order-item-note-field">
                            <textarea
                              id={`order-note-${item.id}`}
                              className="order-input order-textarea"
                              rows="2"
                              placeholder="Ej.: sin cebolla, salsa aparte…"
                              value={item.note || ''}
                              onChange={(event) =>
                                onUpdateItemNote(item.id, event.target.value)
                              }
                              onKeyDown={(e) => e.stopPropagation()}
                            />
                            <button
                              type="button"
                              className="btn-save-note"
                              onClick={() => setEditingItemId(null)}
                            >
                              Guardar
                            </button>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}

              <div className="order-divider" />

              {cart.length > 0 && (
                <>
                  <div className="order-total-row">
                    <span>Total estimado</span>
                    <strong className="order-total-amount">
                      {formatPrice(totalAmount)}
                    </strong>
                  </div>
                </>
              )}

              <div className="order-field">
                <label htmlFor="order-date">Fecha del pedido</label>
                <input
                  id="order-date"
                  type="date"
                  className="order-input"
                  value={orderDate}
                  readOnly
                  onChange={(event) => onOrderDateChange(event.target.value)}
                />
              </div>

              <div className="order-field">
                <label htmlFor="order-time">Hora del pedido</label>
                <input
                  id="order-time"
                  type="time"
                  className="order-input"
                  value={orderTime}
                  readOnly
                  onChange={(event) => onOrderTimeChange(event.target.value)}
                />
              </div>

              <p className="order-helper-text">
                Indica cuándo lo quieres. El restaurante confirmará la
                disponibilidad por WhatsApp.
              </p>

              {cart.length === 0 && (
                <p className="order-warning-text">
                  Añade al menos un producto antes de continuar.
                </p>
              )}

              <button
                type="button"
                className="btn-whatsapp"
                disabled={cart.length === 0}
                onClick={onPrepareOrder}
              >
                <span>Preparar pedido en WhatsApp</span>
                <svg
                  width="15"
                  height="15"
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

              {showWhatsAppSection && (
                <div className="whatsapp-section">
                  <div className="whatsapp-section-title">
                    Sección de envío
                  </div>
                  <p className="whatsapp-section-text">
                    Tu pedido incluye productos de las secciones Hamburguesas,
                    Perros, Pepitos o Adicionales. Coordina la entrega con el
                    restaurante.
                  </p>
                </div>
              )}

              <button
                type="button"
                className="btn-cancel-order"
                disabled={cart.length === 0 && !orderDate && !orderTime && !orderNote.trim()}
                onClick={onCancelOrder}
              >
                Cancelar pedido
              </button>
            </div>
          </aside>
        </div>
      </div>

      {activeProduct && (
        <div
          className="product-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`Foto de ${activeProduct.name}`}
          onClick={() => setActiveProduct(null)}
        >
          <div
            className="product-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="product-modal-close"
              onClick={() => setActiveProduct(null)}
              aria-label="Cerrar foto"
            >
              ✕
            </button>

            {activeProduct.image ? (
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="product-modal-image"
              />
            ) : (
              <div className="product-modal-placeholder">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="16" rx="3" />
                  <circle cx="9" cy="10" r="1.6" />
                  <path d="m5 18 4.5-4.5 3 3L16 13l3 3" />
                </svg>
                <span>Foto próximamente</span>
                <small>Agrega la imagen de este producto en menuData.js</small>
              </div>
            )}

            <div className="product-modal-body">
              {activeProduct.tag && (
                <span className="product-tag">{activeProduct.tag}</span>
              )}
              <h2 className="product-modal-title">{activeProduct.name}</h2>
              <p className="product-modal-desc">{activeProduct.description}</p>

              <div className="product-modal-footer">
                <span className="product-modal-label">Precio</span>
                <span className="product-price">
                  {formatPrice(activeProduct.price)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
