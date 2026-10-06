import React, { useState } from 'react';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const [errors, setErrors] = useState({});
  const [exito, setExito] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (nombre.trim().length < 3) {
      newErrors.nombre = 'Ingresa tu nombre.';
    }
    if (!correo.includes('@')) {
      newErrors.correo = 'Ingresa un correo válido.';
    }
    if (asunto.trim().length < 3) {
      newErrors.asunto = 'Ingresa un asunto.';
    }
    if (mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setExito('Mensaje enviado correctamente.');
    } else {
      setExito('');
    }
  };

  return (
    <main>
      <section className="formulario">
        <h1>CONTÁCTANOS</h1>
        {exito && <div style={{ color: '#39ff14', marginBottom: '15px', fontWeight: 'bold' }} id="mensaje-contacto-exito">{exito}</div>}
        <form id="contacto" onSubmit={handleSubmit}>
          <label htmlFor="contacto-nombre">Nombre</label>
          <input type="text" id="contacto-nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <small id="error-contacto-nombre">{errors.nombre}</small>

          <label htmlFor="contacto-correo">Correo</label>
          <input type="email" id="contacto-correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
          <small id="error-contacto-correo">{errors.correo}</small>

          <label htmlFor="asunto">Asunto</label>
          <input type="text" id="asunto" value={asunto} onChange={(e) => setAsunto(e.target.value)} />
          <small id="error-asunto">{errors.asunto}</small>

          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
          <small id="error-mensaje">{errors.mensaje}</small>

          <button type="submit">Enviar mensaje</button>
        </form>
      </section>
    </main>
  );
}