// Datos simulados de becas
const becasData = [
  { periodo: "2026-I", archivo: "../documentos/...pdf" },
  { periodo: "2026-II", archivo: "../documentos/becas/becas_2025_I.pdf" },
  { periodo: "2025-II", archivo: "../documentos/...pdf" },
  { periodo: "2025-I", archivo: "../documentos/becas/becas_2025_I.pdf" },
  { periodo: "2024-II", archivo: "../documentos/becas/becas_2024_II.pdf" },
  { periodo: "2024-I", archivo: "../documentos/becas/becas_2024_I.pdf" }
];

const lista = document.getElementById("becas-lista");

// Mostrar máximo 2 botones
becasData.slice(0, 2).forEach(beca => {
  const btn = document.createElement("button");
  btn.textContent = `Ver lista de becados ${beca.periodo}`;
  btn.addEventListener("click", () => checkFileAndOpen(beca.archivo));
  lista.appendChild(btn);
});

// Modal
const modal = document.getElementById("modal");
const pdfViewer = document.getElementById("pdfViewer");
const closeBtn = document.querySelector(".modal__close");

// Mensaje alternativo
const mensaje = document.createElement("p");
mensaje.textContent = "Por ahora no hay documento disponible";
mensaje.style.display = "none";
mensaje.style.textAlign = "center";
mensaje.style.fontWeight = "600";
mensaje.style.padding = "20px";

modal.querySelector(".modal__content").appendChild(mensaje);

// Verificar si el archivo existe antes de abrir modal
// Verificar si el archivo existe antes de abrir modal
async function checkFileAndOpen(pdfFile) {
  try {
    const response = await fetch(pdfFile, { method: "HEAD" });

    // Validar que el archivo exista Y que sea un PDF
    const contentType = response.headers.get("Content-Type") || "";

    if (response.ok && contentType.includes("pdf")) {
      openModal(pdfFile);
    } else {
      showNoFileMessage();
    }
  } catch (error) {
    showNoFileMessage();
  }
}

function openModal(pdfFile) {
  pdfViewer.src = pdfFile;
  pdfViewer.style.display = "block";
  mensaje.style.display = "none";
  modal.style.display = "flex";
}

function showNoFileMessage() {
  pdfViewer.src = "";
  pdfViewer.style.display = "none";
  mensaje.style.display = "block";
  modal.style.display = "flex";
}

closeBtn.onclick = () => {
  modal.style.display = "none";
  pdfViewer.src = "";
};

window.onclick = e => {
  if (e.target === modal) {
    modal.style.display = "none";
    pdfViewer.src = "";
  }
};
