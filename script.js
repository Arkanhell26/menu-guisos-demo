const guisos = [
  { nombre: "Alambre" },
  { nombre: "Albóndigas" },
  { nombre: "Arroz blanco" },
  { nombre: "Arroz rojo" },
  { nombre: "Bistec a la mexicana" },
]

const carrito = [];

const contenedor = document.getElementById("contenedor-guisos");

function renderizarGuisos() {
  guisos.forEach((guiso) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const texto = document.createElement("p");
    texto.textContent = guiso.nombre;

    card.appendChild(texto);

    card.addEventListener("click", function () {
      if (carrito.includes(guiso.nombre)) {
        const index = carrito.indexOf(guiso.nombre);
        carrito.splice(index, 1);
        card.classList.remove("seleccionado");
      } else {
        carrito.push(guiso.nombre);
        card.classList.add("seleccionado");
      }
      actualizarResumen();
    });

    contenedor.appendChild(card);
  });
}

function actualizarResumen() {
  const resumen = document.getElementById("resumen-carrito");
  resumen.textContent = carrito.length + " guisos seleccionados";
}

const boton = document.getElementById("btn-pedido");

boton.addEventListener("click", function () {
  if (carrito.length === 0) {
    alert("Selecciona al menos un guiso");
    return;
  }

  const listaGuisos = carrito.join(", ");
  const mensaje = "Hola, quiero pedir: " + listaGuisos;
  const mensajeCodificado = encodeURIComponent(mensaje);

  const numero = "";
  const url = "https://wa.me/" + numero + "?text=" + mensajeCodificado;

  window.open(url, "_blank");
});

renderizarGuisos();
