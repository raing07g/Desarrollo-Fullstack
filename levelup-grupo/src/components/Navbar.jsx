import React from 'react';

export default function Navbar({ setPage }) {
  return (
    <header className="d-flex flex-column flex-md-row justify-content-between align-items-center">
      <h2>LEVEL-UP GAMER</h2>
      <nav className="mt-3 mt-md-0">
        <a onClick={() => setPage('inicio')}>Inicio</a>
        <a onClick={() => setPage('productos')}>Productos</a>
        <a onClick={() => setPage('registro')}>Registrarse</a>
        <a onClick={() => setPage('contacto')}>Contacto</a>
      </nav>
    </header>
  );
}