// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Categorias from './pages/Categorias';
import Ofertas from './pages/Ofertas';
import Checkout from './pages/Checkout';
import PagoExitoso from './pages/PagoExitoso';
import PagoError from './pages/PagoError';
import Admin from './pages/Admin';
import Registro from './pages/Registro';
import Contacto from './pages/Contacto';

export default function App() {
  const [page, setPage] = useState('inicio');
  const [cart, setCart] = useState([]);

  const addToCart = (producto) => {
    setCart([...cart, producto]);
  };

  const renderPage = () => {
    switch (page) {
      case 'inicio':
        return <Inicio setPage={setPage} />;
      case 'productos':
        return <Productos cart={cart} setCart={setCart} addToCart={addToCart} setPage={setPage} />;
      case 'categorias':
        return <Categorias addToCart={addToCart} />;
      case 'ofertas':
        return <Ofertas addToCart={addToCart} />;
      case 'checkout':
        return <Checkout cart={cart} setPage={setPage} />;
      case 'pago-exitoso':
        return <PagoExitoso setPage={setPage} setCart={setCart} />;
      case 'pago-error':
        return <PagoError setPage={setPage} />;
      case 'admin':
        return <Admin />;
      case 'registro':
        return <Registro />;
      case 'contacto':
        return <Contacto />;
      default:
        return <Inicio setPage={setPage} />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar setPage={setPage} cartCount={cart.length} />
      <main className="flex-grow-1">{renderPage()}</main>
      <Footer />
    </div>
  );
}