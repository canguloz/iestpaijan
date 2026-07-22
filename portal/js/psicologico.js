// Datos de las actividades psicológicas
const psicologicoData = [
  {
    año: "2025",
    imagenes: [
      "../imagenes/sevicio_psicologico/1_2025.jpg",
      "../imagenes/sevicio_psicologico/2_2025.jpg"
      //"../img/psicologico_2025_3.jpg"
    ],
    descripcion: "Talleres y  sesiones de acompañamiento emocional para estudiantes."
  },
  /*
  {
    año: "2024",
    imagenes: [
      "../img/psicologico_2024_1.jpg",
      "../img/psicologico_2024_2.jpg"
    ],
    descripcion: "Campañas de prevención del estrés académico y actividades de integración familiar."
  },
  {
    año: "2023",
    imagenes: [
      "../img/psicologico_2023_1.jpg"
    ],
    descripcion: "Programas de desarrollo personal, manejo de ansiedad y charlas de motivación."
  }*/
];

// Contenedor donde se insertarán las tarjetas
const album = document.getElementById("album");
const modal = document.getElementById("modalGaleria");
const modalImagen = document.getElementById("modalImagen");
const modalDescripcion = document.getElementById("modalDescripcion");
const modalMiniaturas = document.getElementById("modalMiniaturas");
const cerrar = document.querySelector(".cerrar");

// Generar dinámicamente las tarjetas
psicologicoData.forEach((item, index) => {
  const card = document.createElement("div");
  card.classList.add("album-card");

  // Usamos la primera imagen como portada
  card.innerHTML = `
    <img src="${item.imagenes[0]}" alt="Consultorio Psicológico ${item.año}">
    <div class="album-info">
      <h3>Consultorio Psicológico ${item.año}</h3>
      <p>${item.descripcion}</p>
    </div>
  `;

  // Evento para abrir el modal
  card.addEventListener("click", () => {
    mostrarModal(item);
  });

  album.appendChild(card);
});

// Función para mostrar modal
function mostrarModal(item) {
  modal.style.display = "flex";
  modalImagen.src = item.imagenes[0];
  modalDescripcion.textContent = item.descripcion;

  // Limpiar miniaturas previas
  modalMiniaturas.innerHTML = "";

  // Crear miniaturas
  item.imagenes.forEach(img => {
    const thumb = document.createElement("img");
    thumb.src = img;
    thumb.alt = "Miniatura";
    thumb.addEventListener("click", () => {
      modalImagen.src = img;
    });
    modalMiniaturas.appendChild(thumb);
  });
}

// Cerrar modal
cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar al hacer clic fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
