// Datos de la galería
const galeriaData = [
    
  {
  year: "2026",
    eventos: [

      {
        nombre: "IESTPAIJÁN - Actividades Cachimbo 2026",
        imagenes: [
          { src: "../imagenes/galeria_eventos/2026/cachimbo/1.jpeg", desc: "" },
          { src: "../imagenes/galeria_eventos/2026/cachimbo/2.jpeg", desc: "" },
          { src: "../imagenes/galeria_eventos/2026/cachimbo/3.jpeg", desc: "" },
          { src: "../imagenes/galeria_eventos/2026/cachimbo/4.jpeg", desc: "" },
          { src: "../imagenes/galeria_eventos/2026/cachimbo/5.jpeg", desc: "" },
          { src: "../imagenes/galeria_eventos/2026/cachimbo/6.jpeg", desc: "" },
          { src: "../imagenes/galeria_eventos/2026/cachimbo/7.jpeg", desc: "" },
          { src: "../imagenes/galeria_eventos/2026/cachimbo/8.jpeg", desc: "" },
          { src: "../imagenes/galeria_eventos/2026/cachimbo/9.jpeg", desc: "" },
          { src: "../imagenes/galeria_eventos/2026/cachimbo/10.jpeg", desc: "" },
          { src: "../imagenes/galeria_eventos/2026/cachimbo/11.jpeg", desc: "" },
          { src: "../imagenes/galeria_eventos/2026/cachimbo/12.jpeg", desc: "" },
          { src: "../imagenes/galeria_eventos/2026/cachimbo/13.jpeg", desc: "" },
          { src: "../imagenes/galeria_eventos/2026/cachimbo/14.jpeg", desc: "" },
          { src: "../imagenes/galeria_eventos/2026/cachimbo/15.jpeg", desc: "" },
          { src: "../imagenes/galeria_eventos/2026/cachimbo/16.jpeg", desc: "" },
                  ]
      },
      
      {
        nombre: "Producción Agropecuaria - Visita a empresa IPESA sub sede Chocope",
        imagenes: [
          { src: "../imagenes/galeria_eventos/2026/agropecuaria/ipesa/1.jpeg", desc: "Recorrido por las instalaciones de IPESA" },
          { src: "../imagenes/galeria_eventos/2026/agropecuaria/ipesa/2.jpeg", desc: "Estudiantes interactuando con maquinaria agrícola" },
          { src: "../imagenes/galeria_eventos/2026/agropecuaria/ipesa/3.jpeg", desc: "Demostración de técnicas de cultivo" },
          { src: "../imagenes/galeria_eventos/2026/agropecuaria/ipesa/4.jpeg", desc: "Estudiantes aprendiendo sobre sistemas de riego" },
                  ]
      },
     ]
  },
  /*
  {
    year: "2025",
    eventos: [
      {
        nombre: "Aniversario del IESTP PAIJÁN",
        imagenes: [
          { src: "../imagenes/galeria_eventos/2025/aniversario/1.jpg", desc: "Presentación de la Reina" },
          { src: "../imagenes/galeria_eventos/2025/aniversario/2.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/aniversario/3.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/aniversario/4.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/aniversario/5.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/aniversario/6.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/aniversario/7.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/aniversario/8.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/aniversario/9.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/aniversario/10.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/aniversario/11.jpg", desc: "" }
        ]
      },
      {
        nombre: "Presentación de Proyectos de Innovación e Investigación",
        imagenes: [
          { src: "../imagenes/galeria_eventos/2025/proyectos/1.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/2.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/3.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/4.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/5.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/6.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/7.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/8.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/9.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/10.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/11.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/12.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/13.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/14.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/15.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/16.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/17.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/18.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/19.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/20.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/21.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/22.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/23.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/24.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/25.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/26.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/27.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/28.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/29.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/30.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/31.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/32.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/proyectos/33.jpg", desc: "" },
            
        ]
      },
      {
        nombre: "Fería Gastronómica",
        imagenes: [
          { src: "../imagenes/galeria_eventos/2025/feria_gastronomica/1.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/feria_gastronomica/2.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/feria_gastronomica/3.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/feria_gastronomica/4.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/feria_gastronomica/5.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/feria_gastronomica/6.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/feria_gastronomica/7.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/feria_gastronomica/8.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/feria_gastronomica/9.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/feria_gastronomica/10.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/feria_gastronomica/11.jpg", desc: "" },
        ]
      },
      {
        nombre: "Tarde de Deporte",
        imagenes: [
          { src: "../imagenes/galeria_eventos/2025/deporte/1.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/deporte/2.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/deporte/3.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/deporte/4.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/deporte/5.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/deporte/6.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/deporte/7.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/deporte/8.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/deporte/9.jpg", desc: "" }
          ]
      },
      {
        nombre: "Concurso de Miss y Mister",
        imagenes: [
          { src: "../imagenes/galeria_eventos/2025/miss_mister/1.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/2.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/3.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/4.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/5.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/6.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/7.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/8.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/9.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/10.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/11.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/12.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/13.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/14.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/15.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/16.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/17.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/18.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/19.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/20.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/21.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/22.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/23.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/24.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/25.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/26.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/27.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/28.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/29.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/30.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/31.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/32.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/33.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/34.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/35.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/36.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/miss_mister/37.jpg", desc: "" },
          ]
      },
      {
        nombre: "Imposición de Distintivos",
        imagenes: [
          { src: "../imagenes/galeria_eventos/2025/distintivo/1.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/2.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/3.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/4.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/5.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/6.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/7.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/8.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/9.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/10.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/11.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/12.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/13.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/14.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/15.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/16.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/17.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/18.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/19.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/20.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/21.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/22.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/23.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/24.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/25.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/26.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/27.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/28.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/29.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/30.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/31.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/32.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/33.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/34.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/35.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/36.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/37.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/38.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/39.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/40.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/41.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/42.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/43.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/44.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/45.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/46.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/47.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/48.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/49.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/50.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/51.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/52.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/53.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/distintivo/54.jpg", desc: "" }
          ]
      },
      {
        nombre: "Día del Maestro",
        imagenes: [
          { src: "../imagenes/galeria_eventos/2025/maestro/1.jpg", desc: "" },
          { src: "../imagenes/galeria_eventos/2025/maestro/2.jpg", desc: "" },
          ]
      }
    ]
  },*/
  /*
  {
    year: "2024",
    eventos: [
      {
        nombre: "Jornadas de Empleabilidad",
        imagenes: [
          { src: "../img/empleo_1.jpg", desc: "Charlas sobre oportunidades laborales" },
          { src: "../img/empleo_2.jpg", desc: "Estudiantes recibiendo asesoría" }
        ]
      }
    ]
  }*/
];

