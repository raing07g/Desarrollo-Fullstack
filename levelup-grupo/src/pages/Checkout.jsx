import React, { useState } from 'react';

export default function Checkout({ cart, setPage }) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    calle: '',
    depto: '',
    region: 'Región Metropolitana de Santiago',
    comuna: 'Cerrillos',
    indicaciones: ''
  });

  const total = cart.reduce((acc, item) => acc + item.precio, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.correo || !formData.calle) {
      alert("Por favor complete los campos obligatorios");
      return;
    }
    // Simulación de pasarela de pago (éxito o error aleatorio/controlado)
    const exito = true; 
    if (exito) {
      setPage('pago-exitoso');
    } else {
      setPage('pago-error');
    }
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">Carrito de compra y Checkout</h2>
      
      <div className="card mb-4 p-3 shadow-sm">
        <h4>Resumen de Productos</h4>
        <ul className="list-group list-group-flush mb-3">
          {cart.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {item.nombre}
              <span className="fw-bold">${item.precio.toLocaleString('es-CL')}</span>
            </li>
          ))}
        </ul>
        <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded">
          <span className="fs-5 fw-bold">Total a pagar:</span>
          <span className="fs-4 fw-bold text-success">${total.toLocaleString('es-CL')}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <h4 className="mb-3">Información del cliente</h4>
        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <label className="form-label">Nombre *</label>
            <input type="text" className="form-control" name="nombre" required onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Apellido</label>
            <input type="text" className="form-control" name="apellido" onChange={handleChange} />
          </div>
          <div className="col-12">
            <label className="form-label">Correo *</label>
            <input type="email" className="form-control" name="correo" required onChange={handleChange} />
          </div>
        </div>

        <h4 className="mb-3">Dirección de entrega de los productos</h4>
        <div className="row g-3 mb-3">
          <div className="col-md-8">
            <label className="form-label">Calle *</label>
            <input type="text" className="form-control" name="calle" required onChange={handleChange} />
          </div>
          <div className="col-md-4">
            <label className="form-label">Departamento (opcional)</label>
            <input type="text" className="form-control" name="depto" onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Región</label>
            <select className="form-select" name="region" onChange={handleChange}>
              <option value="Región Metropolitana de Santiago">Región Metropolitana de Santiago</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Comuna</label>
            <select className="form-select" name="comuna" onChange={handleChange}>
              <option value="Cerrillos">Cerrillos</option>
              <option value="Santiago">Santiago</option>
              <option value="Maipú">Maipú</option>
            </select>
          </div>
          <div className="col-12">
            <label className="form-label">Indicaciones para la entrega (opcional)</label>
            <textarea className="form-control" name="indicaciones" rows="2" onChange={handleChange}></textarea>
          </div>
        </div>

        <button type="submit" className="btn btn-success btn-lg w-100">
          Pagar ahora ${total.toLocaleString('es-CL')}
        </button>
      </form>
    </div>
  );
}