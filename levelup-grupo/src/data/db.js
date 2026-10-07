const PRODUCTOS_INICIALES = [
  { id: 1, nombre: "The Legend of Zelda", precio: 59990, categoria: "Nintendo", oferta: false, stock: 15, imagen: "https://via.placeholder.com/400x300" },
  { id: 2, nombre: "Super Mario Odyssey", precio: 49990, categoria: "Nintendo", oferta: true, stock: 10, imagen: "https://via.placeholder.com/400x300" },
  { id: 3, nombre: "Minecraft", precio: 26950, categoria: "PC", oferta: false, stock: 25, imagen: "https://via.placeholder.com/400x300" },
  { id: 4, nombre: "Red Dead Redemption 2", precio: 39990, categoria: "PlayStation", oferta: true, stock: 8, imagen: "https://via.placeholder.com/400x300" },
  { id: 5, nombre: "Elden Ring", precio: 54990, categoria: "PlayStation", oferta: false, stock: 12, imagen: "https://via.placeholder.com/400x300" }
];

const inicializarDB = () => {
  if (!localStorage.getItem("levelup_productos")) {
    localStorage.setItem("levelup_productos", JSON.stringify(PRODUCTOS_INICIALES));
  }
};

export const obtenerProductos = () => {
  inicializarDB();
  return JSON.parse(localStorage.getItem("levelup_productos")) || [];
};

// READ (Leer por ID)
export const obtenerProductoPorId = (id) => {
  const productos = obtenerProductos();
  return productos.find((p) => p.id === Number(id));
};

export const agregarProducto = (nuevoProducto) => {
  const productos = obtenerProductos();
  const productoConId = {
    ...nuevoProducto,
    id: Date.now(),
    precio: Number(nuevoProducto.precio),
    stock: Number(nuevoProducto.stock)
  };
  const listaActualizada = [...productos, productoConId];
  localStorage.setItem("levelup_productos", JSON.stringify(listaActualizada));
  return listaActualizada;
};

export const actualizarProducto = (id, productoActualizado) => {
  const productos = obtenerProductos();
  const listaActualizada = productos.map((p) =>
    p.id === Number(id) ? { ...p, ...productoActualizado, precio: Number(productoActualizado.precio) } : p
  );
  localStorage.setItem("levelup_productos", JSON.stringify(listaActualizada));
  return listaActualizada;
};

export const eliminarProducto = (id) => {
  const productos = obtenerProductos();
  const listaActualizada = productos.filter((p) => p.id !== Number(id));
  localStorage.setItem("levelup_productos", JSON.stringify(listaActualizada));
  return listaActualizada;
};