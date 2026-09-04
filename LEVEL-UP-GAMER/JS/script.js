// SISTEMA DE CARRITO
let carrito = [];
let total = 0;
let botones = document.querySelectorAll(".agregar");

botones.forEach(function(boton) {
    boton.onclick = function() {
        let nombre = boton.dataset.nombre;
        let precio = parseInt(boton.dataset.precio);
        agregarAlCarrito(nombre, precio);
    };
});

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}
function eliminarDelCarrito(index) {
    total -= carrito[index].precio; 
    carrito.splice(index, 1);      
    actualizarCarrito();
}
function actualizarCarrito() {
    let lista = document.getElementById("lista-carrito");
    lista.innerHTML = "";
    carrito.forEach(function(producto, index) {
        lista.innerHTML += `
            <li style="display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #333; padding-bottom: 5px;">
                <span>${producto.nombre} - $${producto.precio.toLocaleString("es-CL")}</span>
                <button onclick="eliminarDelCarrito(${index})" style="background: #ff5555; padding: 5px 10px;">X</button>
            </li>
        `;
    });
    document.getElementById("total-carrito").innerText = total.toLocaleString("es-CL");
}

// REGISTRO
let registro = document.getElementById("registro");
if (registro) {
    registro.onsubmit = function(evento) {
        evento.preventDefault();
        document.getElementById("error-nombre").textContent = "";
        document.getElementById("error-correo").textContent = "";
        document.getElementById("error-edad").textContent = "";
        document.getElementById("error-password").textContent = "";
        document.getElementById("error-terminos").textContent = "";

        let nombre = document.getElementById("nombre").value;
        let correo = document.getElementById("correo").value;
        let edad = document.getElementById("edad").value;
        let password = document.getElementById("password").value;
        let terminos = document.getElementById("terminos").checked;

        if (nombre.length < 3) {
            document.getElementById("error-nombre").textContent =
                "Ingresa un nombre válido.";
            return;
        }
        if (!correo.includes("@")) {
            document.getElementById("error-correo").textContent =
                "Ingresa un correo válido.";
            return;
        }
        if (edad < 18) {
            document.getElementById("error-edad").textContent =
                "Debes tener 18 años o más.";
            return;
        }
        if (password.length < 8) {
            document.getElementById("error-password").textContent =
                "La contraseña debe tener al menos 8 caracteres.";
            return;
        }
        if (!terminos) {
            document.getElementById("error-terminos").textContent =
                "Debes aceptar los términos y condiciones.";
            return;
        }
        alert("Registro exitoso.");
    };
}

// CONTACTO
let contacto = document.getElementById("contacto");

if (contacto) {
    contacto.onsubmit = function(evento) {
        evento.preventDefault();
        document.getElementById("error-contacto-nombre").textContent = "";
        document.getElementById("error-contacto-correo").textContent = "";
        document.getElementById("error-asunto").textContent = "";
        document.getElementById("error-mensaje").textContent = "";

        let nombre = document.getElementById("contacto-nombre").value;
        let correo = document.getElementById("contacto-correo").value;
        let asunto = document.getElementById("asunto").value;
        let mensaje = document.getElementById("mensaje").value;

        if (nombre.length < 3) {
            document.getElementById("error-contacto-nombre").textContent =
                "Ingresa tu nombre.";
            return;
        }
        if (!correo.includes("@")) {
            document.getElementById("error-contacto-correo").textContent =
                "Ingresa un correo válido.";
            return;
        }
        if (asunto.length < 3) {
            document.getElementById("error-asunto").textContent =
                "Ingresa un asunto.";
            return;
        }
        if (mensaje.length < 10) {
            document.getElementById("error-mensaje").textContent =
                "El mensaje debe tener al menos 10 caracteres.";
            return;
        }
        alert("Mensaje enviado correctamente.");
    };
}