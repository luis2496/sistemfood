export const createCartItem = (product = {}) => ({
  id: product.id ?? product._id ?? product.name,
  name: product.name ?? 'Producto',
  price: Number(product.price) || 0,
  quantity: Number(product.quantity) || 1,
  category: product.category ?? '',
  note: product.note ?? '',
});

export const addItemToCart = (cart = [], product) => {
  const item = createCartItem(product);
  const existing = cart.find((entry) => entry.id === item.id);

  if (!existing) {
    return [...cart, item];
  }

  return cart.map((entry) =>
    entry.id === item.id
      ? { ...entry, quantity: entry.quantity + item.quantity }
      : entry
  );
};

export const updateItemQuantity = (cart = [], productId, quantity) => {
  if (quantity <= 0) {
    return cart.filter((entry) => entry.id !== productId);
  }

  return cart.map((entry) =>
    entry.id === productId ? { ...entry, quantity } : entry
  );
};

export const updateItemNote = (cart = [], productId, note) =>
  cart.map((entry) =>
    entry.id === productId ? { ...entry, note } : entry
  );

export const removeItemFromCart = (cart = [], productId) =>
  cart.filter((entry) => entry.id !== productId);

export const getCartItemCount = (cart = []) =>
  cart.reduce((total, entry) => total + entry.quantity, 0);

export const getCartTotal = (cart = []) =>
  cart.reduce((total, entry) => total + entry.price * entry.quantity, 0);
