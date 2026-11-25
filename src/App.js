import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuView from './components/MenuView';
import ContactView from './components/ContactView';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import useAppController from './controllers/useAppController';
import './styles/App.css';

export default function App() {
  const {
    isSplashVisible,
    currentView,
    cart,
    cartCount,
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
    handleUpdateItemNote,
    handleCancelOrder,
    handlePrepareWhatsApp,
  } = useAppController();

  return (
    <div className="app-layout">
      {isSplashVisible && <SplashScreen onEnter={handleEnterSite} />}

      {currentView !== 'contact' && (
        <Navbar
          cartCount={cartCount}
          onNavigateHome={() => navigateTo('home')}
          onNavigateMenu={() => navigateTo('menu')}
          onNavigateContact={() => navigateTo('contact')}
          onOpenCart={handleOpenCart}
        />
      )}

      {currentView === 'home' && (
        <Hero onExploreMenu={() => navigateTo('menu')} />
      )}

      {currentView === 'menu' && (
        <MenuView
          cart={cart}
          orderDate={orderDate}
          orderTime={orderTime}
          orderNote={orderNote}
          onOrderDateChange={setOrderDate}
          onOrderTimeChange={setOrderTime}
          onOrderNoteChange={setOrderNote}
          onAddItem={handleAddItem}
          onUpdateQty={handleUpdateQty}
          onUpdateItemNote={handleUpdateItemNote}
          onBackHome={() => navigateTo('home')}
          onPrepareOrder={handlePrepareWhatsApp}
          onCancelOrder={handleCancelOrder}
        />
      )}

      {currentView === 'contact' && (
        <ContactView
          cartCount={cartCount}
          onBackHome={() => navigateTo('home')}
          onExploreMenu={() => navigateTo('menu')}
          onOpenCart={handleOpenCart}
        />
      )}

      <Footer />
    </div>
  );
}
