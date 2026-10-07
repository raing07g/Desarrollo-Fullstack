import React, { useState, useEffect } from 'react';
import { obtenerProductos, agregarProducto, eliminarProducto } from '../data/db';

export default function Admin() {
  const [productos, setProductos] = useState([]);
  const [nuevo, setNuevo] = useState({
    nombre: '',
    precio: '',
    categoria: 'Nintendo',
    stock: '',
    oferta: false,
    imagen: 'https://via.placeholder.com/400x300'
  });

  useEffect(() => {
    setProductos(obtenerProductos());
  }, []);

  const handleAgregar = (e) => {
    e.preventDefault();
    if (!nuevo.nombre || !nuevo.precio) return;
    const listaActualizada = agregarProducto(nuevo);
    setProductos(listaActualizada);
    setNuevo({ nombre: '', precio: '', categoria: 'Nintendo', stock: '', oferta: false, imagen: 'https://via.placeholder.com/400x300' });
  };

  const handleEliminar = (id) => {
    const listaActualizada = eliminarProducto(id);
    setProductos(listaActualizada);
  };

  return (
    <div className="container my-4">
      <h2>Panel del Administrador</h2>
      
      {/* Métricas del Dashboard */}
      <div className="row g-3 my-3">
        <div className="col-md-4">
          <div className="card bg-primary text-white p-3">
            <h5>Total Productos</h5>
            <h3>{productos.length}</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-success text-white p-3">
            <h5>Ventas del Mes</h5>
            <h3>1,234</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-warning text-dark p-3">
            <h5>Usuarios Registrados</h5>
            <h3>890</h3>
          </div>
        </div>
      </div>

      {/* Formulario Agregar Producto */}
      <div className="card p-4 mb-4 shadow-sm">
        <h4>Agregar Nuevo Producto (CRUD)</h4>
        <form onSubmit={handleAgregar} className="row g-3">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Nombre" value={nuevo.nombre} required onChange={e => setNuevo({...nuevo, nombre: e.target.value})} />
          </div>
          <div className="col-md-2">
            <input type="number" className="form-control" placeholder="Precio" value={nuevo.precio} required onChange={e => setNuevo({...nuevo, precio: e.target.value})} />
          </div>
          <div className="col-md-3">
            <select className="form-select" value={nuevo.categoria} onChange={e => setNuevo({...nuevo, categoria: e.target.value})}>
              <option value="Nintendo">Nintendo</option>
              <option value="PlayStation">PlayStation</option>
              <option value="PC">PC</option>
            </select>
          </div>
          <div className="col-md-3">
            <button type="submit" className="btn btn-primary w-100">Guardar Producto</button>
          </div>
        </form>
      </div>

      {/* Tabla Mantenedor de Productos */}
      <div className="card p-3 shadow-sm">
        <h4>Mantenedor de Catálogo</h4>
        <table className="table table-striped align-middle">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nombre}</td>
                <td>{p.categoria}</td>
                <td>${p.precio.toLocaleString('es-CL')}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => handleEliminar(p.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}