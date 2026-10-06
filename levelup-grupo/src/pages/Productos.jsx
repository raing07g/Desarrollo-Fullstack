import React from 'react';

export default function Productos({ cart, setCart }) {
  const productosData = [
    {
      id: 1,
      nombre: 'PlayStation 5',
      descripcion: 'Consola de última generación.',
      precio: 549990,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGZhtw9oWeYAg9xc3SzbAGH9KWL-6tBeZg8_NHXIE7PQ&s=10'
    },
    {
      id: 2,
      nombre: 'Mouse Gamer Logitech G502 HERO',
      descripcion: 'Mouse de alta precisión.',
      precio: 49990,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHGITWO1AvFZzl14sQEQcjuNPvvZWQ0hbCFsM2p3XZzw&s=10'
    },
    {
      id: 3,
      nombre: 'Headset Gamer',
      descripcion: 'Sonido de calidad para tus partidas.',
      precio: 39990,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUZeHlMmKS3zt7J6srJe4ZZlAMmzpXdRx9t2jfpbj3Q&s=10'
    }
  ];

  const agregarAlCarrito = (producto) => {
    setCart([...cart, producto]);
  };

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = cart.filter((_, i) => i !== index);
    setCart(nuevoCarrito);
  };

  const total = cart.reduce((acc, prod) => acc + prod.precio, 0);

  return (
    <main>
      <section>
        <h1>NUESTROS PRODUCTOS</h1>
        <p>Encuentra productos para mejorar tu experiencia gamer.</p>
      </section>

      <section id="carrito-seccion" style={{ background: '#151515', padding: '20px', borderRadius: '10px', marginTop: '40px' }}>
        <h2>Tu Carrito</h2>
        <ul id="lista-carrito" style={{ listStyle: 'none', padding: 0 }}>
          {cart.map((item, index) => (
            <li key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', borderBottom: '1px solid #333', paddingBottom: '5px' }}>
              <span>{item.nombre} - ${item.precio.toLocaleString('es-CL')}</span>
              <button onClick={() => eliminarDelCarrito(index)} style={{ background: '#ff5555', padding: '5px 10px' }} data-testid={`eliminar-${index}`}>X</button>
            </li>
          ))}
        </ul>
        <h3 style={{ color: '#39ff14', marginTop: '20px' }}>
          Total: $<span id="total-carrito">{total.toLocaleString('es-CL')}</span>
        </h3>
      </section>

      <section className="productos">
        {productosData.map((prod) => (
          <article className="producto" key={prod.id}>
            <img src={prod.imagen} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <p>{prod.descripcion}</p>
            <strong>${prod.precio.toLocaleString('es-CL')}</strong>
            <button className="agregar" onClick={() => agregarAlCarrito(prod)} data-testid={`agregar-${prod.id}`}>
              Agregar
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}