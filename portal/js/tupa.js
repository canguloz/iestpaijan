document.addEventListener("DOMContentLoaded", () => {
  const fecha = new Date();
  const año = fecha.getFullYear();

  // Mostrar año en el título
  document.getElementById("anio").textContent = año;

  // Ruta del PDF
  const pdfUrl = `../pdf/tupa-${año}.pdf`;

  // Contenedor donde se mostrará
  const contenedor = document.getElementById("tupa-contenido");

  // Verificar si el archivo existe y es PDF
  fetch(pdfUrl, { method: "GET" })
    .then(res => {
      const tipo = res.headers.get("Content-Type") || "";

      if (res.ok && tipo.includes("pdf")) {
        // ✅ Es un PDF válido
        contenedor.innerHTML = `
          <iframe src="${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0" 
                  width="100%" height="600" style="border:none;"></iframe>
        `;
      } else {
        // ❌ No es un PDF o devolvió HTML
        contenedor.innerHTML = `
          <p class="mensaje-error">Actualmente el TUPA no está disponible</p>
        `;
      }
    })
    .catch(() => {
      // ❌ Error de red o archivo inexistente
      contenedor.innerHTML = `
        <p class="mensaje-error">Actualmente el TUPA no está disponible</p>
      `;
    });
});
