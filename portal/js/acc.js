// Archivo de la malla curricular
const archivoMalla = "../documentos/malla_curricular/Malla-Curricular_Administracion-Centros-de-Computo-4.pdf";

const btnMalla = document.getElementById("btnMalla");
const modal = document.getElementById("modal");
const pdfViewer = document.getElementById("pdfViewer");
const mensaje = document.getElementById("mensaje");
const closeBtn = document.querySelector(".modal__close");

// Verificar si el archivo existe antes de mostrar
btnMalla.addEventListener("click", async () => {
  try {
    const response = await fetch(archivoMalla, { method: "HEAD" });

    if (response.ok) {
      pdfViewer.src = archivoMalla;
      pdfViewer.style.display = "block";
      mensaje.style.display = "none";
    } else {
      pdfViewer.src = "";
      pdfViewer.style.display = "none";
      mensaje.style.display = "block";
    }

    modal.style.display = "flex";
  } catch (error) {
    pdfViewer.src = "";
    pdfViewer.style.display = "none";
    mensaje.style.display = "block";
    modal.style.display = "flex";
  }
});

// Cerrar modal
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