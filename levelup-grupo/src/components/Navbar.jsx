// src/components/Navbar.jsx
import React from 'react';

export default function Navbar({ setPage, cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand text-warning fw-bold" onClick={() => setPage('inicio')} style={{ cursor: 'pointer' }}>
        LEVEL-UP GAMER
      </a>
      <div className="navbar-nav me-auto">
        <button className="nav-link btn btn-link text-white" onClick={() => setPage('inicio')}>Inicio</button>
        <button className="nav-link btn btn-link text-white" onClick={() => setPage('productos')}>Productos</button>
        <button className="nav-link btn btn-link text-white" onClick={() => setPage('categorias')}>Categorías</button>
        <button className="nav-link btn btn-link text-white" onClick={() => setPage('ofertas')}>Ofertas</button>
        <button className="nav-link btn btn-link text-white" onClick={() => setPage('admin')}>Admin</button>
        <button className="nav-link btn btn-link text-white" onClick={() => setPage('registro')}>Registro</button>
        <button className="nav-link btn btn-link text-white" onClick={() => setPage('contacto')}>Contacto</button>
      </div>
      <button className="btn btn-success" onClick={() => setPage('checkout')}>
        🛒 Carrito ({cartCount})
      </button>
    </nav>
  );
}