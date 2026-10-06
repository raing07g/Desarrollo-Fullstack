import React, { useState } from 'react';

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [password, setPassword] = useState('');
  const [terminos, setTerminos] = useState(false);

  const [errors, setErrors] = useState({});
  const [exito, setExito] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (nombre.trim().length < 3) {
      newErrors.nombre = 'Ingresa un nombre válido.';
    }
    if (!correo.includes('@')) {
      newErrors.correo = 'Ingresa un correo válido.';
    }
    if (!edad || parseInt(edad, 10) < 18) {
      newErrors.edad = 'Debes tener 18 años o más.';
    }
    if (password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres.';
    }
    if (!terminos) {
      newErrors.terminos = 'Debes aceptar los términos y condiciones.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (correo.endsWith('@duoc.cl') || correo.endsWith('@duocuc.cl')) {
        setExito('Registro exitoso. ¡Tienes un 20% de descuento por ser alumno Duoc!');
      } else {
        setExito('Registro exitoso.');
      }
    } else {
      setExito('');
    }
  };

  return (
    <main>
      <section className="formulario">
        <h1>CREAR CUENTA</h1>
        {exito && <div style={{ color: '#39ff14', marginBottom: '15px', fontWeight: 'bold' }} id="mensaje-exito">{exito}</div>}
        <form id="registro" onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <small id="error-nombre">{errors.nombre}</small>

          <label htmlFor="correo">Correo</label>
          <input type="email" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
          <small id="error-correo">{errors.correo}</small>

          <label htmlFor="edad">Edad</label>
          <input type="number" id="edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
          <small id="error-edad">{errors.edad}</small>

          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <small id="error-password">{errors.password}</small>

          <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input type="checkbox" id="terminos" checked={terminos} onChange={(e) => setTerminos(e.target.checked)} />
            Acepto los términos y condiciones
          </label>
          <small id="error-terminos">{errors.terminos}</small>

          <button type="submit">Registrarme</button>
        </form>
      </section>
    </main>
  );
}