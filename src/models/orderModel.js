import { getCartTotal } from './cartModel';

export const WHATSAPP_NUMBER = '5804121473926';

export const formatPrice = (value) =>
  `US$ ${Number(value || 0).toFixed(2).replace('.', ',')}`;

export const buildOrderMessage = (
  cart = [],
  { date = '', time = '', note = '' } = {}
) => {
  const grouped = cart.reduce((acc, item) => {
    const key = item.category || 'Sin categoría';
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});

  const categoryLines = Object.entries(grouped)
    .map(([category, items]) => {
      const itemsLines = items
        .map(
          (item) =>
            `* ${item.quantity}x ${item.name} (${formatPrice(item.price * item.quantity)})`
        )
        .join('\n');
      return `— ${category}\n${itemsLines}`;
    })
    .join('\n');

  return [
    '🍔 *NUEVO PEDIDO - THE FLAVOR ENGINEER*',
    '',
    '*Detalle del pedido:*',
    categoryLines,
    '',
    `*Total estimado:* ${formatPrice(getCartTotal(cart))}`,
    `*Fecha:* ${date || 'Lo antes posible'}`,
    `*Hora:* ${time || 'Por confirmar'}`,
    `*Descripción:* ${note.trim() || 'Sin indicaciones adicionales'}`,
  ].join('\n');
};

export const buildWhatsAppUrl = (
  cart = [],
  { date = '', time = '', note = '', phone = WHATSAPP_NUMBER } = {}
) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(
    buildOrderMessage(cart, { date, time, note })
  )}`;