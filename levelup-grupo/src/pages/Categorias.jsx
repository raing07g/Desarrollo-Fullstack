import React, { useState, useEffect } from 'react';
import { obtenerProductos } from '../data/db';

export default function Categorias({ addToCart }) {
  const [productos, setProductos] = useState([]);
  const [categoriaSel, setCategoriaSel] = useState('Todas');

  useEffect(() => {
    setProductos(obtenerProductos());
  }, []);

  const categorias = ['Todas', 'Nintendo', 'PlayStation', 'PC'];

  const productosFiltrados = categoriaSel === 'Todas' 
    ? productos 
    : productos.filter(p => p.categoria === categoriaSel);

  return (
    <div className="container my-4">
      <h2>Categorías de Productos</h2>
      <div className="btn-group my-3" role="group">
        {categorias.map(cat => (
          <button 
            key={cat} 
            className={`btn ${categoriaSel === cat ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setCategoriaSel(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row g-3">
        {productosFiltrados.map(prod => (
          <div key={prod.id} className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={prod.imagen} className="card-img-top" alt={prod.nombre} />
              <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text text-muted">Categoría: {prod.categoria}</p>
                <p className="card-text fw-bold">${prod.precio.toLocaleString('es-CL')}</p>
                <button className="btn btn-dark w-100" onClick={() => addToCart(prod)}>
                  Añadir al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}