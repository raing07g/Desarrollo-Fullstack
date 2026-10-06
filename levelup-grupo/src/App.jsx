import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Registro from './pages/Registro';
import Contacto from './pages/Contacto';

export default function App() {
  const [page, setPage] = useState('inicio');
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar setPage={setPage} />
      {page === 'inicio' && <Inicio setPage={setPage} />}
      {page === 'productos' && <Productos cart={cart} setCart={setCart} />}
      {page === 'registro' && <Registro />}
      {page === 'contacto' && <Contacto />}
      <Footer />
    </div>
  );
}