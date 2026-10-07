import React, { useState, useEffect } from 'react';
import { obtenerProductos } from '../data/db';

export default function Ofertas({ addToCart }) {
  const [ofertas, setOfertas] = useState([]);

  useEffect(() => {
    const lista = obtenerProductos().filter(p => p.oferta === true);
    setOfertas(lista);
  }, []);

  return (
    <div className="container my-4">
      <div className="p-3 mb-4 bg-warning bg-gradient text-dark rounded-3">
        <h2>🔥 Ofertas Especiales Gamer</h2>
        <p>Aprovecha los descuentos exclusivos por tiempo limitado.</p>
      </div>

      <div className="row g-3">
        {ofertas.map(prod => (
          <div key={prod.id} className="col-md-4">
            <div className="card h-100 border-danger shadow-sm">
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                OFERTA
              </span>
              <img src={prod.imagen} className="card-img-top" alt={prod.nombre} />
              <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text text-danger fw-bold fs-5">${prod.precio.toLocaleString('es-CL')}</p>
                <button className="btn btn-danger w-100" onClick={() => addToCart(prod)}>
                  Aprovechar Oferta
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}