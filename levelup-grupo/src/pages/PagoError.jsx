import React from 'react';

export default function PagoError({ setPage }) {
  return (
    <div className="container text-center my-5 p-5 card shadow-sm border-danger">
      <div className="text-danger mb-3" style={{ fontSize: '4rem' }}>✕</div>
      <h2 className="text-danger">No se pudo realizar el pago</h2>
      <p className="lead">Hubo un problema al procesar la transacción. Inténtalo nuevamente.</p>
      <button className="btn btn-warning mt-3" onClick={() => setPage && setPage('checkout')}>
        Volver a Intentar
      </button>
    </div>
  );
}