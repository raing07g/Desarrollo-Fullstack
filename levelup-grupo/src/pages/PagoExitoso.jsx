import React from 'react';

export default function PagoExitoso({ setPage, setCart }) {
  const handleFinalizar = () => {
    if (setCart) setCart([]);
    if (setPage) setPage('inicio');
  };

  return (
    <div className="container text-center my-5 p-5 card shadow-sm">
      <div className="text-success mb-3" style={{ fontSize: '4rem' }}>✓</div>
      <h2 className="text-success">¡Pago Realizado con Éxito!</h2>
      <p className="lead">Gracias por tu compra en Level-Up Gamer. Tu pedido ha sido procesado correctamente.</p>
      <button className="btn btn-primary mt-3" onClick={handleFinalizar}>
        Volver al Inicio
      </button>
    </div>
  );
}