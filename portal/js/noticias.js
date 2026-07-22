 const noticias = [
      {
        titulo: "2do proceso de titulación 2026",
        fecha: "08/07/2026",
        contenido: "La dirección, docentes y estudiantes y personal administrativo expresamos nuestro profundo pesar por el sensible fallesimiento de nuestro querido estudiante del programa de Administración de Centros de Computo",
        imagen: ["../imagenes/noticias/aviso-2026-1.jpeg", "../imagenes/noticias/aviso-2026-1.jpeg"]
      },
      {
        titulo: "Sensible fallesimiento",
        fecha: "07/05/2026",
        contenido: "La dirección, docentes y estudiantes y personal administrativo expresamos nuestro profundo pesar por el sensible fallesimiento de nuestro querido estudiante del programa de Administración de Centros de Computo",
        imagen: ["../imagenes/noticias/fallesimiento_07_05_2026.jpeg", "../imagenes/noticias/fallesimiento_07_05_2026.jpeg"]
      },
      {
        titulo: "Día del Trabajador",
        fecha: "02/05/2026",
        contenido: "Feliz día del Trabajador",
        imagen: ["../imagenes/noticias/dia_del_trabajador.jpeg", "../imagenes/noticias/dia_del_trabajador.jpeg"]        
      },   
      {
        titulo: "Invitación a la Ceremonia de Titulación 2026-1",
        fecha: "23/04/2026",
        contenido: "Te invitamos a la ceremonia de titulación. Confirma tu asistencia: https://forms.gle/pbfKNJV11NG71pPz5",
        imagen: ["../imagenes/noticias/graduacion2026.jpg", "../imagenes/noticias/integrantes2026.jpg"]
      },
      {
        titulo: "Examén de Admisión",
        fecha: "03/04/2026",
        contenido: "Preparate para ingresar!",
        imagen: ["../imagenes/admision/primer_admision/1.jpeg"]
      },
      {
        titulo: "Inicio del Proceso de Admisión 2026-1",
        fecha: "12/08/2025",
        contenido: "Ya están abiertas las inscripciones para el proceso de admisión 2026. Inicio de clases 06/04/2026",
        imagen: ["../imagenes/noticias/inicio_clases20252.jpg"]
      },
    ];

    const feed = document.getElementById("news-feed");
    if (!feed) { console.warn("noticias.js: #news-feed no encontrado"); } else {
    const modal = document.getElementById("news-modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDate = document.getElementById("modal-date");
    const modalText = document.getElementById("modal-text");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentImages = [];
    let currentIndex = 0;

    noticias.forEach(noticia => {
      const card = document.createElement("div");
      card.classList.add("news-card");
      card.innerHTML = `
        <img src="${noticia.imagen[0]}" alt="${noticia.titulo}" class="news-img" loading="lazy">
        <div class="news-content">
          <h3>${noticia.titulo}</h3>
          <span class="news-date">${noticia.fecha}</span>
          <p>${noticia.contenido}</p>
        </div>
      `;

      card.addEventListener("click", () => {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
        currentImages = noticia.imagen;
        currentIndex = 0;
        showImage(currentIndex);
        modalTitle.textContent = noticia.titulo;
        modalDate.textContent = noticia.fecha;
        modalText.textContent = noticia.contenido;
      });

      feed.appendChild(card);
    });

    function showImage(index) {
      if (currentImages && currentImages[index]) {
        modalImg.src = currentImages[index];
      }
    }

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
      showImage(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % currentImages.length;
      showImage(currentIndex);
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });
    }
