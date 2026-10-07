// src/data/db.js

export const productosIniciales = [
  {
    id: 1,
    nombre: "The Legend of Zelda: Tears of the Kingdom",
    precio: 64990,
    categoria: "Juegos",
    oferta: true,
    descuento: 10,
    descripcion: "Aventura épica de exploración en el reino de Hyrule.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBK93HhQLCbI_vIc5dkXdcsAUPn7kCFdPA59sbk_ZVw&s=10"
  },
  {
    id: 2,
    nombre: "Super Mario Bros. Wonder",
    precio: 54990,
    categoria: "Juegos",
    oferta: false,
    descuento: 0,
    descripcion: "Diversión clásica de plataformas en 2D con sorpresas mágicas.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPKsOAwXP0RYvsk2rUAX27FvCCQhdRZxhm8jpq0N05A&s=10"
  },
  {
    id: 3,
    nombre: "Minecraft",
    precio: 29990,
    categoria: "Juegos",
    oferta: true,
    descuento: 15,
    descripcion: "Construye, explora y sobrevive en mundos infinitos.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREPZlTnbiICEOVa7qm_djlgy_9HqJy57FfInvVKg_P9A&s=10"
  },
  {
    id: 4,
    nombre: "Red Dead Redemption 2",
    precio: 49990,
    categoria: "Juegos",
    oferta: false,
    descuento: 0,
    descripcion: "Una historia épica sobre la vida en el corazón de EE. UU.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5VUL0rswkka6NA8DU7n53xwnTTMr0ExasMSBKUwVsA&s=10"
  },
  {
    id: 5,
    nombre: "Elden Ring",
    precio: 59990,
    categoria: "Juegos",
    oferta: true,
    descuento: 20,
    descripcion: "RPG de acción en un vasto mundo abierto de fantasía oscura.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Pqsm_PMKWVq3oNjXCyx6leE7I4dfYUDKXLPgDs6aaA&s=10"
  }
];

const DB_KEY = "levelup_gamer_productos";

// Read: Obtener todos los productos
export const getProductos = () => {
  const data = localStorage.getItem(DB_KEY);
  if (!data) {
    localStorage.setItem(DB_KEY, JSON.stringify(productosIniciales));
    return productosIniciales;
  }
  return JSON.parse(data);
};

// Aliases para compatibilidad con Categorias.jsx y otras vistas
export const obtenerProductos = getProductos;

// Create: Agregar un nuevo producto
export const agregarProducto = (nuevoProducto) => {
  const productos = getProductos();
  const productoConId = { ...nuevoProducto, id: Date.now() };
  const actualizados = [...productos, productoConId];
  localStorage.setItem(DB_KEY, JSON.stringify(actualizados));
  return actualizados;
};

// Update: Actualizar un producto existente
export const actualizarProducto = (id, datosActualizados) => {
  const productos = getProductos();
  const actualizados = productos.map((prod) =>
    prod.id === id ? { ...prod, ...datosActualizados } : prod
  );
  localStorage.setItem(DB_KEY, JSON.stringify(actualizados));
  return actualizados;
};

// Delete: Eliminar un producto por ID
export const eliminarProducto = (id) => {
  const productos = getProductos();
  const actualizados = productos.filter((prod) => prod.id !== id);
  localStorage.setItem(DB_KEY, JSON.stringify(actualizados));
  return actualizados;
};