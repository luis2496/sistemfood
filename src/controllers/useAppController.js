import { useCallback, useMemo, useState } from 'react';
import {
  addItemToCart,
  getCartItemCount,
  getCartTotal,
  updateItemQuantity,
} from '../models/cartModel';
import { buildWhatsAppUrl } from '../models/orderModel';

export default function useAppController() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [currentView, setCurrentView] = useState('home');
  const [cart, setCart] = useState([]);
  const [orderDate, setOrderDate] = useState('');
  const [orderTime, setOrderTime] = useState('');
  const [orderNote, setOrderNote] = useState('');

  const cartCount = useMemo(() => getCartItemCount(cart), [cart]);
  const cartTotal = useMemo(() => getCartTotal(cart), [cart]);

  const handleEnterSite = useCallback(() => {
    setIsSplashVisible(false);
  }, []);

  const navigateTo = useCallback((view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenCart = useCallback(() => {
    setCurrentView('menu');
    setTimeout(() => {
      const panel = document.getElementById('panel-pedido');
      if (panel) panel.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  }, []);

  const handleAddItem = useCallback((product) => {
    setCart((current) => addItemToCart(current, product));
  }, []);

  const handleUpdateQty = useCallback((productId, quantity) => {
    setCart((current) => updateItemQuantity(current, productId, quantity));
  }, []);

  const resetOrderDetails = useCallback(() => {
    setOrderDate('');
    setOrderTime('');
    setOrderNote('');
  }, []);

  const handleCancelOrder = useCallback(() => {
    setCart([]);
    resetOrderDetails();
  }, [resetOrderDetails]);

  const handlePrepareWhatsApp = useCallback(() => {
    if (cart.length === 0) {
      return false;
    }

    const url = buildWhatsAppUrl(cart, {
      date: orderDate,
      time: orderTime,
      note: orderNote,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
    resetOrderDetails();
    return true;
  }, [cart, orderDate, orderTime, orderNote, resetOrderDetails]);

  return {
    isSplashVisible,
    currentView,
    cart,
    cartCount,
    cartTotal,
    orderDate,
    orderTime,
    orderNote,
    setOrderDate,
    setOrderTime,
    setOrderNote,
    handleEnterSite,
    navigateTo,
    handleOpenCart,
    handleAddItem,
    handleUpdateQty,
    handleCancelOrder,
    handlePrepareWhatsApp,
  };
}
