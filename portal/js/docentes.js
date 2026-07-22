const docentesData = [
  {
    area: "Administración de Centros de Cómputo",
    icon: "fas fa-laptop-code",
    docentes: [
      { nombre: "Ing. Albert Henry León Chávez", foto: "../imagenes/docentes/albert-leon.jpg" },
      { nombre: "Ing. Ernesto López Pajares", foto: "../imagenes/docentes/ernesto-lopez.png" },
      { nombre: "Ing. Edgard García Diaz", foto: "../imagenes/docentes/edgar_garcia-1.png" },
      { nombre: "Ing. Carlos Abilio Angulo Zegarra", foto: "../imagenes/docentes/carlos-angulo.jpg" },
      { nombre: "Ing. Joselí Elías Palomino Ramírez", foto: "../imagenes/docentes/elias_palomino.jpeg" },
      { nombre: "Ing. Walter Abel Alvarez Untul", foto: "../imagenes/docentes/walter.jpg" },
      { nombre: "Ing. Claudia Rubio Jiménez", foto: "../imagenes/docentes/claudia-rubio.jpeg" }
    ]
  },
  {
    area: "Enfermería Técnica",
    icon: "fas fa-user-nurse",
    docentes: [
      { nombre: "Lic. Johanna Nadyr Ucañan Cruz", foto: "../imagenes/docentes/icon_person.jpg" },
      { nombre: "Mg. Marcela Marlene Díaz Carrasco", foto: "../imagenes/docentes/marcela.jpeg" },
      { nombre: "Lic. Milagros Araceli Leyva López", foto: "../imagenes/docentes/milagros-leyva.jpeg" },
      { nombre: "Lic. Pamela Mantilla Santa Cruz", foto: "../imagenes/docentes/pamela-mantilla.jpeg" },
      { nombre: "Lic. Johana Ysabel Alfaro Alvarez", foto: "../imagenes/docentes/icon_person.jpg" },
      { nombre: "Lic. Rubí Estacio Lezcano ", foto: "../imagenes/docentes/rubi-removebg-preview.png" },
      
    ]
  },
  {
    area: "Producción Agropecuaria",
    icon: "fas fa-tractor",
    docentes: [
      { nombre: "Ing. José Luis Alcántara Rodriguez", foto: "../imagenes/docentes/jose_alcantara.png" },
      { nombre: "Ing. José Alberto Villacampa Casas", foto: "../imagenes/docentes/villacampa.jpg" },
      { nombre: "Ing. Mirtha Rosa Mundaca Menchola", foto: "../imagenes/docentes/mirtha-mundaca.png" },
      { nombre: "Ing. Linda Esther Zavaleta Abanto", foto: "../imagenes/docentes/linda-zavaleta.jpeg" },
      { nombre: "Ing. Jorge Luis Ramiro Guevara Vilcas", foto: "../imagenes/docentes/luis.guevara.jpeg" },
      { nombre: "Ing. Uber Alva Moya", foto: "../imagenes/docentes/icon_person.jpg" },
      { nombre: "Ing. Segundo Gómez Rosas", foto: "../imagenes/docentes/icon_person.jpg" },
      { nombre: "Dr. Vet. Marco Antonio Orbegoso Pacheco", foto: "../imagenes/docentes/marco-orbegoso.jpeg" },
    ]
  },
  {
    area: "Empleabilidad",
    icon: "fas fa-briefcase",
    docentes: [
      { nombre: "Mg. José Antonio Bacilio Acosta", foto: "../imagenes/docentes/jose-bacilio.jpeg" },
      { nombre: "Lic. María Flores Gutierrez", foto: "../imagenes/docentes/icon_person.jpg" },
      { nombre: "Dr. José Pedro Bardales Pairazaman", foto: "../imagenes/docentes/pedro.jpeg" }
    ]
  }
];

// Render dinámico
const contenedor = document.getElementById("docente");

docentesData.forEach(areaObj => {
  // Sección de área
  const section = document.createElement("section");
  section.classList.add("docente__area");

  const titulo = document.createElement("h2");
  titulo.innerHTML = `<i class="${areaObj.icon}"></i> ${areaObj.area}`;
  section.appendChild(titulo);

  // Grid de docentes
  const grid = document.createElement("div");
  grid.classList.add("docente__grid");

  areaObj.docentes.forEach(doc => {
    const card = document.createElement("div");
    card.classList.add("docente__card");

    card.innerHTML = `
      <img src="${doc.foto}" alt="${doc.nombre}">
      <h3>${doc.nombre}</h3>
    `;

    grid.appendChild(card);
  });

  section.appendChild(grid);
  contenedor.appendChild(section);
});
