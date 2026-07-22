// Datos del servicio de Tópico
const topicoData = [
  {
    año: "2025",
    imagenes: [
      "../imagenes/servicio_topico/2025/2.jpg",
      "../imagenes/servicio_topico/2025/5.jpg",
      "../imagenes/servicio_topico/2025/10.jpg",
      "../imagenes/servicio_topico/2025/11.jpg",
      "../imagenes/servicio_topico/2025/13.jpg",
      "../imagenes/servicio_topico/2025/17.jpg",
      "../imagenes/servicio_topico/2025/19.jpg",
      "../imagenes/servicio_topico/2025/20.jpg",
    ],
    descripcion: "Atención médica básica, primeros auxilios y campañas de salud preventiva para estudiantes."
  },
  /*
  {
    año: "2024",
    imagenes: [
      "../img/topico_2024_1.jpg",
      "../img/topico_2024_2.jpg"
    ],
    descripcion: "Charlas de salud, vacunación y control médico general."
  }*/
];

const listaTopico = document.getElementById("topico-lista");
const modalTopico = document.getElementById("modalTopico");
const modalTopicoImg = document.getElementById("modalTopicoImagen");
const modalTopicoDesc = document.getElementById("modalTopicoDescripcion");
const modalTopicoMiniaturas = document.getElementById("modalTopicoMiniaturas");
const cerrarTopico = modalTopico.querySelector(".cerrar");

// Generar tarjetas
topicoData.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${item.imagenes[0]}" alt="Servicio Tópico ${item.año}">
    <h3>${item.año}</h3>
    <p>${item.descripcion}</p>
  `;

  card.addEventListener("click", () => {
    openModalTopico(item);
  });

  listaTopico.appendChild(card);
});

// Abrir modal
function openModalTopico(item) {
  modalTopico.style.display = "flex";
  modalTopicoImg.src = item.imagenes[0];
  modalTopicoDesc.textContent = item.descripcion;

  // miniaturas
  modalTopicoMiniaturas.innerHTML = "";
  item.imagenes.forEach(img => {
    const thumb = document.createElement("img");
    thumb.src = img;
    thumb.addEventListener("click", () => {
      modalTopicoImg.src = img;
    });
    modalTopicoMiniaturas.appendChild(thumb);
  });
}

// Cerrar modal
cerrarTopico.addEventListener("click", () => {
  modalTopico.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modalTopico) {
    modalTopico.style.display = "none";
  }
});