const galeriaContainer = document.getElementById("galeria");

// Render dinámico
galeriaData.forEach(album => {
  const yearTitle = document.createElement("h2");
  yearTitle.textContent = album.year;
  galeriaContainer.appendChild(yearTitle);

  album.eventos.forEach(evento => {
    const eventTitle = document.createElement("h3");
    eventTitle.textContent = evento.nombre;
    galeriaContainer.appendChild(eventTitle);

    const albumDiv = document.createElement("div");
    albumDiv.classList.add("album");

    evento.imagenes.forEach((img, index) => {
      const image = document.createElement("img");
      image.src = img.src;
      image.alt = img.desc;
      image.addEventListener("click", () => openModal(evento.imagenes, index));
      albumDiv.appendChild(image);
    });

    galeriaContainer.appendChild(albumDiv);
  });
});

// ==== MODAL LOGIC ====
const modal = document.getElementById("galeriaModal");
const modalImg = document.getElementById("galeriaModalImg");
const modalDesc = document.getElementById("galeriaModalDesc");
const closeModal = document.querySelector(".modal__close");

let currentImages = [];
let currentIndex = 0;

function openModal(images, index) {
  currentImages = images;
  currentIndex = index;
  showImage();
  modal.style.display = "flex";
}

function showImage() {
  modalImg.src = currentImages[currentIndex].src;
  modalDesc.textContent = currentImages[currentIndex].desc;
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  showImage();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  showImage();
});

closeModal.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });
