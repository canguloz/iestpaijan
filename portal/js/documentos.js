// Datos simulados de documentos de gestión
const documentosData = [
  { titulo: "Proyecto Educativo Institucional", archivo: "../documentos/documentos_gestion/pei.pdf" },
  { titulo: "Reglamento Interno", archivo: "../documentos/documentos_gestion/reglamento.pdf" },
  { titulo: "Plan Anual de Trabajo", archivo: "../documentos/documentos_gestion/plan_trabajo.pdf" },
  { titulo: "Manual de Perfil de Puestos", archivo: "../documentos/documentos_gestion/perfil_puestos.pdf" },
  { titulo: "Manual de Procesos de Régimen Académico", archivo: "../documentos/documentos_gestion/procesos.pdf" }
];

const lista = document.getElementById("documentos-lista");

// Generar tarjetas
documentosData.forEach(doc => {
  const card = document.createElement("div");
  card.classList.add("document-card");

  card.innerHTML = `
    <h3>${doc.titulo}</h3>
    <button class="btn-vista" onclick="openModal('${doc.archivo}', '${doc.titulo}')">Vista Previa</button>
  `;

  lista.appendChild(card);
});

// Modal
const modal = document.getElementById("modal");
const pdfViewer = document.getElementById("pdfViewer");
const modalTitle = document.getElementById("modal-title");
const closeBtn = document.querySelector(".modal__close");

// Contenedor para error
let mensajeError = document.createElement("p");
mensajeError.className = "mensaje-error";
mensajeError.style.display = "none";
modal.querySelector(".modal-content").appendChild(mensajeError);

function openModal(pdfFile, titulo) {
  // Reset antes de abrir
  modalTitle.textContent = titulo;
  pdfViewer.style.display = "block";
  mensajeError.style.display = "none";
  pdfViewer.src = "";

  // Verificar si existe y es PDF
  fetch(pdfFile, { method: "HEAD" })
    .then(res => {
      const tipo = res.headers.get("Content-Type") || "";

      if (res.ok && tipo.includes("pdf")) {
        // ✅ Es un PDF válido → mostrarlo
        pdfViewer.src = pdfFile + "#toolbar=0&navpanes=0&scrollbar=0";
      } else {
        // ❌ Es HTML o no existe → mensaje de error
        pdfViewer.style.display = "none";
        mensajeError.textContent = "Por ahora no hay documento disponible.";
        mensajeError.style.display = "block";
      }

      modal.style.display = "flex";
    })
    .catch(() => {
      // ❌ Error en la petición
      pdfViewer.style.display = "none";
      mensajeError.textContent = "Por ahora no hay documento disponible.";
      mensajeError.style.display = "block";
      modal.style.display = "flex";
    });
}

// Cerrar modal
closeBtn.onclick = () => {
  modal.style.display = "none";
  pdfViewer.src = "";
};

// Cerrar clic afuera
window.onclick = e => {
  if (e.target === modal) {
    modal.style.display = "none";
    pdfViewer.src = "";
  }
};
