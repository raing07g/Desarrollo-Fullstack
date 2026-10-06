import React from 'react';

export default function Inicio({ setPage }) {
  return (
    <main>
      <section className="hero">
        <h1>SUBE DE NIVEL</h1>
        <p>Todo lo que necesitas para llevar tu experiencia gamer al siguiente nivel.</p>
        <button className="boton" onClick={() => setPage('productos')}>Ver productos</button>
      </section>

      <section>
        <h2>¿POR QUÉ LEVEL-UP?</h2>
        <div className="tarjetas">
          <article>
            <h3>Productos Gamer</h3>
            <p>Consolas, computadores y accesorios para gamers.</p>
          </article>
          <article>
            <h3>Despachos</h3>
            <p>Enviamos nuestros productos a todo Chile.</p>
          </article>
          <article>
            <h3>Beneficios</h3>
            <p>Regístrate y disfruta de beneficios exclusivos.</p>
          </article>
        </div>
      </section>

      <section>
        <h2>CONOCE LEVEL-UP</h2>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video gamer"
          allowFullScreen
        ></iframe>
      </section>
    </main>
  );
}