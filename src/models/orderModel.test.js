import { buildOrderMessage, buildWhatsAppUrl, formatPrice } from './orderModel';

const cart = [
  { id: 'burg-1', name: 'Sencilla', price: 3, quantity: 1, category: '01 / Hamburguesas' },
  { id: 'burg-2', name: 'Especial', price: 5, quantity: 1, category: '01 / Hamburguesas' },
  { id: 'perro-1', name: 'Sencillo', price: 2, quantity: 1, category: '02 / Perros' },
  { id: 'pepi-2', name: 'Open Source', price: 8.5, quantity: 1, category: '03 / Pepitos' },
  { id: 'especi-2', name: 'Junior', price: 5, quantity: 1, category: '04 / Especiales' },
  { id: 'combo-1', name: 'Combo Dúo Hamburgueza', price: 5.6, quantity: 1, category: '05 / Combos' },
  { id: 'drink-1', name: 'Refresco 400 ml', price: 0.7, quantity: 1, category: '06 / Bebidas' },
];

test('formatea los precios en estilo US$ 0,00', () => {
  expect(formatPrice(17)).toBe('US$ 17,00');
  expect(formatPrice(3.5)).toBe('US$ 3,50');
});

test('genera el mensaje agrupado por categoría', () => {
  const message = buildOrderMessage(cart, {
    date: '2026-11-20',
    time: '19:00',
    note: 'ccc',
  });

  expect(message).toContain('🍔 *NUEVO PEDIDO - THE FLAVOR ENGINEER*');
  expect(message).toContain('*Detalle del pedido:*');
  expect(message).toContain('— 01 / Hamburguesas');
  expect(message).toContain('* 1x Sencilla (US$ 3,00)');
  expect(message).toContain('* 1x Especial (US$ 5,00)');
  expect(message).toContain('— 02 / Perros');
  expect(message).toContain('* 1x Sencillo (US$ 2,00)');
  expect(message).toContain('— 03 / Pepitos');
  expect(message).toContain('* 1x Open Source (US$ 8,50)');
  expect(message).toContain('— 04 / Especiales');
  expect(message).toContain('* 1x Junior (US$ 5,00)');
  expect(message).toContain('— 05 / Combos');
  expect(message).toContain('* 1x Combo Dúo Hamburgueza (US$ 5,60)');
  expect(message).toContain('— 06 / Bebidas');
  expect(message).toContain('* 1x Refresco 400 ml (US$ 0,70)');
  expect(message).toContain('*Total estimado:* US$ 29,80');
  expect(message).toContain('*Fecha:* 2026-11-20');
  expect(message).toContain('*Hora:* 19:00');
  expect(message).toContain('*Descripción:* ccc');
});

test('usa valores por defecto y envía al número configurado', () => {
  const url = buildWhatsAppUrl(cart, { note: '   ' });

  expect(url.startsWith('https://wa.me/5804121473926?text=')).toBe(true);

  const message = decodeURIComponent(url.split('text=')[1]);
  expect(message).toContain('*Fecha:* Lo antes posible');
  expect(message).toContain('*Hora:* Por confirmar');
  expect(message).toContain('*Descripción:* Sin indicaciones adicionales');
});